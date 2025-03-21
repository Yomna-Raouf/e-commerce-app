import type { RefObject, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  classes?: string;
  ref?: RefObject<null>;
};

const ListGrid = ({ children, classes, ref }: Props) => {
  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 ${classes}`}
    >
      {children}
    </div>
  );
};

export default ListGrid;
