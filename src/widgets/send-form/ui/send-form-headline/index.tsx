import { Headline } from '../../../../shared';

export const SendFormHeadline = () => {
  return (
    <>
      <Headline variant={4} className="block md:hidden text-center">
        Отправь форму
      </Headline>
      <Headline variant={2} className="hidden md:block text-center">
        Отправь форму
      </Headline>
    </>
  );
};
