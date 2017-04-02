class ReGameUI extends egret.Sprite {
	/**
	 *重新游戏界面
	 */
	constructor(mark: string) {
		super();
		let bg = new egret.Shape();
		bg.graphics.beginFill(0, 0.8);
		bg.graphics.drawRect(-1, -1, Helper.width + 1, Helper.height + 1);
		bg.graphics.endFill();
		bg.touchEnabled = true;
		let markNum = new Number(mark);
		let level: number = 0;
		super.addChild(bg);
		if (450 <= markNum && markNum < 550) {
			level = 3;
		}
		else if (550 <= markNum && markNum < 650) {
			level = 2;
		}
		else if (650 <= markNum) {
			level = 1;
		}
		if (level == 0) {
			this.addNoGiveWindow();
			return;
		}
		let windows = Helper.getBitmap("jieguo_bg_" + level + "_png")
		Helper.ObjectCenter(windows)
		super.addChild(windows);
		let restart = Helper.getBitmap(R.restart_btn_png)
		Helper.ObjectCenter(restart);
		restart.x -= 130;
		restart.y += 210;
		restart.touchEnabled = true;
		restart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.dispatchEvent(new TapEvent(TapEvent.NAME));
		}, this)
		super.addChild(restart);
		let jl = Helper.getBitmap(R.jiangli_btn_png)
		Helper.ObjectCenter(jl)
		jl.x += 130;
		jl.y += 210;
		jl.touchEnabled = true;
		jl.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			window.location.href = "http://manager.luyuangzw.com:11000/Coupon/MyCoupon?mch=guzhiwei";
		}, this)
		super.addChild(jl);
		let markTxt = new egret.TextField();
		markTxt.textColor = 0xffffff;
		markTxt.size = 40;
		markTxt.text = "得分 " + mark;
		Helper.ObjectCenter(markTxt);
		markTxt.y -= 30;
		super.addChild(markTxt);
		var params = "";
		if (level > 0) {
			var request = new egret.HttpRequest();
			request.responseType = egret.HttpResponseType.TEXT;
			request.open("http://192.168.1.223:11000/wxapi/Activity/EasterDay2017/Play?openid=" + StaticData.OpenId + "&prizeType=" + level, egret.HttpMethod.POST);
			//设置响应头
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			//发送参数
			request.send();
			request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
		}

	}
	private onGetComplete(event: egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		let v =JSON.parse(request.response).Data;
		//alert(request.response);
		if (!v) {
			let isGet = new egret.TextField();
			isGet.text = "已领取过奖励";
			isGet.textColor = 0xddaf5c;
			Helper.ObjectCenter(isGet);
			isGet.y += 130;
			super.addChild(isGet);
		}
	}
	private onGetIOError(event: egret.IOErrorEvent): void {
		// 		alert(event.data)
		//         egret.log("get error : " + event);
	}
	addNoGiveWindow(): void {
		let window = Helper.getBitmap("default@2x_png")
		Helper.ObjectCenter(window)
		window.y -= 100;
		super.addChild(window);
		let restart = Helper.getBitmap(R.restart_btn_png)
		Helper.ObjectCenter(restart);
		restart.y += 210;
		restart.touchEnabled = true;
		restart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.dispatchEvent(new TapEvent(TapEvent.NAME));
		}, this)
		super.addChild(restart);

	}
}