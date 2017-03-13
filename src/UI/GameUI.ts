class GameUI extends egret.Sprite {
	/**
	 *主游戏场景
	 */
	constructor() {
		super();
		this.initView();
	}
	private initView(): void {
		this.addBg();
	}
	private addBg():void{
		let bg: egret.Bitmap = Helper.getBitmap(R.game_bg_jpg, 720, 1155);
        super.addChild(bg);
	}
}