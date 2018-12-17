import Vue from "vue";
import PrimeExplorer from "./prime-explorer.vue";


new Vue({
    el : "#widget",
    components : {
        PrimeExplorer
    },
    render : function (createElement) {
        return createElement(PrimeExplorer);
    }
});