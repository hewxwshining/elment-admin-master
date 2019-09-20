import interfaces from './interfaces';
import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';
var vue = new Vue();


export const getUserInfo = (data) => {
	return new Promise((resolve, reject) => {
		let url = interfaces._user + '?toke =' + data;
		axios.get(url).then((res) => {
			resolve(res.data);
		}).catch((res) => {
			vue.$message({
				showClose: true,
				message: res,
				type: 'error'
			});
			reject(res);
		})
	})
}


export const login = (data) => {
	var loadingInstance = vue.$loading({
		"text": '正在提交数据，请稍后...'
	})
	return new Promise((resolve, reject) => {
		axios.post(interfaces._login, data).then((res) => {
			loadingInstance.close();
			resolve(res.data);
		}).catch((res) => {
			loadingInstance.close();
			vue.$message({
				showClose: true,
				message: res,
				type: 'error'
			});
			reject(res);
		})
	})
}

export const logout = () => {

}