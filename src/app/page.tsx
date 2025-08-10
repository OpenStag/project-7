import BrowseByCategory from "../components/BrowseByCategory"

import Home from '../components/Home'; // Correctly import your component
import ContactUs from "../components/contactus"

export default function Page() {
  return (
    <div>
      <Home />
      <ContactUs/>
      <BrowseByCategory />
    </div>
  );
}