var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    /**
     *主游戏场景
     */
    function GameUI() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    GameUI.prototype.initView = function () {
        this.addBg();
    };
    GameUI.prototype.addBg = function () {
        var bg = Helper.getBitmap(R.game_bg_jpg, 720, 1155);
        _super.prototype.addChild.call(this, bg);
    };
    return GameUI;
}(egret.Sprite));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map