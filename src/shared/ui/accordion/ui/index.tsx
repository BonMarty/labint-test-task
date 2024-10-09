import React from 'react';
import { Collapse } from 'react-collapse';
import { Body } from '../../../../shared';
import PlusSvg from '../../../../shared/assets/plus.svg?react';
import { AccordionProps } from './types';

export const Accordion = (props: AccordionProps) => {
  const { title, children, ...rest } = props;

  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <div className="py-4 md:py-6" {...rest}>
      <div className="flex justify-between gap-4 group cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
        <Body size={18} weight="semibold" className="transition-all duration-300 group-hover:text-primary">
          {title}
        </Body>
        <div className="min-w-6 h-6 border-2 rounded-full flex justify-center items-center group-hover:border-primary transition-all duration-300">
          <PlusSvg className={`${isOpened ? 'rotate-45' : 'rotate-0'} fill-black group-hover:fill-primary transition-all duration-300`} />
        </div>
      </div>
      <Collapse isOpened={isOpened}>
        <div className="pt-4 md:pt-6">{children}</div>
      </Collapse>
    </div>
  );
};
