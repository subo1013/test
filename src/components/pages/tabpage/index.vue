<template>
	<div>
		<v-header title="title"></v-header>

		<div class="tab_header">
		<!--<keep-alive>-->
			<v-tabbar></v-tabbar>
		<!--</keep-alive>-->
		</div>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>

	</div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss" scoped>

</style>