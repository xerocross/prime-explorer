<template>
    <div>
        <demo-layout
            :widgets = "widgets"
            title = "Prime Explorer"
        />
        <p class="copyright">
            This website and all original content copyright Adam Cross, 2018.
        </p>
    </div>
</template>
<script>
import DemoLayout from "./components/demo-layout.vue";
import {PrimeExplorerMultiples, PrimeFactorsWidget} from "./index.js";
export default {
    components : {
        DemoLayout,
        PrimeExplorerMultiples,
        PrimeFactorsWidget
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
                "link" : PrimeFactorsWidget,
                "name" : "Prime Factors Widget",
                "id" : "PrimeFactorsWidget",
                "notes" : ""
            }]
        }
    },
}

</script>
<style lang="scss">
    .copyright {
        margin-top:20px; 
        text-align:center;
    }
</style>