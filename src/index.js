import React from "react";
import ReactDOM from "react-dom/client";

// CSS Import
import "./index.css";
// setup Vars
const Books = [
  {
    id: 1,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL600_SR600,400_.jpg",
    title: "Word Power Made Easy",
    author: "Norman Lewis",
  },
  {
    id: 2,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71zytzrg6lL._AC_UL600_SR600,400_.jpg",
    title: "The 5 AM Club",
    author: "Robin Sharma",
  },
  {
    id: 3,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/813uPMOnskL._AC_UL600_SR600,400_.jpg",
    title: "You Can",
    author: "George Matthew Adams",
  },
  {
    id: 4,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/813uPMOnskL._AC_UL600_SR600,400_.jpg",
    title: "You Can Do It",
    author: "George Adams",
  },
];
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
function BookList() {
  return (
    <section className="bookList">
      {/* <Book
        id={firstBook.id}
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      > */}
      {/* shake and bake */}
      {/* </Book> */}

      {/* <Book {...secondBook}></Book>
      <Book {...thirdBook}></Book> */}

      {/* {Books[0]} */}
      {/* {names}
      {newNames} */}
      {Books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  const { image, title, author } = props;
  return (
    <article>
      {/* <Image />
      <Title />
      <Author /> */}
      {/* prop */}
      {/* <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <h6>{props.author}</h6> */}

      <img src={image} alt="" />
      <h3>{title}</h3>
      <h6>{author}</h6>
      {/* children prop */}
      {/* <p>{props.children}</p> */}
      {/* <p>{props.job}</p>
      <p>{props.discription}</p>
      <p>{props.number}</p> */}
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
