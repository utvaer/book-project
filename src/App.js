import BookList from "./components/books/BookList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "./components/layout/MainNav";
import Home from "./components/Home";
import BookDetail from "./components/books/BookDetail";

function App() {
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="detail/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
