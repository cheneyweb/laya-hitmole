class LayaApp {
    constructor() {
        // 初始化引擎
        const WebGL = laya.webgl.WebGL
        Laya.init(800, 600, WebGL)
        // 设置stage颜色
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
        Laya.stage.alignW = Laya.Stage.ALIGN_CENTER
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE
        Laya.stage.bgColor = "#ffcccc"
        // 加载资源
        Laya.loader.load("res/atlas/ui.atlas", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS)
    }
    // 加载完成回调
    onLoaded() {
        // 启动游戏界面
        LayaApp.gameStartView = new GameStartView()
        Laya.stage.addChild(LayaApp.gameStartView)
    }
}

// 实例化游戏应用
new LayaApp()

