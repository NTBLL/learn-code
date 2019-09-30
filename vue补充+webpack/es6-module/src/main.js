// //入口
// require("./index.js");
// //css
// require("./css/index.css");
// //less
// require("./index.less");
//
// import './myimport';
//
// import suiyi from './edefault';
// console.log(suiyi.xiaohua,suiyi.xiaoli);


//vue搭配webpack
//需要下载vue-loader 和 vue-template-compiler 并配置VueLoaderPlugin = require('vue-loader/lib/plugin')插件
import Vue from 'vue';
import router from './router'
import App from './App.vue';


new Vue({
    el: "#app",
    render: h => h(App),
    router
});
