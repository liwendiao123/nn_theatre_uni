<template>
	<view class="">
		<view class="top-line"></view>
		<!-- <page-head :title="title"></page-head> -->
		<view class="agenda">
			<view class="uni-title uni-center">XX节目安排表</view>
			<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;">
				<template v-for="(item,key) in agenda">
					<view class="uni-timeline-item {{ key==0 ? 'uni-timeline-first-item':''}}">
						<view class="uni-timeline-item-keynode">{{item.date}}</view>
						<view class="uni-timeline-item-divider"></view>
						<view class="uni-timeline-item-content">
							<view class="title">《 {{item.title}} 》</view>
							<view class="team">表演者:{{item.team}}</view>		
						</view>
					</view>
				</template>
				<view class="uni-timeline-item">
					<view class="uni-timeline-item-keynode">2018.07</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成</view>
				</view>
				<view class="uni-timeline-item uni-timeline-last-item">
					<view class="uni-timeline-item-keynode">2018.10</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content">uni-app 支持使用 npm 安装依赖，支持微信小程序自定义组件</view>
				</view>
			</view> 
		</view>
	</view>
</template>

<script src="./lot.js"></script>

<style src="./lot.css"></style>