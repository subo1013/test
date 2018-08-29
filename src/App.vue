<template>
	<div class="container">

		<div class="content">
			<!--<router-view></router-view>-->

			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</div>

	</div>
</template>

<script>
</script>

<style lang="scss">
	@import '@/lib/reset.scss';
</style>