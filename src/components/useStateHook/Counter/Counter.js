import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <h1> Complex Counter</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount((prevcurrentState) => {
              console.log(prevcurrentState);
              return prevcurrentState + 1;
            });
          }, 2000);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
            console.log(count);
            setCount(count - 1); // 0
          }, 2000);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
