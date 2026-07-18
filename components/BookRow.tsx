import type { Book } from "@/lib/books";
import BookCard from "./BookCard";

export default function BookRow({ title, books }: { title: string; books: Book[] }) {
  return (
    <div className="mb-10">
      <h3 className="font-display font-bold text-lg text-board-dark mb-4">{title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book, i) => (
          <BookCard key={book.id} book={book} index={i} hideCover />
        ))}
      </div>
    </div>
  );
}
