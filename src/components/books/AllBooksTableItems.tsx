import { Link } from "react-router";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../../redux/api/booksApi";

const AllBooksTableItems = () => {
  const { data: books, isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  console.log(books);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this book?")) {
      await deleteBook(id);
      alert("Deleted successfully");
    }
  };

  if (isLoading) return <p>Loading books...</p>;

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">All Books</h2>
      <table className="min-w-full border border-gray-200 shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Author</th>
            <th className="px-4 py-2 border">Genre</th>
            <th className="px-4 py-2 border">ISBN</th>
            <th className="px-4 py-2 border">Copies</th>
            <th className="px-4 py-2 border">Availability</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book._id} className="text-center">
              <td className="px-4 py-2 border">{book.title}</td>
              <td className="px-4 py-2 border">{book.author}</td>
              <td className="px-4 py-2 border">{book.genre}</td>
              <td className="px-4 py-2 border">{book.isbn}</td>
              <td className="px-4 py-2 border">{book.copies}</td>
              <td className="px-4 py-2 border">
                {book.available ? (
                  <span className="text-green-600 font-semibold">
                    Available
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Unavailable
                  </span>
                )}
              </td>
              <td className="px-4 py-2 border space-x-2">
                <Link
                  to={`/edit-book/${book._id}`}
                  className="text-blue-500 underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="text-red-500 underline"
                >
                  Delete
                </button>
                <Link
                  to={`/borrow/${book._id}`}
                  className="text-green-600 underline"
                >
                  Borrow
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooksTableItems;
