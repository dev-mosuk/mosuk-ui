import { FileActionsAction } from '@/components/file/actions/action/component';
import { FileActionsActionProps } from '@/components/file/actions/action/component.interface';
import { FileActions } from '@/components/file/actions/component';
import { FileActionsProps } from '@/components/file/actions/component.interface';
import { File as Component } from '@/components/file/component';
import { FileProps } from '@/components/file/component.interface';
import { FileFile } from '@/components/file/file/component';
import { FileFileProps } from '@/components/file/file/component.interface';
import { FileInput } from '@/components/file/input/component';
import { FileInputProps } from '@/components/file/input/component.interface';

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
