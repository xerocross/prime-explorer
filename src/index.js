import PrimeFactorsWidget from "./components/prime-factors-widget.vue";
import PrimeExplorerMultiples from "./components/prime-explorer-multiples.vue";
const PrimeExplorer1 = PrimeExplorerMultiples;

const PrimeExplorer1Plugin = {
    install(Vue, options) {
        Vue.component("prime-explorer-1", PrimeExplorer1);
    },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(PrimeExplorer1Plugin);
}


export default PrimeExplorer1Plugin;
export { PrimeExplorer1, PrimeFactorsWidget, PrimeExplorerMultiples};