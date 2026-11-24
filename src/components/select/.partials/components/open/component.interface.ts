import type { InputGroup } from '@/components/input-group';
import type { Popover } from '@/components/popover';

export type SelectOpenProps = Omit<Popover.Open.Props<'div'>, 'as'> &
  Pick<InputGroup.Props, 'variant' | 'size'>;
