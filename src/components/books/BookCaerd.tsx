// components/BookCard.tsx

import { Link } from "react-router";
import type { TBook } from "../../types/book";

interface Props {
  book: TBook;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600">By {book.author}</p>
        <p className="text-sm text-gray-600 mt-1">Genre: {book.genre}</p>
        <p className="text-sm text-gray-600">ISBN: {book.isbn}</p>
        <p className="text-sm text-gray-600">Copies: {book.copies}</p>
        <p
          className={`text-sm font-semibold mt-2 ${
            book.available ? "text-green-600" : "text-red-600"
          }`}
        >
          {book.available ? "Available" : "Unavailable"}
        </p>
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <Link
          to={`/borrow/${book._id}`}
          className="text-blue-500 hover:underline"
        >
          Borrow
        </Link>
        <Link
          to={`/edit-book/${book._id}`}
          className="text-gray-500 hover:underline"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
