<template>
	<view class="content" >
		<form @submit="formSubmit" @reset="formReset">

			<view class="node">
				<view class="explain">
					姓名<view class="must">(必填)</view>
				</view>
				<view class="input_content">
					<input name="name" class="input" placeholder-style="input_pla"  
					value="" placeholder="请输入账号"  />
				</view>
			</view>
			<view class="node">
				<view class="explain">
					姓名<view class="must">(必填)</view>
				</view>
				<view class="input_content">
					<input name="name" class="input" placeholder-style="input_pla"  
					value="" placeholder="请输入账号"  />
				</view>
			</view>
			
			<!-- <view class="btn-area">
				<button formType="submit">Submit</button>
				<button formType="reset">Reset</button>
			</view>-->
		</form> 
		
	</view>
</template>

<script>
	export default {
		name: 'news-item',
		props: {
			text: {
				type: String,
				default:'下一步',
			}
		},
		methods: {
			click(){
				console.log("click")
			}
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: #fff;
	}
	.node{
		padding: 5px 15px;
	}
	.explain{
		display: flex;
		align-items: center;
		font-size: 11pt;
		margin: 5px 0;
	}
	.must{ 
		color: red; 
		font-size: 8pt;
		margin-left: 5px;
	}
	
	.input_content{
		// width: 100%; 
		background-color: #eee; 
		padding: 10px;
		border-radius: 5px;
	}
	.input{font-size: 11pt; }
	.input_pla{font-size: 11pt;}
	
	
	.click{
		background-color:$sys-color-light;
	}
</style>
