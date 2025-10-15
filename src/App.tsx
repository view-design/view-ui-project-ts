import { defineComponent } from 'vue'
import Navigation from './components/Navigation.vue'

export default defineComponent({
    components: {
        Navigation
    },
    setup() {
        return () => (
            <div class="app">
                <Navigation />
                <router-view />
            </div>
        )
    }
})