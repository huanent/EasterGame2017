var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BtnBreakUI = (function (_super) {
    __extends(BtnBreakUI, _super);
    /**
     *锤子按钮
     */
    function BtnBreakUI() {
        var _this = _super.call(this) || this;
        var btnBreak = Helper.getBitmap(R.game_btn_break_png);
        _super.prototype.addChild.call(_this, btnBreak);
        btnBreak.touchEnabled = true;
        btnBreak.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var btnBreakTip = Helper.getBitmap(R.chuizi_png);
            btnBreakTip.y -= 100;
            _super.prototype.addChild.call(_this, btnBreakTip);
            egret.Tween
                .get(btnBreakTip)
                .to({ x: btnBreakTip.x -= 150 }, 100)
                .to({ x: 0 }, 100)
                .call(function () {
                _super.prototype.removeChild.call(_this, btnBreakTip);
            });
        }, _this);
        return _this;
    }
    return BtnBreakUI;
}(egret.Sprite));
__reflect(BtnBreakUI.prototype, "BtnBreakUI");
//# sourceMappingURL=BtnBreakUI.js.map