import { FileActionsAction } from './actions/action/component';
import { FileActionsActionProps } from './actions/action/component.interface';
import { FileActions } from './actions/component';
import { FileActionsProps } from './actions/component.interface';
import { File as Component } from './component';
import { FileProps } from './component.interface';
import { FileFile } from './file/component';
import { FileFileProps } from './file/component.interface';
import { FileInput } from './input/component';
import { FileInputProps } from './input/component.interface';

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
