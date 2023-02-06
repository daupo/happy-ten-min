// eslint-disable-next-line no-unused-vars
import React, { Component, useRef, useState } from "react";
import { View, Text } from "@tarojs/components";
import {
  Button,
  Divider,
  Image,
  CountDown,
  Animate,
  Dialog,
  Popup,
  Picker,
  Form,
  Input,
  InputNumber,
 Swiper, SwiperItem } from "@nutui/nutui-react-taro";
 import Taro from "@tarojs/taro";
 import "./index.scss";
// import CusNavigation from "../../components/cusNavigation";

import MyNumberPicker from "../../components/myNumberPicker";

const randomColor = () => {
  return `rgb(${parseInt(Math.random() * 256)}, ${parseInt(
    Math.random() * 256
  )}, ${parseInt(Math.random() * 256)})`;
};

const partItemStyle = {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "25px",
  background: "#f26a21",
  color: "#fff",
  fontSize: "14px",
  borderRadius: "6px",
};
const partItemSymbolStyle = {
  margin: "0 5px",
};
const CD = (props) => {
  const [resetTime, setResetTime] = useState({
    m: "00",
    s: "00",
  });
  const dateNow = Date.now()
  const stateRef = useRef({
    startTime: dateNow,
    endTime: dateNow + 10 * 1000 * props.endMin,
  });
  const onUpdate = (v) => {
    setResetTime(v);
    // console.log(v)  // {d: 0, h: 0, m: 0, s: 0, ms: 0}

  };

  const cdRef = useRef(null)
 
  const onEndFn = () => {
    stateRef.current.startTime = stateRef.current.startTime + 10 * 1000 * props.endMin
    stateRef.current.endTime = stateRef.current.endTime + 10 * 1000 * props.endMin
    // cdRef.current.reset()
  }

  return (
    <CountDown millisecond autoStart ref={cdRef} onEnd={onEndFn} startTime={stateRef.current.startTime} endTime={stateRef.current.endTime} onUpdate={onUpdate}>
      <div
        className='countdown-part-box'
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className='part-item m' style={partItemStyle}>
          {resetTime.m}
        </div>
        <span className='part-item-symbol' style={partItemSymbolStyle}>
          分钟:
        </span>
        <div className='part-item s' style={partItemStyle}>
          {resetTime.s}
        </div>
        秒
      </div>
    </CountDown>
  );
};

const pickerData = [
  [
    { value: 1, text: "快乐1" },
    { value: 2, text: "快乐2" },
    { value: 3, text: "快乐3" },
    { value: 4, text: "快乐4" },
    { value: 5, text: "快乐5" },
  ],
];

// const dgFn = (count, options=[]) => {
// 	// 重复做的事情，一个数组，每一项是对象，对象里面有value，text，chilren
// 	if (count === 0) return options
// 	count--
// 	for(let i=1; i<=20; i++) {
// 		options[i-1] = {
// 			value: `${i}`,
// 			text: `${i}`,
// 			children: dgFn(count)
// 		}
// 	}
// 	return options

// }

export default class Index extends Component {
  state = {
    // userInfo: "",
    // hasUserInfo: false,
    resultArr: ["00", "00", "00", "00", "00", "00", "00", "00"],
    visible: false,  // test
    showPicker: false,
    baseDesc: "点击选择",
    betCount: 1,
    showDialog: false,
    showCascader: false,  // test
    betKink: 0,
    numbers: '点击依次选择',
    betIssue: '123',
    betNumbers: [],
  };

  componentWillMount() {}

