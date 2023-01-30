import { Icon } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import './index.scss'

const goBack = () => Taro.navigateBack()

const CusNavigation = (props) => {
	const [pageTitleStyle, setPageTitleStyle] = useState({
		height: '40px'
	})
	const [statusBarHeight, setStatusBarHeight] = useState('20px')
	
	const computedPageTitleHeight = () => {
		let menuButtonInfo = Taro.getMenuButtonBoundingClientRect()
	
		let sbh = parseFloat(statusBarHeight)
		let diff = menuButtonInfo.top - sbh
	
		return menuButtonInfo.bottom - sbh + diff + "px";
	}
	
	useEffect(()=> {
		setStatusBarHeight(Taro.getWindowInfo().statusBarHeight + "px")
		setPageTitleStyle({
			...pageTitleStyle,
			height: computedPageTitleHeight()
		})
	}, {})
	
	
	return (
		<View>
			<View className="status_bar" style={ {height: statusBarHeight} }>
			</View>
			<View className="under_bar">
				{
					Boolean(props.left && props.hasGoback) &&
						(
							<Icon onClick={goBack} name="rect-left" color="#000"></Icon>
						)
					
				}
				<h1 className="pageTitle" style={{ lineHeight : pageTitleStyle.height }}>{ props.title }</h1>
			</View>
		</View>
		
	)
}

export default CusNavigation