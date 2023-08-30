import React, { useEffect, useState } from "react";
import Layout from "@/component/Layout";
import HeaderShop from "@/component/shop/header";
import FooterShop from "@/component/shop/footer";
import { useRouter } from "next/router";

import CartItem from "@/component/cart/table";

export default function Cart() {
  const router = useRouter();
  const path = router.asPath.charAt(1).toUpperCase() + router.asPath.slice(2);
  const [itemCart, setItemCart] = useState('');
  const [qty, setQty] = useState('');
  const [subtotal, setSubtotal] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setItemCart(localStorage.getItem("itemCart") || '');
      setQty(localStorage.getItem("qty") || '');
      setSubtotal(localStorage.getItem("subtotal") || '');
    }
  }, []);
 
  return (
    <div className="container mx-auto bg-white relative">
      <Layout>
        <HeaderShop path={path} />
        {subtotal && qty && <CartItem itemCart={itemCart} qty={qty} subtotal={subtotal} />}
        <FooterShop />
      </Layout>
    </div>
  );
}
