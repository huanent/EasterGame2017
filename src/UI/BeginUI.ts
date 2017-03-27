class BeginUI extends egret.Sprite {
    private tabEvent: TapEvent = new TapEvent(TapEvent.NAME);
    title: egret.Bitmap;
    btn: egret.Bitmap;
    btnRule: egret.Bitmap;
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
        this.addBeginBtn();

    }
    private addBg(): void {
        let bg: egret.Bitmap = Helper.getBitmap(R.begin_bg_jpg, 720, 1155);
        super.addChild(bg);
    }
    private addBeginBtn(): void {
        this.btn = Helper.getBitmap(R.begin_btn_png);
        Helper.ObjectCenterX(this.btn)
        this.btn.y = Helper.height - 350;
        this.btn.y += 500;
        super.addChild(this.btn);
        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEvent(this.tabEvent)
        }, this)
        this.btnRule = Helper.getBitmap("rules_btn-@2x_png");
        Helper.ObjectCenterX(this.btnRule);
        this.btnRule.y = Helper.height - 200;
        this.btnRule.y += 500;
        this.btnRule.touchEnabled = true;
        this.btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let bg = new egret.Shape();
            bg.graphics.beginFill(0, 0.8);
            bg.graphics.drawRect(-1, -1, Helper.width + 1, Helper.height + 1);
            bg.graphics.endFill();
            bg.touchEnabled = true;
            let rule=Helper.getBitmap("rules_bg@2x_png");
            Helper.ObjectCenter(rule);
            super.addChild(bg);
            super.addChild(rule);
            bg.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                super.removeChild(bg);
                super.removeChild(rule);
            },this)
        }, this)
        super.addChild(this.btnRule);
    }

    private addTitle(): void {
        this.title = Helper.getBitmap(R.begin_title_png);
        Helper.ObjectCenterX(this.title);
        this.title.y -= 300
        super.addChild(this.title);
    }

    beginAnimation(): void {
        egret.Tween
            .get(this.title)
            .to({ y: this.title.y + 350 }, 1000, egret.Ease.sineOut)
        egret.Tween
            .get(this.btn)
            .to({ y: this.btn.y - 500 }, 1000, egret.Ease.sineOut);
        egret.Tween
            .get(this.btnRule)
            .to({ y: this.btnRule.y - 500 }, 1000, egret.Ease.sineOut);
    }
    finishAnimation(call: Function): void {
        egret.Tween
            .get(this.title)
            .to({ y: this.title.y - 650 }, 1000, egret.Ease.sineIn)
        egret.Tween
            .get(this.btn)
            .to({ y: this.btn.y + 500 }, 1000, egret.Ease.sineIn)
            .call(call);
        egret.Tween
            .get(this.btnRule)
            .to({ y: this.btnRule.y + 500 }, 1000, egret.Ease.sineIn)
    }

    static addBeginUI(parent: egret.DisplayObjectContainer, call: Function): BeginUI {
        let beginUI: BeginUI = new BeginUI();
        parent.addChild(beginUI);
        beginUI.beginAnimation();
        beginUI.addEventListener(TapEvent.NAME, () => {
            beginUI.finishAnimation(() => {
                call();
                parent.removeChild(beginUI);
            });
        }, this)
        return beginUI;
    }
}