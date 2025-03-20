import CardWrapper from '@/components/CardWrapper/CardWrapper';
import ProductCardContent from './ProductCardContent';
import ProductCardAction from './ProductCardAction';

type Props = {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
};

// TODO: investigate when to use img vs next Image component
const ProductCard = ({ image, title, description, price, id }: Props) => {
  return (
    <CardWrapper
      image={
        <img
          className="w-[200px] h-[200px] drop-shadow-md"
          alt={title}
          width={200}
          height={200}
          src={image}
        />
      }
      content={<ProductCardContent title={title} description={description} />}
      actions={[
        <ProductCardAction
          key="cart-action"
          product={{
            title,
            image,
            price,
            count: 0,
            id
          }}
        />
      ]}
    />
  );
};

export default ProductCard;
