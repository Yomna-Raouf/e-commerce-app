import useCartStore from '@/stores/cart-store/cart-store';

import type { CartProduct } from '@/features/my-cart/types';

import CartIcon from '@/components/Icons/CartIcon';
import Button from '@/components/Button/Button';
import CartActionButton from '@/components/CartActionButton/CartActionButton';

type Props = {
  product: CartProduct;
};

const ProductCardAction = ({ product }: Props) => {
  const { addToCart, cart } = useCartStore();

  const inCartProduct = cart.find(({ id }) => id === product.id);

  return (
    <div className="flex justify-between gap-2">
      <span className="text-[var(--purple_800)] font-bold">
        {product.price} <sub className="text-[var(--purple_400)]">EGP</sub>
      </span>

      {inCartProduct ? (
        <CartActionButton product={product} />
      ) : (
        <Button
          customClass="w-8 h-8"
          onClick={() => {
            addToCart(product);
          }}
        >
          <CartIcon width={20} height={20} fill="var(--neutral_100)" />
        </Button>
      )}
    </div>
  );
};

export default ProductCardAction;
