import {
  VideoSkeleton as BaseVideoSkeleton,
  VideoSkeletonVideo as BaseVideoSkeletonVideo,
} from '@/components/display/video/skeleton/component';
import type { VideoSkeletonProps } from '@/components/display/video/skeleton/component.interface';

export function VideoSkeleton(props: VideoSkeletonProps) {
  return BaseVideoSkeleton(props);
}

VideoSkeleton.Video = BaseVideoSkeletonVideo;

export namespace VideoSkeleton {
  export type Props = VideoSkeletonProps;

  export declare const Video: typeof BaseVideoSkeletonVideo;
}
