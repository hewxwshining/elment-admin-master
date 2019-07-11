export const forEach = (arr, fn) => {
	if (!arr.length || !fn) return
	let i = -1
	let len = arr.length
	while (++i < len) {
		let item = arr[i]
		fn(item, i, arr)
	}
}

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
	return targetarr.some(_ => arr.indexOf(_) > -1)
}

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
	const keysArr1 = Object.keys(obj1)
	const keysArr2 = Object.keys(obj2)
	if (!(Object.prototype.toString.call(obj1) == Object.prototype.toString.call(obj2))) {
		return false;
	}
	if (keysArr1.length !== keysArr2.length) return false
	else if (keysArr1.length === 0 && keysArr2.length === 0) return true
	/* eslint-disable-next-line */
	else return keysArr1.every(key => obj1[key] === obj2[key]);
}
/**
 * 比较两个时间大小
 * @param  {[type]} data1 [description]
 * @param  {[type]} data2 [description]
 * @return {[type]}       [data1> data2  = true or false]
 */
export const compareTime = (date1, date2) => {
	var oDate1 = new Date(date1);
	var oDate2 = new Date(date2);
	if (oDate1.getTime() > oDate2.getTime()) { //转换成毫秒进行比较
		return true;
	} else {
		return false;
	}
}

/**
  数组在属性A的基础上按属性B排序(默认从小到大排序)
  @param:prop1属性名称-A；
 @param: prop2属性名称-B；
 使用方式：arrayObj.sort(commonFun.arrayCompare(prop1,prop2);
  */
export const arrayCompare2 = (prop1, prop2) => {
	return function(obj1, obj2) {
		var a1 = obj1[prop1];
		var a2 = obj2[prop1];
		var b1 = obj1[prop2];
		var b2 = obj2[prop2];
		if (!isNaN(Number(a1)) && !isNaN(Number(a2))) {
			a1 = Number(a1);
			a2 = Number(a2);
		}
		if (!isNaN(Number(b1)) && !isNaN(Number(b2))) {
			b1 = Number(b1);
			b2 = Number(b2);
		}
		if (a1 == a2) {
			if (b1 < b2) {
				return -1
			} else if (b1 == b2) {
				return 0
			} else {
				return 1
			}
		} else if (a1 < a2) {
			return -1
		} else {
			return 1
		}
	}
}
/**
 * [throttle  节流函数，减少事件触发次数]
 * @type {[type]}
 */
export const throttle = (fn, delay) => {
	let last = 0,
		timer = null;
	return function() {
		let context = this,
			args = arguments,
			now = +new Date();
		if (now - last < delay) {
			clearTimeout(timer)
			timer = setTimeout(function() {
				last = now;
				fn.apply(context, args);
			}, delay)
		} else {
			last = now;
			fn.apply(context, args);
		}
	}
}