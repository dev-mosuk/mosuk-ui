import type { ReactNode } from 'react';
import type { SwiperSlideProps } from 'swiper/react';

export type TabsContentItemProps = Omit<SwiperSlideProps, 'children'> & {
  value: any;
  children?: ReactNode;
};
