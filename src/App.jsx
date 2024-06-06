import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BookSearch } from "./pages/BookSearch"
import { PersonalBookshelfPage } from "./pages/PersonalBookshelfPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookSearch />} />
        <Route path="/user" element={<PersonalBookshelfPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
