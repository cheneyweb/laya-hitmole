/**
 * 结束界面类
 */
class GameOverView extends ui.GameOverUI {
    constructor() {
        super()
        this.restartBtn.on(Laya.Event.CLICK, this, this.onReStartGame)
    }
    // 重启游戏
    onReStartGame() {
        // 移除结束界面
        this.removeSelf()
        // 移除游戏界面
        LayaApp.gameView.removeSelf()
        // 加载启动界面
        Laya.stage.addChild(LayaApp.gameStartView)
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