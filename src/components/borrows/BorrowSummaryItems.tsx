import { useGetBorrowSummaryQuery } from "../../redux/api/borrowApi";

type TBorrowSummary = {
  title: string;
  isbn: string;
  totalQuantity: number;
};

const BorrowSummaryItems = () => {
  const {
    data: summaryData = [],
    isLoading,
    error,
  } = useGetBorrowSummaryQuery();

  if (isLoading)
    return <p className="text-center mt-4">Loading borrow summary...</p>;
  if (error)
    return <p className="text-center text-red-600">Failed to load data</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Borrow Summary
      </h2>

      <table className="min-w-full border border-gray-200 shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Book Title</th>
            <th className="px-4 py-2 border">ISBN</th>
            <th className="px-4 py-2 border">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {summaryData.map((item: TBorrowSummary, idx: number) => (
            <tr key={idx} className="text-center">
              <td className="px-4 py-2 border">{item.title}</td>
              <td className="px-4 py-2 border">{item.isbn}</td>
              <td className="px-4 py-2 border font-semibold">
                {item.totalQuantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummaryItems;
