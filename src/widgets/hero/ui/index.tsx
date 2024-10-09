import { Button } from '../../../shared';
import CoverSrc from '../../../shared/assets/cover.jpg';
import { HeroBody } from './hero-body';
import { HeroHeadline } from './hero-headline';

export const Hero = () => {
  return (
    <section className="w-full h-svh relative flex">
      <img src={CoverSrc} alt="hero" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover -z-1" />
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-primary/80 -z-1"></span>
      <div className="relative flex-1 flex flex-col justify-center p-4 md:p-0 text-center text-white max-w-72 md:max-w-[476px] 1920:max-w-[748px] mx-auto">
        <div className="space-y-[26px] md:space-y-10 1920:space-y-[92px]">
          <div className="space-y-2.5 md:space-y-[17px] 1920:space-y-[18px]">
            <HeroHeadline />
            <HeroBody />
          </div>
          <Button variant="default">Проще простого!</Button>
        </div>
      </div>
    </section>
  );
};
