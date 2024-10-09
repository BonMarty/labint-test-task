import { Body, Container } from '../../../shared';
import ThirdBlock1Src from '../../../shared/assets/third-block-1.png';
import ThirdBlock2Src from '../../../shared/assets/third-block-2.jpg';
import { ThirdBlockHeadline } from './third-block-headline';

export const ThirdBlock = () => {
  return (
    <section id="third-block" className="px-4 py-14">
      <Container className="flex flex-col-reverse md:flex-row md:items-center gap-6">
        <div className="space-y-[27px] md:space-y-[15px] 1920:space-y-[18px] flex-1">
          <ThirdBlockHeadline />
          <Body size={16} weight="regular" className="text-darkGray">
            63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
          </Body>
          <Body size={16} weight="regular" className="text-darkGray">
            Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
          </Body>
        </div>
        <div className="relative max-w-[542px] max-h-[448px] flex-1">
          <img src={ThirdBlock1Src} alt="Third block 1" className="relative z-10" />
          <img src={ThirdBlock2Src} alt="Third block 2" className="absolute top-0 left-0 w-full h-full -z-1" />
        </div>
      </Container>
    </section>
  );
};
