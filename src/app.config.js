// eslint-disable-next-line no-undef
export default defineAppConfig({
  lazyCodeLoading: 'requiredComponents',
  pages: [
    'pages/index/index',
	'pages/player/index',
  ],
  subpackages: [
	  {
		  root: 'packageA',
		  pages: [
			'pages/login/index',
			'pages/allResult/index',
			'pages/money/index',
			'pages/myBet/index',
			'pages/recharge/index',
			'pages/voucherCenter/index',
		  ]
	  }
  ],
	tabBar: {
		position: 'top',
		color: '#000',
		selectedColor: '#ff0000',
		backgroundColor: '#fff',
		borderStyle: 'black',
		list: [
			{
				pagePath: 'pages/index/index',
				text: '开始',
			},
			{
				pagePath: 'pages/player/index',
				text: '我的',
			}
		]
	}, 
  window: {
    backgroundTextStyle: 'light',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
		// navigationStyle: 'custom'
		navigationBarBackgroundColor: '#eaecea',
  }
})
