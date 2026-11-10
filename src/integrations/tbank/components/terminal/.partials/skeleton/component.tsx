import { ButtonSkeleton } from '@/components/actions/button/.partials/skeleton/component';
import { IconSkeleton } from '@/components/actions/icon/.partials/skeleton/component';
import { Skeleton } from '@/components/core/skeleton/component';
import component from '@/integrations/tbank/components/terminal/component.module.css';
import { TBankTerminalSkeletonProps } from '@/integrations/tbank/components/terminal/.partials/skeleton/component.interface';
import skeleton from '@/integrations/tbank/components/terminal/.partials/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function TBankTerminalSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: TBankTerminalSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-tbank-terminal',
        component.TBankTerminal,
        skeleton.TBankTerminal,
        rest?.className,
      )}
    >
      <section className={classNames(skeleton.Section)}>
        <article className={classNames(skeleton.Article)}>
          <Skeleton className={classNames(skeleton.H1Skeleton)} />

          <IconSkeleton className={classNames(skeleton.IconSkeleton)} />
        </article>

        <div className={classNames(skeleton.Amount)}>
          <Skeleton className={classNames(skeleton.H1Skeleton)} />
        </div>

        <div className={classNames(skeleton.PaymentMethod)}>
          <Skeleton className={classNames(skeleton.H1Skeleton)}>
            <Skeleton className={classNames(skeleton.H1Skeleton)} />
          </Skeleton>

          <div className={classNames(skeleton.Buttons)}>
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
          </div>
        </div>

        <div className={classNames(skeleton.BankCard)}>
          <Skeleton className={classNames(skeleton.H1Skeleton)} />

          <div className={classNames(skeleton.Buttons)}>
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
          </div>
        </div>
      </section>

      {rest?.children}
    </Component>
  );
}
