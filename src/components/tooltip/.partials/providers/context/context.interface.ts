import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';

export interface TooltipContextProps {
  handle: ReturnType<typeof BaseUITooltip.createHandle>;
}
