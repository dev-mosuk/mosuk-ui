import { FileActionsAction } from '@/components/display/file/component/actions/action/component';
import { FileActionsActionProps } from '@/components/display/file/component/actions/action/component.interface';
import { FileActions } from '@/components/display/file/component/actions/component';
import { FileActionsProps } from '@/components/display/file/component/actions/component.interface';
import { File as Component } from '@/components/display/file/component/component';
import { FileProps } from '@/components/display/file/component/component.interface';
import { FileFile } from '@/components/display/file/component/file/component';
import { FileFileProps } from '@/components/display/file/component/file/component.interface';
import { FileInput } from '@/components/display/file/component/input/component';
import { FileInputProps } from '@/components/display/file/component/input/component.interface';

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
