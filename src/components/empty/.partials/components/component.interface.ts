import type { CardProps } from '@/components/card/.partials/components/component.interface';
import type { ElementType } from 'react';

export type EmptyProps<C extends ElementType = 'section'> = CardProps<C>;
