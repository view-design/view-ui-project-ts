import { defineComponent, ref } from 'vue'
import styles from './demo.module.less'

export default defineComponent({
    setup() {
        const msg = ref('Hello ViewUIPlus!');
        
        return () => (
            <div class={styles.container}>
                <Alert>{msg.value}</Alert>
                <Input v-model={msg.value} />
            </div>
        )
    }
})