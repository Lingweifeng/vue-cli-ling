import basic from '@/components/impp/basic'; // 基础信息管理
import config from '@/components/impp/config';
import param from '@/components/impp/param';
import permission from '@/components/impp/permission';
import task from '@/components/impp/task';
import locale from '@/components/impp/locale';

const impp = () => import('@/components/impp/index/index'); // 主界面

export default [
    {
        path: '/impp',
        name: 'impp',
        component: impp,
        children: [
            ...basic,
            ...config,
            ...param,
            ...permission,
            ...task,
            ...locale
        ]
    },
];
