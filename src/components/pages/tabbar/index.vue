<template>
    <ul>
       
		<router-link tag="li" v-for = " (item, index ) in tabList" :key = "index" :to="item.path">
		
			{{item.title}}
		
		</router-link>
        
    </ul>
</template>

<script src="./script.js">
	
</script>

<style lang="scss" src="./style.scss">
</style>
