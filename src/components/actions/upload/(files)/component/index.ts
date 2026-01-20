import { InputHintType } from '../../../../input/component/hint/component.enums';
import { InputHintProps } from '../../../../input/component/hint/component.interface';
import { UploadFiles as UploadFilesComponent } from './component';
import type { UploadFilesProps } from './component.interface';
import { UploadFilesDnd } from './dnd/component';
import { UploadFilesDndProps } from './dnd/component.interface';
import { UploadFilesDndElement } from './dnd/element/component';
import { UploadFilesDndElementProps } from './dnd/element/component.interface';
import { UploadFilesHint } from './hint/component';
import { UploadFilesInput } from './input/component';
import { UploadFilesInputProps } from './input/component.interface';
import { UploadFilesLabel } from './label/component';
import { UploadFilesLabelProps } from './label/component.interface';

export const UploadFiles = Object.assign(UploadFilesComponent, {
  Dnd: Object.assign(UploadFilesDnd, {
    Element: UploadFilesDndElement,
  }),
  Label: UploadFilesLabel,
  Input: UploadFilesInput,
  Hint: Object.assign(UploadFilesHint, {
    Type: InputHintType,
  }),
});

export namespace UploadFiles {
  export type Props = UploadFilesProps;

  export namespace Dnd {
    export type Props = UploadFilesDndProps;

    export namespace Element {
      export type Props = UploadFilesDndElementProps;
    }
  }

  export namespace Label {
    export type Props = UploadFilesLabelProps;
  }

  export namespace Input {
    export type Props = UploadFilesInputProps;
  }

  export namespace Hint {
    export type Props = InputHintProps;
  }
}
