import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/index.vue'; // 登录主界面
import index from '@/components/index/index.vue'; // 产品入口主界面
import impp from './impp'; // IMPP主路由
import wms from '@/components/wms'; // WMS路由
import password from '@/components/password/password-update.vue';
Vue.use(Router);

export default new Router({
    routes: [
        // 首页
        {
            path: '/',
            name: 'index',
            component: index
        },
        // login路由
        {
            path: '/login',
            name: 'login',
            component: login
        },
        // login路由
        {
            path: '/password',
            name: 'password',
            component: password
        },
        ...impp,
        ...wms
    ]
});
