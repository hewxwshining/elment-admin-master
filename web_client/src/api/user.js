import interfaces from './interfaces';
import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';
var vue = new Vue();


export const userInfo = () => {
	return new Promise((resolve, reject) => {
		axios.get(interfaces._user).then((res) => {
			resolve(res.data.data);
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
		axios.post(instances._login, data).then((res) => {
			loadingInstance.close();
			resolve(res.data.data);
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