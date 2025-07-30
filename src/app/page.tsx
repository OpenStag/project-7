// src/app/page.tsx
import React from 'react';
import BrowseByCategory from '../components/BrowseByCategory'; // The extension is now .tsx, but Next.js handles it

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <BrowseByCategory />
      </main>
    </div>
  );
}