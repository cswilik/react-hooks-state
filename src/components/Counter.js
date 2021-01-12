import React, { useState } from "react";

function Counter() {
  // useState will return an array of two things:
  // count(current value) + setCount(a setter function so we can update count)
  // below could be written as follows:
  //    const countState = useState(0);
//      const count = countState[0];
//      const setCount = countState[1];
const [count, setCount] = useState(0);
  

  function increment() {
    // setting state is asynchronous!!!
    // rule of thumb, should use callback when updating state
    setCount(count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
