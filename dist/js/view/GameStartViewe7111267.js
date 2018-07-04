/**
 * 启动界面类
 */
class GameStartView extends ui.GameStartUI {
    constructor() {
        super()
        // 居中显示
        this.centerX = 0
        this.centerY = 0
        // 启动事件
        this.startBtn.on(Laya.Event.CLICK, this, this.onStartGame)
    }
    onStartGame() {
        // 移除启动界面
        this.removeSelf()
        // 加载游戏界面
        if (!LayaApp.gameView) {
            LayaApp.gameView = new GameView()
        }
        LayaApp.gameView.gameStart()
        Laya.stage.addChild(LayaApp.gameView)
    }
}