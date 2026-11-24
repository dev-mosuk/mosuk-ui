import type { Textarea } from '@/components/textarea';

export type ChatComposerTextareaProps = Omit<
  Textarea.Props,
  'value' | 'defaultValue' | 'onChange' | 'isAutoSize'
> & {
  minRows?: number;
  maxRows?: number;
};
