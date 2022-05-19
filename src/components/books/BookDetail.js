import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constants/api";

function BookDetail() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate(-1);
  }
  const url = API_URL + "/" + id;

  useEffect(() => {
    async function getBookDetails() {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setBook(data);
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getBookDetails();
  }, [url]);

  if (loading) {
    return <div>More info on its way</div>;
  }
  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <p>by: {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail;
