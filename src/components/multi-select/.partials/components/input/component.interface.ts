import type { Input } from '@/components/input';

export type MultiSelectInputProps = Omit<
  Input.Props<'input'>,
  'value' | 'defaultValue' | 'readOnly' | 'isReadOnly'
>;
