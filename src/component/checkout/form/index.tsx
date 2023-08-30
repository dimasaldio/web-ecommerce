import React, { useState } from "react";
import { ICountries } from "../../../../types/interface";
import { message } from "antd";
import formsData from "@/data/formData.json";
import Details from "./details";
import { IProduct } from "../../../../types/interface";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormProps {
  mappedListCountries: ICountries[];
  itemCart: IProduct | undefined;
  qty: string;
  subtotal: string;
}

const FormCheckout: React.FC<FormProps> = ({
  mappedListCountries,
  itemCart,
  qty,
  subtotal,
}) => {
  const [formData, setFormData] = useState(formsData);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleCheckout = (values: any) => {
    const {
      firstName,
      lastName,
      country,
      companyName,
      townName,
      zipCode,
      province,
      phone,
      email,
    } = values;
    const billingDetails = {
      firstName,
      lastName,
      country,
      companyName,
      townName,
      zipCode,
      province,
      phone,
      email,
    };
    localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
    message.success("Pembelian berhasil", 1);
    window.open("/checkout/invoice", "_blank");
    window.location.href = "/";
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    country: Yup.string().required("Country is required"),
    townName: Yup.string().required("Town is required"),
    province: Yup.string().required("Province is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required"),
    typePayment: Yup.string().required("typePayment is required"),
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleCheckout}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-2 text-black p-4">
          <div className="flex flex-col">
            <p className="text-[1.2rem] font-bold">Billing Details</p>
            <div className="grid grid-cols-2 gap-2 my-2 md:my-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="my-2 md:my-4">
              <label
                htmlFor="companyName"
                className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
              >
                Company Name (Optional)
              </label>
              <Field
                type="text"
                name="companyName"
                className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
                
              />
            </div>
            <div className="my-2 md:my-4">
              <label
                htmlFor="country"
                className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
              >
                Country / Region
              </label>
              <Field
                as="select"
                id="country"
                name="country"
                className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
              >
                <option value="" disabled>
                  Select Country
                </option>
                {mappedListCountries.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="my-2 md:my-4">
              <label
                htmlFor="townName"
                className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
              >
                Town City
              </label>
              <Field
                type="text"
                name="townName"
                className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
                
              />
              <ErrorMessage
                name="townName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="my-2 md:my-4">
              <label
                htmlFor="province"
                className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
              >
                Province
              </label>
              <Field
                type="text"
                name="province"
                className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
                
              />
              <ErrorMessage
                name="province"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="my-2 md:my-4">
              <label
                htmlFor="zipCode"
                className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
              >
                Zip Code
              </label>
              <Field
                type="number"
                name="zipCode"
                className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
              />
              <ErrorMessage
                name="zipCode"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="my-2 md:my-4">
              <label
                htmlFor="phone"
                className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
              >
                Phone Number
              </label>
              <Field
                type="number"
                name="phone"
                className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="my-2 md:my-4">
              <label
                htmlFor="email"
                className="block mb-[5px] md:mb-2 text-[0.5rem] md:text-[1rem] font-medium text-gray-900"
              >
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                className="border border-gray-300 text-gray-900 text-[0.5rem] md:text-[1rem] rounded-lg block w-full p-[5px] md:p-[10px]"
                
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="m-4 md:m-[30px]">
            <Details
              itemCart={itemCart}
              qty={qty}
              subtotal={subtotal}
            />
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="border border-black rounded py-[3px] px-8 text-[0.5rem] md:text-[1rem]"
                disabled={isSubmitting}
              >
                Place Order
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormCheckout;
