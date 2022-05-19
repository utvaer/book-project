import { Link } from "react-router-dom";
function BookItem({ id, title, published }) {
  return (
    <Link to={`/books/detail/${id}`}>
      <h4>{title}</h4>
      <p>{published}</p>
    </Link>
  );
}

export default BookItem;
