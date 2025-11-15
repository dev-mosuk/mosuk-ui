import { InputSkeletonProps } from '../../skeleton/component.interface';
import { InputHintSkeleton } from '../../skeleton/hint/component';
import { InputHintSkeletonProps } from '../../skeleton/hint/component.interface';
import { InputFilesSkeleton as Component } from './component';
import { InputFilesSkeletonDnd } from './dnd/component';
import { InputFilesSkeletonDndProps } from './dnd/component.interface';
import { InputFilesSkeletonDndElement } from './dnd/file/component';
import { InputFilesSkeletonDndElementProps } from './dnd/file/component.interface';
import { InputFilesSkeletonLabel } from './label/component';
import { InputFilesSkeletonLabelProps } from './label/component.interface';

export const InputFilesSkeleton = Object.assign(Component, {
  Dnd: Object.assign(InputFilesSkeletonDnd, {
    Element: InputFilesSkeletonDndElement,
  }),
  Label: InputFilesSkeletonLabel,
  Hint: InputHintSkeleton,
});

export namespace InputFiles {
  export type Props = InputSkeletonProps;

  export namespace Dnd {
    export type Props = InputFilesSkeletonDndProps;

    export namespace Element {
      export type Props = InputFilesSkeletonDndElementProps;
    }
  }

  export namespace Label {
    export type Props = InputFilesSkeletonLabelProps;
  }

  export namespace Hint {
    export type Props = InputHintSkeletonProps;
  }
}
