/**
 * 结束界面类
 */
class GameOverView extends ui.GameOverUI {
    constructor() {
        super()
        // 居中显示
        this.centerX = 0
        this.centerY = 0
        // 重启事件
        this.restartBtn.on(Laya.Event.CLICK, this, this.onRestartGame)
    }
    // 重启游戏
    onRestartGame() {
        // 移除结束界面
        this.removeSelf()
        // 移除游戏界面
        LayaApp.gameView.removeSelf()
        // 加载启动界面
        Laya.stage.addChild(LayaApp.gameStartView)
    }
    // 设置分数显示
    setScoreUI(score) {
        const data = {}
        for (let i = 9; i >= 0; i--) {
            data[`item${i}`] = { index: Math.floor(score % 10) }
            score /= 10
        }
        this.scoreNum.dataSource = data
    }
}