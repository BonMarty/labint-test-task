import { useAppDispatch, useAppSelector } from '../../../../shared';
import { setIsOpen } from '../../model';

export const Burger = () => {
  const { isOpen } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center w-[62px] h-[62px] cursor-pointer" onClick={() => dispatch(setIsOpen(!isOpen))}>
      <div className={`${isOpen ? '' : 'space-y-2'} w-[22px] h-3 transition-all duration-300`}>
        <span className={`${isOpen ? 'bg-black rotate-45 mt-1' : 'bg-white'} block w-full h-0.5 transition-all duration-300`}></span>
        <span className={`${isOpen ? 'bg-black -rotate-45 -mt-0.5' : 'bg-white'} block w-full h-0.5 transition-all duration-300`}></span>
      </div>
    </div>
  );
};
