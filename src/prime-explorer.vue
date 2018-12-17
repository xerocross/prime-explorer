<template>
    <div>
        <demo-layout
            :widgets = "widgets"
            title = "Prime Explorer"
        />
        <p class="footer">
            <a href="https://github.com/xerocross/prime-explorer">https://github.com/xerocross/prime-explorer</a><br/>
            This website and all original content copyright Adam Cross, 2018.
        </p>
    </div>
</template>
<script>
import {DemoLayout} from "cross-vue-base";
import {PrimeExplorerMultiples} from "./index.js";
import PrimeFactorsWidgetDemo from "./components/prime-factors-widget-demo.vue";
export default {
    components : {
        DemoLayout,
        PrimeExplorerMultiples,
        PrimeFactorsWidgetDemo
    },
    data () {
        return {
            widgets : [{
                "link" : PrimeExplorerMultiples,
                "name" : "Prime Explorer Multiples",
                "id" : "PrimeExplorerMultiples",
                "notes" : ""
            },
            {
                "link" : PrimeFactorsWidgetDemo,
                "name" : "Prime Factors Widget",
                "id" : "PrimeFactorsWidget",
                "notes" : ""
            }]
        }
    },
}

</script>
<style lang="scss">
    .footer {
        margin-top:20px; 
        text-align:center;
    }
</style>