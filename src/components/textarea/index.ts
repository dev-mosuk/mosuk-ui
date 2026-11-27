import { Textarea as Component } from '@/components/textarea/.partials/components/component';
import type { TextareaProps } from '@/components/textarea/.partials/components/component.interface';
import {
  TextareaAnimation,
  TextareaPress,
  TextareaVariant,
} from '@/components/textarea/.partials/enums/component.enums';

export const Textarea = Object.assign(Component, {
  ENUMS: {
    Variant: TextareaVariant,
    Press: TextareaPress,
    Animation: TextareaAnimation,
  },
});

export namespace Textarea {
  export type Props<C = 'textarea'> = TextareaProps<C>;
}
