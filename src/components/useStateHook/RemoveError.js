import React from "react";
import { useState } from "react";
const RemoveError = () => {
  //   console.log(useState);
  const [title, setTitle] = useState("Random Title");

  const [name, setName] = useState("Aman");
  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() => {
          if (title === "Random Title") {
            setTitle("new Title");
          } else {
            setTitle("Random Title");
          }
          //   title = "new Title";

          console.log(title);
        }}
      >
        change title
      </button>
      <h3>{name}</h3>
      {console.log("at every refresh")}
    </div>
  );
};

export default RemoveError;
