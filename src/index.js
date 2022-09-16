import React from "react";
import ReactDOM from "react-dom/client";
import BookList from "./components/BookList/BookList";
import ErrorExample from "./components/useStateHook/ErrorExample";
import RemoveError from "./components/useStateHook/RemoveError";
import Todo from "./components/useStateHook/TodoList/Todo";
import Counter from "./components/useStateHook/Counter/Counter";
import FirstExample from "./components/useEffectHook/FirstExample";
// CSS Import
import "./index.css";
// setup Vars

// const names = ["aman", "Divya", "Dharam"];

// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

// Component
// Component Should always Return JSX
// JSX Rule
// return Single Element
// html Attribute as lowerCamelCase
// class attribute as className
// close every element
// Formatting

// const App = () => {
//   return (
//     <div>
//       <Greeting />
//     </div>
//   );
// };
// function Greeting() {
//   return (
//     <section>
//       <Title />
//       <Message />
//     </section>
//   );
// }
// Nested Components
// const Title = () => <h1>Mr. Dharam</h1>;
// const Message = () => {
//   return <h3>this is my nested Component</h3>;
// };

// const Greeting = () =>
//   React.createElement("Section", {}, [
//     React.createElement("h1", {}, "Hello Friends"),
//     React.createElement("h1", {}, "BYE"),
//   ]);

// handleClick("i am here");

// const Image = () => {
//   return <img src={image} alt="" />;
// };
// const Title = () => {
//   console.log(title);
//   // return <h3 style={{ fontSize: "10px", color: "red" }}>Word Power Made Easy</h3>
//   return <h3>{title}</h3>;
// };

// const Author = () => {
//   return <h6>{author}</h6>;
// };
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<FirstExample />);
