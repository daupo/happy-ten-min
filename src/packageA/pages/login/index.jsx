import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { Button } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'


export default class Login extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  login = ()=> {
  	this.setState({
  		unLogined: false,
  	})
  	Taro.login({
  	  success: function (res) {
  		if (res.code) {
  		  console.log('登录成功')
  		  //发起网络请求
  		 //  Taro.request({
  			// url: 'https://test.com/onLogin',
  			// data: {
  			//   code: res.code
  			// }
  		 //  })
		 
			
			
			 
  		} else {
  		  console.log('登录失败！' + res.errMsg)
  		}
  	  }
  	})
  	// Taro.getUserProfile({
  	//   desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  	//   success: (res) => {
  	//     // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  	// 	console.log(res)
  	//     this.setState({
  	//       userInfo: res.userInfo,
  	//       hasUserInfo: true
  	//     })
  	//   }
  	  
  	// })
	
  	Taro.getUserProfile({
  	  desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  	  success: (res) => {
  	    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  		console.log(res)
  	    // this.setState({
  	    //   userInfo: res.userInfo,
  	    //   hasUserInfo: true
  	    // })
  	// 	Taro.setStorageSync(
  	// 		'userInfo',
			// {
  	// 		  userInfo: res.userInfo,
  	// 		  hasUserInfo: true
  	// 		}
  	// 	)
		Taro.setStorage(
			{key:'userInfo',
			data: {
			  userInfo: res.userInfo,
			  hasUserInfo: true
			},
			success() {
				Taro.reLaunch({
								url: '/pages/player/index'
				})
			}}
		)
  	  }
  	  
  	}) 
	
	
  }

  render () {
    return (
      <View className='login'>
        <div className="centerWrapper">
        	<img src={require('/src/assets/logo.png')} />
        	<p>登录开始happy</p>
        	<Button onClick={this.login} type="info">授权登录</Button>
        </div>
      </View>
    )
  }
}
