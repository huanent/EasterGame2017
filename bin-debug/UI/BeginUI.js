var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BeginUI = (function (_super) {
    __extends(BeginUI, _super);
    /**
     *开始游戏场景
     */
    function BeginUI() {
        var _this = _super.call(this) || this;
        _this.tabEvent = new TapEvent(TapEvent.NAME);
        _this.initView();
        return _this;
    }
    BeginUI.prototype.initView = function () {
        this.addBg();
        this.addTitle();
        this.addBtn();
    };
    BeginUI.prototype.addBg = function () {
        var bg = Helper.getBitmap(R.begin_bg_jpg, 720, 1155);
        _super.prototype.addChild.call(this, bg);
    };
    BeginUI.prototype.addBtn = function () {
        var _this = this;
        this.btn = Helper.getBitmap(R.begin_btn_png);
        Helper.ObjectCenterX(this.btn);
        this.btn.y = Helper.height - 200;
        this.btn.y += 500;
        _super.prototype.addChild.call(this, this.btn);
        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEvent(_this.tabEvent);
        }, this);
    };
    BeginUI.prototype.addTitle = function () {
        this.title = Helper.getBitmap(R.begin_title_png);
        Helper.ObjectCenterX(this.title);
        this.title.y -= 300;
        _super.prototype.addChild.call(this, this.title);
    };
    BeginUI.prototype.beginAnimation = function () {
        egret.Tween
            .get(this.title)
            .to({ y: this.title.y + 650 }, 1000, egret.Ease.sineOut);
        egret.Tween
            .get(this.btn)
            .to({ y: this.btn.y - 500 }, 1000, egret.Ease.sineOut);
    };
    BeginUI.prototype.finishAnimation = function (call) {
        egret.Tween
            .get(this.title)
            .to({ y: this.title.y - 650 }, 1000, egret.Ease.sineIn);
        egret.Tween
            .get(this.btn)
            .to({ y: this.btn.y + 500 }, 1000, egret.Ease.sineIn)
            .call(call);
    };
    BeginUI.addBeginUI = function (parent, call) {
        var beginUI = new BeginUI();
        parent.addChild(beginUI);
        beginUI.beginAnimation();
        beginUI.addEventListener(TapEvent.NAME, function () {
            beginUI.finishAnimation(function () {
                call();
                parent.removeChild(beginUI);
            });
        }, this);
    };
    return BeginUI;
}(egret.Sprite));
__reflect(BeginUI.prototype, "BeginUI");
//# sourceMappingURL=BeginUI.js.map