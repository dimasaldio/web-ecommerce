import React from "react";

import PageSatu from "@/component/home/pagesatu";
import PageDua from "@/component/home/pagedua";
import PageTiga from "@/component/home/pagetiga";
import PageEmpat from "@/component/home/pageEmpat";
import Layout from "@/component/Layout";
import { IRoom } from "../../types/interface";
import { IProduct } from "../../types/interface";
import axios from "axios";
import { GetServerSideProps } from "next";

interface IHome {
  products : IProduct[]
  rooms: IRoom[]
  slicedMappedListProducts: IProduct[]
}

const Home: React.FC<IHome> = ({products, rooms, slicedMappedListProducts}) => {
  return (
    <div className="bg-white mx-auto container">
      <Layout>
      <PageSatu />
      <PageDua rooms={rooms} />
      <PageTiga productList={slicedMappedListProducts} room='' />
      <PageEmpat productList={products} />
      </Layout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  try {
    const res = await axios.get('https://private-cdabfa-dummydata1.apiary-mock.com/product')
    const response = await axios.get('https://private-cdabfa-dummydata1.apiary-mock.com/room')  
    const products:IProduct[] = res.data;
    const slicedMappedListProducts = products.slice(0, 8)
    const rooms:IRoom[] = response.data;
    return {
      props: {
        products,
        rooms,
        slicedMappedListProducts
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        products: [],
      },
    }
  }
}

export default Home