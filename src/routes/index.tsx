import { createBrowserRouter } from "react-router";
import App from "../App";
import AddBooks from "../pages/AddBooks";
import AllBooks from "../pages/AllBooks";
import BorrowBooks from "../pages/BorrowBooks";
import BorrowSummary from "../pages/BorrowSummary";
import EditBooks from "../pages/EditBooks";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/books",
        Component: AllBooks,
      },
      {
        path: "/create-book",
        Component: AddBooks,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
      {
        path: "/borrow/:bookId",
        Component: BorrowBooks,
      },
      {
        path: "/edit-book/:id",
        Component: EditBooks,
      },
    ],
  },
]);

export default router;
