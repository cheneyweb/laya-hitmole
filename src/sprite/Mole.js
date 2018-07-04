/**
 * 地鼠类
 */
class Mole {
    constructor(normalState, hitState, downY, hitCallBackHandler, scoreImg) {
        this.normalState = normalState
        this.hitState = hitState
        this.downY = downY
        this.upY = this.normalState.y
        this.hitCallBackHandler = hitCallBackHandler
        this.scoreImg = scoreImg
        this.scoreY = this.scoreImg.y
        this.reset()
        this.normalState.on(Laya.Event.CLICK, this, this.hit)
    }
    // 重置
    reset() {
        this.normalState.visible = false
        this.hitState.visible = false
        this.scoreImg.visible = false
        this.isActive = false
        this.isShow = false
        this.isHit = false
    }
    // 显示
    show() {
        if (!this.isActive) {
            this.isActive = true
            this.isShow = true
            this.type = Math.random() < 0.3 ? 1 : 2
            this.normalState.skin = `ui/mouse_normal_${this.type}.png`
            this.hitState.skin = `ui/mouse_hit_${this.type}.png`
            this.scoreImg.skin = `ui/score_${this.type}.png`
            this.normalState.y = this.downY
            this.normalState.visible = true
            Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, this.showComplete))
        }
    }
    // 停留
    showComplete() {
        if (this.isShow && !this.isHit) {
            Laya.timer.once(2000, this, this.hide)
        }
    }
    // 消失
    hide() {
        if (this.isShow && !this.isHit) {
            this.isShow = false
            Laya.Tween.to(this.normalState, { y: this.downY }, 300, Laya.backIn, Laya.Handler.create(this, this.reset))
        }
    }
    // 受击
    hit() {
        if (this.isShow && !this.isHit) {
            this.isShow = false
            this.isHit = true
            this.normalState.visible = false
            this.hitState.visible = true
            this.hitCallBackHandler.runWith(this.type)
            Laya.timer.clear(this, this.hide)
            Laya.timer.once(500, this, this.reset)
            this.showScore()
        }
    }
    // 显示飘字效果
    showScore() {
        this.scoreImg.y = this.scoreY + 30
        this.scoreImg.scale(1, 1)
        this.scoreImg.visible = true
        Laya.Tween.to(this.scoreImg, { y: this.scoreY, scaleX: 1, scoreY: 1 }, 300, Laya.Ease.backOut)
    }
}