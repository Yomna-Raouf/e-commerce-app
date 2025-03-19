import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { Product } from '@/features/products-listing/types';

const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ products });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">Test</main>
    </div>
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
