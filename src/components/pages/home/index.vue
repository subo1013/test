<template>
	<div>
		home
		<router-link to="/tabpage">
			to tabpage
		</router-link>

		<!--<div class="img"><img src="@/assets/images/img.jpg" alt="" /></div>-->

		<div @click="showcheck" style="width: 40px; text-align: center; height: 40px; line-height: 40px; border: 1px solid #000; border-radius: 50%;">
			选择
		</div>
		<div class="main">
			<div class="main_check" :style="dis?'display:none':'display:block'" >
				<input type="checkbox" v-model="arr" value="1"/>
			</div>

			<div class="detail_main">
				<div class="detail_top">
					<div class="detail_top_left">
						<h1>
						王海龙
					</h1>
						<p>
							总行人力资源部
						</p>
					</div>
					<div class="detail_top_right">
						详情
					</div>
				</div>
				<div class="detail_bottom">
					<div class="detail_bottom_top">
						11111
					</div>
					<div class="detail_bottom_bottom">
						2222
					</div>
				</div>
			</div>
		</div>
		
		<!--<div class="quxiao" :style="flag?'opacity:1':'opacity:0.5'" >-->
		<div class="quxiao">
			<span @click="cancel">返回</span>
			<span @click="confirm">审批</span>
		</div>
		<div class="mask" :style="dis2?'display:block':'display:none'" >
			
		</div>
		<yd-cell-item>
			<span slot="left">用车部门1</span>
			<span slot="right" @click="showFormatPicker11">
				<input   class="ospan" :disabled="disabled" v-model="datetime11">
			</span>
		</yd-cell-item>
		<yd-cell-item>
			<span slot="left">用车部门2</span>
			<span slot="right" @click="showFormatPicker22">
				<input   class="ospan" :disabled="disabled" v-model="datetime22">
			</span>
		</yd-cell-item>

		<yd-cell-item>
			<span slot="left">申请人</span>
			<span slot="right" @click="showPicker1">
				<input class="ospan" disabled="disabled" placeholder="请选择" v-model="tex1" :autofocus="autofocus"/>
			</span>

		</yd-cell-item>

		<yd-popup v-model="show1" position="center" width="90%">
			<div style="background-color:#fff;">
				<input type="text" placeholder="请输入申请人" v-model="showtxt" />
				<p style="text-align: center;">
					<yd-button @click.native="showinfo">确定</yd-button>
				</p>
			</div>
		</yd-popup>
		
		<br />
		
		<!--<cube-button @click="showDateTimePicker">Date Time Picker</cube-button>-->
		
		<div @click="showDatetTimePicker" style="width: 100%;">
			<span>申请时间：</span><input type="text" disabled="disabled" placeholder="选择申请日期" v-model="datetime1" style="width: 70%;"/>
		</div>
		<br />
		<div @click="showDatetPicker" style="width: 100%;">
			<span>查询时间：</span><input type="text" disabled="disabled" placeholder="选择查询日期" v-model="datetime2" style="width: 70%;"/>
		</div>
		
		<div style="width: 100px; height: 30px; background: skyblue; text-align: center;line-height: 30px;" @click="showconsole">console.log</div>
		
	</div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss">

</style>