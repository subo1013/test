<template>
	<div class="detail_content_main">
		<!--<v-header :selectID="selectID"></v-header>-->
		<header class="querydetail_header">
			<span @click="goBack">
				返回
			</span>
		</header>
		
		<cube-button @click="showDatePicker">Date Picker</cube-button>
		<input type="text" v-model="datetime1"/>
		<br />
		<br />
		<cube-button @click="showDatePicker2">Date Picker</cube-button>
		<input type="text" v-model="datetime2"/>
		

	</div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss">

</style>