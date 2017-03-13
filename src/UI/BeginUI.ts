class BeginUI extends egret.Sprite {
    tabEvent: TapEvent = new TapEvent(TapEvent.NAME);
    /**
     *开始游戏场景
     */
    constructor() {
        super();
        this.initView();
    }
    private initView(): void {
        this.addBg();
        this.addTitle();
        this.addBtn();
    }
    private addBg(): void {
        let bg: egret.Bitmap = Helper.getBitmap(R.begin_bg_jpg, 720, 1155);
        super.addChild(bg);
    }
    private addBtn(): void {
        let btn: egret.Bitmap = Helper.getBitmap(R.begin_btn_jpg);
        Helper.ObjectCenterX(btn)
        btn.y = Helper.height - 200;
        super.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEvent(this.tabEvent)
        }, this)
    }

    private addTitle(): void {
        let title: egret.Bitmap = Helper.getBitmap(R.begin_title_jpg);
        Helper.ObjectCenter(title);
        super.addChild(title);
    }
    static AddBeginUI(parent: egret.DisplayObjectContainer, call: Function): void {
        let beginUI: BeginUI = new BeginUI();
        parent.addChild(beginUI);
        beginUI.addEventListener(TapEvent.NAME, () => {
            call();
        }, this)

    }
}