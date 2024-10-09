import { Body } from '../../../../shared';

export const HeroBody = () => {
  return (
    <>
      <Body size={16} weight="regular" className="1920:hidden">
        Сделай круто тестовое задание и у тебя получится
      </Body>
      <Body size={18} weight="regular" className="hidden 1920:block">
        Сделай круто тестовое задание и у тебя получится
      </Body>
    </>
  );
};
