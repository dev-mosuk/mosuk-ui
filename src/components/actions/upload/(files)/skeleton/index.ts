import { InputHintSkeleton } from '../../../../input/skeleton/hint/component';
import { InputHintSkeletonProps } from '../../../../input/skeleton/hint/component.interface';
import { UploadFilesSkeleton as Component } from './component';
import { UploadFilesSkeletonProps } from './component.interface';
import { UploadFilesSkeletonDnd } from './dnd/component';
import { UploadFilesSkeletonDndProps } from './dnd/component.interface';
import { UploadFilesSkeletonDndElement } from './dnd/file/component';
import { UploadFilesSkeletonDndElementProps } from './dnd/file/component.interface';
import { UploadFilesSkeletonLabel } from './label/component';
import { UploadFilesSkeletonLabelProps } from './label/component.interface';

export const UploadFilesSkeleton = Object.assign(Component, {
  Dnd: Object.assign(UploadFilesSkeletonDnd, {
    Element: UploadFilesSkeletonDndElement,
  }),
  Label: UploadFilesSkeletonLabel,
  Hint: InputHintSkeleton,
});

export namespace UploadFiles {
  export type Props = UploadFilesSkeletonProps;

  export namespace Dnd {
    export type Props = UploadFilesSkeletonDndProps;

    export namespace Element {
      export type Props = UploadFilesSkeletonDndElementProps;
    }
  }

  export namespace Label {
    export type Props = UploadFilesSkeletonLabelProps;
  }

  export namespace Hint {
    export type Props = InputHintSkeletonProps;
  }
}
