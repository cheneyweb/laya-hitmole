/**
 * 结束界面类
 */
class GameOver extends ui.GameOverUI {
    constructor() {
        super()
        this.restartBtn.on(Laya.Event.CLICK, this, this.onReStartGame)
    }
    onReStartGame() {
        this.removeSelf()
        LayaSimple.game.removeSelf()
        Laya.stage.addChild(LayaSimple.gameStart)
    }
    // 设置分数显示
    setScoreUI(score){
        this.data = {}
        this.temp = score
        for (let i = 9; i >= 0; i--) {
            this.data[`item${i}`] = { index: Math.floor(this.temp % 10) }
            this.temp /= 10
        }
        this.scoreNum.dataSource = this.data
    }
}