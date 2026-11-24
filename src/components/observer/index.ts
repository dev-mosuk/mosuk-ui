import { Observer as Component } from '@/components/observer/.partials/components/component';
import type { ObserverProps as ComponentProps } from '@/components/observer/.partials/components/component.interface';
import type { ElementType } from 'react';

export const Observer = Component;

export namespace Observer {
  export type Props<C extends ElementType = 'aside'> = ComponentProps<C>;
}
