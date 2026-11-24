import type { Accordion } from '@base-ui/react/accordion';

export type AccordionHeaderProps = Accordion.Header.Props &
  Pick<Accordion.Trigger.Props, 'nativeButton'>;
