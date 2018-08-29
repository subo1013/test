import Tools from '@/components/common/timepicker/script.js'
export default {
	data(){
		return{
			datetime1:'',
			datetime2:''
		}
	},
	methods: {
		goBack() {
			this.$router.go(-1)
		},

		showDatePicker() {
			if(!this.datePicker) {
				this.datePicker = this.$createDatePicker({
					title: 'Date Picker',
					min: new Date(2008, 7, 8),
					max: new Date(2020, 9, 20),
					value: new Date(),
					onSelect: this.selectHandle,
					onCancel: this.cancelHandle
				})
			}

			this.datePicker.show()
		},
		selectHandle(date, selectedVal, selectedText) {
			this.$createDialog({
				type: 'warn',
				content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
				icon: 'cubeic-alert'
			}).show()
			this.datetime1 = selectedText
		},
		showDatePicker2() {
			if(!this.datePicker) {
				this.datePicker = this.$createDatePicker({
					title: 'Date Picker',
					min: new Date(2008, 7, 8),
					max: new Date(2020, 9, 20),
					value: new Date(),
					onSelect: this.selectHandle2,
					onCancel: this.cancelHandle
				})
			}

			this.datePicker.show()
		},
		selectHandle2(date, selectedVal, selectedText) {
			this.$createDialog({
				type: 'warn',
				content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
				icon: 'cubeic-alert'
			}).show()
			this.datetime2= selectedText
		},
	}

}