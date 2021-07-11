import React, {useState} from 'react';

import Header from './Header';


function App() {
  const [counter, setCounter] = useState(0);

  function handleSoma(){
    setCounter(counter + 1);
  }

  function handleSub(){
    setCounter(counter - 1);
  }

  return (
    <>
    <Header title={counter} />
    <button onClick={handleSoma}>+</button>
    <button onClick={handleSub}>-</button>
    </>
  );
}

export default App;
