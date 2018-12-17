<template>
    <div class="prime-factors-widget-demo">
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
<style lang="scss">
.prime-factors-widget-demo {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>