import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { Product } from '@/features/products-listing/types';

import ProductsList from '@/features/products-listing/components/ProductsList/ProductsList';
import PageHead from '@/components/SEO/PageHead/PageHead';

const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <PageHead seoTitle="E-commerce" seoDescription="shop your favorite products!" />
      <h1 className="font-bold text-[var(--purple_800)] text-xl mb-4">
        Shop your favorite products! <span>&#128293;</span>
      </h1>
      <ProductsList products={products} />
    </>
  );
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
