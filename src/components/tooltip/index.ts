import { TooltipArrow } from '@/components/tooltip/.partials/components/arrow/component';
import { TooltipArrowProps } from '@/components/tooltip/.partials/components/arrow/component.interface';
import { Tooltip as Component } from '@/components/tooltip/.partials/components/component';
import { TooltipProps } from '@/components/tooltip/.partials/components/component.interface';
import { TooltipContent } from '@/components/tooltip/.partials/components/content/component';
import { TooltipContentProps } from '@/components/tooltip/.partials/components/content/component.interface';
import { TooltipOpen } from '@/components/tooltip/.partials/components/open/component';
import { TooltipOpenProps } from '@/components/tooltip/.partials/components/open/component.interface';
import { TooltipVariant } from '@/components/tooltip/.partials/enums/component.enums';
import type { ElementType } from 'react';

export const Tooltip = Object.assign(Component, {
  Open: TooltipOpen,
  Content: Object.assign(TooltipContent, {
    Arrow: TooltipArrow,
  }),
  ENUMS: {
    Variant: TooltipVariant,
  },
});

export namespace Tooltip {
  export type Props = TooltipProps;

  export namespace Open {
    export type Props<C extends ElementType = 'button'> = TooltipOpenProps<C>;
  }

  export namespace Content {
    export type Props<C extends ElementType = 'div'> = TooltipContentProps<C>;

    export namespace Arrow {
      export type Props<C extends ElementType = 'div'> = TooltipArrowProps<C>;
    }
  }
}
