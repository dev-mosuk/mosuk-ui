import { Section as BaseSection } from './component';
import type { SectionProps } from './component.interface';

export function Section(props: SectionProps) {
  return BaseSection(props);
}

export namespace Section {
  export type Props = SectionProps;
}
