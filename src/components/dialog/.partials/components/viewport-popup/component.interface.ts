import type { DialogVariant } from '@/components/dialog/.partials/enums/component.enums';
import { Dialog as BaseUIDialog } from '@base-ui/react';

export type DialogViewportPopupProps = Omit<
  BaseUIDialog.Popup.Props,
  'color'
> & {
  variant?: DialogVariant | `${DialogVariant}`;
};
