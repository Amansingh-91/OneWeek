import React from "react";

const ErrorExample = () => {
  let title = "Random title";
  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() => {
          console.log(title);
          title = "new title";
          console.log(title);
        }}
      >
        change title
      </button>
    </div>
  );
};

export default ErrorExample;
