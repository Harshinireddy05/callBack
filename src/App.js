import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(count + 1), [count]);
//usecallback - it memorises the function and only re-renders it when the dependencies change
//useref - it memorises the value and only re-renders it when the value changes
//usestate - it memorises the state and only re-renders it when the state changes
  return (
    <div className="App">
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <childComponent count={count} onClick={incrementCount}/>
    </div>
  );
}

const childComponent =  React.memo(function({ count, onClick }) {
//react.memo - it memorises the component and only re-renders it when the props change
  console.log("Child component is rendering");
  return (
    <div>
      <h2>This is a child component</h2>
      <button onClick={onClick}>Increment</button>
      <h4>Count: {count}</h4>
    </div>
  );
})

export default App;
