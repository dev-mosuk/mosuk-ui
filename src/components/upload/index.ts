import { Upload as UploadComponent } from '@/components/upload/.partials/components/component';
import type { UploadProps } from '@/components/upload/.partials/components/component.interface';
import { UploadOpen } from '@/components/upload/.partials/components/open/component';
import { UploadOpenProps } from '@/components/upload/.partials/components/open/component.interface';

export const Upload = Object.assign(UploadComponent, {
  Open: UploadOpen,
});

export namespace Upload {
  export type Props = UploadProps;

  export namespace Open {
    export type Props = UploadOpenProps;
  }
}
