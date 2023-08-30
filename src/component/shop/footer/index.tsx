import React from 'react'
import trophy from "/public/assets/icons/trophy 1.svg";
import guarantee from "/public/assets/icons/guarantee.svg";
import shipping from "/public/assets/icons/shipping.svg";
import cs from "/public/assets/icons/customer-support.svg";
import Image from "next/image";

export default function FooterShop(){
  return (
    <div className="hidden md:grid grid-cols-4 text-black bg-[#FAF3EA] w-full py-8 md:px-[50px] md:py-[100px] px-0">
          <div className="flex items-center justify-center">
            <Image
              src={trophy}
              width={25}
              height={25}
              alt="trophy"
              className="mr-2 w-[30] h-[30] md:w-[50px] md:h-[50px]"
            />
            <div>
              <p className="font-bold text-[0.6rem] md:text-[1.3rem]">
                High Quality
              </p>
              <p className="font-light text-[0.5rem] md:text-[1rem]">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={guarantee}
              width={25}
              height={25}
              alt="guarantee"
              className="mr-2 w-[30] h-[30] md:w-[50px] md:h-[50px]"
            />
            <div>
              <p className="font-bold text-[0.6rem] md:text-[1.3rem]">
                Warranty Protection
              </p>
              <p className="font-light text-[0.5rem] md:text-[1rem]">
                Over 2 years
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={shipping}
              width={25}
              height={25}
              alt="shipping"
              className="mr-2 w-[30] h-[30] md:w-[50px] md:h-[50px]"
            />
            <div>
              <p className="font-bold text-[0.6rem] md:text-[1.3rem]">
                Free Shipping
              </p>
              <p className="font-light text-[0.5rem] md:text-[1rem]">
                Order over 150 $
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={cs}
              width={25}
              height={25}
              alt="cs"
              className="mr-2 w-[30] h-[30] md:w-[50px] md:h-[50px]"
            />
            <div>
              <p className="font-bold text-[0.6rem] md:text-[1.3rem]">
                24 / 7 Support
              </p>
              <p className="font-light text-[0.5rem] md:text-[1rem]">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
  )
}
