import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import type IMeal from "./IMeal";
import { type IResponse } from "./IMeal";

const Meal = () => {
  const router = useRouter();
  const id = router.query.id;

  const [response, loading] = useFetch<IResponse>(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    { meals: [] }
  );

  if (loading)
    return (
      <div className="ml-16 flex h-full w-full items-center justify-center">
        <p className="text-4xl">Loading...</p>
      </div>
    );

  const meal: IMeal | undefined = response.meals && response.meals[0];
  const sourceHref = meal?.strSource ? meal.strSource : "";
  const youtubeHref = meal?.strYoutube ? meal.strYoutube : "/";

  return (
    <div className="mx-auto flex min-h-screen w-[90%] flex-wrap items-start justify-center gap-8 px-3 pl-16 pt-6">
      <div className="flex w-[20rem] flex-col">
        <img src={meal?.strMealThumb} alt={meal?.strMeal} className="rounded" />
        <h1 className="text-[2rem] font-medium">{meal?.strMeal}</h1>
      </div>
      <div className="flex w-[40rem] flex-col gap-1">
        <h2 className="text-[2rem] font-medium">Instructions</h2>
        <p>{meal?.strInstructions}</p>
        <h3 className="text-[1.75rem] font-medium">Area: {meal?.strArea}</h3>
        <h3 className="text-[1.75rem] font-medium">
          Category: {meal?.strCategory}
        </h3>
        <h3 className="text-[1.75rem] font-medium">Recipes:</h3>
        <div className="flex flex-wrap gap-4">{/* WIP */}</div>
        <h3 className="text-[1.75rem] font-medium">Tags:</h3>
        <div className="flex flex-wrap gap-4">{/* WIP */}</div>
        <div className="flex gap-4">
          <Link
            className="rounded bg-yummy-green py-1.5 px-3"
            href={sourceHref}
            target="_blank"
          >
            Source
          </Link>
          <Link
            className="rounded bg-yummy-red-1 py-1.5 px-3"
            href={youtubeHref}
            target="_blank"
          >
            YouTube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
