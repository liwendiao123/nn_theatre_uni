export default {
	data() {
		return {
			isLogin:!false,
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
			],
			
			theme:{
				title:"美国国际舞大赛（IDC）南宁",
				summary:"美国国际舞大赛美国国际舞大赛美国国际美国国际舞大赛美国国际舞大赛美国国际舞大赛美国国际舞大赛美国国际舞大赛舞大赛美国国际舞大赛美国国际舞大赛（IDC）南宁",
				address:"广西南宁市邕江桥南南宁剧场",
				date:"2015.03.12 -- 2015.03.12 17:00",
			},
		}
	},
	methods: {
		radioChange(e) {
			this.showSwiper = e.detail.value === "swiper";
		},
		
		onLoad(){
			this.$db.login()
		},
		
		bindLogin() {
			uni.navigateTo({
				url:  '/pages/login/login'
			});
		},
		bindSign(){
			
			uni.navigateTo({
				url:  '/pages/sign/sign'
			});
		},
		
		sign(){
			uni.navigateTo({
				url:"/pages/login/login"
			})
		}
	}
}