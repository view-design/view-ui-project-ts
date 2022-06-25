import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return () => (
            <router-view
                v-slots={
                    { default: ({ Component }: any) => Component }
                }
            ></router-view>
        )
    }
});