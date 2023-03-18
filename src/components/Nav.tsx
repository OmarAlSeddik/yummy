import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faGlobe,
  faShareNodes,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const divDynamic = isExpanded ? "left-0" : "left-[-16rem]";
  const icon = isExpanded ? faX : faBars;
  const linksDynamic = isExpanded ? "right-0" : "right-[10rem]";

  return (
    <nav
      className={`fixed z-10 flex h-full transition-all duration-500 ${divDynamic}`}
    >
      <div className="flex h-full w-[16rem] flex-col justify-between bg-yummy-black p-6">
        <ul className="flex flex-col gap-4 pt-2">
          <li>
            <Link
              href="/search"
              className={`relative transition-all delay-500 ${linksDynamic}`}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className={`relative transition-all delay-[550ms] ${linksDynamic}`}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/areas"
              className={`relative transition-all delay-[600ms] ${linksDynamic}`}
            >
              Area
            </Link>
          </li>
          <li>
            <Link
              href="/ingredients"
              className={`relative transition-all delay-[650ms] ${linksDynamic}`}
            >
              Ingredients
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`relative transition-all delay-[700ms] ${linksDynamic}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-1 pb-4">
          <div className="flex gap-1">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-4 cursor-pointer"
              onClick={() => setIsExpanded((prev) => !prev)}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-4 cursor-pointer"
              onClick={() => setIsExpanded((prev) => !prev)}
            />
            <FontAwesomeIcon
              icon={faGlobe}
              className="w-4 cursor-pointer"
              onClick={() => setIsExpanded((prev) => !prev)}
            />
          </div>
          <p>Copyright Â© 2019 All Rights Reserved.</p>
        </div>
      </div>
      <div className="flex w-[4.125rem] flex-col items-center justify-between bg-white px-2 py-6 text-black">
        <Image src="/favicon.ico" width={100} height={100} alt="Logo" />
        <FontAwesomeIcon
          icon={icon}
          className="h-8 w-8 cursor-pointer"
          onClick={() => setIsExpanded((prev) => !prev)}
        />
        <div className="flex flex-col items-center gap-1">
          <FontAwesomeIcon icon={faGlobe} className="w-4 cursor-pointer" />
          <FontAwesomeIcon icon={faShareNodes} className="w-4 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
