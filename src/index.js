import React from "react";
import ReactDOM from "react-dom/client";

// CSS Import
import "./index.css";
// setup Vars
const image =
  "https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL600_SR600,400_.jpg";
let title = "Word Power Made Easy";
let author = "Norman Lewis";
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
function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article>
      {/* <Image />
      <Title />
      <Author /> */}
      <img src={image} alt="" />
      <h3>{title}</h3>
      <h6>{author}</h6>
    </article>
  );
};

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
Root.render(<BookList />);
