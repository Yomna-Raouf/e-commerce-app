import type { NextPageContext } from 'next';

const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <div>
      <h1>{statusCode ? `Error: ${statusCode}` : 'An unexpected error occurred'}</h1>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default Error;
