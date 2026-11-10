import { FileActionsAction } from '@/components/display/file/actions/action/component';
import { FileActionsActionProps } from '@/components/display/file/actions/action/component.interface';
import { FileActions } from '@/components/display/file/actions/component';
import { FileActionsProps } from '@/components/display/file/actions/component.interface';
import { File as Component } from '@/components/display/file/component';
import { FileProps } from '@/components/display/file/component.interface';
import { FileFile } from '@/components/display/file/file/component';
import { FileFileProps } from '@/components/display/file/file/component.interface';
import { FileInput } from '@/components/display/file/input/component';
import { FileInputProps } from '@/components/display/file/input/component.interface';

export const File = Object.assign(Component, {
  File: FileFile,
  Input: FileInput,
  Actions: Object.assign(FileActions, {
    Action: FileActionsAction,
  }),
});

export namespace File {
  export type Props = FileProps;

  export namespace File {
    export type Props = FileFileProps;
  }

  export namespace Input {
    export type Props = FileInputProps;
  }

  export namespace Actions {
    export type Props = FileActionsProps;

    export namespace Action {
      export type Props = FileActionsActionProps;
    }
  }
}

import {
  FileSkeleton as SkeletonComponent,
  FileSkeletonFile,
} from '@/components/display/file/.partials/skeleton/component';
import {
  FileSkeletonFileProps,
  FileSkeletonProps,
} from '@/components/display/file/.partials/skeleton/component.interface';

export const FileSkeleton = Object.assign(SkeletonComponent, {
  File: FileSkeletonFile,
});

export namespace FileSkeleton {
  export type Props = FileSkeletonProps;

  export namespace File {
    export type Props = FileSkeletonFileProps;
  }
}
