interface CategoryCardProps {
  name: string;
  icon: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <div
      className="
        w-[243px] h-[156px] rounded-[15px]
        bg-white shadow-md hover:shadow-lg transition-shadow duration-300
        flex flex-col items-center justify-center p-4 cursor-pointer text-center group
      "
    >
      <div className="text-5xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-4xl font-black leading-none text-center text-gray-800">
        {name}
      </div>
    </div>
  )
}

export default CategoryCard
