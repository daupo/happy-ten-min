import { Popup, Button } from '@nutui/nutui-react-taro';
import { useEffect, useState } from 'react';
import './index.scss'


const optionsTemplete = () => {
	let arr = [];
	for (let i = 1; i<= 20; i++) {
		arr[i-1] = i; 
	}
	
	
	
	return (
		<>
			{arr.map((i) => (
				<div className='optionItem' data-n={i}>{i}</div>
			))}
		</>
	)
}


export default (props) => {
	const [betArr, setBetArr] = useState([]);
	const titles = ['号码一', '号码二', '号码三', '号码四', '号码五', '']
	
	const [showBottom, setShowBottom] = useState(props.show);
	const [title1, setTitle1] = useState('号码一');
	useEffect(() => {
		setShowBottom(props.show)
		console.log(props.show)
	}, [props.show])
	
	const [count, setCount] = useState(1);
	
	const nextNumber = (count) => {
		const nextTitle = <div className='title'>{'title1'}</div>
		const div = document.createElement('div')
		div.className = 'title'
		div.innerHTML = titles[count]
		document.getElementById('titleBox').appendChild(div)
	}
	
	const onSelect = (e) => {
		console.log(e.target.dataset.n)
		setTitle1(e.target.dataset.n)
		setBetArr([...betArr, e.target.dataset.n])
		setCount(count + 1)
		nextNumber(count)
	}
	return (
		<div>
			(
				<Popup closeable round visible={ showBottom } style={{ height: '60%' }} position="bottom" onClose={ () => { setShowBottom(false); props.onClose() } } >
					<div className='box'>
						<h1 className='h1'>依次选择号码</h1>
						<div className="main">
							<div className="titleBox" id='titleBox'>
								<div className='title'>号码一</div>
								<div className="paBtn">
									<Button type='danger' size='small'>确认</Button>
								</div>
							</div>
							<div className="showSelect">
								{betArr.map((value) => <span className='selectItem'>{value}</span>)}
							</div>
							<div className="options" onClick={(e) => onSelect(e)}>
								{
									optionsTemplete()
								}
							</div>
						</div>
					</div>
				</Popup>
			)
		</div>
	)
}