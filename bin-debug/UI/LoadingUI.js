var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.getOpenId();
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var _this = this;
        for (var i_1 = 1; i_1 <= 6; i_1++) {
            var pic = Helper.getBitmap("pic" + i_1 + "_png");
            pic.name = "pic" + i_1 + "_png";
            Helper.ObjectCenter(pic);
            pic.visible = false;
            _super.prototype.addChild.call(this, pic);
        }
        var timer = new egret.Timer(100, 0);
        var i = 0;
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            i++;
            var num = (i % 6) == 0 ? 6 : (i % 6);
            var pic = _super.prototype.getChildByName.call(_this, "pic" + num + "_png");
            pic.visible = true;
            if (num == 1) {
                _super.prototype.getChildByName.call(_this, "pic6_png").visible = false;
            }
            else {
                _super.prototype.getChildByName.call(_this, "pic" + (num - 1) + "_png").visible = false;
            }
        }, this);
        timer.start();
    };
    LoadingUI.prototype.getOpenId = function () {
        var openid = this.getQueryString("openid");
        if (openid == null) {
            var companyCode = "guzhiwei";
            var callUrl = window.location.href; //"http://192.168.1.223:2978"
            var url = "http://app.guzhiwei.com/wxis/Auth?companyCode=" + companyCode + "&UserInfo=true&scope=snsapi_userinfo&RedirectUrl=" + callUrl;
            window.location.href = url;
        }
        StaticData.OpenId = openid;
    };
    LoadingUI.prototype.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return decodeURI(r[2]);
        return null;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
//# sourceMappingURL=LoadingUI.js.map