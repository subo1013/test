<template>
    <div class="input_Target" >
		<label>{{_title}}</label>
		<div @click="click" class="Ipt">
			<input :type="_type" :placeholder="_placeholder" :disabled="_disabled" :value="value"  v-model="currentValue" />
			<!--:value="value"-->
		</div>
		
    </div>
</template>

<script src="./script.js">
    
</script>

<style lang="scss" src="./style.scss">

</style>