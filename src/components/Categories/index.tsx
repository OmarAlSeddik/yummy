import type ICategory from "./ICategory";
import { type IResponse } from "./ICategory";
import useFetch from "@/hooks/useFetch";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const [response, loading] = useFetch<IResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    { categories: [] }
  );

  if (loading)
    return (
      <div className="ml-16 flex h-full w-full items-center justify-center">
        <p className="text-4xl">Loading...</p>
      </div>
    );

  const categories: ICategory[] = response.categories;

  const items = (
    <div className="mx-auto grid h-full w-[90%] grid-cols-1 items-center gap-4 px-3 pl-16 pt-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {categories.map((category) => (
        <CategoryItem
          idCategory={category.idCategory}
          strCategory={category.strCategory}
          strCategoryDescription={category.strCategoryDescription}
          strCategoryThumb={category.strCategoryThumb}
          key={category.idCategory}
        />
      ))}
    </div>
  );

  return items;
};

export default Categories;
