import Link from "next/link";
import { useState } from "react";
import type IMeal from "./IMeal";

const MealItem = ({ strMeal, strMealThumb, idMeal }: IMeal) => {
  const [isHoveredOver, setIsHoveredOver] = useState(false);
  const dynamicStyle = isHoveredOver ? "top-0" : "top-[100%]";
  const url = `/meal/${idMeal}`;

  return (
    <Link
      className="relative flex w-[20rem] cursor-pointer items-center justify-center overflow-hidden rounded"
      onMouseOver={() => setIsHoveredOver(true)}
      onMouseLeave={() => setIsHoveredOver(false)}
      href={url}
    >
      <img src={strMealThumb} alt={strMeal} />
      <div
        className={`absolute left-0 flex h-full w-full flex-col justify-center overflow-hidden p-4 text-start font-medium transition-all ${dynamicStyle} bg-white/75 text-black`}
      >
        <h2 className="text-[2rem]">{strMeal}</h2>
      </div>
    </Link>
  );
};

export default MealItem;
