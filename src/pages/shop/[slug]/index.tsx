import React, { useState } from "react";

import Layout from "@/component/Layout";
import Breadcrumbs from "@/component/detail-product/breadcrumbs";
import { IProduct } from "../../../../types/interface";
import SliderDisplay from "@/component/detail-product/slider-display";
import DetailInfo from "@/component/detail-product/detail-info";
import Description from "@/component/detail-product/description";
import PageTiga from "@/component/home/pagetiga";
import ShoppingCart from "@/component/detail-product/shopping-cart";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface IDetailProduct {
  productsSliced: IProduct[];
  productsFound: IProduct;
  query: string
}

export default function DetailProduct({productsSliced, productsFound, query}:IDetailProduct) {
  const [cart, setCart] = useState<boolean>(false);
  const [qty, setQty] = useState(1);
  const [itemCart, setItemCart] = useState<IProduct | undefined>(undefined);

  const handleCart = (qty: number) => {
    setCart(true);
    setItemCart(productsFound);
    setQty(qty);
    localStorage.setItem("itemCart", JSON.stringify(itemCart));
  };
  return (
    <div className="container mx-auto bg-white relative">
      {itemCart && (
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          setItemCart={setItemCart}
          itemCart={itemCart}
          qty={qty}
        />
      )}
      <Layout>
        {query && <Breadcrumbs path={query} />}
        <div className="grid md:grid-cols-4 grid-cols-4 text-black py-4 px-8">
          <div className="grid grid-cols-4 col-span-2 h-full">
            <SliderDisplay gambar={productsFound?.image}/>
          </div>
          <div className="w-full col-span-2 mx-4 md:ml-[60px]">
            {productsFound && (
              <DetailInfo
                product={productsFound}
                handleCart={handleCart}
                qty={qty}
                setQty={setQty}
              />
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-1 text-black py-4 px-8 border-t">
          <Description gambar={productsFound.image}/>
        </div>
        <PageTiga productList={productsSliced} room="" />
      </Layout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { query } = context;

    const res = await axios.get(
      "https://private-cdabfa-dummydata1.apiary-mock.com/product"
    );
    const products: IProduct[] = res.data;
    const productsSliced: IProduct[] =products.slice(0, 4);
    const productsFound: IProduct[] = res.data.find(
      (product: IProduct) => product.label === query.slug
    );
    return {
      props: {
        products,
        productsSliced,
        productsFound,
        query: query.slug
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
        productsSliced: [],
        productsFound: [],
      },
    };
  }
};
