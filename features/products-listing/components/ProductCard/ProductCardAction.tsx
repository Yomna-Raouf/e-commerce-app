import useCartStore from '@/stores/cart-store/cart-store';

import type { CartProduct } from '@/features/my-cart/types';

import CartIcon from '@/components/Icons/CartIcon';
import DeleteIcon from '@/components/Icons/DeleteIcon';
import Button, { BUTTON_TYPE_CLASSES } from '@/components/Button/Button';

type Props = {
  product: CartProduct;
};

const ProductCardAction = ({ product }: Props) => {
  const { addToCart, removeFromCart, updateCartProductCount, cart } = useCartStore();

  const inCartProduct = cart.find(({ id }) => id === product.id);

  console.log({ inCartProduct });

  return (
    <div className="flex justify-between gap-2">
      <span className="text-[var(--purple_800)] font-bold">
        {product.price} <sub className="text-[var(--purple_400)]">EGP</sub>
      </span>

      {inCartProduct ? (
        <div className="w-28 h-8 rounded-4xl border border-[var(--purple_800)] flex items-center justify-between p-2">
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={() => {
              if (inCartProduct.count === 1) removeFromCart(inCartProduct.id, product.price);
              else updateCartProductCount(inCartProduct.id, inCartProduct.price, false);
            }}
          >
            {inCartProduct.count === 1 ? <DeleteIcon width={15} height={15} /> : '-'}
          </Button>
          <span className="text-[var(--purple_500)]">{inCartProduct.count}</span>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={() => {
              updateCartProductCount(inCartProduct.id, inCartProduct.price, true);
            }}
          >
            +
          </Button>
        </div>
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
