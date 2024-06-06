export const BookCard = ({ book, onAddToBookshelf }) => {

    const handleAddToBookshelf = () => {
        onAddToBookshelf(book);
        alert('Book Added Successfully!!')
      };
    return (
        <div className="w-full ml-2 mr-2 mb-4">
        <div className="border border-gray-300 rounded overflow-hidden shadow-md">
          <div className="px-6 py-4 text-center">
            <div className="font-semibold text-white text-lg mb-2">Book Title : {book.title} </div>
            <p className="font-semibold text-white text-base">Author : {book.author_name}</p>
            <p className="font-semibold text-white text-base">First Published Year : {book.first_publish_year}</p>
          </div>
          <div className="flex justify-around mb-4">
                <button className=" p-2 bg-lime-300 text-black border border-gray-300 rounded" onClick={handleAddToBookshelf }>Add to BookShelf</button>
          </div>
        </div>
      </div>
      
    )
}