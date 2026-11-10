import { Upload as UploadComponent } from '@/components/actions/upload/component';
import type { UploadProps } from '@/components/actions/upload/component.interface';
import { UploadInput } from '@/components/actions/upload/components/input/component';
import { UploadInputProps } from '@/components/actions/upload/components/input/component.interface';
import { UploadLabel } from '@/components/actions/upload/components/label/component';
import { UploadLabelProps } from '@/components/actions/upload/components/label/component.interface';

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
