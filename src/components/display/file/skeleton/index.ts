import {
  FileSkeleton as Component,
  FileSkeletonFile,
} from '@/components/display/file/skeleton/component';
import {
  FileSkeletonFileProps,
  FileSkeletonProps,
} from '@/components/display/file/skeleton/component.interface';

export const FileSkeleton = Object.assign(Component, {
  File: FileSkeletonFile,
});

export namespace FileSkeleton {
  export type Props = FileSkeletonProps;

  export namespace File {
    export type Props = FileSkeletonFileProps;
  }
}
