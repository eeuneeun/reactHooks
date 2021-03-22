import React, {useState} from 'react';


function DefaultHook() {

  const [item, setItem] = useState(1);
  const increamentItem = () => setItem(item + 1)
  const decreamentItem = () => setItem(item - 1)
  
  return (
    <div>
      <h1>Default Hook</h1>
      <h3>{item}</h3>

      <button onClick={increamentItem}>증가</button>
      <button onClick={decreamentItem}>감소</button>
    </div>
  );
}

export default DefaultHook;
