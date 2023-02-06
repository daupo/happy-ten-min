import './index.scss'

export default () => {
	return (
		<div className='cp'>
			<h1 className='title'>已投</h1>
			<div className='aBet'>
				<div className='betTime'>下注时间: <span>2023/2/7 1:29</span> </div>
				<div className='issue'>第<span>123</span>期</div>
				<div className='body'>
					<div className='betKind'>快乐5</div>
					<div className='myBet'> 
						<div className='ball'>0</div>
						<div className='ball'>0</div>
						<div className='ball'>0</div>
						<div className='ball'>0</div>
						<div className='ball'>0</div>
					</div>
				</div>
				<div className='count'>注数<span>×10</span></div>
			</div>
		</div>
	)
}