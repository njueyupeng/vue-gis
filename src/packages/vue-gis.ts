import type { App } from 'vue'
import Button from './button/index'

const components = [Button]
const version = '0.0.3'

    const install = (app: App) => {
      components.forEach((component) => {
        console.log(component.name)
        component.name && app.component(component.name, component)
      })
    }

  export { Button }
export default { version, install }
