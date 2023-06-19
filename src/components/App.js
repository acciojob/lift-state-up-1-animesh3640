
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {
  let [showModal,setShowModal] = useState(false)
  return (
        <div className="parent">
            <Child
              showModal={showModal}
              changeState = {setShowModal}
            >  
            </Child>
        </div>
  )
}

export default App
