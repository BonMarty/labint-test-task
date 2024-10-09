import { Menu } from '../../../features';
import { Container, useAppSelector } from '../../../shared';
import LogoSvg from '../../../shared/assets/logo.svg?react';
import { Nav } from './nav';

export const Header = () => {
  const { isOpen } = useAppSelector((state) => state.menu);

  return (
    <header className={`${isOpen ? 'bg-white 1920:bg-transparent' : 'bg-transparent'} absolute top-0 left-0 right-0 w-full h-20 flex justify-center items-center z-50 transition-all duration-300`}>
      <Container className="px-4 w-full flex justify-between items-center">
        <LogoSvg className={`${isOpen ? 'fill-black 1920:fill-white' : 'fill-white'} transition-all duration-300`} />
        <Nav />
        <Menu />
      </Container>
    </header>
  );
};
