
import BrowseByCategory from "../components/BrowseByCategory"
import Home from '../components/Home'; // Correctly import your component
import ContactUs from "../components/contactus"
import FeaturedBooks from "../components/FeaturedBooks";

export default function Page() {
    const booksData = [
    { title: "Book One", description: "Book one hello", image: "/image/1.jpeg" },
    { title: "Book Two", description: "About Book two hello", image: "/image/2.jpeg" },
    { title: "Book Three", description: "Hi suddhrr", image: "/image/3.jpeg" },
  ];
  return (
    <div>
      <Home />
      <FeaturedBooks books={booksData} />
      <BrowseByCategory />
      <ContactUs/>
    </div>
  );
}