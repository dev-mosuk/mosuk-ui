import { FieldsetHintType } from '@/components/forms/fieldset/component/components/hint/component.enums';
import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

export type FieldsetHintProps<C extends ElementType = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: FieldsetHintType;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'children'>;
