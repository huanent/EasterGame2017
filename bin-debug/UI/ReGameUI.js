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
        var windows = Helper.getBitmap("jieguo_bg_" + level + "_png");
        Helper.ObjectCenter(windows);
        _super.prototype.addChild.call(_this, windows);
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
        jl.touchEnabled = true;
        jl.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            window.location.href = "http://192.168.1.223:11000/Coupon/MyCoupon?mch=guzhiwei";
        }, _this);
        _super.prototype.addChild.call(_this, jl);
        var markTxt = new egret.TextField();
        markTxt.textColor = 0xffffff;
        markTxt.size = 40;
        markTxt.text = "得分 " + mark;
        Helper.ObjectCenter(markTxt);
        markTxt.y -= 30;
        _super.prototype.addChild.call(_this, markTxt);
        var params = "";
        if (level > 0) {
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open("http://192.168.1.223:11000/wxapi/Activity/EasterDay2017/Play?openid=" + StaticData.OpenId + "&prizeType=" + level, egret.HttpMethod.POST);
            //设置响应头
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            //发送参数
            request.send();
            request.addEventListener(egret.Event.COMPLETE, _this.onGetComplete, _this);
        }
        return _this;
    }
    ReGameUI.prototype.onGetComplete = function (event) {
        var request = event.currentTarget;
        var v = JSON.parse(request.response).Data;
        //alert(request.response);
        if (!v) {
            var isGet = new egret.TextField();
            isGet.text = "已领取过奖励";
            isGet.textColor = 0xddaf5c;
            Helper.ObjectCenter(isGet);
            isGet.y += 130;
            _super.prototype.addChild.call(this, isGet);
        }
    };
    ReGameUI.prototype.onGetIOError = function (event) {
        // 		alert(event.data)
        //         egret.log("get error : " + event);
    };
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