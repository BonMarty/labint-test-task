import { Body, Container, Headline } from '../../../shared';
import DelieveryTruckSvg from '../../../shared/assets/delievery-truck.svg?react';
import MoneyBagsSvg from '../../../shared/assets/money-bags.svg?react';
import SecureSvg from '../../../shared/assets/secure.svg?react';
import WaitingSvg from '../../../shared/assets/waiting.svg?react';
import { HowThisWorksHeadline } from '../how-this-works-headline';

export const HowThisWorks = () => {
  return (
    <section id="how-this-works" className="px-4 pt-14">
      <Container className="space-y-[26px] md:space-y-[42px]">
        <HowThisWorksHeadline />
        <ul className="grid grid-cols-1 md:grid-cols-2 1920:grid-cols-4 gap-8">
          <li className="flex 1920:flex-col gap-4">
            <WaitingSvg className="max-w-14 max-h-14 w-full h-full" />
            <div className="space-y-2">
              <Headline variant={6}>Прочитай задание внимательно</Headline>
              <Body size={14} weight="regular" className="text-darkGray">
                Думаю у тебя не займет это больше двух-трех минут
              </Body>
            </div>
          </li>
          <li className="flex 1920:flex-col gap-4">
            <DelieveryTruckSvg className="max-w-14 max-h-14 w-full h-full" />
            <div className="space-y-2">
              <Headline variant={6}>Изучи весь макет заранее</Headline>
              <Body size={14} weight="regular" className="text-darkGray">
                Подумай как это будет работать на разных разрешениях и при скролле
              </Body>
            </div>
          </li>
          <li className="flex 1920:flex-col gap-4">
            <SecureSvg className="max-w-14 max-h-14 w-full h-full" />
            <div className="space-y-2">
              <Headline variant={6}>Сделай хорошо</Headline>
              <Body size={14} weight="regular" className="text-darkGray">
                Чтобы мы могли тебе доверить подобные задачи в будущем
              </Body>
            </div>
          </li>
          <li className="flex 1920:flex-col gap-4">
            <MoneyBagsSvg className="max-w-14 max-h-14 w-full h-full" />
            <div className="space-y-2">
              <Headline variant={6}>Получи предложение</Headline>
              <Body size={14} weight="regular" className="text-darkGray">
                Ну тут все просто, не я придумал правила, но думаю так и будет)))
              </Body>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};
