import Vue from "vue";
import PrimeExplorer from "./index.js"

let pe = PrimeExplorer.PrimeExplorer1;

new Vue({
    el : "#widget",
    components : {
        pe
    },
    render : function (createElement) {
        return createElement(pe);
    }
});