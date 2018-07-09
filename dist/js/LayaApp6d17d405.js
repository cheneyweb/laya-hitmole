class LayaApp {
    constructor() {
        // 初始化引擎
        const WebGL = laya.webgl.WebGL
        Laya.init(800, 600, WebGL)
        //设置版本控制类型为使用文件名映射的方式
        Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION
        //加载版本信息文件
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.beginLoad))
        // 设置stage属性
        // Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE
        // Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO
        // Laya.stage.scaleMode =  Laya.Stage.SCALE_EXACTFIT
        // Laya.stage.scaleMode =  Laya.Stage.SCALE_NOBORDER
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
        Laya.stage.alignW = Laya.Stage.ALIGN_CENTER
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE
        Laya.stage.bgColor = "#ffffff"
    }
    // 加载资源
    beginLoad() {
        Laya.loader.load("res/atlas/ui.atlas", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS)
        // 播放背景音乐
        Laya.SoundManager.playMusic("res/sounds/bgm.mp3", 0, null)
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

