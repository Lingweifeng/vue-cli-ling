// 所有接口url列表
import impp from './impp';
import wms from '@/components/wms/url';
let commonPath = '';
export default {
    // 登录类型
    'loginType': commonPath + '/manage/userLogin/selectType',
    // 登录
    'login': commonPath + '/manage/login',
    // 登出
    'logout': commonPath + '/manage/logout',
    // 语言
    'lang': commonPath + '/manage/i18n/language',
    // 获取i18n语言包
    'i18n': commonPath + '/manage/i18n',
    // IMPP相关接口-->
    impp,
    // wms相关接口
    wms,
};
