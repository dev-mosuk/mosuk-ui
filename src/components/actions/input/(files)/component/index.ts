import { InputHintType } from '../../component/hint/component.enums';
import { InputHintProps } from '../../component/hint/component.interface';
import { InputFiles as InputFilesComponent } from './component';
import type { InputFilesProps } from './component.interface';
import { InputFilesDnd } from './dnd/component';
import { InputFilesDndProps } from './dnd/component.interface';
import { InputFilesDndElement } from './dnd/element/component';
import { InputFilesDndElementProps } from './dnd/element/component.interface';
import { InputFilesHint } from './hint/component';
import { InputFilesInput } from './input/component';
import { InputFilesInputProps } from './input/component.interface';
import { InputFilesLabel } from './label/component';
import { InputFilesLabelProps } from './label/component.interface';

export const InputFiles = Object.assign(InputFilesComponent, {
  Dnd: Object.assign(InputFilesDnd, {
    Element: InputFilesDndElement,
  }),
  Label: InputFilesLabel,
  Input: InputFilesInput,
  Hint: Object.assign(InputFilesHint, {
    Type: InputHintType,
  }),
});

export namespace InputFiles {
  export type Props = InputFilesProps;

  export namespace Dnd {
    export type Props = InputFilesDndProps;

    export namespace Element {
      export type Props = InputFilesDndElementProps;
    }
  }

  export namespace Label {
    export type Props = InputFilesLabelProps;
  }

  export namespace Input {
    export type Props = InputFilesInputProps;
  }

  export namespace Hint {
    export type Props = InputHintProps;
  }
}
