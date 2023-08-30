import React from 'react'
import rightArrow from "/public/assets/icons/right-arrow-backup-2-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";

interface IBreadcrumbs {
    path: string | string[]
}

const Breadcrumbs: React.FC<IBreadcrumbs> = (props) => {
  return (
    <div className="bg-[#F9F1E7] w-full grid grid-cols-1 py-4 md:py-8 px-8">
          <div className="flex">
            <Link href={"/"}>
              <p className="font-semibold text-[#9F9F9F] text-[0.8rem] md:text-[1rem] md:mr-4">Home</p>
            </Link>
            <Image
              src={rightArrow}
              width={10}
              height={10}
              alt="arrow"
              className="mx-2"
            />
            <Link href={"/shop"}>
              <p className="font-semibold text-[#9F9F9F] text-[0.8rem] md:text-[1rem] md:mx-4">Shop</p>
            </Link>
            <Image
              src={rightArrow}
              width={10}
              height={10}
              alt="arrow"
              className="mx-2"
            />
            <div className="border-l border-[#9F9F9F] ml-4">
              <p className="font-semibold text-black text-[0.8rem] md:text-[1rem] md:mx-4 ">
                {props.path}
              </p>
            </div>
          </div>
        </div>
  )
}

export default Breadcrumbs