import Layout from "@/component/Layout";
import FooterShop from "@/component/shop/footer";
import HeaderShop from "@/component/shop/header";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import location from "/public/assets/icons/location.svg";
import phone from "/public/assets/icons/bxs_phone.svg";
import clock from "/public/assets/icons/bi_clock-fill.svg";

export default function Contact() {
  const router = useRouter();
  const path =
    router.pathname.replace(/^\//, "").charAt(0).toUpperCase() +
    router.pathname.slice(2);
  return (
    <div className="container mx-auto bg-white h-screen">
      <Layout>
        <HeaderShop path={path} />
        <div className="grid grid-cols-2 md:p-8 ">
          <div className="col-span-2 text-black mx-8 my-4 md:my-8">
            <p className="font-bold text-[0.7rem] md:text-[2rem] text-center">
              Get In Touch With Us
            </p>
            <p className="font-light text-[0.4rem] md:text-[1rem] text-center">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className="text-black my-4">
            <div className="text-[0.4rem] md:text-[1rem] mx-8">
              <div className="flex">
                <Image
                  src={location}
                  width={8}
                  height={8}
                  alt="location-icon"
                  className="mr-[5px] md:mr-[20px] md:w-[20px]"
                />
                <div>
                  <p className="font-bold">Address</p>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex my-4">
                <Image
                  src={phone}
                  width={8}
                  height={8}
                  alt="location-icon"
                  className="mr-[5px] md:mr-[20px] md:w-[20px]"
                />
                <div>
                  <p className="font-bold">Phone</p>
                  <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex">
                <Image
                  src={clock}
                  width={8}
                  height={8}
                  alt="location-icon"
                  className="mr-[5px] md:mr-[20px] md:w-[20px]"
                />
                <div>
                  <p className="font-bold">Working Time</p>
                  <p>
                    Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mx-4 text-[0.4rem] md:text-[1rem]">
              <div className="my-2">
                <label
                  htmlFor="name"
                  className="block mb-[5px] md:mb-2 font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 text-gray-900 rounded-lg block w-full p-[5px] md:p-[10px]"
                  required
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="email"
                  className="block mb-[5px] md:mb-2 font-medium text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 text-gray-900 rounded-lg block w-full p-[5px] md:p-[10px]"
                  required
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="subject"
                  className="block mb-[5px] md:mb-2 font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="border border-gray-300 text-gray-900 rounded-lg block w-full p-[5px] md:p-[10px]"
                  required
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="message"
                  className="block mb-[5px] md:mb-2 font-medium text-gray-900"
                >
                  Message
                </label>
                <input
                  type="text"
                  id="message"
                  className="border border-gray-300 text-gray-900 rounded-lg block w-full p-[5px] md:p-[10px] h-[40px] md:h-[100px]"
                  required
                />
              </div>
              <div className="flex justify-center items-center text-white w-full my-4 md:my-8">
                <button
                  className="rounded py-[3px] px-8 text-[0.5rem] md:text-[1rem] bg-[#B88E2F] md:text-[1rem]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <FooterShop />
      </Layout>
    </div>
  );
}
