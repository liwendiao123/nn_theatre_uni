<template>
	<view class="content">
		<view class="top-line"></view>
		<view class="header">
			<image src="../../static/kitty-PersonalCenter/shezhi.png" mode="" class="setting-btn"></image>
			<view class="uni-flex uni-row" style="align-items: center;">
				<view class="img-profile"><image :src="user.profile" mode=""></image></view>
				<view>
					<view class="nikename">
						<view class="username">
							{{ user.nickname }}
						</view>
						<view class="usertag">{{ user.level }}</view>
					</view>
					<view class="uni-flex uni-row">
						<view class="usertag" v-for="tag in user.tags">{{ tag }}</view>
					</view>
				</view>
			</view>
		</view>
<!--		<view class="card-item">
			<view class="card-item-content uni-flex uni-row">
				<view v-for="( item, index ) in orderList" :key="index">
					<view class="icon-wrap">
						<image :src="'../../static/kitty-PersonalCenter/' + item.icon + '.png'" mode=""></image>
						<view class="badge" v-if="item.padge > 0">{{ item.padge }}</view>
					</view>
					<view>{{ item.text }}</view>
				</view>
				<view>
					<view class="icon-wrap">
						<image src="../../static/kitty-PersonalCenter/dingdan.png" mode=""></image>
					</view>
					<view>我的订单</view>
				</view>
			</view>
		</view>
		<view class="card-item">
			<view class="card-item-content uni-flex uni-row">
				<view v-for="( item, index ) in pocketList" :key="index">
					<view class="text-bold">{{ item.count }}</view>
					<view>{{ item.text }}</view>
				</view>
				<view>
					<view class="icon-wrap">
						<image src="../../static/kitty-PersonalCenter/kabao.png" mode=""></image>
					</view>
					<view>我的钱包</view>
				</view>
			</view>
		</view>
 		<view class="card-item">
			<view class="card-item-content uni-flex uni-row">
				<view v-for="( item, index ) in viewList" :key="index">
					<view class="text-bold">{{ item.count }}</view>
					<view>{{ item.text }}</view>
				</view>
			</view>
			<view class="card-item-content uni-flex uni-row">
				<view v-for="( item, index ) in serviceList" :key="index">
					<view class="icon-wrap">
						<image :src="'../../static/kitty-PersonalCenter/' + item.icon + '.png'" mode=""></image>
					</view>
					<view>{{ item.text }}</view>
				</view>
			</view>
		</view> -->
		<view class="card-item">
			<view class="card-item-header">工具与服务</view>
			<view class="card-item-content">
				<view class="card-item-block uni-flex uni-row" v-for="( item, index ) in otherServices" :key="index">
					<view>
						<view>
							<image :src="'../../static/' + item.icon +'.png'" mode="" style="width: 32px;height: 32px;vertical-align: top;"></image>
						</view>
						<view>{{ item.name }}</view>
					</view>
					<view style="flex: 1;text-align: left;">
						<view class="card-item-block-title">{{ item.title }}</view>
						<view class="card-item-block-disc">{{ item.disc }}</view>
					</view>
					<button type="default" size="mini">{{ item.btn }}</button>
				</view>
			</view>
		</view>
		<view class="underlinetext" v-if="loadAll">已经到底啦！</view>
	</view>
</template>

<script src="./user.js"></script>

<!-- <style src="./user.css" lang="scss" scoped></style> -->

<style lang="scss" scoped>
	$item-margin-bottom: 30upx;
	$item-margin-side: 20upx;
	$line-color: #f9f9f9;
	$border-color: #aa833e;
	page{
		background-color: #f6f6f6;
	}
	.header{
		color: $uni-text-color-inverse;
		// background-image: linear-gradient( 40deg, rgb(210,166,95) 0%, rgb(239,201,142) 100%);
		background-color: #ffffff;
		padding: 50upx 30upx;
		margin-bottom: $item-margin-bottom;
		position: relative;
		.img-profile{
			margin-right: 30upx;
			image{
				width: 140upx;
				height: 140upx;
				border-radius: 50%;
				vertical-align: middle;
				// border: 2px solid $sys-color-reverse;
				
			}
		}
		.username{
			color: #000;
			display: inline-block;
		}
		.usertag{
			padding: 0 20upx;
			background-color: #cb9a5c;
			border-radius: 30upx;
			font-size: 24upx;
			margin-right: 20upx;
			border: 1px solid $border-color;
			line-height: 1.6;
		}
		.nikename{
			font-size: 30upx;
			margin-bottom: 10upx;
			.usertag{
				margin-left: 20upx;
				border:none;
				display: inline-block;
			}
		}
		.setting-btn{
			width: 60upx;
			height: 60upx;
			position: absolute;
			top: 40upx;
			right:40upx;
		}
	}
	.card-item{
		background-color: #fff;
		border-radius: 20upx;
		margin: 0 $item-margin-side $item-margin-bottom $item-margin-side;
		text-align: center;
		.text-bold{
			font-weight: 900;
			font-size: 1.2em;
		}
		.icon-wrap{
			position: relative;
			image{
				width: 60upx;
				height: 60upx;
				vertical-align: top;
			}
			.badge{
				font-size: 20upx;
				width: 30upx;
				height: 30upx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				background-color: #dd524d;
				border-radius: 50%;
				position: absolute;
				top: 0;
				right: 0;
			}
		}
		.card-item-header{
			text-align: left;
			font-size: 1.1em;
			font-weight: 600;
			border-bottom: 1px solid $line-color;
			padding: 15upx 30upx;
		}
		.card-item-content {
			padding: 30upx;
			justify-content: space-between;
		}
		.card-item-block{
			border-bottom: 1px solid $line-color;
			padding: 30upx 0;
			align-items: center;
			&:first-child{
				padding-top: 0;
			}
			&:last-child{
				padding-bottom: 0;
				border-bottom: none;
			}
			&>view:first-child{
				width: 100upx;
			}
			&-title{
				font-size: 1.1em;
				font-weight: 600;
			}
			&-title,&-disc{
				margin-left: 30upx;
				width: 340upx;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			button{
				width: 150upx;
				margin-right: 0
			}
		}
	}
	.suggestion-title{
		justify-content: center;
		align-items: center;
		&>view:first-child,&>view:last-child{
			width: 100upx;
			height: 2upx;
			background-color: #ccc;
			margin: 0 20upx;
		}
	}
	.underlinetext{
		font-size: 24upx;
		color: #999;
		text-align: center;
		margin: 20upx;
	}
</style>
