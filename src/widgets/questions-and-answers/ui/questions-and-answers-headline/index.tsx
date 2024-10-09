import { Headline } from '../../../../shared';

export const QuestionsAndAnswersHeadline = () => {
  return (
    <>
      <Headline variant={4} className="block md:hidden text-center">
        Вопросы и ответы
      </Headline>
      <Headline variant={2} className="hidden md:block text-center">
        Вопросы и ответы
      </Headline>
    </>
  );
};
