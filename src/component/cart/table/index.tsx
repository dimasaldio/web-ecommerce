/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  itemCart: string | null;
  qty: string;
  subtotal: string;
}

const CartItem: React.FC<IProps> = ({
  itemCart,
  qty,
  subtotal,
}) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 text-black my-8 p-4">
      <div className="md:col-start-2 col-span-3 md:col-span-4">
        <div className="flex">
          <table className="w-full text-[0.5rem] md:text-[1rem] text-left text-gray-500">
            <thead className="text-black bg-[#F9F1E7] text-center">
              <tr>
                <th scope="col" className="p-2 md:p-4">
                  Product name
                </th>
                <th scope="col" className="p-2 md:p-4">
                  Price
                </th>
                <th scope="col" className="p-2 md:p-4">
                  Quantity
                </th>
                <th scope="col" className="p-2 md:p-4">
                  Subtotal
                </th>
              </tr>
            </thead>
            {itemCart && (
              <tbody>
                <tr className="bg-white border-b text-center md:text-[1rem]">
                  <td className="p-2 md:p-4 ">
                    <div className="flex items-center justify-center">
                      <img
                        src={JSON.parse(itemCart).image[0]}
                        width={30}
                        height={30}
                        alt="display"
                        className="mr-[3px] md:mr-4 md:w-[5rem] h-auto"
                      />
                      <p>{JSON.parse(itemCart).label}</p>
                    </div>
                  </td>
                  <td className="p-2 md:p-4">
                    {JSON.parse(itemCart).discount === 0
                      ? `Rp${" "}
                ${new Intl.NumberFormat("id-ID").format(
                  JSON.parse(itemCart).realPrice || 0
                )}`
                      : `Rp${" "}
                ${new Intl.NumberFormat("id-ID").format(
                  JSON.parse(itemCart).discount || 0
                )}`}
                  </td>
                  <td className="p-2 md:p-4">{qty}</td>
                  <td className="p-2 md:p-4">{subtotal}</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div className="md:col-span-2 bg-[#F9F1E7] text-[0.4rem] md:text-[1rem] ml-2 md:py-8">
        <p className="font-bold text-center">Cart Totals</p>
        <div className="grid grid-cols-5 my-8">
          <div className="col-start-2 col-span-3">
            <p className="my-2 md:my-4 font-bold">
              SubTotal :{" "}
              <span className="ml-[2px] md:ml-4 font-light">{subtotal}</span>
            </p>
          </div>
          <div className="col-start-2 col-span-3">
            <p className="font-bold">
              Total :{" "}
              <span className="text-[#B88E2F] ml-[2px] md:ml-4">
                {subtotal}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href={"/checkout"}>
            <button className="w-[60px] md:w-[150px] md:h-[40px] h-[20px] border border-black text-black rounded-full text-[0.5rem] md:text-[1rem] my-4">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
