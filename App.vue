<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	
	// .uni-header-logo {
	// 	padding: 30upx;
	// 	text-align: center;
	// 	margin-top: 10upx;
	// }
	// 
	// .uni-header-logo image {
	// 	width: 140upx;
	// 	height: 140upx;
	// }
	// 
	// .uni-hello-text {
	// 	color: #7A7E83;
	// }
	// 
	// .uni-hello-addfile {
	// 	text-align: center;
	// 	line-height: 300upx;
	// 	background: #FFF;
	// 	padding: 50upx;
	// 	margin-top: 10px;
	// 	font-size: 38upx;
	// 	color: #808080;
	// }
	// /* #endif*/
	
	
	
	
	
	// 	/*每个页面公共css */
	// page {
	// 	min-height: 100%;
	// 	display: flex;
	// 	background-color: #ffffff;
	// }
	// 
	// /* #ifdef MP-BAIDU */
	// page {
	// 	width: 100%;
	// 	height: 100%;
	// 	display: block;
	// }
	// 
	// swan-template {
	// 	width: 100%;
	// 	min-height: 100%;
	// 	display: flex;
	// }
	// 
	// /* 原生组件模式下需要注意组件外部样式 */
	// custom-component {
	// 	width: 100%;
	// 	min-height: 100%;
	// 	display: flex;
	// }
	// 
	// /* #endif */
	// 
	// /* #ifdef MP-ALIPAY */
	// page {
	// 	min-height: 100vh;
	// }
	// 
	// /* #endif */
	// 
	// /* 原生组件模式下需要注意组件外部样式 */
	// m-input {
	// 	width: 100%;
	// 	min-height: 100%;
	// 	display: flex;
	// }
	// 
	// .content {
	// 	display: flex;
	// 	flex: 1;
	// 	flex-direction: column;
	// 	background-color: #efeff4;
	// 	/* padding: 20upx; */
	// }
	// 
	// .input-group {
	// 	background-color: #ffffff;
	// 	margin-top: 40upx;
	// 	position: relative;
	// }
	// 
	// .input-group::before {
	// 	position: absolute;
	// 	right: 0;
	// 	top: 0;
	// 	left: 0;
	// 	height: 1upx;
	// 	content: '';
	// 	-webkit-transform: scaleY(.5);
	// 	transform: scaleY(.5);
	// 	background-color: #c8c7cc;
	// }
	// 
	// .input-group::after {
	// 	position: absolute;
	// 	right: 0;
	// 	bottom: 0;
	// 	left: 0;
	// 	height: 1upx;
	// 	content: '';
	// 	-webkit-transform: scaleY(.5);
	// 	transform: scaleY(.5);
	// 	background-color: #c8c7cc;
	// }
	// 
	// .input-row {
	// 	display: flex;
	// 	flex-direction: row;
	// 	position: relative;
	// }
	// 
	// .input-row .title {
	// 	width: 20%;
	// 	height: 50upx;
	// 	min-height: 50upx;
	// 	padding: 15upx 0;
	// 	padding-left: 30upx;
	// 	line-height: 50upx;
	// }
	// 
	// .input-row.border::after {
	// 	position: absolute;
	// 	right: 0;
	// 	bottom: 0;
	// 	left: 15upx;
	// 	height: 1upx;
	// 	content: '';
	// 	-webkit-transform: scaleY(.5);
	// 	transform: scaleY(.5);
	// 	background-color: #c8c7cc;
	// }
	// 
	// .btn-row {
	// 	margin-top: 50upx;
	// 	padding: 20upx;
	// }
	// 
	// button.primary {
	// 	background-color: #0faeff;
	// }
</script>
<style>
	
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';

	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color:#f9f9f9;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	/*每个页面公共css */
	.container{
		/* background-color: #eeeeee; */
	}
	.component{
		margin-bottom: 20upx;
	}
	.flex_center{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.white{		background-color: #ffffff;	}
	.line_bottom{		border-bottom: 1rpx #E1E1E1 solid ;}
	.line_top{		border-top: 1rpx #E1E1E1 solid ;}
	.pd15{ padding: 15px;}
	
</style>
