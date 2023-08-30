import React, { useState } from "react";
import Image from "next/image";
import { IProduct } from "../../../../types/interface";
import star from "/public/assets/icons/star.svg";

interface IDetailInfo {
  product: IProduct;
  handleCart: (qty: number) => void;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
}

export default function DetailInfo({product, handleCart, qty, setQty}: IDetailInfo) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  return (
    <>
      <p className="font-semibold text-[1rem] md:text-[3rem]">
        {product?.label}
      </p>
      {product?.discount === 0 ? (
        <div>
          <p className="text-[0.5rem] md:text-[1.5rem] md:my-2 font-semibold">
            Rp {new Intl.NumberFormat("id-ID").format(product?.realPrice)}
          </p>
        </div>
      ) : (
        <div className="flex w-full">
          <p className="text-[0.5rem] md:text-[1.5rem] md:my-2 font-semibold">
            Rp{" "}
            {new Intl.NumberFormat("id-ID").format(
              product?.discount || 0
            )}
          </p>

          <p className="text-[0.5rem] md:text-[1.5rem] md:my-2 line-through font-light text-gray-500 mx-2">
            Rp{" "}
            {new Intl.NumberFormat("id-ID").format(
              product?.realPrice || 0
            )}
          </p>
        </div>
      )}
      <div className="flex items-center my-2">
        {Array.from({ length: product?.rating || 0 }).map((_, index) => (
          <Image
            key={index}
            src={star}
            width={10}
            height={10}
            alt="rating"
            className="mr-1 md:w-[20px] md:h-[20px]"
          />
        ))}
        <p className="text-[0.5rem] md:text-[1rem]">
          {product?.rating}/5
        </p>
      </div>
      <div>
        <p className="text-[0.5rem] md:text-[1rem] my-4">
          {product?.desc}
        </p>
      </div>
      <div className="my-2 md:my-8">
        <p className="text-[0.4rem] md:text-[0.8rem] font-light">Size :</p>
        {product?.size && (
          <div className="flex">
            {product?.size.map((item, index) => (
              <button
                key={index}
                className={`${
                  item === size ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
                }  w-[15px] md:w-[30px] h-[15px] md:h-[30px] overflow-hidden mr-2 md:mr-4`}
                onClick={() => {
                  setSize(item);
                }}
              >
                <p className="text-[0.4rem] md:text-[0.8rem]">{item}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      {product?.color && (
        <div className="my-2 md:my-8">
          <p className="text-[0.4rem] md:text-[0.8rem] font-light">Color :</p>
          <div className="flex">
            {product.color.map((item, index) => (
              <button
                key={index}
                style={{ backgroundColor: item }}
                className={`w-[15px] md:w-[30px] h-[15px] md:h-[30px] overflow-hidden mr-2 md:mr-4 rounded-full ${
                  item === color && "border-4 border-blue-500"
                }`}
                onClick={() => {
                  setColor(item);
                }}
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex md:my-8">
        <div className="flex justify-center items-center border w-[60px] md:w-[90px] h-[25px] md:h-[50px] overflow-hidden rounded md:mr-8">
          <button
            onClick={() => setQty(qty - 1)}
            disabled={qty === 0}
            className="text-[0.5rem] md:text-[1rem]"
          >
            -
          </button>
          <p className="text-[0.5rem] mx-[15px] md:mx-[20px] md:text-[1rem]">
            {qty}
          </p>
          <button
            onClick={() => setQty(qty + 1)}
            className="text-[0.5rem] md:text-[1rem]"
          >
            +
          </button>
        </div>
        <div className="flex justify-center items-center border w-[60px] md:w-[120px] h-[25px] md:h-[50px] overflow-hidden rounded mx-2">
          <button
            className="text-[0.5rem] md:text-[1rem]"
            onClick={() => handleCart(qty)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
