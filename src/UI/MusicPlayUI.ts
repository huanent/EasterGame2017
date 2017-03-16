class MusicPlayUI extends egret.Sprite {
	musicControl: egret.SoundChannel;
	music:egret.Sound;
	/**
	 *音乐按钮
	 */
	constructor() {
		super();
		this.music = new egret.Sound();
		this.music.load("resource/assets/pz.mp3");
		this.music.addEventListener(egret.Event.COMPLETE, () => {
			//this.musicControl = this.music.play();
			let musicOpenBtn = Helper.getBitmap("icon_music_open_png", null, null, 60, 60);
			musicOpenBtn.anchorOffsetX = musicOpenBtn.width / 2;
			musicOpenBtn.anchorOffsetY = musicOpenBtn.height / 2;
			musicOpenBtn.touchEnabled = true;
			super.addChild(musicOpenBtn);
			let musicCloseBtn = Helper.getBitmap("icon_music_close_png", null, null, 60, 60);
			musicCloseBtn.anchorOffsetX = musicOpenBtn.width / 2;
			musicCloseBtn.anchorOffsetY = musicOpenBtn.height / 2;
			musicCloseBtn.visible = false;
			musicCloseBtn.touchEnabled = true;
			super.addChild(musicCloseBtn);
			let timer = new egret.Timer(20, 0);
			let i = 0;
			timer.addEventListener(egret.TimerEvent.TIMER, () => {
				musicOpenBtn.rotation = i++;
				if (i > 180) i - 360;
			}, this);
			timer.start();
			musicOpenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				timer.stop()
				musicCloseBtn.visible = true;
				musicOpenBtn.visible = false;
				this.musicControl.stop();
			}, this);
			musicCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				musicCloseBtn.visible = false;
				musicOpenBtn.visible = true;
				timer.start();
				this.musicControl = this.music.play();
			}, this);
			this.dispatchEvent(new TimeOutEvent(TimeOutEvent.NAME));
		}, this)
	}
}