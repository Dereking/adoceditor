import { App } from 'vue'
import Button from './Button'
import DocViewer from './DocViewer'


const components = [Button, DocViewer]

const install = (app: App) => {
    components.map(item => {
        app.component(item.name, item)
    })
}

export default {
    install,
    ...components
}