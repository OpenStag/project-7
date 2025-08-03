import React from 'react';
import CategoryCard from './CategoryCard';
import { categories, Category } from '../data/categories';

const BrowseByCategory: React.FC = () => {
  return (
    <section className="bg-blue-200 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black leading-none text-center text-gray-800 mb-10 sm:mb-12">
          Browse by Category
        </h2>
        <div className="
          grid grid-cols-2 gap-6
          sm:grid-cols-3 sm:gap-8
          md:grid-cols-4 md:gap-10
          lg:gap-12
        ">
          {categories.map((category: Category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;