import { Accordion, Body, Container } from '../../../shared';
import { QuestionsAndAnswersHeadline } from './questions-and-answers-headline';

export const QuestionsAndAnswers = () => {
  return (
    <section className="px-4 py-14" id="questions-and-answers">
      <Container maxWidth="max-w-[1008px]" className="space-y-7 md:space-y-[66px]">
        <QuestionsAndAnswersHeadline />
        <ul className="divide-y divide-extralightGray md:border-t md:border-t-extralightGray">
          <Accordion title="Подтверждено: сознание наших соотечественников не замутнено пропагандой?">
            <Body size={18} weight="regular" className="text-darkGray">
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Body>
          </Accordion>
          <Accordion title="Прототип нового сервиса - это как трубный призыв?">
            <Body size={18} weight="regular" className="text-darkGray">
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Body>
          </Accordion>
          <Accordion title="Частокол на границе продолжает удивлять?">
            <Body size={18} weight="regular" className="text-darkGray">
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Body>
          </Accordion>
          <Accordion title="Очевидцы сообщают, что слышали грохот грома градущих изменений?">
            <Body size={18} weight="regular" className="text-darkGray">
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Body>
          </Accordion>
          <Accordion title="И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?">
            <Body size={18} weight="regular" className="text-darkGray">
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Body>
          </Accordion>
          <Accordion title="Нынче никто не может себе позволить инициировать треск разлетающихся скреп?">
            <Body size={18} weight="regular" className="text-darkGray">
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Body>
          </Accordion>
          <Accordion title="Высококачественный прототип будущего проекта обнадёживает?">
            <Body size={18} weight="regular" className="text-darkGray">
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Body>
          </Accordion>
        </ul>
      </Container>
    </section>
  );
};