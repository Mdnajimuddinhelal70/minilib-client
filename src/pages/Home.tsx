import BookCard from "../components/books/BookCaerd";
import { useGetBooksQuery } from "../redux/api/booksApi";

const Home = () => {
  const { data: books, isLoading } = useGetBooksQuery();

  if (isLoading) return <p className="text-center mt-10">Loading books...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
