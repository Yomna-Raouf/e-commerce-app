import type { CartProduct } from '../types';

import CardWrapper from '@/components/CardWrapper/CardWrapper';
import CartActionButton from '@/components/CartActionButton/CartActionButton';
import CartItemCardContent from './CartItemCardContent';

type Props = {
  cartItem: CartProduct;
};

const CartItemCard = ({ cartItem }: Props) => {
  return (
    <CardWrapper
      layout="horizontal"
      image={
        <img
          className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] drop-shadow-md"
          alt={cartItem.title}
          width={100}
          height={100}
          src={cartItem.image}
        />
      }
      content={<CartItemCardContent price={cartItem.price} title={cartItem.title} />}
      actions={[<CartActionButton key="cart-action" product={cartItem} />]}
    />
  );
};

export default CartItemCard;
