/**
 * 游戏主界面类
 * 载入地鼠
 * 执行主循环
 */
class GameView extends ui.GameUI {
    constructor() {
        super()
        // 初始化
        this.init()
        // 设置进度条初始值，分数值，击中回调
        this.gameStart()
    }
    // 初始化
    init() {
        // 居中显示
        this.centerX = 0
        this.centerY = 0
        // 初始化9只地鼠
        this.moles = []
        this.moleNum = 9
        this.hitCallBackHandler = Laya.Handler.create(this, this.setScore, null, false)
        for (let i = 0; i < this.moleNum; i++) {
            this.moleBox = this.getChildByName(`item${i}`)
            this.mole = new Mole(this.moleBox.getChildByName("normal"), this.moleBox.getChildByName("hit"), this.moleBox.getChildByName("scoreImg"), 25, this.hitCallBackHandler)
            this.moles.push(this.mole)
        }
        // 初始化锤子
        this.hammer = new Hammer()
        this.addChild(this.hammer)
    }
    // 游戏启动
    gameStart() {
        // 重置进度条，分数，锤子
        this.timeBar.value = 1
        this.score = 0
        this.hammer.start()
        this.updateScoreUI(this.score)
        // 执行主循环
        Laya.timer.loop(1000, this, this.onLoop)
    }
    // 主循环，倒计时，随机显示一只地鼠
    onLoop() {
        this.timeBar.value -= (10 / 90)
        if (this.timeBar.value <= 0) {
            return this.gameOver()
        }
        this.moles[Math.floor(Math.random() * this.moleNum)].show()
    }
    // 游戏结束
    gameOver() {
        this.hammer.end()
        Laya.timer.clear(this, this.onLoop)
        if (!LayaApp.gameOverView) {
            LayaApp.gameOverView = new GameOverView()
        }
        LayaApp.gameOverView.setScoreUI(this.score)
        Laya.stage.addChild(LayaApp.gameOverView)
    }
    // 击中地鼠回调记录分数
    setScore(type) {
        this.score += (type == 1 ? -100 : 100)
        if (this.score < 0) {
            this.score = 0
        }
        this.updateScoreUI(this.score)
    }
    // 更新分数显示
    updateScoreUI(score) {
        const data = {}
        for (let i = 9; i >= 0; i--) {
            data[`item${i}`] = { index: Math.floor(score % 10) }
            score /= 10
        }
        this.scoreNum.dataSource = data
    }
}