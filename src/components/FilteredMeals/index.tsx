import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import type IMeal from "./IMeal";
import { type IResponse } from "./IMeal";
import MealItem from "./MealItem";

const FilteredMeals = () => {
  const router = useRouter();
  const apiQuery = router.query.apiQuery;

  const [response, loading] = useFetch<IResponse>(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `https://www.themealdb.com/api/json/v1/1/filter.php?${apiQuery}`,
    { meals: [] }
  );

  if (loading)
    return (
      <div className="ml-16 flex h-full w-full items-center justify-center">
        <p className="text-4xl">Loading...</p>
      </div>
    );

  const meals: IMeal[] = response.meals;

  const items = (
    <div className="mx-auto grid h-full w-[90%] grid-cols-1 items-center gap-4 px-3 pl-16 pt-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {meals?.map((meal) => (
        <MealItem
          strMeal={meal.strMeal}
          strMealThumb={meal.strMealThumb}
          idMeal={meal.idMeal}
          key={meal.idMeal}
        />
      ))}
    </div>
  );

  return items;
};

export default FilteredMeals;
