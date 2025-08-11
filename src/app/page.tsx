
import BrowseByCategory from "../components/BrowseByCategory"
import Home from '../components/Home'; 
import ContactUs from "../components/contactus"
import FeaturedBooks from "../components/FeaturedBooks";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";

export default function Page() {
    const booksData = [
    { title: "Book One", description: "Book one hello", image: "/image/1.jpeg" },
    { title: "Book Two", description: "About Book two hello", image: "/image/2.jpeg" },
    { title: "Book Three", description: "Hi suddhrr", image: "/image/3.jpeg" },
  ];
  return (
    <div>
      <Nav />
      <Home />
      <FeaturedBooks books={booksData} />
      <BrowseByCategory />
      <Testimonial /> 
      <ContactUs/>
      <Footer/>
    </div>  
  );
}