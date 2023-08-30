import Layout from "@/component/Layout";
import React from "react";

import { IProduct } from "../../../types/interface";
import MappedProduct from "@/component/mappedProduct";
import { useRouter } from "next/router";
import FooterShop from "@/component/shop/footer";
import HeaderShop from "@/component/shop/header";
import PaginationShop from "@/component/shop/pagination";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";

interface IShop {
  room: string;
  currentPage: number;
  totalPages: number;
  slicedMappedListProducts: IProduct[];
}

const Shop: React.FC<IShop> = ({
  room,
  currentPage,
  slicedMappedListProducts,
  totalPages,
}) => {
  const router = useRouter();
  const path =
    router.pathname.replace(/^\//, "").charAt(0).toUpperCase() +
    router.pathname.slice(2);

  const handlePageChange = (newPage: number) => {
    room !== ""
      ? router.push(`/shop?room=${room}&page=${newPage}`)
      : router.push(`/shop?page=${newPage}`);
  };

  return (
    <div className="bg-white">
      <Layout>
        <HeaderShop path={path} />
        <MappedProduct productList={slicedMappedListProducts} room={room} />
        <PaginationShop
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
        <FooterShop />
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const room = context.query.room || "";
    const currentPage = Number(context.query.page) || 1;
    const startIndex = (currentPage - 1) * 12;
    const endIndex = startIndex + 12;
    const res = await axios.get(
      "https://private-cdabfa-dummydata1.apiary-mock.com/product"
    );
    const products: IProduct[] = res.data;
    const productsSliced: IProduct[] = products.slice(startIndex, endIndex);
    const itemsCart: IProduct[] = res.data.filter(
      (product: IProduct) => product.room === room
    );
    const totalProducts = room === "" ? products.length : itemsCart.length;
    const slicedMappedListProducts =
      room === "" ? productsSliced : itemsCart.slice(startIndex, endIndex);

    const totalPages = Math.ceil(totalProducts / 12);
    return {
      props: {
        room,
        currentPage,
        slicedMappedListProducts,
        totalPages,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};

export default Shop;
