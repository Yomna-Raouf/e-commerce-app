import type { AppProps } from 'next/app';

import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import Header from '@/components/Header/Header';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Header />
      <main className="min-h-screen p-5 lg:p-14 ">
        <Component {...pageProps} />
      </main>
    </ErrorBoundary>
  );
}
