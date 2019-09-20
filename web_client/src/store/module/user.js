import {
	login,
	logout,
	getUserInfo
} from '@/api/user'

import {
	setToken,
	getToken
} from "@/libs/cookies"


export default {
	stete: {
		userName: "",
		userId: '',
		hasGetInfo: false,
		token: getToken()
	},
	mutations: {
		setUserId(state, id) {
			state.userId = id
		},
		setUserName(state, name) {
			state.userName = name
		},
		setToken(state, token) {
			state.token = token
			setToken(token)
		},
		setHasGetInfo(state, info) {
			state.hasGetInfo = info;
		}
	},
	actions: {
		handleLogin({
			state,
			commit
		}, {
			userName,
			password
		}) {
			userName = userName.trim()
			return new Promise((resolve, reject) => {
				let data = {
					userName,
					password
				}
				login(data).then((res) => {
					commit('setToken', res.Token);
					resolve();
				}).catch((err) => {
					reject(err)
				})
			})
		},

		getUserInfo({
			state,
			commit
		}) {
			return new Promise((resolve, reject) => {
				try {
					getUserInfo(state.token).then((res) => {
						commit("setUserName", res.name);
						commit("setUserId", res.user_id);
						commit("setHasGetInfo", true);
						resolve(res);
					}).catch((err) => {
						reject(err)
					})
				} catch (err) {
					reject(err)
				}
			})
		}
	}
}