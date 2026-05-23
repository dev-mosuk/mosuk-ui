import { Text as BaseText } from '@/components/texts/text/component/component';
import type { TextProps } from '@/components/texts/text/component/component.interface';

export function Text(props: TextProps) {
  return BaseText(props);
}

export namespace Text {
  export type Props = TextProps;
}
