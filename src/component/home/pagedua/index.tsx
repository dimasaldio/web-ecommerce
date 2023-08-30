/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { IRoom } from "../../../../types/interface";
import Link from "next/link";

interface RoomList {
  rooms: IRoom[]
}

const PageDua: React.FC<RoomList> = ({rooms}) => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="grid grid-cols-1 text-black py-4 md:py-8">
        <p className="font-bold text-center text-[0.8rem] md:text-[2.5rem]">
          Browse The Range
        </p>
        <p className="text-center text-[0.5rem] md:text-[1.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-3 py-4 mx-8 md:mx-[60px] text-black gap-4">
        {rooms.map((item, index) => (
          <div key={index}>
            <Link href={`/shop?room=${item.label}`}>
              <button>
                <img
                  alt={item.label}
                  src={item.image}
                  width={5000}
                  height={8000}
                  className="w-full h-auto"
                />
              </button>
            </Link>

            <p className="text-[0.6rem] md:text-[1.5rem] font-semibold text-center md:mt-8 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageDua;
