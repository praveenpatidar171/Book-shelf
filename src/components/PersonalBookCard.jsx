export const PersonalBookCard = ({ book }) => {

    return (
        <div className="w-full ml-2 mr-2 mb-4 bg-teal-400 ">
            <div className="border border-gray-300 rounded overflow-hidden shadow-md">
                <div className="px-6 py-4 text-center">
                    <div className="font-semibold text-lg mb-2">Book Title : {book.title} </div>
                    <p className="font-semibold text-base">Author : {book.author_name}</p>
                    <p className="font-semibold text-base">First Published Year : {book.first_publish_year}</p>
                </div>
            </div>
        </div>

    )
}