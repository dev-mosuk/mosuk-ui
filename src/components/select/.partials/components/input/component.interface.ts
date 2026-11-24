import type { Input } from '@/components/input';

export type SelectInputProps = Omit<
  Input.Props<'input'>,
  'value' | 'defaultValue' | 'readOnly' | 'isReadOnly'
>;
