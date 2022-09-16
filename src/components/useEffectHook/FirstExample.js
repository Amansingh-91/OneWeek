import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FirstExample = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    if (count > 0) {
      document.title = `new Messages(${count})`;
    }
  }, [count]);

  return (
    <div>
      <h1>useEffect Example</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      {console.log("at every render")}
      <h3>{value}</h3>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default FirstExample;
