import type { AppProps } from 'next/app';

import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
