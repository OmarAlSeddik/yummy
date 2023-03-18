import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type IArea from "./IArea";

const AreaItem = ({ strArea }: IArea) => {
  const query = `/filtered-meals/a=${strArea}`;

  return (
    <Link className="flex flex-col items-center" href={query}>
      <FontAwesomeIcon
        icon={faHouseLaptop}
        className="cursor-pointer text-[4rem]"
      />
      <h2 className="text-[1.75rem]">{strArea}</h2>
    </Link>
  );
};

export default AreaItem;
