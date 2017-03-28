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
    function ReGameUI(mark) {
        var _this = _super.call(this) || this;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0, 0.8);
        bg.graphics.drawRect(-1, -1, Helper.width + 1, Helper.height + 1);
        bg.graphics.endFill();
        bg.touchEnabled = true;
        var markNum = new Number(mark);
        var level = 0;
        _super.prototype.addChild.call(_this, bg);
        if (450 < markNum && markNum <= 550) {
            level = 3;
        }
        else if (550 < markNum && markNum <= 650) {
            level = 2;
        }
        else if (650 < markNum) {
            level = 1;
        }
        if (level == 0) {
            _this.addNoGiveWindow();
            return _this;
        }
        var window = Helper.getBitmap("jieguo_bg_" + level + "_png");
        Helper.ObjectCenter(window);
        _super.prototype.addChild.call(_this, window);
        var restart = Helper.getBitmap(R.restart_btn_png);
        Helper.ObjectCenter(restart);
        restart.x -= 130;
        restart.y += 210;
        restart.touchEnabled = true;
        restart.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEvent(new TapEvent(TapEvent.NAME));
        }, _this);
        _super.prototype.addChild.call(_this, restart);
        var jl = Helper.getBitmap(R.jiangli_btn_png);
        Helper.ObjectCenter(jl);
        jl.x += 130;
        jl.y += 210;
        _super.prototype.addChild.call(_this, jl);
        // let tip2Txt = new egret.TextField();
        // tip2Txt.textColor = 0xffae00;
        // tip2Txt.size = 30;
        // if (level == 1) {
        // 	tip2Txt.text = "新西兰上品羊羔肉电子券一份";
        // } else if (level == 2) {
        // 	tip2Txt.text = "乌梅汁电子券一份";
        // } else if (level == 3) {
        // 	tip2Txt.text = "鹌鹑蛋电子券一份(不于其他优惠共享)";
        // }
        // Helper.ObjectCenter(tip2Txt);
        // tip2Txt.y += 55;
        // super.addChild(tip2Txt);
        var markTxt = new egret.TextField();
        markTxt.textColor = 0xffffff;
        markTxt.size = 40;
        markTxt.text = "得分 " + mark;
        Helper.ObjectCenter(markTxt);
        markTxt.y -= 30;
        _super.prototype.addChild.call(_this, markTxt);
        return _this;
    }
    ReGameUI.prototype.addNoGiveWindow = function () {
        var _this = this;
        var window = Helper.getBitmap("default@2x_png");
        Helper.ObjectCenter(window);
        window.y -= 100;
        _super.prototype.addChild.call(this, window);
        var restart = Helper.getBitmap(R.restart_btn_png);
        Helper.ObjectCenter(restart);
        restart.y += 210;
        restart.touchEnabled = true;
        restart.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEvent(new TapEvent(TapEvent.NAME));
        }, this);
        _super.prototype.addChild.call(this, restart);
    };
    return ReGameUI;
}(egret.Sprite));
__reflect(ReGameUI.prototype, "ReGameUI");
//# sourceMappingURL=ReGameUI.js.map