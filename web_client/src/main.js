// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './common/css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import filter from './filters/filter'
import config from './config'

Vue.config.productionTip = false

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})