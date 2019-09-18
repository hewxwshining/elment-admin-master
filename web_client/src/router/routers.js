const Main = (resolve) => {
	import ('@/components/main/index').then((module) => {
		resolve(module)
	})
}

const ParentView = (resolve) => {
	import ('@/components/parent-view/index').then((module) => {
		resolve(module)
	})
}
/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  breadCanTurnTo: false  设为true后在面包屑中可以跳转
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */
export default [{
	path: '/',
	name: '_home',
	redirect: '/home',
	component: Main,
	meta: {
		hideInBread: true,
		icon: 'icon-home',
		notCache: true,
		title: "主页"
	},
	children: [{
		path: '/home',
		name: 'home',
		meta: {
			title: "首页",
			notCache: true,
			icon: 'icon-home'
		},
		component: () =>
			import ('@/view/home/home')
	}, {
		path: '/home1',
		name: 'home1',
		meta: {
			title: "首页1",
			notCache: true,
			icon: 'icon-home'
		},
		component: () =>
			import ('@/view/home/home1')
	}, {
		path: '/home2',
		name: 'home2',
		meta: {
			title: "首页2",
			notCache: true,
			icon: 'icon-home'
		},
		component: () =>
			import ('@/view/home/home2')
	}]
}, {
	path: '/html',
	name: 'html',
	component: Main,
	meta: {
		icon: 'icon-html5',
		title: "HTML"
	},
	children: [{
		path: 'css',
		name: 'css',
		meta: {
			icon: 'icon-css3',
			title: 'CSS'
		},
		component: ParentView,
		children: [{
			path: 'filter_blend_mode',
			name: 'filter_blend_mode',
			meta: {
				icon: 'icon-detail',
				title: '滤镜与混合模式'
			},
			component: () =>
				import ('@/view/html/css/filter_blend_mode')
		}]
	}, {
		path: 'canvas',
		name: 'canvas',
		meta: {
			icon: 'icon-canvas',
			title: 'canvas'
		},
		component: ParentView,
		children: [{
			path: 'diy',
			name: 'canvas_diy',
			meta: {
				icon: 'icon-canvas',
				title: '自定义'
			},
			component: () =>
				import ('@/view/html/canvas/diy')
		}, {
			path: 'fabricjs',
			name: 'fabricjs',
			meta: {
				icon: 'icon-detail',
				title: 'fabricjs'
			},
			component: () =>
				import ('@/view/html/canvas/fabricjs')
		}]
	}]
}, {
	path: '/components',
	name: 'components',
	component: Main,
	meta: {
		icon: 'icon-detail',
		title: '组件'
	},
	children: [{
		path: 'grid',
		name: 'component-grid',
		meta: {
			icon: 'icon-detail',
			title: "栅格"
		},
		component: ParentView,
		children: [{
			path: 'speed-dial',
			name: "grid-speed-dial",
			meta: {
				icon: 'icon-detail',
				title: "九宫格"
			},
			component: () =>
				import ('@/view/components/grid/speed-dial')
		}, {
			path: 'mobile',
			name: 'grid-mobile',
			meta: {
				icon: 'icon-detail',
				title: "按移动端排列"
			},
			component: () =>
				import ('@/view/components/grid/mobile')
		}]

	}, {
		path: 'table',
		name: 'component-table',
		meta: {
			icon: 'icon-detail',
			title: '表格'
		},
		component: ParentView,
		children: [{
			path: "header",
			name: 'table-header',
			meta: {
				icon: 'icon-detail',
				title: '表头(filter)'
			},
			component: () =>
				import ('@/view/components/table/header')
		}, {
			path: "header2",
			name: 'table-header2',
			meta: {
				icon: 'icon-detail',
				title: '表头(render)'
			},
			component: () =>
				import ('@/view/components/table/header2')
		}]
	}, {
		path: 'scroll',
		name: 'component-scroll',
		meta: {
			icon: 'icon-detail',
			title: '下拉滚动',
		},
		component: () =>
			import ('@/view/components/scroll/scroll')
	}, {
		path: 'backTop',
		name: "component-backTop",
		meta: {
			icon: 'icon-detail',
			title: '返回顶部'
		},
		component: () =>
			import ('@/view/components/scroll/backTop')
	}]
}, {
	path: '/pages',
	name: 'pages',
	component: Main,
	meta: {
		icon: 'icon-package',
		title: '页面'
	},
	children: [{
		path: 'page1',
		name: 'page1',
		meta: {
			icon: 'icon-package',
			title: '页面1',
			beforeCloseName: 'before_close_normal'
		},
		component: () =>
			import ('@/view/pages/page1')
	}, {
		path: 'page2',
		name: 'page2',
		meta: {
			icon: 'icon-package',
			title: '页面2'
		},
		component: () =>
			import ('@/view/pages/page2')
	}, {
		path: 'page3',
		name: 'page3',
		meta: {
			icon: 'icon-package',
			title: '页面3'
		},
		component: () =>
			import ('@/view/pages/page3')
	}]
}, {
	path: '/layout',
	name: 'layout',
	meta: {
		icon: 'icon-zhankaicaidan',
		title: 'CSS创意与视觉表现'
	},
	component: Main,
	children: [{
		path: 'parallelogram',
		name: 'parallelogram',
		meta: {
			icon: 'icon-detail',
			title: '平行四边形'
		},
		component: () =>
			import ('@/view/layout/parallelogram.vue')
	}, {
		path: 'transparent-square',
		name: 'transparent-square',
		meta: {
			icon: 'icon-detail',
			title: '透明方格'
		},
		component: () =>
			import ('@/view/layout/transparent-square.vue')

	}, {
		path: 'hollow',
		name: 'hollow',
		meta: {
			icon: 'icon-detail',
			title: '镂空'
		},
		component: () =>
			import ('@/view/layout/hollow.vue')
	}, {
		path: 'pie',
		name: 'pie',
		meta: {
			icon: 'icon-detail',
			title: '饼图'
		},
		component: () =>
			import ('@/view/layout/pie.vue')
	}]
}, {
	path: '/multilevel',
	name: 'multilevel',
	meta: {
		icon: 'icon-zhankaicaidan',
		title: '多级菜单'
	},
	component: Main,
	children: [{
		path: 'level_1',
		name: 'level_1',
		meta: {
			icon: 'icon-detail',
			title: '级_1'
		},
		component: () =>
			import ('@/view/multilevel/level1.vue')
	}, {
		path: 'level_2',
		name: 'level_2',
		meta: {
			// access: ['super_admin'],
			icon: 'icon-detail',
			// showAlways: true,
			title: '级_2'
		},
		component: ParentView,
		children: [{
			path: 'level_2_1',
			name: 'level_2_1',
			meta: {
				icon: 'icon-detail',
				title: '二级_2_1'
			},
			component: () =>
				import ('@/view/multilevel/level-2/level-2-1.vue')
		}, {
			path: 'level_2_2',
			name: 'level_2_2',
			meta: {
				icon: 'icon-detail',
				title: '二级_2_2'
			},
			component: () =>
				import ('@/view/multilevel/level-2/level-2-1.vue')
		}]
	}, {
		path: 'level_3',
		name: 'level_3',
		meta: {
			icon: 'icon-detail',
			title: '级_3'
		},
		component: () =>
			import ('@/view/multilevel/level1.vue')
	}, {
		path: 'level_4',
		name: 'level_4',
		meta: {
			icon: 'icon-detail',
			title: '级_4'
		},
		component: ParentView,
		children: [{
			path: 'level_4_1',
			name: 'level_4_1',
			meta: {
				icon: 'icon-detail',
				title: '四级_1_1'
			},
			component: () =>
				import ('@/view/multilevel/level-2/level-2-1.vue')
		}]
	}]
}, {
	path: '*',
	name: 'error_404',
	meta: {
		hideInMenu: true
	},
	component: () =>
		import ('@/view/error-page/404.vue')
}]