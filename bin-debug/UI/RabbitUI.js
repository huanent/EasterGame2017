var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RabbitUI = (function (_super) {
    __extends(RabbitUI, _super);
    /**
     *兔子对象
     */
    function RabbitUI() {
        var _this = _super.call(this) || this;
        _this.roleType = RoleType.rabbit;
        _this.break = function () {
            _this.rabbit.visible = false;
            _this.rabbitBreak.visible = true;
        };
        _this.initView();
        return _this;
    }
    RabbitUI.prototype.initView = function () {
        this.rabbit = Helper.getBitmap(R.rabbit_png);
        _super.prototype.addChild.call(this, this.rabbit);
        this.rabbitBreak = Helper.getBitmap(R.rabit_taked_png);
        this.rabbitBreak.visible = false;
        _super.prototype.addChild.call(this, this.rabbitBreak);
    };
    return RabbitUI;
}(egret.Sprite));
__reflect(RabbitUI.prototype, "RabbitUI");
//# sourceMappingURL=RabbitUI.js.map