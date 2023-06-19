import React from 'react';
import './../styles/App.css';
import Child from "./Child";
const App = () => {
  return (
        <div className="parent">
          <h1>Parent Component</h1>
            <Child></Child>
        </div>
  )
}

export default App
