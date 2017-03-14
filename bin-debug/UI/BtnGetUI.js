var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BtnGetUI = (function (_super) {
    __extends(BtnGetUI, _super);
    /**
     * 手按钮
     */
    function BtnGetUI() {
        var _this = _super.call(this) || this;
        var btnGet = Helper.getBitmap(R.game_btn_get_png);
        _super.prototype.addChild.call(_this, btnGet);
        btnGet.touchEnabled = true;
        btnGet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var btnGetTip = Helper.getBitmap(R.hand_png);
            btnGetTip.y -= 100;
            _super.prototype.addChild.call(_this, btnGetTip);
            egret.Tween
                .get(btnGetTip)
                .to({ x: btnGetTip.x += 150 }, 100)
                .to({ x: 0 }, 100)
                .call(function () {
                _super.prototype.removeChild.call(_this, btnGetTip);
            });
        }, _this);
        return _this;
    }
    return BtnGetUI;
}(egret.Sprite));
__reflect(BtnGetUI.prototype, "BtnGetUI");
//# sourceMappingURL=BtnGetUI.js.map