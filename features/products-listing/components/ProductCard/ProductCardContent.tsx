type Props = {
  title: string;
  description: string;
};
const ProductCardContent = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-[var(--neutral_800)] line-clamp-1">{title}</h2>
      <p className="text-[var(--neutral_500)] text-sm font-medium line-clamp-2">{description}</p>
    </div>
  );
};

export default ProductCardContent;
