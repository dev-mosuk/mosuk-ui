import {
  Video as BaseVideo,
  VideoVideo as BaseVideoVideo,
} from '@/components/video/component';
import type { VideoProps } from '@/components/video/component.interface';

export function Video(props: VideoProps) {
  return BaseVideo(props);
}

Video.Video = BaseVideoVideo;

export namespace Video {
  export type Props = VideoProps;

  export declare const Video: typeof BaseVideoVideo;
}
