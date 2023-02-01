import { Divider } from "@nutui/nutui-react-taro";
import { useRef, useState } from "react";
import "./index.scss";

export default () => {
  const [showMore, setShowMore] = useState(false)
  const moreRef = useRef(null)
  const more = (e) => {
	console.log(e)
	// moreRef.current.className = 'item bigItem active'
	moreRef.current.classList.add('active')
	setShowMore(true)
  }
  
  const confirm = () => {
	setShowMore(false)
	moreRef.current.classList.remove('active')

  }
  const scoreArr = ['30积分', '50积分', '100积分', '200积分', '300积分', '500积分']
  const onItemClick = (score) => {
	console.log('用户想充值', score)
	moreRef.current.classList.remove('active')
  }
  return (
    <div>
      <div className='div1'>好消息！！！</div>
      <div className='div2'>积分充值活动：充100送10</div>
	  <Divider></Divider>
      <div className='chooseBox'>
		{scoreArr.map((score, index) => {
			return <div onClick={()=> onItemClick(score)} key={index} className='item'>{score}</div>
		})}
      </div>
      <div className='chooseBox'>
        <div ref={moreRef} className='item bigItem' onClick={(e) => {more(e)}}>更多面额</div>
        <div className='item bigItem'>白嫖积分</div>
      </div>
	  {
		showMore && (
			<div className='more'>
				<input type='text' placeholder='请输入面额' /><button onClick={confirm}>确认</button>
			</div>
		)
	  }
	  <Divider></Divider>
	  <div className='adBox'>
		
	  </div>
    </div>
  );
};
