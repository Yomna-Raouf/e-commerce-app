import useCartStore from '@/stores/cart-store/cart-store';

import Button from '@/components/Button/Button';
import CardWrapper from '@/components/CardWrapper/CardWrapper';

type PriceDetailProps = {
  title: string;
  amount: number;
};

const PriceDetail = ({ title, amount }: PriceDetailProps) => {
  return (
    <p className="text-[var(--neutral_800)] text-sm font-medium flex justify-between py-2">
      <span>{title}:</span> <span className="text-[var(--purple_800)]">{amount} LE</span>
    </p>
  );
};

const CartPriceCard = () => {
  const { totalPrice } = useCartStore();

  return (
    <CardWrapper
      wrapperCustomClass="w-full h-64 lg:w-1/3"
      content={
        <div className="flex flex-col gap-4 w-full h-full">
          <h2 className="text-[var(--purple_800)] font-bold text-center"> Checkout</h2>
          <div className="w-full h-[1px] bg-[var(--neutral_400)]"></div>

          <div className="flex flex-col justify-between grow">
            <div>
              <PriceDetail title="Subtotal" amount={totalPrice} />
              <PriceDetail title="Shipping" amount={20} />
              <PriceDetail title="Total" amount={+(totalPrice + 20).toFixed(2)} />
            </div>

            <Button name="checkout" customClass="w-full h-8">
              Checkout
            </Button>
          </div>
        </div>
      }
    />
  );
};

export default CartPriceCard;
