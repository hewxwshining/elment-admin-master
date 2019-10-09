import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import {
	setToken,
	getToken
} from '@/libs/cookies'

import {
	canTurnTo,
	setTitle
} from '@/libs/util'

import config from '@/config'
const {
	homeName
} = config

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes
})
const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
	if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
	else next({
		replace: true,
		name: 'error_401'
	}) // 无权限，重定向到401页面
}

router.beforeEach((to, from, next) => {
	const token = getToken();

	if (!token && to.name !== LOGIN_PAGE_NAME) {
		next({
			name: LOGIN_PAGE_NAME
		})
	} else if (!token && to.name === LOGIN_PAGE_NAME) {
		next()
	} else if (token && to.name == LOGIN_PAGE_NAME) {
		next({
			name: homeName
		})
	} else {
		if (store.state.user.hasGetInfo) {
			turnTo(to, store.state.user.access, next)
		} else {
			store.dispatch('getUserInfo').then((user) => {
				turnTo(to, user.access, next)
			}).catch(() => {
				setToken('')
				next({
					name: 'login'
				})
			})
		}
	}
})

export default router