<template>
	<div>
		2
		<router-link :to="{ name: 'querydetail', params: {pipId: pipId} } ">去详情</router-link>

		<div id="app">
			<input type="text" v-model='search' />
			<ul v-for="item in searchData ">
				<li>{{item.name}},价格:￥{{item.price}}</li>
			</ul>
		</div>

	</div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss">

</style>