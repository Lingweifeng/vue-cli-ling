// menu
import imppNav from './impp-nav.json';
import wmsNav from './wms-nav.json';
// 语言类型
import lang from './languge-list.json';
// 横向树
import vueOrgTree from './vue-org-tree.json';

// Mockjs拦截请求
let Mock = require('mockjs');

// 是否启用mock
let isMock = {
    login: true, // 登录
    logout: false, // 登出
    lang: false, // 选择语言类型
    imppNav: true, // IMPP导航
    wmsNav: true, // wms导航
    vueOrgTree: false, // 横向树
};

// 选择登录类型
if (isMock.selectType) Mock.mock(/selectType/, {"code": "success", "data": [{"eCodeType": null, "eCode": "USERNAME", "eCodeText": "用户名", "displayOrdinal": 0, "lockFlag": 0}, {"eCodeType": "LOGINTYPE", "eCode": "JOBNUM", "eCodeText": "工号", "displayOrdinal": 1, "lockFlag": 0}, {"eCodeType": "LOGINTYPE", "eCode": "CARDNUM", "eCodeText": "卡号", "displayOrdinal": 2, "lockFlag": 0}, {"eCodeType": "LOGINTYPE", "eCode": "ADDOMAIN", "eCodeText": "域账号", "displayOrdinal": 3, "lockFlag": 0}], "message": "API调用成功"});

// 登录
if (isMock.login) Mock.mock(/login/, {"success": true, "resultObject": {"user": "aaaa", "userInfo": "bbbbb", "userCode": "SA", "userName": "系统管理员", "siteCode": "1001", "languageCode": "zh", "loginType": "client"}, "message": "API调用成功"});

// 登出
if (isMock.logout) {
    Mock.mock(/logout/, {
        "code": "success",
        "data": true,
        "message": "API调用成功"
    });
}

// IMPP导航菜单
if (isMock.imppNav) Mock.mock(/impp\/nav/, imppNav);

// WMS导航菜单
if (isMock.wmsNav) Mock.mock(/wms\/nav/, wmsNav);

// 横向树
if (isMock.vueOrgTree) Mock.mock(/sys-menu\/list/, vueOrgTree);

// 语言
if (isMock.lang) Mock.mock(/sys-locale-language\/list/, lang);
