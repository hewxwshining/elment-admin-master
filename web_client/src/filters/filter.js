import Vue from 'vue'
import moment from 'moment'

/**
 * [定义一个全局过滤器实现日期格式化]
 * @param  {[type]} 'datafmt' [description]
 * @param  {[type]} (input,   fmtString     [description]
 * @return {[type]}           [description]
 * 使用：{{"2019-05-05T17:11:04.879968+08:00"|datafmt}}
 */
Vue.filter('datafmt', (input, fmtString) => {
	return moment(input).format(fmtString || 'YYYY-MM-DD HH:mm:ss');
})