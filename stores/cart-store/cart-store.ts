import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { CartProduct } from '@/features/my-cart/types';

type CartState = {
  cart: CartProduct[];
  cartCount: number;
  totalPrice: number;
};

type CartActions = {
  addToCart: (_product: CartProduct) => void;
  updateCartProductCount: (_id: number, _price: number, _isIncrementing: boolean) => void;
  removeFromCart: (_id: number, _price: number) => void;
};

type CartStore = CartState & CartActions;

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      totalPrice: 0,
      cartCount: 0,
      addToCart: (product) =>
        set(() => ({
          cart: [...get().cart, { ...product, count: 1 }],
          cartCount: get().cartCount + 1,
          totalPrice: get().totalPrice + product.price
        })),

      updateCartProductCount: (id, price, isIncrementing) =>
        set(() => ({
          cart: get().cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, count: isIncrementing ? cartItem.count + 1 : cartItem.count - 1 }
              : cartItem
          ),
          cartCount: get().cartCount,
          totalPrice: isIncrementing ? get().totalPrice + price : get().totalPrice - price
        })),

      removeFromCart: (id, price) =>
        set(() => ({
          cart: get().cart.filter((cartItem) => cartItem.id !== id),
          cartCount: get().cartCount - 1,
          totalPrice: get().totalPrice - price
        }))
    }),
    { name: 'cart-store' }
  )
);

export default useCartStore;

// TODO:
// handle images error state
