import Image from "next/image";
import React from "react";
import { Carousel } from "antd";
import { IProduct } from "../../../../types/interface";
import Link from "next/link";

interface ProductList {
  productList: IProduct[]
}

const PageEmpat: React.FC<ProductList> = ({productList}) => {
  return (
    <div className="w-full h-auto bg-[#FCF8F3]">
      <div className="grid grid-cols-3 py-4 px-8 gap-2 md:gap-8 md:px-[60px]">
        <div className="text-black flex flex-col justify-center">
          <p className="font-bold text-[0.8rem] md:text-[2rem] lg:text-[3rem] leading-tight">
            50+ Beautiful Product inspiration
          </p>
          <p className="font-light text-[0.4rem] md:text-[1rem] lg:text-[2rem]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Link href={"/shop"}>
            <button className="bg-[#B88E2F] w-[60px] md:w-[200px] h-[18px] md:h-[50px] md:my-8 text-[0.4rem] md:text-[1rem] text-white font-semibold">
              Explore More
            </button>
          </Link>
        </div>
        <div className="col-span-2 md:mt-8">
          <Carousel autoplay>
            {productList.map((items:IProduct, index:number) => (
              <div key={index}>
                <img
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                  src={items?.image[0]}
                  alt={items?.label}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PageEmpat;
