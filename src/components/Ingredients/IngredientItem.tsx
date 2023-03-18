import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type IIngredient from "./IIngredient";

const IngredientItem = ({
  idIngredient,
  strIngredient,
  strDescription,
  strType,
}: IIngredient) => {
  return (
    <div className="flex flex-col items-center">
      <FontAwesomeIcon
        icon={faDrumstickBite}
        className="cursor-pointer text-[4rem]"
      />
      <h2 className="text-[1.75rem]">{strIngredient}</h2>
      <p>{strDescription.split(" ").slice(0, 20).join(" ")}</p>
    </div>
  );
};

export default IngredientItem;
