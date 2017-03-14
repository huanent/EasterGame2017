class EggUI extends egret.Sprite {
	roleType: RoleType = RoleType.egg
	/**
	 *兔子对象
	 */
	constructor() {
		super();
		this.initView()
	}
	private initView() {
		let rabbit = Helper.getBitmap(R.egg_png);
		super.addChild(rabbit);
	}
}