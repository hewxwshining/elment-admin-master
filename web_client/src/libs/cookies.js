import Cookies from 'js-cookie'
// cookie保存的天数
import config from "@/config"

export const TOKEN_KEY = 'token'

const {
	cookieExpires
} = config

export const setToken = (token) => {
	Cookies.set(TOKEN_KEY, token, {
		expires: cookieExpires
	})
}

export const getToken = () => {
	const token = Cookies.get(TOKEN_KEY)
	if (token) return token
	else return false
}