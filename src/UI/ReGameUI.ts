class ReGameUI extends egret.Sprite {
	/**
	 *重新游戏界面
	 */
	constructor() {
		super();
		let bg=new egret.Shape();
		bg.graphics.beginFill(0,0.8);
		bg.graphics.drawRect(0,0,Helper.width,Helper.height);
		bg.graphics.endFill();
		bg.touchEnabled=true;
		super.addChild(bg);
		let window=Helper.getBitmap(R.jieguo_bg_png)
		Helper.ObjectCenter(window)
		super.addChild(window);
		let restart=Helper.getBitmap(R.restart_btn_png)
		Helper.ObjectCenter(restart)
		restart.y+=60;
		super.addChild(restart);
		let jl=Helper.getBitmap(R.jiangli_btn_png)
		Helper.ObjectCenter(jl)
		jl.y+=180;
		super.addChild(jl);
	}
}