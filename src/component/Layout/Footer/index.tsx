import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-white">
      <div className="grid grid-cols-3 text-black py-4 px-8 gap-2">
        <div>
          <p className="font-bold text-[0.5rem] md:text-[2rem]">Funiro</p>
          <p className="font-light text-[0.4rem] md:text-[1rem] mt-4 mr-8">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <ul className="text-[0.4rem] md:text-[1rem]">
              <li className="font-light">Links</li>
              <li className="my-4 font-semibold">Home</li>
              <li className="my-4 font-semibold">Shop</li>
              <li className="my-4 font-semibold">About</li>
              <li className="font-semibold">Contact</li>
            </ul>
          </div>
          <div>
            <ul className="text-[0.4rem] md:text-[1rem]">
              <li className="font-light">Helps</li>
              <li className="my-4 font-semibold">Payment Options</li>
              <li className="my-4 font-semibold">Returns</li>
              <li className="font-semibold">Privacy Policies</li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="font-light text-[0.4rem] md:text-[1rem]">Newsletter</p>
          <input
            className="h-[8px] md:h-auto text-[0.3rem] md:text-[1rem] border-b-[1px] border-gray-400 mr-2 md:mt-4"
            placeholder="Enter Your Email Address"
          />
          <button className="border-b-[1px] h-[8px] md:h-auto text-[5px] md:text-[1rem] border-b-[1px] border-gray-400 font-semibold">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
