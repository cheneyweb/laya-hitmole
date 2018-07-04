class LayaSimple {
    constructor() {
        // 初始化引擎
        const WebGL = laya.webgl.WebGL
        Laya.init(800, 600, WebGL)
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
        Laya.stage.alignW = Laya.Stage.ALIGN_CENTER
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE
        // 设置stage颜色
        Laya.stage.bgColor = "#ffcccc"
        // 加载资源
        Laya.loader.load("res/atlas/ui.atlas", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS)
    }
    // 加载完成回调
    onLoaded() {
        LayaSimple.gameStart = new GameStart()
        Laya.stage.addChild(LayaSimple.gameStart)
    }
}

new LayaSimple()

