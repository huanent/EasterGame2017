var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MusicPlayUI = (function (_super) {
    __extends(MusicPlayUI, _super);
    /**
     *音乐按钮
     */
    function MusicPlayUI() {
        var _this = _super.call(this) || this;
        _this.music = new egret.Sound();
        _this.music.load("resource/assets/pz.mp3");
        _this.music.addEventListener(egret.Event.COMPLETE, function () {
            //this.musicControl = this.music.play();
            var musicOpenBtn = Helper.getBitmap("icon_music_open_png", null, null, 60, 60);
            musicOpenBtn.anchorOffsetX = musicOpenBtn.width / 2;
            musicOpenBtn.anchorOffsetY = musicOpenBtn.height / 2;
            musicOpenBtn.touchEnabled = true;
            _super.prototype.addChild.call(_this, musicOpenBtn);
            var musicCloseBtn = Helper.getBitmap("icon_music_close_png", null, null, 60, 60);
            musicCloseBtn.anchorOffsetX = musicOpenBtn.width / 2;
            musicCloseBtn.anchorOffsetY = musicOpenBtn.height / 2;
            musicCloseBtn.visible = false;
            musicCloseBtn.touchEnabled = true;
            _super.prototype.addChild.call(_this, musicCloseBtn);
            var timer = new egret.Timer(20, 0);
            var i = 0;
            timer.addEventListener(egret.TimerEvent.TIMER, function () {
                musicOpenBtn.rotation = i++;
                if (i > 180)
                    i - 360;
            }, _this);
            timer.start();
            musicOpenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                timer.stop();
                musicCloseBtn.visible = true;
                musicOpenBtn.visible = false;
                _this.musicControl.stop();
            }, _this);
            musicCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                musicCloseBtn.visible = false;
                musicOpenBtn.visible = true;
                timer.start();
                _this.musicControl = _this.music.play();
            }, _this);
            _this.dispatchEvent(new TimeOutEvent(TimeOutEvent.NAME));
        }, _this);
        return _this;
    }
    return MusicPlayUI;
}(egret.Sprite));
__reflect(MusicPlayUI.prototype, "MusicPlayUI");
//# sourceMappingURL=MusicPlayUI.js.map