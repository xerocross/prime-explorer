<template>
    <div>
        <prime-factors-widget
            :factor-worker-url = "workerURL"
        />
    </div>
</template>
<script>
import PrimeFactorsWidget from "./prime-factors-widget.vue";
export default {
    components : {
        PrimeFactorsWidget,
    },
    data () {
        return {
            workerURL : "/get-factor-worker.js"
        }
    }
}
</script>