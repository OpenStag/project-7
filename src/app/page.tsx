import FeaturedBooks from "../components/FeaturedBooks";

export default function Home() {
  const booksData = [
    { title: "Book One", description: "Book one hello", image: "/image/1.jpeg" },
    { title: "Book Two", description: "About Book two hello", image: "/image/2.jpeg" },
    { title: "Book Three", description: "Hi suddhrr", image: "/image/3.jpeg" },
  ];

  return (
    <div>
      <FeaturedBooks books={booksData} />
    </div>
  );
}
