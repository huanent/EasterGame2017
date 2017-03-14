var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReGameUI = (function (_super) {
    __extends(ReGameUI, _super);
    /**
     *重新游戏界面
     */
    function ReGameUI() {
        var _this = _super.call(this) || this;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0, 0.8);
        bg.graphics.drawRect(0, 0, Helper.width, Helper.height);
        bg.graphics.endFill();
        bg.touchEnabled = true;
        _super.prototype.addChild.call(_this, bg);
        var window = Helper.getBitmap(R.jieguo_bg_png);
        Helper.ObjectCenter(window);
        _super.prototype.addChild.call(_this, window);
        var restart = Helper.getBitmap(R.restart_btn_png);
        Helper.ObjectCenter(restart);
        restart.y += 50;
        _super.prototype.addChild.call(_this, restart);
        var jl = Helper.getBitmap(R.jiangli_btn_png);
        Helper.ObjectCenter(jl);
        jl.y += 170;
        _super.prototype.addChild.call(_this, jl);
        return _this;
    }
    return ReGameUI;
}(egret.Sprite));
__reflect(ReGameUI.prototype, "ReGameUI");
//# sourceMappingURL=ReGameUI.js.map