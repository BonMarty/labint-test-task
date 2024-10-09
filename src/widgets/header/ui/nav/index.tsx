import { Body } from '../../../../shared';

export const Nav = () => {
  return (
    <nav className="hidden 1920:block">
      <ul className="flex items-center gap-6 text-white">
        <li>
          <Body size={16} weight="regular">
            <a href="#how-this-works" className="border-b border-b-transparent transition-all duration-300 hover:border-b-white">
              Как это работает
            </a>
          </Body>
        </li>
        <li>
          <Body size={16} weight="regular">
            <a href="#third-block" className="border-b border-b-transparent transition-all duration-300 hover:border-b-white">
              3-й блок
            </a>
          </Body>
        </li>
        <li>
          <Body size={16} weight="regular">
            <a href="#questions-and-answers" className="border-b border-b-transparent transition-all duration-300 hover:border-b-white">
              Вопросы и ответы
            </a>
          </Body>
        </li>
        <li>
          <Body size={16} weight="regular">
            <a href="#form" className="border-b border-b-transparent transition-all duration-300 hover:border-b-white">
              Форма
            </a>
          </Body>
        </li>
      </ul>
    </nav>
  );
};
