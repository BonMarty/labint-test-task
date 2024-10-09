import { Headline } from '../../../../shared';

export const HeroHeadline = () => {
  return (
    <>
      <Headline variant={4} className="block md:hidden">
        Говорят, никогда не поздно сменить профессию
      </Headline>
      <Headline variant={3} className="hidden md:block 1920:hidden">
        Говорят, никогда не поздно сменить профессию
      </Headline>
      <Headline variant={1} className="hidden 1920:block">
        Говорят, никогда не поздно сменить профессию
      </Headline>
    </>
  );
};
