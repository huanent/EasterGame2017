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
        _this.rabbitEggList = new Array();
        _this.initView();
        return _this;
    }
    GameUI.prototype.initView = function () {
        this.addBg();
        this.addBtn();
        this.addTxt();
        var t = new egret.Timer(1000, 0);
        t.addEventListener(egret.TimerEvent.TIMER, this.addRole, this);
        t.start();
    };
    GameUI.prototype.addBg = function () {
        var bg = Helper.getBitmap(R.begin_bg_jpg, 720, 1155);
        _super.prototype.addChild.call(this, bg);
    };
    GameUI.prototype.addBtn = function () {
        var _this = this;
        var btnGet = Helper.getBitmap(R.game_btn_get_png);
        Helper.ObjectCenterX(btnGet);
        btnGet.x -= 200;
        btnGet.y = Helper.height - 300;
        btnGet.touchEnabled = true;
        btnGet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.btnTap(RoleType.rabbit);
        }, this);
        _super.prototype.addChild.call(this, btnGet);
        var btnBreack = Helper.getBitmap(R.game_btn_break_png);
        Helper.ObjectCenterX(btnBreack);
        btnBreack.x += 200;
        btnBreack.y = Helper.height - 300;
        btnBreack.touchEnabled = true;
        btnBreack.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.btnTap(RoleType.egg);
        }, this);
        _super.prototype.addChild.call(this, btnBreack);
    };
    GameUI.prototype.addTxt = function () {
        this.markTxt = new egret.TextField();
        Helper.ObjectCenter(this.markTxt);
        this.markTxt.text = "0";
        _super.prototype.addChild.call(this, this.markTxt);
    };
    GameUI.prototype.addRole = function () {
        var _this = this;
        var role;
        var randomNum = Math.floor(Math.random() * 10) % 2;
        switch (randomNum) {
            case 0:
                role = new RabbitUI();
                break;
            default:
                role = new EggUI();
        }
        Helper.ObjectCenterX(role);
        var finishX = role.x;
        role.y = 400;
        role.scaleX = 0.3;
        role.scaleY = 0.3;
        role.x = (Helper.width - role.width * 0.3) * 0.5;
        _super.prototype.addChildAt.call(this, role, 1);
        this.rabbitEggList.push(role);
        egret.Tween.get(role)
            .to({ y: Helper.height - 400, scaleX: 1, scaleY: 1, x: finishX }, 2000)
            .to({ y: Helper.height }, 500, egret.Ease.circInOut)
            .call(function () {
            _this.rabbitEggList.shift();
            _super.prototype.removeChild.call(_this, role);
        });
    };
    GameUI.addGameUI = function (parent, call) {
        var gameUI = new GameUI();
        parent.addChild(gameUI);
        //gameUI.beginAnimation();
        // gameUI.addEventListener(TapEvent.NAME, () => {
        // 	gameUI.finishAnimation(() => {
        // 		call();
        // 		parent.removeChild(gameUI);
        // 	});
        // }, this)
    };
    GameUI.prototype.btnTap = function (roleType) {
        var _this = this;
        this.rabbitEggList.forEach(function (element) {
            if (element.hitTestPoint(Helper.width / 2, Helper.height - 250)) {
                var role = element;
                if (roleType == role.roleType) {
                    _this.markTxt.text = (new Number(_this.markTxt.text).valueOf() + 10) + "";
                }
                else {
                    _this.markTxt.text = (new Number(_this.markTxt.text).valueOf() - 10) + "";
                }
                return;
            }
        });
    };
    return GameUI;
}(egret.Sprite));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map