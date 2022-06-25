import { defineComponent, ref } from 'vue'
import { Alert, Input } from 'view-ui-plus'
import styles from './demo.module.less'

export default defineComponent({
    setup() {
        const msg = ref('Hello ViewUIPlus!')
        
        return () => (
            <div class={styles.container}>
                <Alert show-icon>{msg.value}</Alert>
                <Input v-model={msg.value} />
            </div>
        )
    }
})