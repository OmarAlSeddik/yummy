import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import IMeal, { type IResponse } from "../FilteredMeals/IMeal";
import MealItem from "../FilteredMeals/MealItem";

const Search = () => {
  const [nameQuery, setNameQuery] = useState<string>("");
  const [letterQuery, setLetterQuery] = useState<string>("");
  const [response, setResponse] = useState<IResponse>({ meals: [] });

  const debouncedNameQuery = useDebounce(nameQuery);
  const debouncedLetterQuery = useDebounce(letterQuery);

  useEffect(() => {
    const fetchMeals = async () => {
      if (debouncedNameQuery !== "") {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedNameQuery}`
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: IResponse = await response.json();
        setResponse(data);
      }
      if (debouncedLetterQuery !== "") {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${debouncedLetterQuery.slice(
            0,
            1
          )}`
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: IResponse = await response.json();
        setResponse(data);
      }
    };
    void fetchMeals();
  }, [debouncedNameQuery, debouncedLetterQuery]);

  console.log(response);

  const meals: IMeal[] = response.meals;

  const inputStyle =
    "w-[15rem] bg-yummy-black rounded border-white border-[1px] py-1.5 px-3";

  return (
    <div className="ml-16 flex w-full flex-col items-center pt-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          className={inputStyle}
          placeholder="Search by name"
          onChange={(event) => {
            setNameQuery(event.target.value);
            setLetterQuery("");
          }}
        />
        <input
          type="text"
          className={inputStyle}
          placeholder="Search by first letter"
          onChange={(event) => {
            setLetterQuery(event.target.value);
            setNameQuery("");
          }}
        />
      </div>
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
    </div>
  );
};

export default Search;
