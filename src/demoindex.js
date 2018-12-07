import Vue from "vue";
import {PrimeExplorer1} from "./index.js"


new Vue({
    el : "#widget",
    components : {
        PrimeExplorer1
    },
    render : function (createElement) {
        return createElement(PrimeExplorer1);
    }
});