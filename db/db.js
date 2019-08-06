class db{	
	/**
	 * @statics 静态变量
	 */
	KEY_USER_INFO = "user_info"
	KEY_UUID = "uuid"
	
	HOST = "https://www.51zfgx.com/dev/"
	URL = this.HOST + "photo/"
	// API_LOGIN =  `${this.URL}system/set/user_info/`
	
	API_LOGIN = "http://nnjc.lwdweb.top/User/Login"
	
	constructor(){}
	
	
	// 封装基础的请求
    base(options){
        return new Promise((resolve, reject) => {
            var data = options.data || {}
            // data['customer_uuid'] = wx.getStorageSync(API.UUID)
			
            uni.request({
                url: options.url,
                method: options.method || "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'Access-Control-Allow-Origin':true,
                },
                data: data,
                success(res) {
                    resolve(res)
                },
                fail(res) {
                    console.log(res)
                    reject(res)
                },
            })
        })
    }
	
    // 获取店铺列表
    baseURL(url,data) {
        return new Promise((resolve, reject) => {
            this.base({
                url: url,
                data:data || {}
            })
            .then(res => resolve(res))
            .catch(res => {
				
				reject(res)
			})
        })
    }
	
	/****业务详情****/
    // 1 用户登录认证
    login() {
        return new Promise((resolve, reject) => {
			this.baseURL( this.API_LOGIN, { UserName: "code",Password: "123"} )
			.then(res => resolve( res ))
			.catch(res => reject(res))
        })
    }
	
	
	getName(){
		return "hellow"
	}
	
	
}
module.exports = new db()