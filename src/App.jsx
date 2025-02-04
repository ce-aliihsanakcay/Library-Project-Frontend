import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router";
import Users from "./containers/users/Users";
import Books from "./containers/books/Books";
import BookDetails from "./containers/books/BookDetails";
import UserDetails from "./containers/users/UserDetails";

const App = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />

        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId/details" element={<UserDetails />} />

        <Route path="/books" element={<Books />} />
        <Route path=":bookId/details" element={<BookDetails />} />
      </Routes>
    </div>
  )
}

export default App;