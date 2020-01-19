import IOnTick from './IOnTick'

class Mouse extends egret.Sprite implements IOnTick {
  constructor() {
    super()
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
  }

  onAddToStage(event: egret.Event) {
    let stageW = this.stage.stageWidth
    let stageH = this.stage.stageHeight
    let mouse = new egret.Bitmap()
    mouse.texture = RES.getRes('egret_icon_png')
    this.addChild(mouse)
    var offsetX = stageW / 2 - mouse.width / 2
    const minX = 0
    const maxX = stageW - mouse.width
    mouse.x = offsetX
    mouse.y = stageH - mouse.height

    // 如果要给显示对象添加事件, 一定要将事件能力属性设置为 true
    mouse.touchEnabled = true

    // 手指按到屏幕，触发 startMove 方法
    mouse.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this)

    //手指离开屏幕，触发 stopMove 方法
    mouse.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this)

    function startMove(e: egret.TouchEvent): void {
      offsetX = e.stageX - mouse.x
      this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this)
    }

    //手指离开屏幕，移除手指移动的监听
    function stopMove(e: egret.TouchEvent) {
      this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this)
    }

    //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
    function onMove(e: egret.TouchEvent): void {
      const pointPos = e.stageX - offsetX
      if (pointPos <= minX || pointPos >= maxX) {
        return
      }
      mouse.x = pointPos
    }
  }

  onTick: Function
}

export default Mouse
