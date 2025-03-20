import useCartStore from '@/stores/cart-store/cart-store';

import type { CartProduct } from '@/features/my-cart/types';

import CartIcon from '@/components/Icons/CartIcon';

type Props = {
  product: CartProduct;
};

const ProductCardAction = ({ product }: Props) => {
  const { addToCart } = useCartStore();

  return (
    <div className="flex justify-between gap-2">
      <span className="text-[var(--purple_800)] font-bold">
        {product.price} <sub className="text-[var(--purple_400)]">EGP</sub>
      </span>
      <button
        className="w-8 h-8 rounded-4xl bg-[var(--purple_800)] hover:bg-[var(--purple_500)] text-[var(--neutral_100)] text-sm font-medium cursor-pointer flex justify-center items-center"
        onClick={() => {
          addToCart(product);
        }}
      >
        <CartIcon width={20} height={20} fill="var(--neutral_100)" />
      </button>
    </div>
  );
};

export default ProductCardAction;
