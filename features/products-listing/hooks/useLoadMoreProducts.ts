import { useEffect, useRef, useState } from 'react';

import { Product } from '../types';

// TODO: Could be split into more generic reusable hook
export const useLoadMoreProducts = (products: Product[]) => {
  const scrollTrigger = useRef(null);

  const [productsList, setProductsList] = useState(products);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `https://dummyjson.com/products?limit=30&skip=${productsList.length}`
      );

      const data = await res.json();

      setHasMoreData(data.total > productsList.length);
      setIsLoading(false);
      setProductsList((prevState) => [...prevState, ...data.products]);
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    if (!window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 }
    );

    if (scrollTrigger.current) {
      observer.observe(scrollTrigger.current);
    }

    return () => {
      if (scrollTrigger.current) {
        observer.unobserve(scrollTrigger.current);
      }
    };
  }, [hasMoreData, isLoading]);

  return {
    productsList,
    hasMoreData,
    scrollTrigger
  };
};
