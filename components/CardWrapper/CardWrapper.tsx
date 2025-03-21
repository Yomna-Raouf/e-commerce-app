import React from 'react';

type CardWrapperProps = {
  layout?: 'vertical' | 'horizontal';
  image?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode[];
  wrapperCustomClass?: string;
};

type ActionsNodeProps = {
  actions: React.ReactNode[];
  layout?: 'vertical' | 'horizontal';
};

const ActionsNode = ({ actions, layout }: ActionsNodeProps) => {
  return (
    <ul className={`${layout === 'horizontal' ? 'ml-auto' : 'w-full'} `}>
      {actions.map<React.ReactNode>((action, index) => {
        return (
          <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
            {action}
          </li>
        );
      })}
    </ul>
  );
};

const CardWrapper = ({
  image,
  content,
  actions,
  wrapperCustomClass = '',
  layout = 'vertical'
}: CardWrapperProps) => {
  return (
    <div
      className={`border border-[var(--neutral_200)] rounded-lg shadow-xs py-2 px-3 ${wrapperCustomClass}`}
    >
      <div
        className={`h-full flex ${layout === 'vertical' ? 'flex-col' : 'flex-row'} items-center gap-3`}
      >
        {image}

        {content}

        {!!actions?.length && <ActionsNode actions={actions} layout={layout} />}
      </div>
    </div>
  );
};

export default CardWrapper;
