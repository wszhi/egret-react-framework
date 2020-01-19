import { centerAnchor } from './utils'

export default class Gift extends egret.Sprite {
  constructor() {
    super()
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
  }

  onAddToStage = () => {
    centerAnchor(this)
    let image = new egret.Bitmap()
    image.texture = RES.getRes('egret_icon_png')
    this.addChild(image)
    this.x = 0
    this.y = 10
    // const imageTw = egret.Tween.get(image)
    // imageTw.to( {y:this.stage.stageHeight  - 300}, 2000 );
  }
}
