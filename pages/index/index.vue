<template>
	<view class="container">
		<view class="cover">
			<image class="cover_image" src="/static/shuijiao.jpg" mode="widthFix"></image>		
		</view>
		<view class="title">{{theme.title}}</view>
		<view class="summary">{{theme.summary}}</view>
		<view class="">
			<view style="height:5px"></view>
			<uni-list-item :show-arrow="false" :title="theme.date" thumb="/static/location.png" />
			<view style="height:2px"></view>
			<uni-list-item :show-arrow="true" :title="theme.address" thumb="/static/location.png" />
		</view>
		<button type="primary" class="btn" @click="sign">报名</button>
		
		<view style="height: 100upx;"></view>
	</view>
</template>


<script src="./index.js"></script>



<style lang="scss">
	page{
		background-color: #fff;
	}
	.btn{
		margin-top: 20px;
		background-color: $sys-color-base;
		color: #fff;
	}
</style>

<style src="./index.css"  ></style>

