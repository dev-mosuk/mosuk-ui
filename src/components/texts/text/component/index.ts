import { Text as BaseText } from './component';
import type { TextProps } from './component.interface';

export function Text(props: TextProps) {
  return BaseText(props);
}

export namespace Text {
  export type Props = TextProps;
}
