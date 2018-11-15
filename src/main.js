// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './app';
import Utils from '@/assets/js/utils';
import Url from '@/assets/url';
import router from './router';
import Axios from 'axios';
import querystring from 'querystring';
import '@/assets/font-awesome/scss/font-awesome.scss';
import './mock';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuexI18n from 'vuex-i18n';
// 引入语言包
import zh from '@/locale/zh-CN.json';
import en from '@/locale/en.json';

// 获取浏览器默认语言
let lang = navigator.appName === 'Netscape' ? navigator.language : navigator.userLanguage;
lang = lang.substr(0, 2); // 获取浏览器配置语言前两位
// 如果浏览器没缓存，则读取浏览器语言
if (!sessionStorage.getItem('LOCALE')) sessionStorage.setItem('LOCALE', lang === 'en' ? 'en' : 'zh');

console.log('当前浏览器语言：', lang);

// 生产环境不提示warning
Vue.config.productionTip = false;

// 使用ElementUI
Vue.use(ElementUI, { size: 'small' });
// 使用vuex
Vue.use(Vuex);

const store = new Vuex.Store();
Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', en);
Vue.i18n.add('zh', zh);
Vue.i18n.set(sessionStorage.getItem('LOCALE'));
console.log('Vue.i18n language：', Vue.i18n.locale());

// 判断是否登录并跳转
router.beforeEach((to, from, next) => {
    NProgress.start();
    if (Utils.getUser()) {
        if (to.path === "/login") {
            next({
                path: '/'
            });
        } else {
            next();
        }
    } else {
        if (to.name !== 'login') {
            next({
                path: '/login'
            });
        } else {
            next();
        }
    }
});
router.afterEach(() => {
    NProgress.done();
});

Axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

Axios.interceptors.response.use(function(res) {
    switch (res.status) {
    case (200 || 304):
        if (res.data.code === "user-not-login") {
            Utils.clearUser();
            vm.$alert('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                location.href = '/';
            }).catch();
        } else {
            return res.data;
        }
        break;
    default:
        return res;
    }
}, function(error) {
    vm.$message.error('未知错误');
    return Promise.resolve(error);
});

let addMethod = {
    $axios: Axios,
    $utils: Utils,
    $qs: querystring,
    $url: Url
};

Vue.prototype = Object.assign(Vue.prototype, addMethod);

let vm = new Vue({
    router,
    store,
    components: { App },
    template: '<App/>'
}).$mount('#app');
