<template>
	<div>
		3
		<!--<router-link to="/detail?selectID=3&id=1">去详情</router-link>-->
		<router-link to="/approvedetail?selectID=3&id=1">去详情</router-link>

		<!--<div>
			<input v-model="filterText" />
			<ul>
				<li v-for="item in products">
					<span>{{myfilter(item.name)}}</span>
				</li>
			</ul>
		</div>-->
		
		<div>
			<div id="box">
            <div class="search">
                <input type="text" class="searchBox" v-model="searchVal">
                <button class="btn">搜 索</button>
            </div>
            <table class="goodsheet">
                <!--<tr>
                    <th>商品名</th>
                    <th>单价
                        <span @click="orderFn('price', false)">↑</span>
                        <span @click="orderFn('price', true)">↓</span>
                    </th>
                    <th>销量
                        <span @click="orderFn('sales', false)">↑</span>
                        <span @click="orderFn('sales', true)">↓</span>
                    </th>
                </tr>-->
                <tr v-for='(item, key) in list' @click="showitem(item.name,item.price, item.sales)" :style="flag?'display:block':'display:none'">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.sales}}万</td>
                </tr>
            </table>
        </div>
		</div>
	</div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss">

</style>