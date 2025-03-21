import React from 'react';

import type { CartProduct } from '../types';

import CardWrapper from '@/components/CardWrapper/CardWrapper';
import CartActionButton from '@/components/CartActionButton/CartActionButton';

type Props = {
  cartItem: CartProduct;
};

const CartItemCard = ({ cartItem }: Props) => {
  return (
    <CardWrapper
      layout="horizontal"
      image={
        <img
          className="w-[100px] h-[100px] drop-shadow-md"
          alt={cartItem.title}
          width={100}
          height={100}
          src={cartItem.image}
        />
      }
      content={
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-[var(--neutral_800)] line-clamp-2">{cartItem.title}</h2>
          <p className="text-[var(--neutral_500)] text-sm font-medium">{cartItem.price} EGP</p>
        </div>
      }
      actions={[<CartActionButton key="cart-action" product={cartItem} />]}
    />
  );
};

export default CartItemCard;
