// src/app/page.js (or page.tsx)

// Import the Navbar component. Adjust the path if your components folder is not directly under src/.
import Navbar from './components/Navbar';
// Import the CSS Module for the Home page itself.
import styles from './page.module.css'; 
export default function Home() {
  return (
    
    <div className={styles.container}>
      {/* The Navbar component is now self-contained in terms of its width and centering */}
      <Navbar />

      {/* Main content area (e.g., "Welcome to Book Haven" section) */}
      <main className={styles.mainContent}>
        {/* Main heading */}
        <h1 className={styles.heading}>
          Welcome to Book Haven
        </h1>
        {/* Sub-heading/description */}
        <p className={styles.description}>
          Discover stories that inspire, educate, and entertain.
        </p>
        {/* "Explore Book" button */}
        <button className={styles.button}>
          Explore Book
        </button>
      </main>

      {/* You can add a footer or other sections here */}
    </div>
  );
}
