import ArrowLeftSvg from '../../../../shared/assets/arrow-left.svg?react';
import ArrowRightSvg from '../../../../shared/assets/arrow-right.svg?react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Body, Headline } from '../../../../shared';

import Avatar1Src from '../../../../shared/assets/avatar-1.jpg';
import Avatar2Src from '../../../../shared/assets/avatar-2.png';
import Avatar3Src from '../../../../shared/assets/avatar-3.png';
import Avatar4Src from '../../../../shared/assets/avatar-4.png';

export const ReviewsSlider = () => {
  return (
    <div className="relative 1920:px-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },

          1920: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        slidesPerView={1}
        navigation={{
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev',
          disabledClass: '!fill-midGray',
        }}
        pagination={{ clickable: true }}
        className="px-4 pb-24">
        <SwiperSlide>
          <div className="p-[22px] pb-[33px] bg-white rounded-lg space-y-5 transition-all duration-300 shadow-default hover:shadow-hover">
            <div className="flex gap-4">
              <img src={Avatar1Src} alt="Avatar 1" className="max-w-11 max-h-11 rounded-full object-cover" />
              <div className="space-y-1">
                <Headline variant={6}>Константинов Михаил Павлович</Headline>
                <Body size={12} weight="regular" className="text-darkGray">
                  Санкт-Петербург
                </Body>
              </div>
            </div>
            <Body size={14} weight="regular">
              Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы
            </Body>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-[22px] pb-[33px] bg-white rounded-lg space-y-5 transition-all duration-300 shadow-default hover:shadow-hover">
            <div className="flex gap-4">
              <img src={Avatar2Src} alt="Avatar 2" className="max-w-11 max-h-11 rounded-full object-cover" />
              <div className="space-y-1">
                <Headline variant={6}>Иван Иванов</Headline>
                <Body size={12} weight="regular" className="text-darkGray">
                  Санкт-Петербург
                </Body>
              </div>
            </div>
            <Body size={14} weight="regular">
              Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.
            </Body>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-[22px] pb-[33px] bg-white rounded-lg space-y-5 transition-all duration-300 shadow-default hover:shadow-hover">
            <div className="flex gap-4">
              <img src={Avatar3Src} alt="Avatar 3" className="max-w-11 max-h-11 rounded-full object-cover" />
              <div className="space-y-1">
                <Headline variant={6}>Артем Корнилов</Headline>
                <Body size={12} weight="regular" className="text-darkGray">
                  Самара
                </Body>
              </div>
            </div>
            <Body size={14} weight="regular">
              Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.
            </Body>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-[22px] pb-[33px] bg-white rounded-lg space-y-5 transition-all duration-300 shadow-default hover:shadow-hover">
            <div className="flex gap-4">
              <img src={Avatar4Src} alt="Avatar 4" className="max-w-11 max-h-11 rounded-full object-cover" />
              <div className="space-y-1">
                <Headline variant={6}>Иван Иванов</Headline>
                <Body size={12} weight="regular" className="text-darkGray">
                  Санкт-Петербург, ИП Иванов
                </Body>
              </div>
            </div>
            <Body size={14} weight="regular">
              Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.
            </Body>
          </div>
        </SwiperSlide>
      </Swiper>
      <ArrowLeftSvg className="arrow-prev hidden 1920:block fill-primary absolute top-[38%] left-0 w-fit h-fit z-10 cursor-pointer" />
      <ArrowRightSvg className="arrow-next hidden 1920:block fill-primary absolute top-[38%] right-0 w-fit h-fit z-10 cursor-pointer" />
    </div>
  );
};
