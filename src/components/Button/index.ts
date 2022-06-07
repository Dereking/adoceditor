import { App } from 'vue'
import Button from './index.vue'

Button.name = 'e-button'

Button.install = (app: App) => {
    app.component(Button.name, Button)
}

export default Button