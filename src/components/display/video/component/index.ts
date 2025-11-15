import { Video as BaseVideo, VideoVideo as BaseVideoVideo } from './component';
import type { VideoProps } from './component.interface';

export function Video(props: VideoProps) {
  return BaseVideo(props);
}

Video.Video = BaseVideoVideo;

export namespace Video {
  export type Props = VideoProps;

  export declare const Video: typeof BaseVideoVideo;
}
