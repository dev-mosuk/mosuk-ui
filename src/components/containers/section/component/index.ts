import { Section as BaseSection } from '@/components/containers/section/component/component';
import type { SectionProps } from '@/components/containers/section/component/component.interface';

export function Section(props: SectionProps) {
  return BaseSection(props);
}

export namespace Section {
  export type Props = SectionProps;
}
