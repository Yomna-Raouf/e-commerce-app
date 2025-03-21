import PageHead from '@/components/SEO/PageHead/PageHead';
import CartList from '@/features/my-cart/CartList/CartList';
import CartPriceCard from '@/features/my-cart/CartPriceCard/CartPriceCard';
import React from 'react';

const MyCart = () => {
  return (
    <>
      <PageHead seoTitle="my-cart | checkout" seoDescription="checkout" />
      <h1 className="hidden">Checkout</h1>
      <div className="flex gap-4 flex-col lg:flex-row">
        <CartList />
        <CartPriceCard />
      </div>
    </>
  );
};

export default MyCart;
