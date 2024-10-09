import { Headline } from '../../../../shared';

export const ReviewsHeadline = () => {
  return (
    <>
      <Headline variant={4} className="block md:hidden text-center">
        Отзывы
      </Headline>
      <Headline variant={2} className="hidden md:block text-center">
        Отзывы
      </Headline>
    </>
  );
};
