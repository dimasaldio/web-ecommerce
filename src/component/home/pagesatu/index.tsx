import Link from "next/link";
import React from "react";

export default function PageSatu() {
  const backgroundImageStyle = {
    backgroundImage: `url('/background-cover.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="w-full overflow-hidden" style={backgroundImageStyle}>
      <div className="grid grid-cols-2 text-black">
        <div className="col-start-2 grid grid-rows-4 gap-4 mx-8 md:mx-[60px] lg:mx-[100px]">
          <div className="row-start-2 row-span-2 h-[100px] bg-[#FFF3E3] md:h-[350px] md:w-auto overflow-hidden">
            <div className="m-4 md:my-[50px] md:mx-8">
              <p className="text-[0.3rem] font-semibold md:text-[1rem]">
                News Arrival
              </p>
              <p className="text-[0.5rem] md:text-[2.5rem] font-bold text-[#B88E2F] pr-4 leading-tight">
                Discover Our New Collection
              </p>
              <p className="text-[0.4rem] tracking-tight md:text-[1.5rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link href={'/shop'}>
              <button className="bg-[#B88E2F] w-[60px] md:w-[120px] h-[20px] md:h-[40px] mt-2 md:mt-4 lg:mt-8">
                <p className="text-[0.4rem] md:text-[1rem] text-[#ffffff]">
                  Buy Now
                </p>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
