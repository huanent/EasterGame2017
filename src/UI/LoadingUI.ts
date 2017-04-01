class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.getOpenId();
        this.createView();
    }
    private createView(): void {
        for (let i = 1; i <= 6; i++) {
            let pic = Helper.getBitmap("pic" + i + "_png");
            pic.name = "pic" + i + "_png";
            Helper.ObjectCenter(pic);
            pic.visible = false;
            super.addChild(pic);
        }
        let timer = new egret.Timer(100, 0)
        let i = 0;
        timer.addEventListener(egret.TimerEvent.TIMER, () => {
            i++;
            let num = (i % 6) == 0 ? 6 : (i % 6);
            let pic = super.getChildByName("pic" + num + "_png")
            pic.visible = true;
            if (num == 1) {
                super.getChildByName("pic6_png").visible = false
            } else {
                super.getChildByName("pic" + (num - 1) + "_png").visible = false
            }
        }, this)
        timer.start();
    }
    private getOpenId(): void {
        let openid = this.getQueryString("openid")
        if (openid == null) {
            let companyCode="guzhiwei";
            let callUrl =window.location.href;//"http://192.168.1.223:2978"
            let url = "http://app.guzhiwei.com/wxis/Auth?companyCode="+companyCode+"&UserInfo=true&scope=snsapi_userinfo&RedirectUrl=" + callUrl;
            window.location.href = url;
        }
        alert(openid);
        StaticData.OpenId = openid;
    }

    getQueryString(name): string {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]); return null;
    }
}
