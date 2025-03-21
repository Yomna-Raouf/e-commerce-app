import { useLoadMoreProducts } from '../../hooks/useLoadMoreProducts';

import type { Product } from '../../types';

import ProductCard from '../ProductCard/ProductCard';
import Shimmer from '@/components/Shimmer/Shimmer';
import ListGrid from './ListGrid';

type Props = {
  products: Product[];
};

const ProductsList = ({ products }: Props) => {
  const { productsList, hasMoreData, scrollTrigger, error } = useLoadMoreProducts(products);

  return (
    <>
      <ListGrid>
        {productsList?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.thumbnail}
            price={product.price}
            title={product.title}
            description={product.description}
          />
        ))}
      </ListGrid>
      {hasMoreData && (
        <ListGrid classes="mt-4" ref={scrollTrigger}>
          {Array.from({ length: 30 }, (_, idx) => (
            <Shimmer key={idx} />
          ))}
        </ListGrid>
      )}

      {error && <p className="mt-4 text-red-400">{error}</p>}
    </>
  );
};

export default ProductsList;
