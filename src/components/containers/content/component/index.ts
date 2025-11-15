import { Content as BaseContent } from './component';
import type { ContentProps } from './component.interface';

export function Content(props: ContentProps) {
  return BaseContent(props);
}

export namespace Content {
  export type Props = ContentProps;
}
