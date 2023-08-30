import React, { useEffect, useState } from "react";
import FooterShop from "@/component/shop/footer";
import HeaderShop from "@/component/shop/header";
import { useRouter } from "next/router";
import Layout from "@/component/Layout";
import { ICountries, IProduct } from "../../../types/interface";
import FormCheckout from "@/component/checkout/form";
import { GetServerSideProps } from "next";
import axios from "axios";

interface ICheckout {
  countries: ICountries[]
}

export default function Checkout({countries} : ICheckout) {
  const router = useRouter();
  const path = router.asPath.charAt(1).toUpperCase() + router.asPath.slice(2);
  const [itemCart, setItemCart] = useState<IProduct | undefined>(undefined);
  const [qty, setQty] = useState('');
  const [subtotal, setSubtotal] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const itemCart = localStorage.getItem("itemCart") || ''
      setItemCart(JSON.parse(itemCart) || '');
      setQty(localStorage.getItem("qty") || '');
      setSubtotal(localStorage.getItem("subtotal") || '');
    }
  }, []);
  return (
    <div className="container bg-white">
      <Layout>
        <HeaderShop path={path} />
          <FormCheckout mappedListCountries={countries} itemCart={itemCart} qty={qty} subtotal={subtotal}/>
        <FooterShop />
      </Layout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  try {
    const res = await axios.get('https://private-cdabfa-dummydata1.apiary-mock.com/country') 
    const countries:ICountries[] = res.data;
    return {
      props: {
        countries
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        countries: [],
      },
    }
  }
}