import axios from 'axios';
export default {
	data() {
		return {
			tabList: []
		}
	},
	mounted ( ) {
		// axios.get
		var flag = true
		if ( flag ) { // 如果角色为1
			this.tabList = [{
				title: '申请',
				path: '/select1'
			}, {
				title: '查询',
				path: '/select2'
			}, {
				title: '审批',
				path: '/select3'
			}]
		} else { // 如果角色为2
			this.tabList = [{
				title: '申请',
				path: '/select1'
			}, {
				title: '查询',
				path: '/select2'
			}]
		}
	},

}
