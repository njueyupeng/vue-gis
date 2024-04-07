import type { App } from 'vue'
import Viewer from './index.vue'

Viewer.install = (app: App) => {
  app.component(Viewer.name, Viewer)
}

export { Viewer }
export default Viewer
