import React from 'react';
import { Body, useAppDispatch, useAppSelector } from '../../../shared';
import AngleRightSvg from '../../../shared/assets/angle-right.svg?react';
import { setIsOpen } from '../model';
import { Burger } from './burger';

export const Menu = () => {
  const { isOpen } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className="block 1920:hidden">
      <Burger />
      <nav className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-20 left-0 right-0 bottom-0 w-svh h-svh bg-white transition-all duration-700`}>
        <ul className="mx-4 border border-l-0 border-r-0 border-lightGray divide-y divide-lightGray text-gray">
          <li className="py-4">
            <a href="#how-this-works" className="w-full flex justify-between items-center" onClick={() => dispatch(setIsOpen(false))}>
              <Body size={18} weight="regular">
                Как это работает
              </Body>
              <AngleRightSvg />
            </a>
          </li>
          <li className="py-4">
            <a href="#third-block" className="w-full flex justify-between items-center" onClick={() => dispatch(setIsOpen(false))}>
              <Body size={18} weight="regular">
                3-й блок
              </Body>
              <AngleRightSvg />
            </a>
          </li>
          <li className="py-4">
            <a href="#questions-and-answers" className="w-full flex justify-between items-center" onClick={() => dispatch(setIsOpen(false))}>
              <Body size={18} weight="regular">
                Вопросы и ответы
              </Body>
              <AngleRightSvg />
            </a>
          </li>
          <li className="py-4 border-b border-lightGray">
            <a href="#form" className="w-full flex justify-between items-center" onClick={() => dispatch(setIsOpen(false))}>
              <Body size={18} weight="regular">
                Форма
              </Body>
              <AngleRightSvg />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
