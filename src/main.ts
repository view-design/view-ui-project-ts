import { createApp } from 'vue'
import App from './App'
import ViewUiPlus from 'view-ui-plus'
import './styles/index.less'

const app = createApp(App)

app.use(ViewUiPlus)
    .mount('#app')
