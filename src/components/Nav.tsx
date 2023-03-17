import {
  faBars,
  faGlobe,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const Nav = () => {
  return (
    <div className="flex h-full w-[4.125rem] flex-col items-center justify-between bg-white px-2 py-6 text-black ">
      <Image src="/favicon.ico" width={100} height={100} alt="Logo" />
      <FontAwesomeIcon icon={faBars} className="h-8 w-8 cursor-pointer" />
      <div className="flex flex-col items-center gap-1">
        <FontAwesomeIcon icon={faGlobe} className="w-4 cursor-pointer" />
        <FontAwesomeIcon icon={faShareNodes} className="w-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
