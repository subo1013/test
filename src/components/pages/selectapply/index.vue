<template>
    <div class="select">
        <!--<cube-button @click="showFormatPicker" v-model="datetime">{{datetime}}</cube-button>-->
        
        <yd-button size="large" type="danger" @click.native="show4 = true">右侧弹出</yd-button>
        <yd-popup v-model="show4" position="right">
            <yd-button type="danger" style="margin: 30px;" @click.native="show4 = false">Close Right Popup</yd-button>
        </yd-popup>
        
        <yd-cell-item>
			<span slot="left">申请人</span>
			<span slot="right" @click="showPicker1">
				<input class="ospan" disabled="disabled" placeholder="请选择" v-model="tex1" />
			</span>

		</yd-cell-item>
		<div class="oipt" :style="Selectable?'bottom:8rem; transition: bottom .3s':'bottom: -0;'">
			<input type="text" placeholder="请输入目的地/始发地" v-model="SelectableVal"/>
		</div>
		
		<yd-cell-item>
			<span slot="left">跳转</span>
			<span slot="right" @click="tocheckplace">
				<input class="ospan" disabled="disabled" placeholder="跳转" />
			</span>

		</yd-cell-item>
    </div>
</template>

<script src="./script.js">
    
</script>
<style lang="scss" src="./style.scss">

</style>