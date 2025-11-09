import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1> Simple Counter</h1>

      <h2> {count}</h2>

      <botton onClick={() => setCount(count + 1)}
        style={{ padding:"10px 20px", margin:"5px"}}
        >
          Increase

      </botton>

      
      
      <botton onClick={() => setCount(0)}
        style = {{padding:"10px 20px", margin:"5px", backgroundColor:"#56474"}}>
          Reset
      </botton>

      <botton onClick={() => setCount(count - 1)}
        style={{padding:"10px 20px", margin:"5px"}}>
          Decrease
      </botton>
    </div>
  );
}

export default App
