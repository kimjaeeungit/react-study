import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    //1.state만들기
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log('constructor');
  }

  // 클래스에서는 앞에 const를 안붙임
  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    console.log('increase function', this.state);
  };
  componentDidMount() {
    //3.api콜 한다.(render끝나면 호출)

    console.log('componentDidMount');
  }

  componentDidUpdate() {
    //4.state가 업데이트 됬나 확인
    //state가 업데이트 된 후에 해야하는 작업들은 여기서!
    console.log('componentDidUpdate', this.state);
  }
  render() {
    //2. Ui그린다.
    console.log('render');
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
