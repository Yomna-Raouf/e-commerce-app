import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { Product } from '@/features/products-listing/types';

import ProductsList from '@/features/products-listing/components/ProductsList/ProductsList';

const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ products });

  return <ProductsList products={products} />;
};

type Props = {
  products: Product[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');

    const data = await res.json();

    return {
      props: {
        products: data.products
      }
    };
  } catch (error) {
    console.log('Error:', error);
    return {
      redirect: {
        destination: '/error',
        permanent: false
      }
    };
  }
};

export default Home;
