import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const listMenu = ["Home", "Shop", "Contact"];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white py-2">
      <div className="mx-auto grid grid-cols-4 gap-2 items-center">
        <div className="col-span-1 justify-center ml-4 flex">
          <Image
            width={50}
            height={50}
            className="h-[20px] w-full md:w-[50px] md:h-[50px] md:mr-[20px] mr-[5px]"
            alt="logo"
            src="/assets/icons/Meubel House_Logos-05.png"
          />
          <p className="text-black font-bold text-[1rem] md:text-[2.5rem]">Furnira</p>
        </div>
        <div className="col-start-4 flex md:hidden justify-center">
          <button className="">
            <Image
              width={50}
              height={50}
              alt="menu"
              src="/assets/icons/menu-svgrepo-com.svg"
              onClick={handleClick}
            />
          </button>
        </div>
        <div className="ml-[50px]">
  <ul className="md:flex hidden">
    {listMenu.map((item: string, index: number) => (
      <li key={index}>
        {item === "Home" ? (
          <Link href="/">
          <p
            className="my-2 md:mx-[50px] text-black font-bold text-[1.2rem] hover:text-gray-500"
            aria-current="page"
          >
            {item}
          </p>
          </Link>
          
        ) : (
          <Link href={`/`+item.toLowerCase()}>
          <p
            className="my-2 md:mx-[50px] text-black font-bold text-[1.2rem] hover:text-gray-500"
            aria-current="page"
          >
            {item}
          </p>
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>

      </div>
      <div className="grid grid-cols-4">
        {isOpen && (
          <div className="w-full col-start-4">
            <ul className="flex flex-col">
              {listMenu.map((item: string, index: number) => (
                <li key={index}>
                  <a
                    href={`/` + item}
                    className="block py-2 text-black"
                    aria-current="page"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
