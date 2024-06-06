import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookCard } from "../components/BookCard";
import axios from "axios";

export const BookSearch = () => {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const navigate = useNavigate();

      // Function to add a book to the personal bookshelf
    const addToBookshelf = (book) => {
    const updatedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    updatedBookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };


    useEffect(() => {

        const handleSearch = async () => {
            try {
                const response = await axios.get(`https://openlibrary.org/search.json?q=${search}&limit=10&page=1`);
                setResult(response.data.docs);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        }

        handleSearch();

    }, [search])

    return (
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg min-h-screen">
            <h1 className="text-4xl font-bold text-white text-center mb-4">Book-Library</h1>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border text-center border-gray-300 rounded"
                    placeholder="Enter book name"
                />
            </div>
            <div className="flex justify-around mb-4">
                <button className="p-1 bg-slate-500 text-white border border-gray-300 rounded" onClick={() => navigate('/user')}>MY BOOKS</button>
            </div>
            <hr />
            <div className=" grid grid-cols-3 justify-items-stretch  mt-4">

                {result.map((book, index) => (
                     <div className="mr-2">
                        <BookCard key={index} book={book} onAddToBookshelf={addToBookshelf}  />
                     </div>
                ))}
            </div>

        </div>

    )
}