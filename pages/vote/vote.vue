<template>
	<view class="">
		<view class="top-line"></view>
		<view class="page">
			<!-- <page-head :title="title"></page-head> -->
			<view style="height: 3px;"></view>
			<view class="uni-product-list">
				<view class="uni-product" v-for="(product,index) in productList" :key="index">
					<view class="bg_white">
						<view class="image-view">
							<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
						</view>
						<view class="uni-product-title">{{product.title}}</view>
						<view class="uni-product-price">
							<!-- <text class="uni-product-price-favour">￥{{product.originalPrice}}</text> -->
							<text class="uni-product-price-original">{{product.favourPrice}}</text>
							<!-- <text class="uni-product-tip">{{product.tip}}</text> -->
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<!-- <waterfall-flow :list="list" :loading="loading" @click="choose"></waterfall-flow> -->
		
		
		
	</view>
</template>

<script src="./vote.js"></script>

<style src="./vote.css"></style>