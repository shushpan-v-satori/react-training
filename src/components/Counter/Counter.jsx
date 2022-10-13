import React, { Component, useState } from 'react'
import "./Counter.scss"

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <>
    <p>Counter</p>
    <div className="counter__count">{count}</div>
        <div className="counter__buttons">
          <button className="buttons__button minus" onClick={() => {count>0 && setCount(count - 1)}}
>-</button>
          <button className="buttons__button plus" onClick={() => setCount(count + 1)}
>+</button>
        </div>
        </>
  )
}

export default Counter
  