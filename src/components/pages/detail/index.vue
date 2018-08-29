<template>
	<div>
		<v-header :selectID="selectID"></v-header>
		detail
		<v-input title="申请人 :" type="text" placeholder="请选择" disabled="disabled" :click="showPicker" :value="msg" v-model="msg"></v-input>
		<!--  :value="msg"  -->
		
		<v-input title="出发日期 :" type="text" placeholder="请选择" disabled="disabled" :click="showFormatPicker" :value="datetime" v-model="datetime">
			
		</v-input>
		

	</div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss">

</style>