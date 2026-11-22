import { FileActionsAction } from '@/components/file/.partials/components/actions-action/component';
import { FileActionsActionProps } from '@/components/file/.partials/components/actions-action/component.interface';
import { FileActions } from '@/components/file/.partials/components/actions/component';
import { FileActionsProps } from '@/components/file/.partials/components/actions/component.interface';
import { File as Component } from '@/components/file/.partials/components/component';
import { FileProps } from '@/components/file/.partials/components/component.interface';
import { FileFile } from '@/components/file/.partials/components/file/component';
import { FileFileProps } from '@/components/file/.partials/components/file/component.interface';
import { FileInput } from '@/components/file/.partials/components/input/component';
import { FileInputProps } from '@/components/file/.partials/components/input/component.interface';

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
