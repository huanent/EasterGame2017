class BtnBreakUI extends egret.Sprite {
	/**
	 *锤子按钮
	 */
	constructor() {
		super();
		let btnBreak: egret.Bitmap = Helper.getBitmap(R.game_btn_break_png);
		super.addChild(btnBreak);
		btnBreak.touchEnabled = true;
		btnBreak.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

			let btnBreakTip = Helper.getBitmap(R.chuizi_png);
			btnBreakTip.y -= 100;
			super.addChild(btnBreakTip);
			egret.Tween
				.get(btnBreakTip)
				.to({ x:  btnBreakTip.x-=150}, 100)
				.to({ x: 0 }, 100)
				.call(() => {
					super.removeChild(btnBreakTip);
				})
		}, this);
	}
}