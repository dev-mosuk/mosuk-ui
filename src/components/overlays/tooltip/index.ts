import { TooltipArrow } from '@/components/overlays/tooltip/.partials/components/arrow/component';
import { TooltipArrowProps } from '@/components/overlays/tooltip/.partials/components/arrow/component.interface';
import { Tooltip as Component } from '@/components/overlays/tooltip/.partials/components/component';
import { TooltipProps } from '@/components/overlays/tooltip/.partials/components/component.interface';
import { TooltipContent } from '@/components/overlays/tooltip/.partials/components/content/component';
import { TooltipContentProps } from '@/components/overlays/tooltip/.partials/components/content/component.interface';
import { FC } from 'react';

export type TooltipComponent = FC<TooltipProps> & {
  Content: typeof TooltipContent;
  Arrow: typeof TooltipArrow;
};

export const Tooltip: TooltipComponent = Object.assign(Component, {
  Content: TooltipContent,
  Arrow: TooltipArrow,
});

export namespace Tooltip {
  export type Props = TooltipProps;

  export namespace Content {
    export type Props = TooltipContentProps;
  }

  export namespace Arrow {
    export type Props = TooltipArrowProps;
  }
}
