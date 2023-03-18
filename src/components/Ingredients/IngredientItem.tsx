import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type IIngredient from "./IIngredient";

const IngredientItem = ({ strIngredient, strDescription }: IIngredient) => {
  const query = `/filtered-meals/i=${strIngredient}`;

  return (
    <Link className="flex flex-col items-center" href={query}>
      <FontAwesomeIcon
        icon={faDrumstickBite}
        className="cursor-pointer text-[4rem]"
      />
      <h2 className="text-[1.75rem]">{strIngredient}</h2>
      <p>{strDescription.split(" ").slice(0, 20).join(" ")}</p>
    </Link>
  );
};

export default IngredientItem;
