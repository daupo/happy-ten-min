import { Component } from 'react'
import { Provider } from 'react-redux';
import store from './store';

import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
    // this.props.children 是将要会渲染的页面
    // return this.props.children
  }
}

export default App
