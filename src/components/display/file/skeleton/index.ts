import { FileSkeleton as Component, FileSkeletonFile } from './component';
import {
  FileSkeletonFileProps,
  FileSkeletonProps,
} from './component.interface';

export const FileSkeleton = Object.assign(Component, {
  File: FileSkeletonFile,
});

export namespace FileSkeleton {
  export type Props = FileSkeletonProps;

  export namespace File {
    export type Props = FileSkeletonFileProps;
  }
}
