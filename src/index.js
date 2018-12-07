import PrimeExplorer1 from "./components/prime-explorer-1.vue";

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
export { PrimeExplorer1 };