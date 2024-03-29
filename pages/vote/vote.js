

export default {

    data() {
        return {
            title: '优秀作品',
			productList: [],
            renderImage: false,
			
			page: 1,
			start: 0,
			end: 0,
			list: [], // 列表
			loading: true
        };
    },
	
    methods: {
        loadData(action = 'add') {
            const data = [
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
                    title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
                    originalPrice: 9999,
                    favourPrice: 8888,
					liked:true,
                    tip: '自营'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
                    title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
                    originalPrice: 3499,
                    favourPrice: 3399,
					liked:false,
                    tip: '优惠'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
                    title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
                    originalPrice: 12999,
                    favourPrice: 10688,
					liked:false,
                    tip: '秒杀'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
                    title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
                    originalPrice: 999,
                    favourPrice: 958,
					liked:true,
                    tip: '秒杀'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
                    title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
                    originalPrice: 8888,
                    favourPrice: 8288,
					liked:true,
                    tip: '优惠'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
                    title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
                    originalPrice: 2899,
                    favourPrice: 2799,
					liked:true,
                    tip: '自营'
                }
            ];

            if (action === 'refresh') {
                this.productList = [];
            }

            data.forEach(item => {
                this.productList.push(item);
            });
        },
		
		// 选中
		choose(item) {
			// item 返回选中 JSON 对象
			console.log(item)
		},
		
    },
    onLoad() {
        this.loadData();
        setTimeout(()=> {
            this.renderImage = true;
        }, 300);
		
    },
	
	
	
    onPullDownRefresh() {
        this.loadData('refresh');
        // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
        setTimeout(() => {
            uni.stopPullDownRefresh();
        }, 2000);
    },
    onReachBottom() {
        this.loadData();
		
    }
};