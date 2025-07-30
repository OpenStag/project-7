import React from 'react';

interface CategoryCardProps {
  name: string;
  icon: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <div className="
      flex flex-col items-center justify-center
      p-4 bg-white rounded-xl shadow-md
      hover:shadow-lg transition-shadow duration-300
      cursor-pointer
      text-center
      h-36 sm:h-40 md:h-48 lg:h-52
      group
    ">
      <div className="text-5xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-xl sm:text-2xl font-semibold text-gray-800">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;