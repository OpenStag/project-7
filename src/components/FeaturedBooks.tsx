import "./styls.css";

export default function FeaturedBooks({ books }: { books: any[] }) {
  return (
    <section className="featured-section">
      <h2>Featured Books</h2>
      <div className="book-grid">
        {books.map((book, i) => (
          <div key={i} className="book-card">
            <img src={book.image} alt={book.title} />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
