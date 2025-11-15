import { Ref } from 'react';
import { SwiperProps } from 'swiper/react';

export interface ImagesProps extends SwiperProps {
    ref?: Ref<any>;
}