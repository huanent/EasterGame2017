class RabbitUI extends egret.Sprite {
	roleType: RoleType = RoleType.rabbit
	/**
	 *兔子对象
	 */
	constructor() {
		super();
		this.initView()
	}
	private initView() {
		let rabbit = Helper.getBitmap(R.rabbit_png);
		super.addChild(rabbit);
	}
}