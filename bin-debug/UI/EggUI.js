var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EggUI = (function (_super) {
    __extends(EggUI, _super);
    /**
     *兔子对象
     */
    function EggUI() {
        var _this = _super.call(this) || this;
        _this.roleType = RoleType.egg;
        _this.break = function () {
            _this.egg.visible = false;
            _this.eggBreak.visible = true;
        };
        _this.initView();
        return _this;
    }
    EggUI.prototype.initView = function () {
        this.egg = Helper.getBitmap(R.egg_png);
        _super.prototype.addChild.call(this, this.egg);
        this.eggBreak = Helper.getBitmap(R.eggbreak_png);
        this.eggBreak.visible = false;
        _super.prototype.addChild.call(this, this.eggBreak);
    };
    return EggUI;
}(egret.Sprite));
__reflect(EggUI.prototype, "EggUI");
//# sourceMappingURL=EggUI.js.map