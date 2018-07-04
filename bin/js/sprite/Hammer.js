/**
 * 锤子类
 */
class Hammer extends ui.HammerUI {
    constructor() {
        super()
        this.visible = false
    }
    // 开始使用
    start() {
        this.visible = true
        Laya.Mouse.hide()
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
        this.onMouseMove()
    }
    // 结束使用
    end() {
        this.visible = false
        Laya.Mouse.show()
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
    }
    onMouseDown() {
        this.hit.play(0, false)
    }
    onMouseMove() {
        this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 2)
    }
}