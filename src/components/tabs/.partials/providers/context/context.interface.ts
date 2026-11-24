import type {
  TabsOrientation,
  TabsVariant,
} from '@/components/tabs/.partials/enums/component.enums';
import type { Swiper as SwiperClass } from 'swiper';

export interface TabsContextProps {
  size?: number;
  orientation: TabsOrientation | `${TabsOrientation}`;
  variant: TabsVariant | `${TabsVariant}`;
  value: any | null;
  setValue: (value: any) => void;
  activateOnFocus?: boolean;
  loopFocus?: boolean;
  setContentValues: (values: any[]) => void;
  setSwiper: (swiper: SwiperClass | null) => void;
  slideToValue: (value: any) => void;
}
