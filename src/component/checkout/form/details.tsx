import React from 'react';
import { IProduct } from '../../../../types/interface';
import { Field, ErrorMessage } from "formik";

interface DetailsProps {
    itemCart: IProduct | undefined; 
    qty: string; 
    subtotal: string; 
  }

  const Details: React.FC<DetailsProps> = ({
    itemCart,
    qty,
    subtotal,
  }) => {
    return (
    <div>
      <div className="border-b pb-4">
        <table className="w-full text-[0.5rem] md:text-[1rem] text-left text-black ">
          <thead className="text-[0.6rem] md:text-[1.2rem] text-gray-700 bg-white">
            <tr>
              <th scope="col">Product</th>
              <th scope="col" className="text-right">
                Sub Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="py-[5px]">
                <span className="font-light">{itemCart?.label}</span>{" "}
                x {qty}
              </td>
              <td className="text-right">{subtotal}</td>
            </tr>
            <tr className="bg-white">
              <td className="py-[5px]">Subtotal</td>
              <td className="text-right">{subtotal}</td>
            </tr>
            <tr className="bg-white ">
              <td>Total</td>
              <td className=" py-[5px] text-right text-[0.6rem] md:text-[1.2rem] text-[#B88E2F] font-semibold">
                {subtotal}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-4">
      <div className="flex items-center mb-[10px]">
          <Field
            type="radio"
            id="typePaymentTransfer"
            name="typePayment"
            value="transfer"
            className="w-[10px] h-[10px] bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="typePaymentTransfer"
            className="ml-2 text-[0.5rem] md:text-[1rem] font-medium text-black"
          >
            Direct Bank Transfer
          </label>
        </div>
        <ErrorMessage name="typePayment" component="div" className="text-red-500 text-[0.5rem] md:text-[1rem]" />
        <p className="text-[0.4rem] md:text-[0.8rem] text-gray-400 font-light mb-[10px]">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <div className="flex items-center mb-[10px]">
          <Field
            type="radio"
            id="typePaymentTransfer"
            name="typePayment"
            value="cash"
            className="w-[10px] h-[10px] bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="typePaymentTransfer"
            className="ml-2 text-[0.5rem] md:text-[1rem] font-medium text-black"
          >
            Cash on Delivery
          </label>
        </div>
        <ErrorMessage name="typePayment" component="div" className="text-red-500 text-[0.5rem] md:text-[1rem]" />
        <p className="text-[0.4rem] md:text-[0.8rem] text-gray-500 py-[10px]">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="font-bold">privacy policy</span>.
        </p>
      </div>
    </div>
  );
}

export default Details