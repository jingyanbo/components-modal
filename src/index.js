import HelloWorld from './components/HelloWorld';
import ListCom from './components/list-com';

const components = {
    HelloWorld,
    ListCom
};

const rview = {
    ...components
};

const install = function(Vue){
    Object.keys(rview).forEach(key=>{
        Vue.component(key,rview[key]);
    });
}

if (typeof window !=='undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version:process.env.VERSION,
    install,
    ...components
};

export default API;
// module.exports.default = module.exports = API;