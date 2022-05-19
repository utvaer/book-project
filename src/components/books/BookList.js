import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import BookItem from "./BookItem";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBooks() {
      try {
        const res = await fetch(API_URL);
        if (res.ok) {
          const booksData = await res.json();
          console.log(booksData);
          setBooks(booksData);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getBooks();
  }, []);

  if (loading) {
    return <p>Books are on their way!</p>;
  }

  if (error) {
    <div>AN error has occurred.</div>;
  }
  return (
    <div className="books">
      {books.map((book) => {
        return (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            published={book.published}
          />
        );
      })}
    </div>
  );
}

export default BookList;
