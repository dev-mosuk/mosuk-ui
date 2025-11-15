import { TextareaSkeleton as Component } from './component';
import { TextareaSkeletonProps } from './component.interface';
import { TextareaSkeletonHint } from './hint/component';
import { TextareaSkeletonHintProps } from './hint/component.interface';
import { TextareaTextareaSkeleton } from './textarea/component';
import { TextareaSkeletonTextareaProps } from './textarea/component.interface';

export const TextareaSkeleton = Object.assign(Component, {
  Textarea: TextareaTextareaSkeleton,
  Hint: TextareaSkeletonHint,
});

export namespace TextareaSkeleton {
  export type Props = TextareaSkeletonProps;

  export namespace Textarea {
    export type Props = TextareaSkeletonTextareaProps;
  }

  export namespace Hint {
    export type Props = TextareaSkeletonHintProps;
  }
}
