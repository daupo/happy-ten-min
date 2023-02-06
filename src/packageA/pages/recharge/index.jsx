import { Divider, Input, Button, Popup } from "@nutui/nutui-react-taro";
import { useRef, useState } from "react";
import Taro from '@tarojs/taro'
import { useDispatch, useSelector } from "react-redux";
import { setPlayerScore } from "../../../store/slices/user"
import "./index.scss";


export default () => {
  const dispatch = useDispatch()
  const playerScore = useSelector(state => {
	return state.user.playerScore
  })
  const [showMore, setShowMore] = useState(false)
  const [showBottom, setShowBottom] = useState(false);
  const [wscore, setWscore] = useState(0);
  const moreRef = useRef(null)
  const inputRef = useRef(null)
  const more = (e) => {
	console.log(e)
	// moreRef.current.className = 'item bigItem active'
	moreRef.current.classList.add('active')
	setShowMore(true)
  }
  
  const confirm = () => {
	if (inputRef.current.value) {
		setWscore(inputRef.current.value + '积分')
		setShowBottom(true)
		setShowMore(false)
		moreRef.current.classList.remove('active')
	} else {
		Taro.showToast({
			title: '未输入面额',
			icon: 'none',
			duration: 500
		  })
	}
	
  }
  const scoreArr = ['30积分', '50积分', '100积分', '200积分', '300积分', '500积分']
  const onItemClick = (score) => {
	console.log('用户想充值', score)
	setWscore(score)
	setShowBottom(true)
	moreRef.current.classList.remove('active')
  }

  const recharge = () => {
	// 发送请求
	dispatch(setPlayerScore(playerScore + parseInt(wscore)))

	Taro.showLoading({
		title: '加载中',
	  })
	setTimeout(function () {
		Taro.hideLoading()
		Taro.showToast({
			title: '充值成功',
			icon: 'success',
			duration: 500
		  })
		setShowBottom(false)
	}, 2000)
  }
  return (
    <div>
      <div className='div1'>好消息！！！</div>
      <div className='div2'>积分充值活动：充100送10</div>
	  <Divider>充积分</Divider>
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
				<Input ref={inputRef} name='number' label='请输入面额' placeholder='整数'type='digit' />
				<Button type='warning' onClick={confirm}>确认</Button>
			</div>
		)
	  }
	  <Divider></Divider>
	  <Popup visible={showBottom} round closeable style={{ height: '80%' }} position='bottom' onClose={() => { setShowBottom(false) }} >
		<div className='pop'>
			<div className='score'>{wscore}</div>
			<Button onClick={recharge} className='sbtn' shape='square' type='success'>立即充值</Button>
		</div>
	  </Popup>
	  <div className='adBox'>
		
	  </div>
    </div>
  );
};
