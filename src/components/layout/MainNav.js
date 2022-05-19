import { NavLink } from "react-router-dom";
import BookList from "../books/BookList";
import Home from "../Home";

function MainNav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" element={<Home />}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" element={<BookList />}>
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
