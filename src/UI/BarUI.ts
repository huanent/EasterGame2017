class BarUI extends egret.Sprite {
	markTxt: egret.TextField;
	timeTxt:egret.TextField;
	/**
	 * 分数栏
	 */
	constructor() {
		super();
		this.initView();
	}
	private initView(): void {
		let bar = Helper.getBitmap(R.great_bg_png);
		Helper.ObjectCenterX(bar);
		bar.y += 30;
		super.addChild(bar);
		this.markTxt = new egret.TextField();
		this.markTxt.y += 45;
		this.markTxt.x = 250;
		super.addChild(this.markTxt);
		this.timeTxt = new egret.TextField();
		this.timeTxt.y += 45;
		this.timeTxt.x = 520;
		super.addChild(this.timeTxt);
	}
}