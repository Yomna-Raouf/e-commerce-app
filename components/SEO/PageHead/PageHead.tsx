import NextHead from 'next/head';
import { useRouter } from 'next/router';

import { NextSeo } from 'next-seo';

type Props = {
  seoTitle: string;
  seoDescription?: string;
  locale: string;
};

const PageHead = ({ seoTitle, seoDescription, locale }: Props) => {
  const router = useRouter();

  const socialMediaImg = '';

  return (
    <>
      <NextHead>
        <link
          rel="alternate"
          href={`${
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:3000'
              : process.env.NEXT_PUBLIC_URL
          }/${router.asPath}`}
          hrefLang="x-default"
        />

        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="" />
      </NextHead>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
        openGraph={{
          type: 'website',
          locale,
          url: `${process.env.NEXT_PUBLIC_URL}${router.asPath}`,
          site_name: 'q84sale',
          title: `${seoTitle}`,
          description: seoDescription,
          images: [
            {
              url: socialMediaImg,
              width: 800,
              height: 600,
              alt: `${seoTitle}`
            }
          ]
        }}
      />
    </>
  );
};

export default PageHead;
