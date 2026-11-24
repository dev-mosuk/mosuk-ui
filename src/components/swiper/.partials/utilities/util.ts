type SwiperLike = {
  slides?: ArrayLike<HTMLElement> | HTMLElement[] | null;
};

export function swiperSlideCount(swiper: SwiperLike): number {
  const slides = swiper.slides;

  if (!slides || slides.length === 0) {
    return 0;
  }

  return Array.from(slides).filter(
    (slide) => !slide.classList.contains('swiper-slide-duplicate'),
  ).length;
}
