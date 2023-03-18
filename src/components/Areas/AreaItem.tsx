import type IArea from "./IArea";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AreaItem = ({ strArea }: IArea) => {
  return (
    <div className="flex flex-col items-center">
      <FontAwesomeIcon
        icon={faHouseLaptop}
        className="cursor-pointer text-[4rem]"
      />
      <h2 className="text-[1.75rem]">{strArea}</h2>
    </div>
  );
};

export default AreaItem;
