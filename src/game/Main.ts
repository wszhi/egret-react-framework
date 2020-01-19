import LoadingUI from './LoadingUI'
import Mouse from './Mouse'
import Gift from './Gift'

export default class Main extends egret.DisplayObjectContainer {
  public constructor() {
    super()
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
  }

  private onAddToStage(event: egret.Event) {
    this.runGame().catch(e => {
      console.log(e)
    })
  }

  private async runGame() {
    await this.loadResource()
    this.createGameScene()
  }

  private async loadResource() {
    try {
      const loadingView = new LoadingUI()
      this.stage.addChild(loadingView)
      await RES.loadConfig('resource/default.res.json', 'resource/')
      await RES.loadGroup('preload', 0, loadingView)
      this.stage.removeChild(loadingView)
    } catch (e) {
      console.error(e)
    }
  }
  /**
   * 创建游戏场景
   * Create a game scene
   */
  private createGameScene() {
    let sky = this.createBitmapByName('bg_jpg')
    this.addChild(sky)
    let stageW = this.stage.stageWidth
    let stageH = this.stage.stageHeight
    sky.width = stageW
    sky.height = stageH

    const mouse = new Mouse()
    this.addChild(mouse)

    this.addChild(new Gift())
  }

  /**
   * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
   * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
   */
  private createBitmapByName(name: string) {
    let result = new egret.Bitmap()
    let texture: egret.Texture = RES.getRes(name)
    result.texture = texture
    return result
  }
}
