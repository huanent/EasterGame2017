var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BarUI = (function (_super) {
    __extends(BarUI, _super);
    /**
     * 分数栏
     */
    function BarUI() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    BarUI.prototype.initView = function () {
        var bar = Helper.getBitmap(R.great_bg_png);
        Helper.ObjectCenterX(bar);
        bar.y += 30;
        _super.prototype.addChild.call(this, bar);
        this.markTxt = new egret.TextField();
        this.markTxt.y += 45;
        this.markTxt.x = 250;
        _super.prototype.addChild.call(this, this.markTxt);
        this.timeTxt = new egret.TextField();
        this.timeTxt.y += 45;
        this.timeTxt.x = 520;
        _super.prototype.addChild.call(this, this.timeTxt);
    };
    return BarUI;
}(egret.Sprite));
__reflect(BarUI.prototype, "BarUI");
//# sourceMappingURL=BarUI.js.map