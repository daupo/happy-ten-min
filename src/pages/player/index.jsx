import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import './index.scss'

export default class Player extends Component {

  state = {
	avatarUrl: Taro.getStorageSync('userInfo')?.userInfo?.avatarUrl || require('../../assets/logo.webp'),
	nickName: Taro.getStorageSync('userInfo')?.userInfo?.nickName
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }
  

  componentDidShow () { }

  componentDidHide () { }
  
  toAuthLogin=()=> {
	  if (this.state.nickName) return
	  Taro.navigateTo({
		  url: '/packageA/pages/login/index'
	  })
  }

  render () {
    return (
      <View classNameName='player'>
		<View className='main'>
				<div className='userBg'>
					<div className='content' onClick={this.toAuthLogin}>
						<div className='avatar'>
							<img src={this.state.avatarUrl} alt='' />
						</div>
						<div className='useInfo'>
							{
								!Taro.getStorageSync('userInfo').hasUserInfo ? 
								(<View>
									<p>登录</p>
									<p>登录后开始下注</p>
								</View>) : 
								(<View>
									<p>{ this.state.nickName }</p>
								</View>)						
							}
						</div>
					</div>
					<div className='score'>
						<div>我的积分: <Text style={{color: 'darkred'}}>0</Text></div>
						<span onClick={() => Taro.navigateTo({url: '/packageA/pages/recharge/index'})} style={{color: 'blue', textDecoration: 'underLine', marginLeft: '20px'}}>充值</span>
					</div>
				</div>
				<Cell url='/packageA/pages/money/index' title='充值记录'></Cell>
				<Cell url='/packageA/pages/myBet/index' title='我的投注'></Cell>
				<Cell title='happy时刻'></Cell>
		</View>
      </View>
    )
  }
}
