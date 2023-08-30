/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

interface ISliderDisplay {
  gambar: string[];
}
const SliderDisplay = ({ gambar }: ISliderDisplay) => {
  const [imgUrl, setImgUrl] = useState('');
  const onClick = (index: number) => {
    setImgUrl(gambar[index])
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-full">
        {gambar.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <button
              onClick={() => onClick(index)}
              className={`${
                item === imgUrl && "border-2 border-blue-500"
              } md:my-4 my-2`}
            >
              <div className="bg-[#F9F1E7]">
                <img
                  src={item}
                  alt={`gambar-${index}`}
                  width={20}
                  height={20}
                  className="md:w-[75px] md:h-[75px] w-[20px] h-[20px]"
                />
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="col-span-3 flex justify-center items-center w-full h-full">
        <div className="w-full h-[auto] bg-[#F9F1E7]" id="gambar-besar">
          <img
            src={imgUrl==='' ? gambar[0] : imgUrl}
            width={50}
            height={50}
            alt="gambar-full"
            className="w-[150px] h-[150px] md:w-[800px] md:h-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default SliderDisplay;
