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
  updateCartProductCount: (_count: number, _id: number) => void; // increment or decrement
  removeFromCart: (_id: number) => void;
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
          cart: [...get().cart, product],
          cartCount: get().cartCount + 1,
          totalPrice: 0
        })),
      updateCartProductCount: (count, id) =>
        set(() => ({
          cart: get().cart.map((cartItem) =>
            cartItem.id === id ? { ...cartItem, count } : cartItem
          )
        })),
      removeFromCart: (id) =>
        set(() => ({ cart: get().cart.filter((cartItem) => cartItem.id !== id) }))
    }),
    { name: 'cart-store' }
  )
);

export default useCartStore;

// TODO:
// my-cart page client side
// add to cart CartActions
// cart item quatity
// cart modeling
// cart ui
// app head
// cart types
// re calculate total price with cart updates
// handle images error state
// store persistance done
// add page h1 seo content
