import useFetch from "@/hooks/useFetch";
import type IIngredient from "./IIngredient";
import { type IResponse } from "./IIngredient";
import IngredientItem from "./IngredientItem";

const Ingredients = () => {
  const [response, loading] = useFetch<IResponse>(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    { meals: [] }
  );

  if (loading)
    return (
      <div className="ml-16 flex h-full w-full items-center justify-center">
        <p className="text-4xl">Loading...</p>
      </div>
    );

  const areas: IIngredient[] = response.meals;

  const items = (
    <div className="mx-auto grid h-full w-[90%] grid-cols-1 items-center gap-8 px-3 pl-16 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {areas
        .filter((Ingredient) => Ingredient.strDescription)
        .map((ingredient) => (
          <IngredientItem
            strIngredient={ingredient.strIngredient}
            strDescription={ingredient.strDescription}
            strType={ingredient.strType}
            idIngredient={ingredient.idIngredient}
            key={ingredient.idIngredient}
          />
        ))}
    </div>
  );

  return items;
};

export default Ingredients;
