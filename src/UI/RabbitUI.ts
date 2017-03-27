class RabbitUI extends egret.Sprite {
	roleType: RoleType = RoleType.rabbit;
	effective: true;
	rabbit: egret.Bitmap;
	rabbitBreak: egret.Bitmap;
	/**
	 *兔子对象
	 */
	constructor() {
		super();
		this.initView()
	}
	private initView() {
		this.rabbit = Helper.getBitmap(R.rabbit_png);
		super.addChild(this.rabbit);
		this.rabbitBreak = Helper.getBitmap(R.rabit_taked_png);
		this.rabbitBreak.visible = false;
		super.addChild(this.rabbitBreak);
	}
	break = () => {
		this.rabbit.visible = false;
		this.rabbitBreak.visible = true;
	}
}