import {
  VideoSkeleton as BaseVideoSkeleton,
  VideoSkeletonVideo as BaseVideoSkeletonVideo,
} from './component';
import type { VideoSkeletonProps } from './component.interface';

export function VideoSkeleton(props: VideoSkeletonProps) {
  return BaseVideoSkeleton(props);
}

VideoSkeleton.Video = BaseVideoSkeletonVideo;

export namespace VideoSkeleton {
  export type Props = VideoSkeletonProps;

  export declare const Video: typeof BaseVideoSkeletonVideo;
}
