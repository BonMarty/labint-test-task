import { Container } from '../../../shared';
import { ReviewsHeadline } from './reviews-headline';
import { ReviewsSlider } from './reviews-slider';

export const Reviews = () => {
  return (
    <section className="bg-extralightGray pt-[27px] pb-[33px] md:pt-[33px] md:pb-[45px] 1920:pt-[57px]">
      <Container className="space-y-[26px] md:space-y-8">
        <ReviewsHeadline />
        <ReviewsSlider />
      </Container>
    </section>
  );
};
