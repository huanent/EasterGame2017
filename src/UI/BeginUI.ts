class BeginUI extends egret.Sprite {
    private tabEvent: TapEvent = new TapEvent(TapEvent.NAME);
    title: egret.Bitmap;
    btn: egret.Bitmap;
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
        this.btn = Helper.getBitmap(R.begin_btn_jpg);
        Helper.ObjectCenterX(this.btn)
        this.btn.y = Helper.height - 200;
        this.btn.y += 500;
        super.addChild(this.btn);
        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEvent(this.tabEvent)
        }, this)
    }

    private addTitle(): void {
        this.title = Helper.getBitmap(R.begin_title_jpg);
        Helper.ObjectCenter(this.title);
        this.title.y -= 1000;
        super.addChild(this.title);
    }

    beginAnimation(): void {
        egret.Tween
            .get(this.title)
            .to({ y: this.title.y + 1000 }, 1000, egret.Ease.sineOut)
        egret.Tween
            .get(this.btn)
            .to({ y: this.btn.y -500 }, 1000, egret.Ease.sineOut)
    }
    finishAnimation(call:Function ):void{
        egret.Tween
            .get(this.title)
            .to({ y: this.title.y - 1000 }, 1000, egret.Ease.sineIn)
        egret.Tween
            .get(this.btn)
            .to({ y: this.btn.y +500 }, 1000, egret.Ease.sineIn)
            .call(call);
    }

    static AddBeginUI(parent: egret.DisplayObjectContainer, call: Function): void {
        let beginUI: BeginUI = new BeginUI();
        parent.addChild(beginUI);
        beginUI.beginAnimation();
        beginUI.addEventListener(TapEvent.NAME, () => {
            beginUI.finishAnimation(call);
        }, this)

    }
}