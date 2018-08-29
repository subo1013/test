





import Vue from 'vue';
import home from '@/api/home.js'
import axios from 'axios'
import Picker from '@/components/common/timepicker/script.js'

export default {
	data() {
		return {
			selectID: '',
			
			col1Data1: [{
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
				},
				{
					text: '输入',
					value: '输入'
				}
			],
			show1: false,
			showtxt: '',
			tex1:''
		}
	},
	watch: {
		tex1(newval, oldval) {
			if(newval == '输入') {
				this.show1 = true,
					this.showtxt = ''
			}
		}
	},

	mounted() {
		this.selectID = this.$route.query
		
		
		this.picker = Picker.createPicker("申请人", [this.col1Data1], "tex1", "user_id",  this)
		
	},
	methods: {
		showPicker1() {
			this.picker.show()
//			this.show1 = true
		},
		
		showinfo() {
			this.tex1 = this.showtxt
			this.show1 = false;

		},
	}
}