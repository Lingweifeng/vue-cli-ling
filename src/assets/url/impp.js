// IMPP接口url列表
let commonPath = '';
export default {
    // 导航菜单
    navData: commonPath + '/manage/impp/nav',
    position: {
        findAll: commonPath + '/position/find-position-all'
    },
    comm: {
        login: '/auth/login',
        updatePassword: '/sys-user/update-password',
        findMenuTree: '/auth/find-menu-tree',
    },
    enum: {
        // 功能类型
        methodLevel: commonPath + '/enum/method-level',
        // 数据功能状态
        dataStatus: commonPath + '/enum/data-status',
        // 组织类型
        organizeType: commonPath + '/enum/organize-type',
        // 任务类型
        taskMethodType: commonPath + '/enum/task-method-type',
        // 用户账号状态
        userStatus: commonPath + '/enum/user-status',
        // 用户类型
        userType: commonPath + '/enum/user-type',
        // 日志等级
        logLevel: commonPath + '/enum/log-level',
        // 软件类型
        softType: commonPath + '/enum/soft-type',
        // 日志等级
        operateType: commonPath + '/enum/operate-type',
        // 用户消息状态
        userMessageStatus: commonPath + '/enum/user-message-status',
        // 用户消息类型
        userMessageType: commonPath + '/enum/user-message-type',
        // 硬件连接类型
        toolConnType: commonPath + '/enum/tool-conn-type',
        // 硬件数据类型
        toolDataType: commonPath + '/enum//tool-data-type',
        // 系统参数类型
        sysConfigType: commonPath + '/enum/sys-config-type',
        // 系统资源类型
        sysLocaleResourceType: commonPath + '/enum/sys-locale-resource-type',
        // 用户性别类型
        userSex: commonPath + '/enum/user-sex',
        // 用户状态类型
        userInfoStatus: commonPath + '/enum/user-info-status'
    },
    basic: {
        organize: {
            list: commonPath + '/organize/list',
            insert: commonPath + '/organize/insert',
            get: commonPath + '/organize/get/',
            delete: commonPath + '/organize/delete',
            status: commonPath + '/organize/status',
            update: commonPath + '/organize/update',
            tree: commonPath + '/tree/organize/list',
            query: commonPath + '/organize/query',
            batchDelete: commonPath + '/organize/batch-delete',
        },
        department: {
            list: commonPath + '/department/list',
            insert: commonPath + '/department/insert',
            get: commonPath + '/department/get/',
            delete: commonPath + '/department/delete',
            status: commonPath + '/department/status',
            update: commonPath + '/department/update',
            tree: commonPath + '/tree/department/list',
            query: commonPath + '/department/query',
            batchDelete: commonPath + '/department/batch-delete',
        },
        position: {
            list: commonPath + '/position/list',
            insert: commonPath + '/position/insert',
            update: commonPath + '/position/update',
            delete: commonPath + '/position/delete',
            get: commonPath + '/position/get',
            query: commonPath + '/position/query',
            batchDelete: commonPath + '/position/batch-delete',
            tree: commonPath + '/tree/position/list',
        }
    },
    config: {
        config: {
            list: commonPath + '/sys-config/list',
            insert: commonPath + '/sys-config/insert',
            get: commonPath + '/sys-config/get/',
            delete: commonPath + '/sys-config/delete',
            status: commonPath + '/sys-config/status',
            update: commonPath + '/sys-config/update',
            query: commonPath + '/sys-config/query'
        }
    },
    system: {
        logOperate: {
            list: commonPath + '/log-operate/list',
            insert: commonPath + '/log-operate/insert',
            get: commonPath + '/log-operate/get/',
            delete: commonPath + '/log-operate/delete',
            status: commonPath + '/log-operate/status',
            update: commonPath + '/log-operate/update',
            query: commonPath + '/log-operate/query'
        },
        logSystem: {
            list: commonPath + '/log-system/list',
            insert: commonPath + '/log-system/insert',
            get: commonPath + '/log-system/get/',
            delete: commonPath + '/log-system/delete',
            status: commonPath + '/log-system/status',
            update: commonPath + '/log-system/update',
            query: commonPath + '/log-system/query'
        },
        message: {
            list: commonPath + '/sys-message/list',
            insert: commonPath + '/sys-message/insert',
            get: commonPath + '/sys-message/get/',
            delete: commonPath + '/sys-message/delete',
            status: commonPath + '/sys-message/status',
            update: commonPath + '/sys-message/update',
            query: commonPath + '/sys-message/query',
            batchDelete: commonPath + '/sys-message/batch-delete',
            batchStatus: commonPath + '/sys-message/batch-status',
        },
        tool: {
            list: commonPath + '/tool/list',
            insert: commonPath + '/tool/insert',
            get: commonPath + '/tool/get/',
            delete: commonPath + '/tool/delete',
            status: commonPath + '/tool/status',
            update: commonPath + '/tool/update',
            query: commonPath + '/tool/query',
            batchDelete: commonPath + '/tool/batch-delete',
            batchStatus: commonPath + '/tool/batch-status',
        },
        toolType: {
            list: commonPath + '/tool-type/list',
            insert: commonPath + '/tool-type/insert',
            get: commonPath + '/tool-type/get/',
            delete: commonPath + '/tool-type/delete',
            status: commonPath + '/tool-type/status',
            update: commonPath + '/tool-type/update',
            query: commonPath + '/tool-type/query',
            batchDelete: commonPath + '/tool-type/batch-delete',
        },
        file: {
            list: commonPath + '/sys-file/list',
            insert: commonPath + '/sys-file/insert',
            get: commonPath + '/sys-file/get/',
            delete: commonPath + '/sys-file/delete',
            status: commonPath + '/sys-file/status',
            update: commonPath + '/sys-file/update',
            query: commonPath + '/sys-file/query',
            batchDelete: commonPath + '/sys-file/batch-delete',
        },
        dictionary: {
            list: commonPath + '/sys-dictionary/list',
            insert: commonPath + '/sys-dictionary/insert',
            get: commonPath + '/sys-dictionary/get/',
            delete: commonPath + '/sys-dictionary/delete',
            update: commonPath + '/sys-dictionary/update',
            query: commonPath + '/sys-dictionary/query',
            findTop: commonPath + '/sys-dictionary/find/top',
            findCode: commonPath + '/sys-dictionary/find',
            batchDelete: commonPath + '/sys-dictionary/batch-delete',
        },
    },
    permission: {
        menu: {
            list: commonPath + '/sys-menu/list',
            insert: commonPath + '/sys-menu/insert',
            get: commonPath + '/sys-menu/get/',
            delete: commonPath + '/sys-menu/delete',
            status: commonPath + '/sys-menu/status',
            update: commonPath + '/sys-menu/update',
            tree: commonPath + '/tree/sys-menu/list',
            query: commonPath + '/sys-menu/query',
            batchStatus: commonPath + '/sys-menu/batch-status',
            batchDelete: commonPath + '/sys-menu/batch-delete',
        },
        role: {
            list: commonPath + '/sys-role/list',
            insert: commonPath + '/sys-role/insert',
            get: commonPath + '/sys-role/get/',
            delete: commonPath + '/sys-role/delete',
            status: commonPath + '/sys-role/status',
            update: commonPath + '/sys-role/update',
            query: commonPath + '/sys-role/query',
            refInsert: commonPath + '/sys-role/ref-menu/insert',
            refBatchInsert: commonPath + '/sys-role/ref-menu/batch-insert',
            batchStatus: commonPath + '/sys-role/batch-status',
            findRefMenu: commonPath + '/sys-role/find-ref-menu',
            batchDelete: commonPath + '/sys-role/batch-delete',
        },
        user: {
            list: commonPath + '/sys-user/list',
            insert: commonPath + '/sys-user/insert',
            get: commonPath + '/sys-user/get/',
            delete: commonPath + '/sys-user/delete',
            status: commonPath + '/sys-user/status',
            update: commonPath + '/sys-user/update',
            query: commonPath + '/sys-user/query-user-by-pager',
            batchDelete: commonPath + '/sys-user/batch-delete',
            batchStatus: commonPath + '/sys-user/batch-status',
            findRefRole: commonPath + '/sys-user/find-ref-role',
        },
        userInfo: {
            insert: commonPath + '/sys-user-info/insert',
            update: commonPath + '/sys-user-info/update',
            get: commonPath + '/sys-user-info/get',
            delete: commonPath + '/sys-user-info/delete',
            query: commonPath + '/sys-user-info/query',
            batchDelete: commonPath + '/sys-user-info/batch-delete',
        }
    },
    task: {
            expression: {
            list: commonPath + '/task-time-expression/list',
            insert: commonPath + '/task-time-expression/insert',
            get: commonPath + '/task-time-expression/get/',
            delete: commonPath + '/task-time-expression/delete',
            status: commonPath + '/task-time-expression/status',
            update: commonPath + '/task-time-expression/update',
            query: commonPath + '/task-time-expression/query',
            batchDelete: commonPath + '/task-time-expression/batch-delete'
        },
        task: {
            list: commonPath + '/task-time/list',
            insert: commonPath + '/task-time/insert',
            get: commonPath + '/task-time/get/',
            delete: commonPath + '/task-time/delete',
            status: commonPath + '/task-time/status',
            update: commonPath + '/task-time/update',
            query: commonPath + '/task-time/query',
            batchDelete: commonPath + '/task-time/batch-delete',
            batchStatus: commonPath + '/task-time/batch-status',
        }
    },
    locale: {
        language: {
            list: commonPath + '/sys-locale-language/list',
            insert: commonPath + '/sys-locale-language/insert',
            get: commonPath + '/sys-locale-language/get/',
            delete: commonPath + '/sys-locale-language/delete',
            update: commonPath + '/sys-locale-language/update',
            query: commonPath + '/sys-locale-language/query',
            batchDelete: commonPath + '/sys-locale-language/batch-delete',
            default: commonPath + '/sys-locale-language/default'
        },
        resource: {
            list: commonPath + '/sys-locale-resource/list',
            insert: commonPath + '/sys-locale-resource/insert',
            get: commonPath + '/sys-locale-resource/get/',
            delete: commonPath + '/sys-locale-resource/delete',
            update: commonPath + '/sys-locale-resource/update',
            query: commonPath + '/sys-locale-resource/query',
            batchDelete: commonPath + '/sys-locale-resource/batch-delete'
        }
    }
};
