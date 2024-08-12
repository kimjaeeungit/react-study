import { useState } from 'react';
import './App.css';
import Box from './component/Box';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0); //[배열,함수]
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log('counter는', counter, 'counter2 state는', counter2);
  };
  return (
    <div>
      {/* <Box name="리사" num={1} />
      <Box name="제니" num={2} />
      <Box name="지수" num={3} /> */}

      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
