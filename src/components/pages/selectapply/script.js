//import { TimePicker } from 'cube-ui'
import Vue from 'vue';
import home from '@/api/home.js'
import axios from 'axios'
import Picker from '@/components/common/timepicker/script.js'
export default {
	data() {
		return {
			show4: false,
			col1Data1: [
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
			tex1: '',
			Selectable: false,
			SelectableVal: ''
		}
	},
	mounted() {
		this.picker = Picker.createSelectPicker('请输入或选择一个始发地/目的地', [this.col1Data1], 'tex1', 'user_id', this)
	},
	methods: {
		showPicker1() {
			this.picker.show()
			this.Selectable = true
			this.SelectableVal = ''
		},
		tocheckplace() {
			this.$router.push('/checkplace')
		}
	},
	watch: {
//		tex2(newval, oldval) {
//			console.log('new--' + newval)
//			console.log('old--' + oldval)
//			if(newval != '' ) {
//				this.tex1 = newval
//			} 
//		}
	}

}