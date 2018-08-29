
export default {
	data() {
		return {
			selectID: '',
			col1Data : [
				{ text: 'A先生', value: 'A先生'}, 
				{ text: 'B先生', value: 'B先生' },
	 			{ text: 'C先生', value: 'C先生' },
	 			{ text: 'D先生', value: 'D先生' },
	 			{ text: 'E先生', value: 'E先生' },
	 			{ text: 'F先生', value: 'F先生' },
	 			{ text: 'G先生', value: 'G先生' },
	 			{ text: 'H先生', value: 'H先生' }
 			],
 			msg:'',
 			parentSelect: '',
 			datetime: ""
		}
	},
//	components: {
//		'v-header': Header
//	},
	mounted() {
//		console.log(this)
		// console.log(this.$router.history.current.query)
//		console.log(this.$route.query)
		this.selectID = this.$route.query

		this.picker = this.$createPicker({
			title: '申请人',
			data: [this.col1Data], // 这里写请求的数据列表
			onSelect: (selectedVal, selectedIndex, selectedText) => {
//				this.$createDialog({
//					type: 'warn',
//					content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/>
//          - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
//					icon: 'cubeic-alert'
//				}).show()
				this.msg = selectedVal
			},
			onCancel: () => {
//				this.$createToast({
//					type: 'correct',
//					txt: 'Picker canceled',
//					time: 1000
//				}).show()
			}
		})
	},
	watch : {

	},
	methods: {
		showPicker() {
			this.picker.show()
		},
		
		showFormatPicker() {
			if(!this.minuteStepPicker) {

				this.minuteStepPicker = this.$createTimePicker({
					minuteStep: {
						rule: 'ceil',
						step: 10,
					},
					day: {
						len: 31,
						format: 'M月d日'
					},
					showNow: false,
					swipeTime: 1000,
					onSelect: this.selectHandler,
					onCancel: this.cancelHandler
				})
			}
			this.minuteStepPicker.show()
		},
		selectHandler(selectedTime, selectedText, formatedTime) {
			this.$createDialog({
				type: 'warn',
				title: `selected time: ${selectedTime}`,
				content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
				icon: 'cubeic-alert'
			})
			this.datetime = selectedText;
			//console.log(selectedText);
		},
		cancelHandler() {
			this.$createToast({
				type: 'correct',
				txt: 'Picker canceled',
				time: 1000
			})
		}
	}
	
	
}