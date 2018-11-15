'use strict'
// 跨域请求设置，可配置多个
module.exports = {
    table: [
    	{
		 	context: [ '/manage' ],
		    target: 'http://172.21.80.164:8051', // new(MES测服)
		    changeOrigin: true
		},
    	{
		    context: [ '/restful' ],
		    target: 'http://10.34.36.86:9251',
		    changeOrigin: true
		},
		{
		    context: [ '/' ],
		    target: 'http://192.168.1.211:8080',
		    changeOrigin: true
		}
    ],
    // 本地配置ip访问（手机可通过IP访问），需要修改成本地Ip地址
    localhost: 'localhost'
}