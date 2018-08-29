export default {
	data() {
		return {
		
		}
	},
	props: [
		'title',
		'type',
		'placeholder',
		'disabled',
		'value',
		'click'
	],
	mounted() {
		//		console.log(this.click)
	},
	computed: {
		_title() {
			if(this.title) {
				return this.title
			} else {
				return ''
			}
		},
		_type() {
			if(this.type) {
				return this.type
			} else {
				return ''
			}
		},
		_placeholder() {
			if(this.placeholder) {
				return this.placeholder
			} else {
				return ''
			}
		},
		_disabled() {
			if(this.disabled) {
				return this.disabled
			} else {
				return ''
			}
		},
		_value() {
			if(this.value) {
				return this.value
			} else {
				return ''
			}
		},
		currentValue: {
			// 动态计算currentValue的值
			get: function() {
				return this.value; // 将props中的value赋值给currentValue
			},
			set: function(val) {
				this.$emit('input', val); // 通过$emit触发父组件
			}
		}

	},
	methods: {

	}
}