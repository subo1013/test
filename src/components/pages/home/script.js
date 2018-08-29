import Vue from 'vue';
import home from '@/api/home.js'
import axios from 'axios'
import Picker from '@/components/common/timepicker/script.js'

export default {
	data() {
		return {
			flag: false,
			datetime11: '请选择',
			datetime22: '请选择',
			disabled: true,
			col1Data1: [
				{
					text: '输入',
					value: '输入'
				},
				{
					text: 'A先生',
					value: '1'
				},
				{
					text: 'B先生',
					value: '2'
				},
				{
					text: 'C先生',
					value: '3'
				},
				{
					text: 'D先生',
					value: '4'
				},
				{
					text: 'E先生',
					value: '5'
				},
				{
					text: 'F先生',
					value: '6'
				},
				{
					text: 'G先生',
					value: '7'
				},
				{
					text: 'H先生',
					value: '8'
				}
			],
			tex1: '请选择',
			show1: false,
			showtxt: '',
			dis: true,
			dis2: true,
			arr: [],
			falg: false,
			datetime1: '',
			datetime2: '',
			placeholder: '',
			autofocus: false
		}
	},
	watch: {
		//		datetime(newval, oldval){
		//			if(newval == '8月19日 16点:30分'){
		//				this.disabled = false
		//			}
		//		}
		arr(newval, oldval) {
			if(newval.length > 0) {
				this.flag = true
				this.dis2 = false
			} else {
				this.flag = false
				this.dis2 = true
			}
		},
		dis(newval, oldval) {
			if(this.dis == true) {
				this.arr = []
			}
		},
		tex1(newval, oldval) {
			if(newval == '输入') {
				this.disabled = false
				this.show1 = true,
					this.showtxt = ''
//				this.tex1 = ''
//				this.placeholder = '请输入申请人'
//				this.autofocus = true
			}
		}
	},

	mounted() {
		//		home.getDate((res) => {
		////			console.log(res.data)
		//		})
		//		var b = encodeURIComponent('/v2/movie/top250?start=50&count=50')
		//		console.log(b)
		//		
		//		axios.get('/api' + b)
		//			.then((res)=>{
		//				console.log(res.data)
		//		
		//			})
		//			.catch(err => console.log(err))
		this.picker = Picker.createPicker("申请人", [this.col1Data1], "tex1", "user_id", this)

//		setCookie: function(cname, cvalue, exdays) {
//				var d = new Date();
//				d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//				var expires = "expires=" + d.toUTCString();
//				console.info(cname + "=" + '111' + "; " + expires);
//				document.cookie = cname + "=" + cvalue + "; " + expires;
//			},
//			//获取cookie
//			getCookie: function(cname) {
//				var arr, reg = new RegExp("(^| )" + cname + "=([^;]*)(;|$)");
//				if(arr = document.cookie.match(reg))
//					return(arr[2]);
//				else
//					return null;
//
//			},

	},
	methods: {
		showPicker1() {
			this.picker.show()
		},
		changechecked() {

		},

		showFormatPicker11() {
			Picker.createTimePicker(this.selectHandler11, this)
		},
		selectHandler11(selectedTime, selectedText, formatedTime) {
			this.datetime11 = selectedText;
		},
		showFormatPicker22() {
			Picker.createTimePicker(this.selectHandler22, this)
		},
		selectHandler22(selectedTime, selectedText, formatedTime) {
			this.datetime22 = selectedText;
		},
		showinfo() {
			this.tex1 = this.showtxt
			this.show1 = false;

		},
		showcheck() {
			this.dis = !this.dis
		},
		cancel() {
			this.arr = []
			this.dis = true
		},
		confirm() {

		},

		// 只选择月日不选择时间
		showDatetPicker() {
			Picker.createDatePicker('查询时间', this.selectHandler2, this)
		},

		selectHandler2(date, selectedVal, selectedText) {
			this.datetime2 = selectedText.join('');
			console.log(selectedText)

		},

		// 选择月日时分
		showDatetTimePicker() {
			Picker.createDateTimePicker('出发时间', this.selectHandler1, this)
		},
		selectHandler1(data, selectedVal, selectedText) {
//			this.datetime1 = selectedText.join('');
			this.datetime1 = Picker.formatDate(data)
		},
		showconsole() {
			var _id = this.$data.user_id
			console.log(_id)
		},

	},

	updated() {
		//		console.log(this.$data.id1)
	},

	directives: {
		focus: {
			// 指令的定义
			inserted: function(el) {
				el.focus()
			}
		}
	},
	//	directives: {
	//		focus: function(el) {
	//			el.focus();
	//		}
	//	}

	//	beforeRouteLeave( to, from, next ){
	//		if ( to.path === '/tabpage') {
	////			axios请求
	//			if ( res.code == 0 ) {
	//				tost('没权限')
	//			} else {
	//				next()
	//			}
	//		} else {
	//			next()
	//		}
	//	}

}