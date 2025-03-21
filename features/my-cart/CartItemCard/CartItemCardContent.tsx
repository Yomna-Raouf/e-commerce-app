type Props = {
  price: number;
  title: string;
};

const CartItemCardContent = ({ price, title }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-[var(--neutral_800)] line-clamp-2 text-sm md:text-base">
        {title}
      </h2>
      <p className="text-[var(--neutral_600)] text-sm font-medium">{price} LE</p>
    </div>
  );
};

export default CartItemCardContent;
