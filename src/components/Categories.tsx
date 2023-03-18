import useFetch from "@/hooks/useFetch";
import type ICategory from "src/types/ICategory";
import CategoryItem from "./CategoryItem";

interface IResponse {
  categories: ICategory[];
}

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
    <div className="mx-auto flex h-full w-full flex-wrap justify-center gap-8 px-3 pl-16 pt-6">
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
