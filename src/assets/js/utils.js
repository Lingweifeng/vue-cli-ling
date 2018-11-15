export default {
    // 获取用户登陆信息
    getUser: () => {
        return JSON.parse(sessionStorage.getItem('MANEGE_USER_INFO'));
    },
    // 清除用户登陆信息
    clearUser: () => {
        sessionStorage.removeItem('MANEGE_USER_INFO');
    },
    GetQueryString: (url) => {
        let reg = new RegExp('(^|&)' + url + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
    },
    queryStringify(form) {
        let params = '';
        let formArr = Object.keys(form);
        formArr.forEach((key, index) => {
            params += key + '=' + form[key];
            if (index !== formArr.length - 1) params += '&';
        });
        return params;
    },
    // 滚动条到底部的距离
    getScrollBottomHeight: function() {
        return document.querySelector('html').scrollHeight - this.getScrollTop() - this.getWindowHeight();
    },
    // 滚动条顶 高度
    getScrollTop: function() {
        let scrollTop = 0;
        let bodyScrollTop = 0;
        let documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    },
    getWindowHeight: function() {
        let windowHeight = 0;
        if (document.compatMode === 'CSS1Compat') {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    },
    // 文本框聚焦
    inputFocus($el) {
        $el.focus();
        $el.select();
    },
    // 文本框聚焦
    inputBlur($el) {
        $el.blur();
    },
    // 设置cookie: this.$utils.setCookie('test', '1234', 1);
    // 删除cookie: this.$utils.setCookie('test', 1, -1);
    setCookie: function(name, value, days) {
        let oDate = new Date();
        oDate.setDate(oDate.getDate() + days);
        document.cookie = name + '=' + value + ';expires=' + oDate;
    },
    // 获取cookie: this.$utils.getCookie( 'test' );
    getCookie: function(name) {
        let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        let arr = document.cookie.match(reg);
        if (arr.length > 0) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    }
};

// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
Date.prototype.Format = function(fmt) {
    let o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)); }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length))); }
    }
    return fmt;
};
