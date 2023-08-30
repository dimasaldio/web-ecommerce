/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IProduct } from "../../types/interface";
import Image from "next/image";
import share from "/public/assets/icons/gridicons_share.svg";
import like from "/public/assets/icons/Heart.svg";
import { useRouter } from "next/router";
import close from "/public/assets/icons/close.svg";

interface MappedProductitem {
  productList: IProduct[];
  room: string;
}

const MappedProduct: React.FC<MappedProductitem> = ({ productList, room }) => {
  const router = useRouter();
  const onClick = (label: string) => {
    router.push(`/shop/${label}`);
  };
  return (
    <>
      <div
        className={`${
          room === "" && "hidden"
        } flex items-center justify-center font-bold my-4 text-black text-[0.8rem] md:text-[1.2rem]`}
      >
        <p>{room}</p>
        <button
          className="mx-4"
          onClick={() => {
            router.push(`/shop`);
          }}
        >
          <Image src={close} height={15} width={15} alt="close" />
        </button>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 py-4 md:mb-8 mx-8 md:mx-[60px] text-black gap-2 md:gap-4 overflow-hidden">
        {productList.map((item: IProduct, index: number) => (
          <div key={index} className="bg-gray-100 relative overflow-hidden">
            <div className="absolute w-full h-full opacity-0 hover:opacity-100 bg-black bg-opacity-60">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="mb-4 md:mb-8">
                  <button
                    onClick={() => onClick(item?.label)}
                    className="w-[100px] h-[30px] md:w-[250px] md:h-[60px] bg-white text-[0.6rem] md:text-[1.2rem] text-[#B88E2F] font-semibold"
                  >
                    Detail Product
                  </button>
                </div>
                <div className="flex">
                  <div className="flex">
                    <Image
                      src={share}
                      width={10}
                      height={10}
                      alt="share-icon"
                      className="mr-[2px] md:w-[20px] md:h-auto"
                    />
                    <p className="text-white text-[0.6rem] md:text-[1.2rem]">
                      Share
                    </p>
                  </div>
                  <div className="flex mx-4">
                    <Image
                      src={like}
                      width={10}
                      height={10}
                      alt="share-icon"
                      className="mr-[2px] md:mr-[4px] md:w-[20px] md:h-auto"
                    />
                    <p className="text-white text-[0.6rem] md:text-[1.2rem]">
                      Like
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              {item?.discount !== 0 ? (
                <div className="absolute flex justify-center items-center bg-[#E97171] rounded-full w-[40px] md:w-[80px] h-[40px] md:h-[80px] text-[0.8rem] md:text-[1.5rem] text-white font-bold m-[3px] md:m-[20px]">
                  {`-${Math.round(
                    100 - (item?.discount / item?.realPrice) * 100
                  )}%`}
                </div>
              ) : (
                item?.new === true && (
                  <div className="absolute flex justify-center items-center bg-[#2EC1AC] rounded-full w-[40px] md:w-[80px] h-[40px] md:h-[80px] text-[0.8rem] md:text-[1.5rem] text-white font-bold m-[3px] md:m-[20px]">
                    New
                  </div>
                )
              )}
            </div>
            <div className="md:w-[400px] md:h-[350px] overflow-hidden w-[200px] h-[200px]">
              <img
                alt={item?.label}
                src={item?.image[0]}
                width={100}
                height={200}
                className="w-[200px] h-[200px] md:w-[400px] md:h-[350px]"
              />
            </div>

            <div className="m-[5px] md:m-[20px]">
              <p className="text-[1rem] md:text-[1.5rem] font-semibold">
                {item?.label}
              </p>
              <p className="text-[0.5rem] md:text-[1rem] font-light my-[3px]">
                {item?.desc}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {item?.discount === 0 ? (
                  <div>
                    <p className="text-[0.5rem] md:text-[1rem] md:my-2 font-semibold">
                      Rp{" "}
                      {new Intl.NumberFormat("id-ID").format(item?.realPrice)}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-left">
                      <p className="text-[0.5rem] md:text-[1rem] md:my-2 font-semibold">
                        Rp{" "}
                        {new Intl.NumberFormat("id-ID").format(item?.discount)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.5rem] md:text-[1rem] md:my-2 line-through font-light decoration-gray-500/30">
                        Rp{" "}
                        {new Intl.NumberFormat("id-ID").format(item?.realPrice)}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MappedProduct;