  componentDidMount() {
    // 轮询开奖结果
    setInterval(() => {
      // 发起请求
      this.state.resultArr.forEach((n, i) => {
        this.ballRun(document.getElementsByClassName('ball')[i], n)
      } )
    }, 1000 * 10)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  //   changePicker(columnIndex, option, list) {}
  confirmPicker(values, options) {
    let desc = "";
    options.forEach((option) => {
      desc += option.text;
    });

    console.log(values, "玩法确认");
    this.setState({
      baseDesc: desc,
      betKink: values[0],
    });
	console.log('玩家选择玩法', values[0]);
  }

  bet = () => {
    this.setState({
      visible: true,
    });
  };
  onConfirmFn = (betArr) => {
    console.log('父组件接收到投注信息', betArr)
    this.setState({
      numbers: betArr.join('-'),
      betNumbers: betArr
    })
  }
  confirmBet = () => {
    // 玩家确认投注，发起请求
    Taro.showLoading(
      {
        title: '投注中',
      }
    )
    setTimeout(() => {
      Taro.hideLoading()
      Taro.showToast({title: '投注成功'})
      this.setState({ showDialog: false })
    }, 2000)
  } 
  ballRun(el, targetNum) {
    let timerT;
    clearTimeout(timerT)
    const arr = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20']
    let timerI = setInterval(() => {
      el.innerHTML = arr[parseInt(Math.random() * 20)]
    }, 100);
    timerT = setTimeout(() => {
      clearInterval(timerI)
      el.innerHTML = targetNum
    }, 3000)
  }

  render() {
    return (
      <>
        {/* <CusNavigation title='happyTen'></CusNavigation> */}
        <View className='index' style={{ paddingBottom: "10vw" }}>
          <Text className='h1Tittle'>快乐每一十分钟!!!</Text>
          <Swiper
            height={150}
            paginationColor='#f78f1e'
            paginationBgColor='#f6e78b'
            autoPlay='3000'
            initPage={0}
            paginationVisible
          >
            <SwiperItem>
              <Image
                src={require("../../assets/logo.webp")}
                height='150'
              ></Image>
            </SwiperItem>
            <SwiperItem>
              <div
                style={{
                  textAlign: "center",
                  lineHeight: "150px",
                  backgroundColor: "#007a67",
                }}
              >
                广告位dd
              </div>
            </SwiperItem>
          </Swiper>
          <Divider></Divider>
          <div className='resultAhead'>
            <div className='text'>
              第
              <Text style={{ color: "#f44a07", padding: "0 4px" }}>{this.state.betIssue}</Text>
              期<div style={{ fontSize: "0.9rem" }}>开奖结果</div>
            </div>
            <div className='countDown'>
              <Text
                style={{
                  fontSize: "0.8rem",
                  color: "#333",
                  marginRight: "6px",
                }}
              >
                距离下次开奖:
              </Text>
              <CD endMin={1}></CD>
            </div>
          </div>
          <div className='resultBox'>
            {this.state.resultArr.map((value, index) => {
              return <div className='ball' id='ball' key={index}>{value}</div>;
            })}
          </div>
          <Divider></Divider>
          <div className='showBox'>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
            <div className='showItem' style={{ color: randomColor() }}>
              恭喜某某某赢得奖金xxx
            </div>
          </div>

          <div className='footer'>
            <div
              className='tab'
              onClick={() =>
                Taro.navigateTo({ url: "/packageA/pages/allResult/index" })
              }
            >
              查看往期
            </div>

            <div onClick={this.bet} className='tab'>
              <Animate type='twinkle' loop>
                投注
              </Animate>
            </div>
          </div>
          <Popup
            className='popup'
            closeable
            round
































            
            visible={this.state.visible}
            style={{ height: "60%" }}
            position='bottom'
            onClose={() => {
              this.setState({ visible: false });
            }}
          >
            <Form labelPosition='Left'>
              <Form.Item className='formItem' label='选择快乐玩法' name='kind'>
                <Input
                  readonly
                  className='formInput'
                  type='text'
                  placeholder={this.state.baseDesc}
                  onClick={() => this.setState({ showPicker: true })}
                ></Input>
              </Form.Item>
              <Form.Item className='formItem' label='下注期数' name='issue'>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "40vw",
                  }}
                >
                  <Input
                    className='formInput'
                    type='text'
                    placeholder={this.state.betIssue}
                  ></Input>
                  <Text>期</Text>
                </View>
              </Form.Item>
              <Form.Item
                className='formItem'
                label='投注号码'
                name='betNumbers'
              >
                <Input
                  readonly
                  className='formInput'
                  type='text'
                  placeholder={this.state.numbers}
                  onClick={() => {
                    
                    if (this.state.betKink === 0) {
                      Taro.showToast({
                        title: '请先选择快乐玩法',
                        icon: 'none',
                        mask: true
                      })
                      return
                    }
                    this.setState({ showCascader: true }
                  )}}
                ></Input>
              </Form.Item>
              <Form.Item className='formItem' label='投入注数' name='money'>
                <InputNumber
                  className='formInput numberInput'
                  modelValue={this.state.betCount}
                  onChangeFuc={(value) => {
                    this.setState(
                      {
                        betCount: value
                      }
                    )
                  }}
                />
              </Form.Item>

              <Button
                className='formBtn'
                block
                type='primary'
                onClick={() => {
                  let temp = []
                  let flag = true
                  this.state.betNumbers.forEach((number, index) => {
                    !temp.includes[number] && temp.push(number);
                    temp.indexOf(number) !== index && (flag = false)
                  })
                  if (!flag) {
                    Taro.showToast({title: '投注号码重复了', icon: 'error'})
                    return
                  }

                  if (this.state.betNumbers.length === 0) {
                    Taro.showToast({
                      title: '请先填写投注信息',
                      icon: 'none',
                      mask: true
                    })
                    return
                  }
                  this.setState({ showDialog: true });
                }}
              >
                提交投注
              </Button>
            </Form>
            <Dialog
              title='确认投注'
              visible={this.state.showDialog}
              onOk={this.confirmBet}
              onCancel={() => this.setState({ showDialog: false })}
            >
              <Text>{this.state.betIssue}期 & {this.state.baseDesc} & {this.state.betNumbers.join('-')} & {this.state.betCount}注</Text>
              
              
            </Dialog>
          </Popup>
          <Picker
            isVisible={this.state.showPicker}
            listData={pickerData}
            onConfirm={(values, list) => this.confirmPicker(values, list)}
            onClose={() => this.setState({ showPicker: false })}
            onChange={this.changePicker}
          ></Picker>
          <MyNumberPicker
            kind={this.state.betKink}
            show={this.state.showCascader}
            onClose={() => this.setState({ showCascader: false })}
            onConfirm={this.onConfirmFn}
          ></MyNumberPicker>
        </View>
      </>
    );
  }
}
