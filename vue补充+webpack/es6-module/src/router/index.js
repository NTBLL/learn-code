import Vue from 'vue';
import VueRouter from 'vue-router';

//显示使用路由
Vue.use(VueRouter);

import Home from './../components/Home.vue';
import Music from './../components/Music.vue';
import Friend from './../components/Friend.vue';

const router = new VueRouter({
    routes: [
        {path: '/',redirect: "/home"},
        {path: '/home',component: Home},
        {path: '/music',component: Music},
        {path: '/friend',component: Friend},
    ]
});

export default router;