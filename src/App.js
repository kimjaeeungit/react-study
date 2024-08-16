import { useState, useEffect } from 'react';
import './App.css';
import Box from './component/Box';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0); //[배열,함수]
  const [value, setValue] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    setValue(value + 2);
    console.log('counter는', counter, 'counter2 state는', counter2);
  };
  useEffect(() => {
    //1.componentDidMount 커버해줌
    //배열안에 state없으면 실행
    console.log('useEffect1 fire');
  }, []);

  useEffect(() => {
    //2.배열안에 값이 들어가게되면 componentDidUpdate를 커버해줌
    //배열값에 있는 값중 하나라도 변화가 있으면 함수 실행
    console.log('useEffect2 fire', counter2, value);
  }, [counter2, value]);

  useEffect(() => {
    console.log('다른 내용 하고싶어요', value);
  }, [value]);
  return (
    <div>
      {/* <Box name="리사" num={1} />
      <Box name="제니" num={2} />
      <Box name="지수" num={3} /> */}
      {console.log('render')}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
