import React from "react";
import { IProduct } from "../../../../types/interface";
import Link from "next/link";
import MappedProduct from "../../mappedProduct";

interface ProductList {
  productList: IProduct[]
  room: string;
}

const PageTiga: React.FC<ProductList> = ({
  productList,
}) => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="grid grid-cols-1 text-black pt-4">
        <p className="font-bold text-center text-[0.8rem] md:text-[2.5rem]">
          Our Products
        </p>
      </div>
      <MappedProduct productList={productList} room='' />
      <div className="text-[#B88E2F] flex justify-center items-center my-4">
        <Link href='/shop'>
          <button className="border-2 border-[#B88E2F] w-[200px] h-[40px]">
            <p>Show More</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageTiga;
