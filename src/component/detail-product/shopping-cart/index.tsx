/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from "next/image";
import close from "/public/assets/icons/close.svg";
import { IProduct } from '../../../../types/interface';
import Link from 'next/link';

interface IShoppingCart {
    cart : boolean;
    setCart : React.Dispatch<React.SetStateAction<boolean>>;
    setItemCart: React.Dispatch<React.SetStateAction<IProduct | undefined>>;
    itemCart : IProduct
    qty: number
  }
  
  export default function ShoppingCart(props: IShoppingCart) {
    const subtotal = props.itemCart?.discount === 0
    ? `Rp${" "}
    ${new Intl.NumberFormat("id-ID").format(
      props.qty * props.itemCart?.realPrice || 0
    )}`
    : `Rp${" "}
    ${new Intl.NumberFormat("id-ID").format(
      props.qty * props.itemCart?.discount || 0
    )}`
  return (
    <div
        className={`w-full h-full z-50 bg-black bg-opacity-50 absolute ${
          props.cart === false && "hidden"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="col-start-2 md:col-start-3 w-full h-auto bg-white text-black">
            <div className="flex my-2 pb-4 border-b">
              <p className="mx-auto text-[0.7rem] md:text-[2rem] font-bold">Shopping Cart</p>
              <button
                onClick={() => {
                    props.setCart(false);
                }}
                className="mr-2"
              >
                <p className="mx-auto text-[0.7rem] md:text-[1.5rem] font-bold">X</p>
              </button>
            </div>
            {props.itemCart && (
              <>
                <div className="flex m-2 p-2">
                  <div className="rounded overflow-hidden">
                    <img
                      src={props.itemCart?.image[0]}
                      width={50}
                      height={50}
                      alt="foto-produk"
                      className='md:w-[100px] h-auto'
                    />
                  </div>
                  <div className="text-[0.6rem] md:text-[1rem] mx-auto md:ml-8 font-semibold">
                    <p className="font-bold text-[0.7rem] md:text-[1.5rem]">{props.itemCart?.label}</p>
                    <div className="flex">
                      <p className="">{props.qty}</p>
                      <p className="mx-2">*</p>
                      <p className="text-[#B88E2F]">
                        {props.itemCart?.discount === 0
                          ? `Rp${" "}
                      ${new Intl.NumberFormat("id-ID").format(
                        props.itemCart?.realPrice || 0
                      )}`
                          : `Rp${" "}
                      ${new Intl.NumberFormat("id-ID").format(
                        props.itemCart?.discount || 0
                      )}`}
                      </p>
                      <button
                        className="ml-[8px] md:ml-[80px]"
                        onClick={() => {
                            props.setItemCart(undefined);
                        }}
                      >
                        <img src={close} width={10} height={10} alt="close" className='md:w-[20px] h-auto' />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-[0.6rem] md:text-[1.4rem] flex items-center justify-center w-full border-t my-4">
                  <p className="text-black mr-4 font-bold md:mt-4">Sub Total : </p>
                  <p className="text-[#B88E2F] md:mt-4">
                    {subtotal}
                  </p>
                </div>
                <div className='flex justify-center items-center my-4 md:my-8'>
                  <Link href={'/cart'}>
                  <button onClick={()=>{
                    localStorage.setItem('itemCart', JSON.stringify(props.itemCart))
                    localStorage.setItem('qty', JSON.stringify(props.qty))
                    localStorage.setItem('subtotal', subtotal)
                  }} className='w-[80px] md:w-[120px] md:h-[30px] h-[20px] border border-black text-black rounded-full text-[0.5rem] md:text-[1rem]'>
                      Cart
                  </button>
                  </Link>
                 
                </div>
              </>
            )}
          </div>
        </div>
      </div>
  )
}
