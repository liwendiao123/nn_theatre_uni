<template>
    <view class="container">
		<view class="component ">
			<news-item></news-item>
		</view>
		<view class="component ">
			<login></login>
		</view>
		<btn-next @onClick="onClick"></btn-next>
    </view>
	
</template>

<script src="./login.js"></script>

<style src="./login.css"></style>