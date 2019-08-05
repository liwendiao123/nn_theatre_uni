<template>
	<view class="page">
		<view class="img-view" v-if="!showSwiper">
			<image :src="imgUrls[0]"></image>
		</view>
		<swiper v-if="showSwiper" indicator-dots="true">
			<swiper-item v-for="(img,key) in imgUrls" :key="key">
				<image :src="img" />
			</swiper-item>
		</swiper>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<view>在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。</view>
				<view>在微信小程序端，导航栏始终为不透明样式。</view>
			</view>
			<!-- <view class="uni-title uni-common-mt">图片类型</view> -->
		</view>
	<!-- 	<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in items" :key="index">
					<view>{{item.name}}</view>
					<view>
						<radio :value="item.value" :checked="item.checked" />
					</view>
				</label>
			</radio-group>
		</view> -->
		<view style="height: 40upx;"></view>
		<view class="sign">
			<uni-button data-v-747ad799="" class="" type="primary">登陆</uni-button>
		</view>
		<view style="height: 100upx;"></view>
	</view>
</template>


<script src="./index.js"></script>

<style src="./index.css"></style>

