import { Headline } from '../../../../shared';

export const ThirdBlockHeadline = () => {
  return (
    <>
      <Headline variant={5} className="block 1920:hidden text-center md:text-left">
        Круто, ты дошел до третьего блока
      </Headline>
      <Headline variant={3} className="hidden 1920:block">
        Круто, ты дошел до третьего блока
      </Headline>
    </>
  );
};
