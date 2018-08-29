import axios from 'axios'
//import Vue from 'vue';
import { Alert } from 'vue-ydui/dist/lib.rem/dialog';
export default {
	data() {
		return {
			//			products: [{
			//					name: '香蕉',
			//					price: 15,
			//					category: "水果"
			//				},
			//				{
			//					name: '菠萝',
			//					price: 65,
			//					category: "水果"
			//				},
			//				{
			//					name: '椅子',
			//					price: 15,
			//					category: "生活"
			//				},
			//				{
			//					name: '桌子',
			//					price: 25,
			//					category: "生活"
			//				}
			//			],
			//			filterText: "",

			goodsList: [
				//假数据
				{
					name: "三星Galaxy Note8",
					price: 5200,
					sales: 2.6
				},
				{
					name: "iphone5s",
					price: 2500,
					sales: 2.2
				},
				{
					name: "iphone6",
					price: 2800,
					sales: 1.6
				},
				{
					name: "iphone6s",
					price: 3200,
					sales: 2.9
				},
				{
					name: "iphone7",
					price: 3800,
					sales: 12.6
				},
				{
					name: "iphone7plus",
					price: 4200,
					sales: 2.1
				},
				{
					name: "iphone8",
					price: 5500,
					sales: 10.6
				},
				{
					name: "华为",
					price: 4600,
					sales: 7.6
				},
				{
					name: "小米",
					price: 1200,
					sales: 32.6
				},
				{
					name: "OPPOR11",
					price: 3000,
					sales: 1.2
				},
				{
					name: "vivoX20",
					price: 3250,
					sales: 2.9
				}
			],
			searchVal: '', //默认输入为空
			letter: '', //默认不排序
			original: false,//默认从小到大排列
			flag:false
		};
	},
	methods: { 
		//		myfilter(value) {
		//			if(value.indexOf(this.filterText) > -1) {
		//				 //js的语法
		//				return value
		//			}
		//		},

//		orderFn(letter, original) {
//			this.letter = letter; //排序字段 price or sales 
//			this.original = original; //排序方式  up or down
//		},
		showitem(name, price, sales){
			this.searchVal = name
			Alert({ /* 参数 */ mes: '消息一出，休想滚动屏幕[移动终端]！'});
			
		}
	},
	computed: {
		list: function() {
			var _this = this;
			//逻辑-->根据input的value值筛选goodsList中的数据
			var arrByZM = []; //声明一个空数组来存放数据
			for(var i = 0; i < this.goodsList.length; i++) {
				//for循环数据中的每一项（根据name值）
				if(this.goodsList[i].name.search(this.searchVal) != -1) {
					//判断输入框中的值是否可以匹配到数据，如果匹配成功
					arrByZM.push(this.goodsList[i]);
					//向空数组中添加数据
				}
			}
			//逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
			//判断，如果要letter不为空，说明要进行排序
//			if(this.letter != '') {
//				arrByZM.sort(function(a, b) {
//					if(_this.original) {
//						return b[_this.letter] - a[_this.letter];
//					} else {
//						return a[_this.letter] - b[_this.letter];
//					}
//				});
//			}
			//一定要记得返回筛选后的数据
			return arrByZM;
		}
	},
	watch:{
		searchVal( newval, oldval ){
			if(newval != '') {
				this.flag = true
			} else {
				this.flag = false
			}
		}
	}
}