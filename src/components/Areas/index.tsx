import useFetch from "@/hooks/useFetch";
import AreaItem from "./AreaItem";
import type IArea from "./IArea";
import { type IResponse } from "./IArea";

const Areas = () => {
  const [response, loading] = useFetch<IResponse>(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    { meals: [] }
  );

  if (loading)
    return (
      <div className="ml-16 flex h-full w-full items-center justify-center">
        <p className="text-4xl">Loading...</p>
      </div>
    );

  const areas: IArea[] = response.meals;

  const items = (
    <div className="mx-auto grid h-full w-[90%] grid-cols-1 items-center gap-8 px-3 pl-16 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {areas.map((area) => (
        <AreaItem strArea={area.strArea} key={area.strArea} />
      ))}
    </div>
  );

  return items;
};

export default Areas;
