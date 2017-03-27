class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("load");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent) {
        if (event.groupName == "load") {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
        if (event.groupName == "preload") {
            this.musicPlayUI = this.musicPlayUI == null ? new MusicPlayUI() : this.musicPlayUI;
            this.musicPlayUI.addEventListener(TimeOutEvent.NAME, () => {
                this.stage.removeChild(this.loadingView);
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
                this.createGameScene();
            }, this)

        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    private textfield: egret.TextField;
    private musicPlayUI: MusicPlayUI;
    private isfirst: boolean = true;
    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        Helper.width = this.stage.stageWidth;
        Helper.height = this.stage.stageHeight;
        this.stage.scaleMode = egret.StageScaleMode.NO_BORDER
        this.addBeginUI();
        RES.loadGroup("gameui");
    }
    private addBeginUI(): void {
        let beginUI = BeginUI.addBeginUI(this, () => {
            this.addGameUI();
        })
        // if (this.isfirst) {
        //     beginUI.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //         this.musicPlayUI.musicControl = this.musicPlayUI.music.play();
        //     }, this);
        // }
        beginUI.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.musicPlayUI.musicControl = this.musicPlayUI.music.play();
        }, this);

    }
    private addGameUI(): void {
        RES.loadGroup("regameui");
        let gameUI = GameUI.addGameUI(this, () => {
            this.addBeginUI();
            this.isfirst = false;
            this.musicPlayUI.musicControl.stop();
        });
        gameUI.addChild(this.musicPlayUI);
    }
}


