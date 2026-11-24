import type { ReactElement, ReactNode } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

type AxisChildProps = {
  width?: number;
  isHidden?: boolean;
  hide?: boolean;
};

export function adaptAxisChildren(
  children: ReactNode,
  yAxisDefaultWidth: number,
): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    const displayName = (child.type as { displayName?: string })?.displayName;

    if (displayName === 'YAxis') {
      const { isHidden, hide, width, ...rest } = child.props as AxisChildProps;
      const nextHide = isHidden ?? hide ?? false;
      return cloneElement(child as ReactElement<AxisChildProps>, {
        ...rest,
        width: width ?? yAxisDefaultWidth,
        isHidden: nextHide,
        hide: nextHide,
      });
    }

    if (displayName === 'XAxis') {
      const { isHidden, hide, ...rest } = child.props as AxisChildProps;
      const nextHide = isHidden ?? hide ?? false;
      return cloneElement(child as ReactElement<AxisChildProps>, {
        ...rest,
        isHidden: nextHide,
        hide: nextHide,
      });
    }

    return child;
  });
}
