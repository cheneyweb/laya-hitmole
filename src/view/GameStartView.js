/**
 * 启动界面类
 */
class GameStartView extends ui.GameStartUI {
    constructor() {
        super()
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