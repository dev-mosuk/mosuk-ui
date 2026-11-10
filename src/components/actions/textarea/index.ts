import { Textarea as Component } from '@/components/actions/textarea/component';
import { TextareaProps as ComponentProps } from '@/components/actions/textarea/component.interface';

export const Textarea = Object.assign(Component, {});

export namespace Textarea {
  export type Props = ComponentProps;
}

import { TextareaSkeleton as SkeletonComponent } from '@/components/actions/textarea/.partials/skeleton/component';
import { TextareaSkeletonProps } from '@/components/actions/textarea/.partials/skeleton/component.interface';

export const TextareaSkeleton = Object.assign(SkeletonComponent, {});

export namespace TextareaSkeleton {
  export type Props = TextareaSkeletonProps;
}
