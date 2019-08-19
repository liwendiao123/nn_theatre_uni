<template>
	<view class="content">
		<view class="">
			<image :src="cover" mode="widthFix" class="image-section-right "></image>
		</view>
		<view class="detail">
			<view class="title">国际舞蹈大赛</view>
			
			<view class="summary">
				<image src="/static/location.png" mode="widthFix" class="icon"></image>
				<view class="des">南宁</view>
				<image src="/static/location.png" mode="widthFix" class="icon"></image>
				<view class="des">08/24 - 08/24</view>
			</view>
			<view class="summary">
				<image src="/static/location.png" mode="widthFix" class="icon"></image>
				<view class="des">55</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'news-item',
		props: {
			cover: {
				type: String,
				default:'/static/shuijiao.jpg',
			}
		},
		methods: {
		}
	}
</script>

<style>
	.content{
		padding: 15px;
		background-color: #fff;
		display: flex;
		
	}
	.image-section-right {
		margin-top: 10upx;
		margin-left: 10upx;
		margin-rigth: 10upx;
		width: 225upx;
		/* height: 146upx; */
	}
	
	.detail {
		margin-left: 10px;
		font-size: 9pt;
		color: #999;
	}
	.title{
		font-size: 11pt;
		color: #000;
		/* line-height: 25px; */
		margin-left: 3px;
		margin-bottom: 10px;
		
	}
	.icon{
		width: 20px;height:20px;
	}
	.des{
		display: inline-block;
	}
	.summary{
		display: flex;
		align-items: center;
		
	}
</style>
