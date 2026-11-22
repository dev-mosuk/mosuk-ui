import { Upload as UploadComponent } from '@/components/upload/.partials/components/component';
import type { UploadProps } from '@/components/upload/.partials/components/component.interface';
import { UploadInput } from '@/components/upload/.partials/components/input/component';
import { UploadInputProps } from '@/components/upload/.partials/components/input/component.interface';
import { UploadLabel } from '@/components/upload/.partials/components/label/component';
import { UploadLabelProps } from '@/components/upload/.partials/components/label/component.interface';

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
