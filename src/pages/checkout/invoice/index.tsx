import React, { useEffect, useState } from "react";
import { IProduct } from "../../../../types/interface";
import { IBillingDetails } from "../../../../types/interface";

export default function Checkout() {
  const [billingDetails, setBillingDetails] = useState<IBillingDetails | null>(
    null
  );
  const [itemCart, setItemCart] = useState<IProduct | null>(null);
  const [qty, setQty] = useState("");
  const [subtotal, setSubtotal] = useState("");
  useEffect(() => {
    const storedBillingDetails = localStorage.getItem("billingDetails") || "";
    const storedItemCart = localStorage.getItem("itemCart") || "";
    const storedQty = localStorage.getItem("qty") || "";
    const storedSubtotal = localStorage.getItem("subtotal") || "";

    setBillingDetails(JSON.parse(storedBillingDetails));
    setItemCart(JSON.parse(storedItemCart));
    setQty(storedQty);
    setSubtotal(storedSubtotal);
  }, []);
  return (
    <div className="container bg-white p-8 h-screen">
        <div className="border-2 m-8 md:m-12">
          <div className="grid grid-cols-2 text-black p-4">
            <div className="col-start-2 text-right">
              <p className="font-bold md:text-[2rem]">INVOICE</p>
              <p className="text-[0.5rem] md:text-[1rem]">#1024</p>
            </div>
            <div>
              <table className="md:w-[50%] w-full text-[0.5rem] md:text-[1rem] font-light text-left text-black">
                <tbody>
                  <tr className="bg-white">
                    <td className="font-bold">BILLED TO:</td>
                    <td>{billingDetails?.companyName.toUpperCase()}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="font-bold">PAY TO:</td>
                    <td>
                      {billingDetails?.firstName.toUpperCase()} {billingDetails?.lastName.toUpperCase()}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td></td>
                    <td>
                      {billingDetails?.selectedTown.toUpperCase()}
                      {", "}
                      {billingDetails?.selectedZipCode.toUpperCase()}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td></td>
                    <td>{billingDetails?.selectedProvince.toUpperCase()}{", "}
                      {billingDetails?.selectedCountry.toUpperCase()}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="font-normal">Payment Type:</td>
                    <td>{billingDetails?.typePayment.toUpperCase()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-1 text-black p-4">
            <div className="flex items-center mb-8 mx-8">
              <table className="w-full text-[0.5rem] md:text-[1rem] text-left text-black">
                <thead className="uppercase border-b-2 border-black">
                  <tr>
                    <th scope="col" className="py-4">
                      Product
                    </th>
                    <th scope="col" className="py-4">
                      Qty
                    </th>
                    <th scope="col" className="py-4">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="py-4">{itemCart?.label.toUpperCase()}</td>
                    <td className="py-4">{qty}</td>
                    <td className="py-4">{subtotal}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 font-bold">TOTAL</td>
                    <td className="py-4"></td>
                    <td className="py-4">{subtotal}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-[0.5rem] md:text-[1rem] font-light text-black">
              <p>
                Payment is required within 14 business days of invoice date.
                Please send remmittance to hello@furnira.co.id
              </p>
              <p className="my-4">Thank you for your business</p>
            </div>
          </div>
        </div>
    </div>
  );
}
