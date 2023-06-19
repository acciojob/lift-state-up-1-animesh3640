import React from "react"

const Child = ({showModal,changeState}) =>{
    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={changeState(true)}>Show Modal</button>
            {
                (showModal)&&(
                    <div>
                        <h2>Modal Content</h2>
                        <p>This is modal content</p>
                    </div>
                )
            }
        </div>
    )
}

export default Child;