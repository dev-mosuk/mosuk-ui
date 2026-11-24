import { File as Component } from '@/components/file/.partials/components/component';
import type { FileProps } from '@/components/file/.partials/components/component.interface';
import { FileFallback } from '@/components/file/.partials/components/fallback/component';
import type { FileFallbackProps } from '@/components/file/.partials/components/fallback/component.interface';
import { FileIcon } from '@/components/file/.partials/components/icon/component';
import type { FileIconProps } from '@/components/file/.partials/components/icon/component.interface';
import { FileView } from '@/components/file/.partials/components/view/component';
import type { FileViewProps } from '@/components/file/.partials/components/view/component.interface';
import {
  FileAnimation,
  FilePress,
  FileVariant,
} from '@/components/file/.partials/enums/component.enums';

export const File = Object.assign(Component, {
  View: FileView,
  Fallback: FileFallback,
  Icon: FileIcon,
  ENUMS: {
    Variant: FileVariant,
    Animation: FileAnimation,
    Press: FilePress,
  },
});

export namespace File {
  export type Props<C = 'div'> = FileProps<C>;

  export namespace View {
    export type Props<C = 'img'> = FileViewProps<C>;
  }

  export namespace Fallback {
    export type Props<C = 'span'> = FileFallbackProps<C>;
  }

  export namespace Icon {
    export type Props = FileIconProps;
  }
}
