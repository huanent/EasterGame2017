class TapEvent extends egret.Event {
	static NAME: string = "TapEvent";
	/**
	 *点击事件
	 */
	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}
}