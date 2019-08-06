export default {
	data() {
		return {
			showSwiper: false,
			imgUrls: [
				"/static/shuijiao.jpg",
				"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",
				"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
			],
			items: [{
					value: "img",
					name: '静态图',
					checked: true
				},
				{
					value: "swiper",
					name: '轮播图',
					checked: false
				}
			]
		}
	},
	methods: {
		radioChange(e) {
			this.showSwiper = e.detail.value === "swiper";
		},
		
		onLoad(){
			this.$db.login()
		}
	}
}