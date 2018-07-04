/**
 * 启动界面类
 */
class GameStart extends ui.GameStartUI {
    constructor() {
        super()
        this.startBtn.on(Laya.Event.CLICK, this, this.onStartGame)
    }
    onStartGame() {
        this.removeSelf()
        if (!LayaSimple.game) {
            LayaSimple.game = new Game()
        }
        LayaSimple.game.gameStart()
        Laya.stage.addChild(LayaSimple.game)
    }
}