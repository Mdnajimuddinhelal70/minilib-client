# Library Management System

This is a simple full-stack Library Management System where users can view, add, update, delete, and borrow books. It covers both frontend and backend functionality and uses modern tools like RTK Query for API handling.

## Features Implemented

- View a list of all books
- Add a new book
- Edit and delete existing books
- Borrow a selected book
- View a summary of all borrowed books

## Tech Stack

**Frontend:**

- React + TypeScript
- Tailwind CSS
- React Router
- Redux Toolkit & RTK Query
- React Hot Toast for notifications

**Backend:**

- Node.js with Express.js
- TypeScript
- MongoDB (using Mongoose)
- dotenv for environment config
- CORS enabled for API access

## Progress So Far

- Backend API for books and borrow features completed
- RTK Query integrated for fetching and mutating data
- All core pages like `/books`, `/create-book`, `/edit-book/:id`, `/borrow/:id`, and `/borrow-summary` are functional
- Basic validation added for borrowing logic
- UI is minimal but responsive and functional
