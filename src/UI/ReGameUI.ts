class ReGameUI extends egret.Sprite {
	isGet: egret.TextField;
	jl: egret.Bitmap;
	restart: egret.Bitmap;
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
		this.restart = Helper.getBitmap(R.restart_btn_png)
		Helper.ObjectCenter(this.restart);
		this.restart.x -= 130;
		this.restart.y += 210;
		this.restart.touchEnabled = true;
		this.restart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.dispatchEvent(new TapEvent(TapEvent.NAME));
		}, this)
		super.addChild(this.restart);
		this.jl = Helper.getBitmap(R.jiangli_btn_png)
		Helper.ObjectCenter(this.jl)
		this.jl.x += 130;
		this.jl.y += 210;
		this.jl.touchEnabled = true;
		this.jl.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			var request = new egret.HttpRequest();
			request.responseType = egret.HttpResponseType.TEXT;
			//request.open("http://192.168.1.223:11000/wxapi/Activity/EasterDay2017/Play?openid=" + StaticData.OpenId + "&prizeType=" + level, egret.HttpMethod.POST);
			request.open("http://manager.luyuangzw.com:11000/wxapi/Activity/EasterDay2017/Play?openid=" + StaticData.OpenId + "&prizeType=" + level, egret.HttpMethod.POST);
			alert(StaticData.OpenId);
			alert(level);
			//设置响应头
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			//发送参数
			request.send();
			request.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
				var request = <egret.HttpRequest>event.currentTarget;
				let isCan = JSON.parse(request.response).Data;
				//alert(isCan)
				//alert(request.response)
				//window.location.href = "http://192.168.1.223:11000/Coupon/MyCoupon?mch=guzhiwei";
				window.location.href = "http://manager.luyuangzw.com:11000/Coupon/MyCoupon?mch=guzhiwei";
			}, this);
		}, this)
		super.addChild(this.jl);
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
			//	request.open("http://192.168.1.223:11000/wxapi/Activity/EasterDay2017/Check?openID="+StaticData.OpenId+"&prizeType="+level,egret.HttpMethod.GET);
			request.open("http://manager.luyuangzw.com:11000/wxapi/Activity/EasterDay2017/Check?openID=" + StaticData.OpenId + "&prizeType=" + level, egret.HttpMethod.GET);
			//设置响应头
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			//发送参数
			request.send();
			request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
		}

	}
	private onGetComplete(event: egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		let isCan = JSON.parse(request.response).Data;
		//alert(request.response);
		if (!isCan) {
			this.isGet = new egret.TextField();
			this.isGet.text = "已领取过奖励";
			this.isGet.textColor = 0xddaf5c;
			Helper.ObjectCenter(this.isGet);
			this.isGet.y += 130;
			super.addChild(this.isGet);
			this.jl.visible = false;
			Helper.ObjectCenterX(this.restart);
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