class BtnGetUI extends egret.Sprite {
	/**
	 * 手按钮
	 */
	constructor() {
		super();
		let btnGet: egret.Bitmap = Helper.getBitmap(R.game_btn_get_png);
		super.addChild(btnGet);
		btnGet.touchEnabled = true;
		btnGet.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

			let btnGetTip = Helper.getBitmap(R.hand_png);
			btnGetTip.y -= 100;
			super.addChild(btnGetTip);
			egret.Tween
				.get(btnGetTip)
				.to({ x:  btnGetTip.x+=150}, 100)
				.to({ x: 0 }, 100)
				.call(() => {
					super.removeChild(btnGetTip);
				})
		}, this);
	}
}