import { Upload as UploadComponent } from './component';
import type { UploadProps } from './component.interface';
import { UploadInput } from './components/input/component';
import { UploadInputProps } from './components/input/component.interface';
import { UploadLabel } from './components/label/component';
import { UploadLabelProps } from './components/label/component.interface';

export const Upload = Object.assign(UploadComponent, {
  Input: UploadInput,
  Label: UploadLabel,
});

export namespace Upload {
  export type Props = UploadProps;

  export namespace Input {
    export type Props = UploadInputProps;
  }

  export namespace Label {
    export type Props = UploadLabelProps;
  }
}
