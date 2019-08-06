export default {
		data() {
			return {
				user: {
					profile: 'https://via.placeholder.com/70/ffffff/808080',
					nickname: 'Kitty Wei',
					level: '钻石',
					tags: ['已实名', '查看信用']
				},
				orderList: [
					{icon: 'yinhangka', text: '待付款', padge: 0},
					{icon: 'rili', text: '待收货', padge: 1},
					{icon: 'xiaoxi', text: '待评价', padge: 6},
					{icon: 'anquan', text: '退换/售后', padge: 0}
				],
				pocketList: [
					{count: 1588, text: '虚拟币'},
					{count: 70, text: '优惠券'},
					{count: 100.9, text: '白条'},
					{count: 99, text: '礼品卡'}
				],
				viewList: [
					{count: 108, text: '商品关注'},
					{count: 56, text: '店铺关注'},
					{count: 899, text: '喜欢的内容'},
					{count: 1600, text: '浏览记录'}
				],
				serviceList: [
					{icon: 'awake', text: '我的活动'},
					{icon: 'hotel', text: '客户服务'},
					{icon: 'car', text: '寄件服务'},
					{icon: 'mic', text: '我的宝宝'}
				],
				otherServices: [
					{
						icon: 'mic',
						name: '小金库',
						title: '你有一笔奖金，快来看看！你有一笔奖金，快来看看！',
						disc: '参加早起打卡，瓜分5亿红包参加早起打卡，瓜分5亿红包',
					},{
						icon: 'hotel',
						name: '基金',
						title: '信托投资基金、公积金、保险基金',
						disc: '为了某种目的而设立的具有一定数量的资金',
					}
				],
				productList: [],
				renderImage: false,
				productPage: 0,
				loadAll: false
			}
		},
		onLoad() {
			this.loadData();
			setTimeout(()=> {
			    this.renderImage = true;
			}, 300);
		},
		methods: {
			loadData(action = 'add') {
			    const data = [
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
			            title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
			            originalPrice: 9999,
			            favourPrice: 8888,
			            tip: '自营'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
			            title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
			            originalPrice: 3499,
			            favourPrice: 3399,
			            tip: '优惠'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
			            title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
			            originalPrice: 12999,
			            favourPrice: 10688,
			            tip: '秒杀'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
			            title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
			            originalPrice: 999,
			            favourPrice: 958,
			            tip: '秒杀'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
			            title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
			            originalPrice: 8888,
			            favourPrice: 8288,
			            tip: '优惠'
			        },
			        {
			            image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
			            title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
			            originalPrice: 2899,
			            favourPrice: 2799,
			            tip: '自营'
			        }
			    ];
			
			    if (action === 'refresh') {
			        this.productList = [];
					this.productPage = 0;
					this.loadAll = false;
			    }
			
			    data.forEach(item => {
			        this.productList.push(item);
			    });
				
				
			}
		},
		onPullDownRefresh() {
			this.loadData('refresh');
			// 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			if( this.productPage >= 3 ){ //数字仅为体现效果，实际开发中数据加载完成就停止
				this.loadAll = true;
			}else{
				this.productPage++;
				this.loadData();
			}
		}
	}