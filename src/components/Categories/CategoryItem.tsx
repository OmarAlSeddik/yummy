import Link from "next/link";
import { useState } from "react";
import type ICategory from "./ICategory";

const CategoryItem = ({
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}: ICategory) => {
  const [isHoveredOver, setIsHoveredOver] = useState(false);
  const dynamicStyle = isHoveredOver ? "top-0" : "top-[100%]";
  const query = `/filtered-meals/c=${strCategory}`;

  return (
    <Link
      className="relative flex w-[20rem] cursor-pointer items-center justify-center overflow-hidden rounded"
      onMouseOver={() => setIsHoveredOver(true)}
      onMouseLeave={() => setIsHoveredOver(false)}
      href={query}
    >
      <img src={strCategoryThumb} alt={strCategoryDescription} />
      <div
        className={`absolute left-0 flex h-full w-full flex-col items-center overflow-hidden p-4 text-center transition-all ${dynamicStyle} bg-white/75 text-black`}
      >
        <h2 className="text-[2rem]">{strCategory}</h2>
        <p>{strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
