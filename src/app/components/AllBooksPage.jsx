"use client";
import { useEffect, useState } from "react";

export default function AllBooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // এখানে তুমি তোমার backend API থেকে ডাটা ফেচ করবে
    // আপাতত dummy data ব্যবহার করছি
    const dummyBooks = [
      {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover:
          "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        cover:
          "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 3,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        cover:
          "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
      },
    ];
    setBooks(dummyBooks);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">All Books</h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-600">No books available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
