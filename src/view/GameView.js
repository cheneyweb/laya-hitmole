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
        this.hitCallBackHandler = Laya.Handler.create(this, this.setScore, null, false)
        // 初始化9只地鼠
        this.moles = []
        this.moleNum = 9
        for (let i = 0; i < this.moleNum; i++) {
            this.box = this.getChildByName(`item${i}`)
            this.mole = new Mole(this.box.getChildByName("normal"), this.box.getChildByName("hit"), 25, this.hitCallBackHandler, this.box.getChildByName("scoreImg"))
            this.moles.push(this.mole)
        }
        // 初始化锤子
        this.hammer = new Hammer()
        this.addChild(this.hammer)
        this.hammer.visible = false
    }
    // 主循环，倒计时，随机显示一只地鼠
    onLoop() {
        this.timeBar.value -= (10 / 90)
        if (this.timeBar.value <= 0) {
            return this.gameOver()
        }
        this.index = Math.floor(Math.random() * this.moleNum)
        this.moles[this.index].show()
    }
    // 记录分数
    setScore(type) {
        this.score += (type == 1 ? -100 : 100)
        if (this.score < 0) {
            this.score = 0
        }
        this.updateScoreUI()
    }
    // 更新分数显示
    updateScoreUI() {
        this.data = {}
        this.temp = this.score
        for (let i = 9; i >= 0; i--) {
            this.data[`item${i}`] = { index: Math.floor(this.temp % 10) }
            this.temp /= 10
        }
        this.scoreNum.dataSource = this.data
    }
    // 游戏启动
    gameStart() {
        this.timeBar.value = 1
        this.score = 0
        this.hammer.visible = true
        this.updateScoreUI()
        this.hammer.start()
        // 执行主循环
        Laya.timer.loop(1000, this, this.onLoop)
    }
    // 游戏结束
    gameOver() {
        this.hammer.visible = false
        this.hammer.end()
        Laya.timer.clear(this, this.onLoop)
        if (!LayaApp.gameOverView) {
            LayaApp.gameOverView = new GameOverView()
        }
        LayaApp.gameOverView.centerX = 0
        LayaApp.gameOverView.centerY = 40
        LayaApp.gameOverView.setScoreUI(this.score)
        Laya.stage.addChild(LayaApp.gameOverView)
    }
}