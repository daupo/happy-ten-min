/* eslint-disable react/jsx-indent-props */
import { SearchBar, Tag } from '@nutui/nutui-react-taro';
import './index.scss'

export default () => {
	return (
		<>
			<div className='title'>充值记录</div>
			<SearchBar 
				className='search'
				background='grey'
				inputBackground='#ddd'
				align='center' 
				shape='round' 
				placeholder='搜索' 
			/>
			<div className='line'></div>
			<div className='item'>
				<div className='itemInfo'>
					<div className='jifen'>666积分</div>
					<div className='sm'>无活动福利</div>
					<div className='sm'>01-13 19:05</div>
				</div>
				<div>
					<Tag type='success'>充值成功</Tag>
				</div>
			</div>
		</>
	)
}