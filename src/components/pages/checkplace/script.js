
export default {
	methods:{
		goBack(){
			this.$router.go(-1)
		}
	},
	beforeRouteLeave(to, from, next) {
      if (to.path == "/select1") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
      next();
    }

	
}