import { useEffect, useState } from 'react';
import { PersonalBookCard } from '../components/PersonalBookCard';

export const PersonalBookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    // Load bookshelf from localStorage on component mount
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (

    <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg min-h-screen">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Personal-BookShelf</h1>
      <hr />
      <div className=" grid grid-cols-3 justify-items-stretch mt-4">
        {bookshelf.map((book, index) => (
          <div className='mr-2'><PersonalBookCard key={index} book={book} /></div>
        ))}
      </div>

    </div>
  );
};
