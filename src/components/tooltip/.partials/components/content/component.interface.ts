import { Tooltip } from '@base-ui/react/tooltip';

export type TooltipContentProps = Omit<
  Tooltip.Positioner.Props,
  'className' | 'style' | 'render' | 'children'
> &
  Pick<Tooltip.Portal.Props, 'container' | 'keepMounted'> &
  Pick<Tooltip.Popup.Props, 'className' | 'style' | 'render' | 'children'>;
