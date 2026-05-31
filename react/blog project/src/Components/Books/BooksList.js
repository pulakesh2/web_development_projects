import React, { useEffect } from "react";
import Book from "./Book";
import style from "./BookList.module.css";
import useFetch from "../../useHooks/use-Fetch";

const BooksList = () => {
  const { dataBase, isLoading, fetchData } = useFetch();

  useEffect(() => {
    fetchData("Books");
  }, []);

  const bookList = dataBase.map((book) => {
    return (
      <Book
        key={Math.random().toString()}
        description={book.description}
        title={book.title}
      />
    );
  });

  return (
    <ul className={style.bookList__container}>
      {isLoading ? (
        <span
          className={`loading loading-spinner text-primary loading-lg ${style.isLoading}`}
        ></span>
      ) : (
        bookList
      )}
    </ul>
  );
};

export default BooksList;
