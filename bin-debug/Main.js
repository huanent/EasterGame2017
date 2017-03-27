var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.isfirst = true;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("load");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        var _this = this;
        if (event.groupName == "load") {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
        if (event.groupName == "preload") {
            this.musicPlayUI = this.musicPlayUI == null ? new MusicPlayUI() : this.musicPlayUI;
            this.musicPlayUI.addEventListener(TimeOutEvent.NAME, function () {
                _this.stage.removeChild(_this.loadingView);
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.onResourceLoadComplete, _this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, _this.onResourceLoadError, _this);
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, _this.onItemLoadError, _this);
                _this.createGameScene();
            }, this);
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        Helper.width = this.stage.stageWidth;
        Helper.height = this.stage.stageHeight;
        this.stage.scaleMode = egret.StageScaleMode.NO_BORDER;
        this.addBeginUI();
        RES.loadGroup("gameui");
    };
    Main.prototype.addBeginUI = function () {
        var _this = this;
        var beginUI = BeginUI.addBeginUI(this, function () {
            _this.addGameUI();
        });
        // if (this.isfirst) {
        //     beginUI.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //         this.musicPlayUI.musicControl = this.musicPlayUI.music.play();
        //     }, this);
        // }
        beginUI.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.musicPlayUI.musicControl = _this.musicPlayUI.music.play();
        }, this);
    };
    Main.prototype.addGameUI = function () {
        var _this = this;
        RES.loadGroup("regameui");
        var gameUI = GameUI.addGameUI(this, function () {
            _this.addBeginUI();
            _this.isfirst = false;
            _this.musicPlayUI.musicControl.stop();
        });
        gameUI.addChild(this.musicPlayUI);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map