class ReGameUI extends egret.Sprite {
	/**
	 *重新游戏界面
	 */
	constructor(mark:string ) {
		super();
		let bg=new egret.Shape();
		bg.graphics.beginFill(0,0.8);
		bg.graphics.drawRect(-1,-1,Helper.width+1,Helper.height+1);
		bg.graphics.endFill();
		bg.touchEnabled=true;
		super.addChild(bg);
		let window=Helper.getBitmap(R.jieguo_bg_png)
		Helper.ObjectCenter(window)
		super.addChild(window);
		let restart=Helper.getBitmap(R.restart_btn_png)
		Helper.ObjectCenter(restart)
		restart.y+=60;
		restart.touchEnabled=true;
		restart.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			this.dispatchEvent(new TapEvent(TapEvent.NAME));
		},this)
		super.addChild(restart);
		let jl=Helper.getBitmap(R.jiangli_btn_png)
		Helper.ObjectCenter(jl)
		jl.y+=180;
		super.addChild(jl);
		let tipTxt=new egret.TextField();
		tipTxt.textColor=0xffae00;
		tipTxt.size=50;
		tipTxt.text="恭喜您获得三等奖";
		Helper.ObjectCenter(tipTxt);
		tipTxt.y-=50;
		super.addChild(tipTxt);
		let markTxt=new egret.TextField();
		markTxt.textColor=0xffffff;
		markTxt.size=40;
		markTxt.text="得分 "+mark;
		Helper.ObjectCenter(markTxt);
		markTxt.y-=150;
		super.addChild(markTxt);

	}
}