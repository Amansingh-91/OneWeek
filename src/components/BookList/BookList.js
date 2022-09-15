import React from "react";
import { Book } from "./Book";
import { books } from "./books";
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
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

// we can only do default export one time per file
export default BookList;
