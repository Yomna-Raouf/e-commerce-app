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
    <div className="flex justify-between items-center gap-2">
      <span className="text-[var(--purple_800)] font-bold text-sm md:text-base">
        {product.price} <span className="text-[var(--purple_400)] text-xs md:text-sm">LE</span>
      </span>

      {inCartProduct ? (
        <CartActionButton product={product} />
      ) : (
        <Button
          name="add to cart"
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
