import useCartStore from '@/stores/cart-store/cart-store';

import type { CartProduct } from '@/features/my-cart/types';

import DeleteIcon from '@/components/Icons/DeleteIcon';
import Button, { BUTTON_TYPE_CLASSES } from '@/components/Button/Button';

type Props = {
  product: CartProduct;
};

const CartActionButton = ({ product }: Props) => {
  const { removeFromCart, updateCartProductCount, cart } = useCartStore();

  const inCartProduct = cart.find(({ id }) => id === product.id);

  if (inCartProduct)
    return (
      <div className="w-[70px] xl:w-28 h-8 rounded-4xl border border-[var(--purple_800)] flex items-center justify-between p-2">
        <Button
          name="Remove"
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => {
            if (inCartProduct.count === 1) removeFromCart(inCartProduct.id, product.price);
            else updateCartProductCount(inCartProduct.id, inCartProduct.price, false);
          }}
        >
          {inCartProduct.count === 1 ? <DeleteIcon width={15} height={15} /> : '-'}
        </Button>
        <span className="text-[var(--purple_500)] text-sm md:text-base">{inCartProduct.count}</span>
        <Button
          name="add"
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => {
            updateCartProductCount(inCartProduct.id, inCartProduct.price, true);
          }}
        >
          +
        </Button>
      </div>
    );
};

export default CartActionButton;
