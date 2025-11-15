import { Textarea as Component } from './component';
import type { TextareaProps } from './component.interface';
import { TextareaHint } from './hint/component';
import { TextareaHintType } from './hint/component.enums';
import { TextareaHintProps } from './hint/component.interface';
import { TextareaTextarea } from './textarea/component';
import { TextareaTextareaProps } from './textarea/component.interface';

export const Textarea = Object.assign(Component, {
  Textarea: TextareaTextarea,
  Hint: Object.assign(TextareaHint, {
    Type: TextareaHintType,
  }),
});

export namespace Textarea {
  export type Props = TextareaProps;

  export namespace Textarea {
    export type Props = TextareaTextareaProps;
  }

  export namespace Hint {
    export type Props = TextareaHintProps;
  }
}
