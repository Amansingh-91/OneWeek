import React from "react";
import { useState } from "react";
import { data } from "./data";
// css import
import "./Todo.css";
//
// const removeAll = () => {
//   data = [];
// };
const Todo = () => {
  const [newData, setNewData] = useState(data);
  const removeDataUsingId = (id) => {
    setNewData(newData.filter((singleData) => singleData.id !== id));
  };
  return (
    <div>
      <h1>Birthday Reminder</h1>
      <ul>
        {newData.map((singleData) => {
          const { name, date } = singleData;
          return (
            <li key={singleData.id} className="task">
              <span>{name}</span>
              <span
                onClick={() => {
                  removeDataUsingId(singleData.id);
                }}
              >
                {date}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setNewData([]);
        }}
      >
        Remove all
      </button>
      <button
        onClick={() => {
          const newBirthDetails = {
            id: new Date().getTime().toString(),
            name: "jack",
            date: "29-Feb",
          };
          //   newData.push(newBirthDetails);
          //   console.log(newData);
          const addedData = [...newData, newBirthDetails];
          setNewData(addedData);
        }}
      >
        add birthday
      </button>
    </div>
  );
};

export default Todo;
