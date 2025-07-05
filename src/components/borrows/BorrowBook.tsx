import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { useBorrowBookMutation } from "../../redux/api/borrowApi";

const BorrowBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const availableCopies = 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (quantity > availableCopies) {
      toast.error("Quantity cannot exceed available copies!");
      return;
    }

    const borrowData = {
      book: bookId,
      quantity,
      dueDate,
    };

    try {
      await borrowBook(borrowData).unwrap();

      toast.success("Borrowed successfully!");
      navigate("/borrow-summary");
    } catch (err) {
      console.error(err);

      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 border p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Borrow Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Quantity</label>
          <input
            type="number"
            min={1}
            max={availableCopies}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border p-2 w-full rounded"
            required
          />
          <p className="text-sm text-gray-500">
            Available Copies: {availableCopies}
          </p>
        </div>

        <div>
          <label className="block mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Borrowing..." : "Borrow Now"}
        </button>
      </form>
    </div>
  );
};

export default BorrowBook;
