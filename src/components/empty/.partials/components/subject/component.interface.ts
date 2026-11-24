import type { TypographyProps } from '@/components/typography/.partials/components/component.interface';
import type { ElementType } from 'react';

export type EmptySubjectProps<C extends ElementType = 'p'> = TypographyProps<C>;
