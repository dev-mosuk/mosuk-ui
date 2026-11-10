import {
  Video as BaseVideo,
  VideoVideo as BaseVideoVideo,
} from '@/components/display/video/component';
import type { VideoProps } from '@/components/display/video/component.interface';

export function Video(props: VideoProps) {
  return BaseVideo(props);
}

Video.Video = BaseVideoVideo;

export namespace Video {
  export type Props = VideoProps;

  export declare const Video: typeof BaseVideoVideo;
}

import {
  VideoSkeleton as BaseVideoSkeleton,
  VideoSkeletonVideo as BaseVideoSkeletonVideo,
} from '@/components/display/video/.partials/skeleton/component';
import type { VideoSkeletonProps } from '@/components/display/video/.partials/skeleton/component.interface';

export function VideoSkeleton(props: VideoSkeletonProps) {
  return BaseVideoSkeleton(props);
}

VideoSkeleton.Video = BaseVideoSkeletonVideo;

export namespace VideoSkeleton {
  export type Props = VideoSkeletonProps;

  export declare const Video: typeof BaseVideoSkeletonVideo;
}
