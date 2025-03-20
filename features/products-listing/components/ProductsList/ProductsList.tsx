import type { Product } from '../../types';

import ProductCard from '../ProductCard/ProductCard';

type Props = {
  products: Product[];
};

const ProductsList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          image={product.thumbnail}
          price={product.price}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductsList;
