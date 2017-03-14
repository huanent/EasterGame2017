class TimeOutEvent extends egret.Event {
	static NAME: string = "TimeOutEvent";
	/**
	 *事件结束事件
	 */
	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}
}TimeOutEvent