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
		let markNum=new Number(mark);
		let level: number = 0;
		super.addChild(bg);
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
			this.addNoGiveWindow();
			return;
		}
		let window = Helper.getBitmap("jieguo_bg_" + level + "_png")
		Helper.ObjectCenter(window)
		super.addChild(window);
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
		super.addChild(jl);
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
		let markTxt = new egret.TextField();
		markTxt.textColor = 0xffffff;
		markTxt.size = 40;
		markTxt.text = "得分 " + mark;
		Helper.ObjectCenter(markTxt);
		markTxt.y -= 30;
		super.addChild(markTxt);

	}
	addNoGiveWindow(): void {
		let window = Helper.getBitmap("default@2x_png")
		Helper.ObjectCenter(window)
		window.y-=100;
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