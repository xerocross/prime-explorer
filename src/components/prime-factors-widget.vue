<template>
    <div>
        <prime-factors-widget-core
            :factor-worker-url = "workerURL"
        />
    </div>
</template>
<script>
import PrimeFactorsWidgetCore from "./prime-factors-widget-core.vue";
export default {
    components : {
        PrimeFactorsWidgetCore,
    },
    data () {
        return {
            workerURL : "/get-factor-worker.js"
        }
    }
}
</script>