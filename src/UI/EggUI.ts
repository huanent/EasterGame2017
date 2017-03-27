class EggUI extends egret.Sprite {
	roleType: RoleType = RoleType.egg;
	effective: true;
	egg: egret.Bitmap;
	eggBreak: egret.Bitmap;
	/**
	 *兔子对象
	 */
	constructor() {
		super();
		this.initView()
	}
	private initView() {
		this.egg = Helper.getBitmap(R.egg_png);
		super.addChild(this.egg);
		this.eggBreak = Helper.getBitmap(R.eggbreak_png);
		this.eggBreak.visible = false;
		super.addChild(this.eggBreak);
	}

	break = () => {
		this.egg.visible = false;
		this.eggBreak.visible = true;
	}
}