class GameUI extends egret.Sprite {
	rabbitEggList: Array<egret.Sprite> = new Array<egret.Sprite>();
	markTxt: egret.TextField;
	/**
	 *主游戏场景
	 */
	constructor() {
		super();
		this.initView();
	}
	private initView(): void {
		this.addBg();
		this.addBtn();
		this.addTxt();
		let t: egret.Timer = new egret.Timer(1000, 0);
		t.addEventListener(egret.TimerEvent.TIMER, this.addRole, this)
		t.start()
	}
	private addBg(): void {
		let bg: egret.Bitmap = Helper.getBitmap(R.begin_bg_jpg, 720, 1155);
		super.addChild(bg);
	}
	private addBtn(): void {
		let btnGet: egret.Bitmap = Helper.getBitmap(R.game_btn_get_png);
		Helper.ObjectCenterX(btnGet);
		btnGet.x -= 200;
		btnGet.y = Helper.height - 300;
		btnGet.touchEnabled = true;
		btnGet.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.btnTap(RoleType.rabbit);
		}, this)
		super.addChild(btnGet);
		let btnBreack: egret.Bitmap = Helper.getBitmap(R.game_btn_break_png);
		Helper.ObjectCenterX(btnBreack);
		btnBreack.x += 200;
		btnBreack.y = Helper.height - 300;
		btnBreack.touchEnabled = true;
		btnBreack.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.btnTap(RoleType.egg);
		}, this)
		super.addChild(btnBreack);
	}
	private addTxt(): void {
		this.markTxt = new egret.TextField();
		Helper.ObjectCenter(this.markTxt);
		this.markTxt.text = "0";
		super.addChild(this.markTxt);
	}

	private addRole(): void {
		let role: egret.Sprite;
		var randomNum = Math.floor(Math.random() * 10) % 2;
		switch (randomNum) {
			case 0:
				role = new RabbitUI();
				break;
			default:
				role = new EggUI();
		}
		Helper.ObjectCenterX(role);
		let finishX: number = role.x;
		role.y = 400;
		role.scaleX = 0.3;
		role.scaleY = 0.3;
		role.x = (Helper.width - role.width * 0.3) * 0.5;
		super.addChildAt(role, 1);
		this.rabbitEggList.push(role);
		egret.Tween.get(role)
			.to({ y: Helper.height - 400, scaleX: 1, scaleY: 1, x: finishX }, 2000)
			.to({ y: Helper.height }, 500, egret.Ease.circInOut)
			.call(() => {
				this.rabbitEggList.shift();
				super.removeChild(role);
			});
	}

	static addGameUI(parent: egret.DisplayObjectContainer, call: Function): void {

		let gameUI: GameUI = new GameUI();
		parent.addChild(gameUI);
		//gameUI.beginAnimation();
		// gameUI.addEventListener(TapEvent.NAME, () => {
		// 	gameUI.finishAnimation(() => {
		// 		call();
		// 		parent.removeChild(gameUI);
		// 	});
		// }, this)

	}
	private btnTap(roleType: RoleType): void {
		this.rabbitEggList.forEach(element => {
			if (element.hitTestPoint(Helper.width / 2, Helper.height - 250)) {
				var role:any =element
				if (roleType == role.roleType) {
					this.markTxt.text = (new Number(this.markTxt.text).valueOf() + 10) + ""
				} else {
					this.markTxt.text = (new Number(this.markTxt.text).valueOf() - 10) + ""
				}
				return;
			}
		});
	}
}