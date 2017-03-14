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
        var _this = this;
        this.addBg();
        this.addBtn();
        this.addBar();
        var addRoleTimer = new egret.Timer(500, 0);
        addRoleTimer.addEventListener(egret.TimerEvent.TIMER, this.addRole, this);
        addRoleTimer.start();
        var timeTimer = new egret.Timer(1000, 0);
        timeTimer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.barUI.timeTxt.text = (new Number(_this.barUI.timeTxt.text).valueOf() - 1) + "";
            if (new Number(_this.barUI.timeTxt.text).valueOf() < 1) {
                addRoleTimer.stop();
                timeTimer.stop();
                _this.dispatchEvent(new TimeOutEvent(TimeOutEvent.NAME));
            }
        }, this);
        timeTimer.start();
    };
    GameUI.prototype.addBg = function () {
        var bg = Helper.getBitmap(R.begin_bg_jpg, 720, 1155);
        _super.prototype.addChild.call(this, bg);
    };
    GameUI.prototype.addBtn = function () {
        var _this = this;
        var btnGet = new BtnGetUI();
        Helper.ObjectCenterX(btnGet);
        btnGet.x -= 220;
        btnGet.y = Helper.height - 250;
        btnGet.touchEnabled = true;
        btnGet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.btnTap(RoleType.rabbit);
        }, this);
        _super.prototype.addChild.call(this, btnGet);
        var btnBreack = new BtnBreakUI();
        Helper.ObjectCenterX(btnBreack);
        btnBreack.x += 220;
        btnBreack.y = Helper.height - 250;
        btnBreack.touchEnabled = true;
        btnBreack.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.btnTap(RoleType.egg);
        }, this);
        _super.prototype.addChild.call(this, btnBreack);
    };
    GameUI.prototype.addBar = function () {
        this.barUI = new BarUI();
        this.barUI.markTxt.text = "0";
        this.barUI.timeTxt.text = "1";
        _super.prototype.addChild.call(this, this.barUI);
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
        role.y = 600;
        role.scaleX = 0.3;
        role.scaleY = 0.3;
        role.x = (Helper.width - role.width * 0.3) * 0.5;
        _super.prototype.addChildAt.call(this, role, 1);
        this.rabbitEggList.push(role);
        egret.Tween.get(role)
            .to({ y: Helper.height - 300, scaleX: 1, scaleY: 1, x: finishX }, 1200, egret.Ease.circIn)
            .to({ y: Helper.height }, 200, egret.Ease.circInOut)
            .call(function () {
            _this.rabbitEggList.shift();
            _super.prototype.removeChild.call(_this, role);
        });
    };
    GameUI.addGameUI = function (parent, call) {
        var gameUI = new GameUI();
        parent.addChild(gameUI);
        //gameUI.beginAnimation();
        gameUI.addEventListener(TimeOutEvent.NAME, function () {
            var regame = new ReGameUI();
            parent.addChild(regame);
        }, this);
    };
    GameUI.prototype.btnTap = function (roleType) {
        var _this = this;
        this.rabbitEggList.forEach(function (element) {
            if (element.hitTestPoint(Helper.width / 2, Helper.height - 300)) {
                var role = element;
                if (roleType == role.roleType) {
                    _this.barUI.markTxt.text = (new Number(_this.barUI.markTxt.text).valueOf() + 10) + "";
                }
                else {
                    _this.barUI.markTxt.text = (new Number(_this.barUI.markTxt.text).valueOf() - 10) + "";
                }
                return;
            }
        });
    };
    return GameUI;
}(egret.Sprite));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map