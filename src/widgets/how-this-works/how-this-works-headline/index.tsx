import { Headline } from '../../../shared';

export const HowThisWorksHeadline = () => {
  return (
    <>
      <Headline variant={4} className="block md:hidden text-center">
        Как это работает
      </Headline>
      <Headline variant={2} className="hidden md:block text-center">
        Как это работает
      </Headline>
    </>
  );
};
