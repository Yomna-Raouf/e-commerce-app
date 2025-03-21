import useCartStore from '@/stores/cart-store/cart-store';

import CartItemCard from '../CartItemCard/CartItemCard';

const CartList = () => {
  const { cart } = useCartStore();

  return (
    <div className="flex flex-col gap-4 grow">
      {cart?.map((cartItem) => <CartItemCard key={cartItem.id} cartItem={cartItem} />)}
    </div>
  );
};

export default CartList;
