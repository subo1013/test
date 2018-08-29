import Vue from 'vue'
import Router from 'vue-router'
import SelectApply from '@/components/pages/selectapply/index.vue'
import SelectQuery from '@/components/pages/selectquery/index.vue'
import SelectApprove from '@/components/pages/selectapprove/index.vue'
import Home from '@/components/pages/home/index.vue'
//import Detail from '@/components/pages/detail/index.vue'
import TabPage from '@/components/pages/tabpage/index.vue'
import QueryDetail from '@/components/pages/querydetail/index.vue'
import ApproveDetail from '@/components/pages/approvedetail/index.vue'
import CheckPlace from '@/components/pages/checkplace/index.vue'

Vue.use(Router)

const routes = [

	{
		path: '/',
		redirect: '/home',
		meta: {
			keepAlive: true, // 需要被缓存

		}

	},
	{
		path: '/tabpage',
		redirect: '/select1',
		meta: {
			keepAlive: true, // 需要被缓存

		}

	},
	{
		path: '/home',
		name: 'home',
		component: Home,
		meta: {
			keepAlive: true, // 需要被缓存

		}

	},
	//	{
	//		path: '/detail',
	//		name: 'detail',
	//		component: Detail
	//	},
	{
		path: '/checkplace',
		name: 'checkplace',
		component: CheckPlace,
		meta: {
			keepAlive: true, // 需要被缓存

		}

	},
	{
		path: '/querydetail/:pipId',
		name: 'querydetail',
		component: QueryDetail,
		meta: {
			keepAlive: true, // 需要被缓存

		}

	},
	{
		path: '/approvedetail',
		name: 'approvedetail',
		component: ApproveDetail,
		meta: {
			keepAlive: true, // 需要被缓存

		}

	},
	{
		path: '/tabpage',
		name: 'tabpage',
		component: TabPage,
		// tab页子路由
		children: [{
				path: '/select1',
				component: SelectApply,
				meta: {
					keepAlive: true, // 需要被缓存

				}

			},
			{
				path: '/select2',
				component: SelectQuery,
				meta: {
					keepAlive: true, // 需要被缓存

				}

			},
			{
				path: '/select3',
				component: SelectApprove,
				meta: {
					keepAlive: true, // 需要被缓存

				}

			},
		]
	}
]

// 创建路由实例
const router = new Router({
	routes
})

export default router