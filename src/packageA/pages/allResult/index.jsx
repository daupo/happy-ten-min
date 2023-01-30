import { Component, useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { Table } from '@nutui/nutui-react-taro';
import { Pagination } from '@nutui/nutui-react-taro';


const DataTable = () => {
  const [columns1, setColumns1] = useState([
    {
      title: '期号',
      key: 'issue',
	  align: 'center'
    },
    {
      title: '开奖号码',
      key: 'resultNumber',
	  align: 'center',
      render: (record) => {
		console.log(record)
        return (
		  <div className="box">
			  {record.resultNumber.map((number) => {
				  return (
						<Text className='ball'>{number}</Text>
				  )
			  })}
		  </div>
        )
      },
    },
  ])

  const [data1, setData1] = useState([
    {
      issue: '123',
      resultNumber: ['00', '00', '00', '00', '00', '00', '00', '00'],
    },
    {
      issue: '123',
      resultNumber: ['00', '00', '00', '00', '00', '00', '00', '00'],
    },
    {
      issue: '123',
      resultNumber: ['00', '00', '00', '00', '00', '00', '00', '00'],
    },
	{
	  issue: '123',
	  resultNumber: ['00', '00', '00', '00', '00', '00', '00', '00'],
	},
	{
	  issue: '123',
	  resultNumber: ['00', '00', '00', '00', '00', '00', '00', '00'],
	},
	{
	  issue: '123',
	  resultNumber: ['00', '00', '00', '00', '00', '00', '00', '00'],
	},
	{
	  issue: '123',
	  resultNumber: ['00', '00', '00', '00', '00', '00', '00', '00'],
	},
  ])

  return <Table columns={columns1} data={data1} striped />;
};

const Paginer = () => {
  const [currentPage1, setCurrentPage1] = useState(1)
  const pageChange1 = (v) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      modelValue={currentPage1}
      totalItems="70"
      itemsPerPage="7"
      onChange={pageChange1}
	  forceEllipses
    />
  )
}

export default class Allresult extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='allResult'>
        <Text className='h1Tittle'>往期开奖结果</Text>
		<DataTable></DataTable>
		
		<div className="pgn">
			<Paginer></Paginer>
		</div>
      </View>
    )
  }
}
