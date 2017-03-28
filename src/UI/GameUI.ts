class GameUI extends egret.Sprite {
	rabbitEggList: Array<egret.Sprite> = new Array<egret.Sprite>();
	barUI: BarUI;
	timeSpan: number = 0;
	eggMusic: egret.Sound;
	eggMusicCan: boolean = false;
	rabitMusic: egret.Sound;
	rabitMusicCan: boolean = false;
	/**
	 *主游戏场景
	 */
	constructor() {
		super();
		this.initView();
	}
	private initView(): void {
		this.eggMusic = new egret.Sound();
		this.eggMusic.load('resource/assets/egg.mp3');
		this.eggMusic.addEventListener(egret.Event.COMPLETE, () => {
			this.eggMusicCan = true;
		}, this);
		this.rabitMusic = new egret.Sound();
		this.rabitMusic.load('resource/assets/rabit.wav');
		this.rabitMusic.addEventListener(egret.Event.COMPLETE, () => {
			this.rabitMusicCan = true;
		}, this);
		this.addBg();
		this.addBtn();
		this.addBar();
		let addRoleTimer: egret.Timer = new egret.Timer(500, 0);
		addRoleTimer.addEventListener(egret.TimerEvent.TIMER, this.addRole, this)
		addRoleTimer.start()
		let timeTimer: egret.Timer = new egret.Timer(1000, 0);
		timeTimer.addEventListener(egret.TimerEvent.TIMER, () => {
			this.barUI.timeTxt.text = (new Number(this.barUI.timeTxt.text).valueOf() - 1) + ""
			if (new Number(this.barUI.timeTxt.text).valueOf() < 1) {
				addRoleTimer.stop();
				timeTimer.stop();
				this.dispatchEvent(new TimeOutEvent(TimeOutEvent.NAME));
			}
		}, this)
		timeTimer.start()
	}
	private addBg(): void {
		let bg: egret.Bitmap = Helper.getBitmap(R.begin_bg_jpg, 720, 1155);
		super.addChild(bg);
	}
	private addBtn(): void {
		let btnGet = new BtnGetUI();
		Helper.ObjectCenterX(btnGet);
		btnGet.x -= 230;
		btnGet.y = Helper.height - 230;
		btnGet.touchEnabled = true;
		btnGet.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.btnTap(RoleType.rabbit);
		}, this)
		super.addChild(btnGet);
		let btnBreack = new BtnBreakUI();
		Helper.ObjectCenterX(btnBreack);
		btnBreack.x += 230;
		btnBreack.y = Helper.height - 230;
		btnBreack.touchEnabled = true;
		btnBreack.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.btnTap(RoleType.egg);
		}, this)
		super.addChild(btnBreack);
	}
	private addBar(): void {
		this.barUI = new BarUI();
		this.barUI.markTxt.text = "0";
		this.barUI.timeTxt.text = "40";
		super.addChild(this.barUI);
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
		let finishX: number = role.x*1.07;
		role.y = 510;
		role.scaleX = 0.3;
		role.scaleY = 0.3;
		role.x = (Helper.width - role.width * 0.3) * 0.5;
		super.addChildAt(role, 1);
		this.rabbitEggList.push(role);
		egret.Tween.get(role)
			.to({ y: Helper.height - 400, scaleX: 0.8, scaleY: 0.8, x: finishX }, 2000, egret.Ease.circIn)
			.to({ y: Helper.height }, 500, egret.Ease.circIn)
			.call(() => {
				this.rabbitEggList.shift();
				super.removeChild(role);
			});
	}

	static addGameUI(parent: egret.DisplayObjectContainer, call: Function): egret.Sprite {

		let gameUI: GameUI = new GameUI();
		parent.addChild(gameUI);
		//gameUI.beginAnimation();
		gameUI.addEventListener(TimeOutEvent.NAME, () => {
			let regame = new ReGameUI(gameUI.barUI.markTxt.text);
			parent.addChild(regame);
			regame.addEventListener(TapEvent.NAME, () => {
				parent.removeChild(regame);
				parent.removeChild(gameUI);
				call();
			}, this)
		}, this)
		return gameUI;
	}
	private btnTap(roleType: RoleType): void {
		this.rabbitEggList.forEach(element => {
			if (element.hitTestPoint(Helper.width / 2, Helper.height - 180)) {
				let role: any = element
				let nowDate = Date.now();
				if (nowDate - this.timeSpan > 400) {
					this.timeSpan = nowDate;
					if (roleType == role.roleType) {
						this.barUI.markTxt.text = (new Number(this.barUI.markTxt.text).valueOf() + 10) + "";
						role.break();
						if (role.roleType == RoleType.egg) {
							if (this.eggMusicCan) {
								this.eggMusic.play(0, 1);
							}
						} else {
							if (this.rabitMusicCan) {
								this.rabitMusic.play(0, 1);
							}
						}
						let addMark = new egret.TextField();
						addMark.size = 60;
						addMark.text = '+10';
						addMark.textColor = 0xffffff;
						Helper.ObjectCenter(addMark);
						super.addChild(addMark);
						egret.Tween.get(addMark).to({ y: addMark.y - 100 }, 1000).call(() => {
							super.removeChild(addMark);
						});
					} else {
						if (this.barUI.markTxt.text != "0") {
							this.barUI.markTxt.text = (new Number(this.barUI.markTxt.text).valueOf() - 10) + ""
							let removeMark = new egret.TextField();
							removeMark.size = 60;
							removeMark.text = '-10';
							removeMark.textColor = 0xff0000;
							Helper.ObjectCenter(removeMark);
							super.addChild(removeMark);
							egret.Tween.get(removeMark).to({ y: removeMark.y - 100 }, 1000).call(() => {
								super.removeChild(removeMark);
							});
						}
					}
				}
				return;
			}
		});
	}
}