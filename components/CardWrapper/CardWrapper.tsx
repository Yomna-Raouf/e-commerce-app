import React from 'react';

type CardWrapperProps = {
  layout?: 'vertical' | 'horizontal';
  image?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode[];
};

type ActionsNodeProps = {
  actions: React.ReactNode[];
};

const ActionsNode = ({ actions }: ActionsNodeProps) => {
  return (
    <ul className="w-full">
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

const CardWrapper = ({ layout = 'vertical', image, content, actions }: CardWrapperProps) => {
  return (
    <div className="border border-[var(--neutral_200)] rounded-lg shadow-xs py-2 px-3">
      <div className={`flex ${layout === 'vertical' ? 'flex-col' : 'flex-row'} items-center gap-3`}>
        {image}

        <div>{content}</div>

        {!!actions?.length && <ActionsNode actions={actions} />}
      </div>
    </div>
  );
};

export default CardWrapper;
