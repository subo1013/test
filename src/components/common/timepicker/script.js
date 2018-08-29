export default {
	createPicker: (title, data, txt, id, a) => {

		return a.$createPicker({
			title,
			data, // 这里写请求的数据列表
			onSelect: (selectedVal, selectedIndex, selectedText) => {
				//console.log(selectedText)
				a.$data[txt] = selectedText[0];
				a.$data[id] = selectedVal[0];
				//				console.log(a.$data)
				//				a.$data.Selectable = false
				//				if(a.$data.SelectableVal !='' ){
				//					a.$data[txt] = a.$data.SelectableVal
				//				}
			},
			//			onCancel: () => {
			//				a.$data.Selectable = false
			//				
			//			}
		})
	},
	// 可输可选picker
	createSelectPicker: (title, data, txt, id, a) => {

		return a.$createPicker({
			title,
			data, // 这里写请求的数据列表
			onSelect: (selectedVal, selectedIndex, selectedText) => {
				//console.log(selectedText)
				a.$data[txt] = selectedText[0];
				a.$data[id] = selectedVal[0];
				//				console.log(a.$data)
				a.$data.Selectable = false
				if(a.$data.SelectableVal != '') {
					a.$data[txt] = a.$data.SelectableVal
				}
			},
			onCancel: () => {
				a.$data.Selectable = false

			}
		})
	},

	createTimePicker: (selectHandler, a) => {
		if(!a.minuteStepPicker) {

			a.minuteStepPicker = a.$createTimePicker({
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
				format: 'hh时mm分',

				onSelect: selectHandler
			})
		}
		a.minuteStepPicker.show()
	},

	// 选择年月日时分

	createDateTimePicker: (title, selectHandle, _this) => {
		if(!_this.dateTimePicker) {
			_this.dateTimePicker = _this.$createDatePicker({
				title,
				min: new Date(0, 0, 1, 0, 0),
				max: new Date(0, 11, 31, 23, 59),
				value: new Date(),
				columnCount: 4,
				startColumn: 'month',
				swipeTime: 500,
				format: {
					year: 'YYYY年',
					month: 'M月',
					date: 'D日',
					hour: 'hh点',
					minute: 'mm分',
					second: 'ss秒'
				},

				onSelect: selectHandle
			})
		}
		_this.dateTimePicker.show()
	},

	// 选择月日
	createDatePicker: (title, selectHandle, _this) => {
		if(!_this.datePicker) {
			_this.datePicker = _this.$createDatePicker({
				title,
				min: new Date(0, 0, 1),
				max: new Date(0, 11, 31),
				value: new Date(),
				startColumn: 'month',
				columnCount: 2,
				swipeTime: 500,
				format: {
					year: 'YYYY年',
					month: 'M月',
					date: 'D日',
					hour: 'hh时',
					minute: 'mm分',
					second: 'ss秒'
				},

				onSelect: selectHandle,
			})
		}

		_this.datePicker.show()
	},

	formatDate: function(date) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		var minute = date.getMinutes();
		minute = minute < 10 ? ('0' + minute) : minute;
//		var second = date.getSeconds();
//		second = minute < 10 ? ('0' + second) : second;
		return y + '-' + m + '-' + d + ' ' + h + ':' + minute ;
	}	

}