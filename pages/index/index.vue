<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="name">
			sfd的萨达
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(this.$db.getName())
			console.log(this.$db.KEY_USER_INFO)
			uni.setStorageSync(this.$db.KEY_USER_INFO, 'hello');
			
			console.log(uni.getStorageSync(this.$db.KEY_USER_INFO))
			
			this.$db.login().then(res=> console.log(res))
			.catch(res => {
				console.log(res)				
			})
			console.log(this.getLike())
		},
		methods: {
			getLike(){return 555}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	
	.name{
		color:$uni-color-success;
		font-size: $uni-font-size-sm
	}
</style>
