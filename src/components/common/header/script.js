export default {
	props: [
		'selectID'
	],
	methods: {
		goBack() {
			
			
				this.$router.push('/home')
			
//			window.history.length > 1 ?
//				this.$router.go(-1) :
//				this.$router.push('/')

		}
	}
}