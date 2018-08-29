<template>
	<div>
		<v-header :selectID="selectID"></v-header>
		approvedetail
		<!--<v-input title="申请人 :" type="text" placeholder="请选择" disabled="disabled" :click="showPicker" :value="msg" v-model="msg"></v-input>-->
		<!--  :value="msg"  -->

		<!--<v-input title="出发日期 :" type="text" placeholder="请选择" disabled="disabled" :click="showFormatPicker" :value="datetime" v-model="datetime">
			
		</v-input>
		-->

		<yd-cell-item>
			<span slot="left">申请人</span>
			<span slot="right" @click="showPicker1">
				<input class="ospan" disabled="disabled" v-model="tex1">
			</span>
		
		</yd-cell-item>
		<div class="oipt">
			请输入目的地：
			<input type="text" placeholder="请输入"/>
		</div>

		<yd-popup v-model="show1" position="center" width="90%">
			<div style="background-color:#fff;">
				<input type="text" placeholder="请输入" v-model="showtxt" />
				<p style="text-align: center;">
					<yd-button @click.native="showinfo">确定</yd-button>
				</p>
			</div>
		</yd-popup>

	</div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss">

</style>