import { App } from 'vue'
import DocViewer from './index.vue'

DocViewer.name = 'doc-viewer'

DocViewer.install = (app: App) => {
    app.component(DocViewer.name, DocViewer)
}

export default DocViewer