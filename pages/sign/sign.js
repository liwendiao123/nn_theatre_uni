export default {
	data() {
		return {
		
		}
	},
	methods: {
		onClick(){
			uni.navigateTo({
				url:"/pages/sign_result/sign_result",
			})
		},
	},
	onLoad() {
		this.platform = uni.getSystemInfoSync().platform
	}
}