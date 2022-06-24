import { defineComponent } from 'vue';
import Demo from './components/Demo';

export default defineComponent({
    setup() {
        return () => (
            <Demo></Demo>
        );
    }
});