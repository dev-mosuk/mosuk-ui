import { ButtonSkeleton } from '@/components/actions/button/skeleton/component';
import { IconSkeleton } from '@/components/actions/icon/skeleton/component';
import { Section } from '@/components/containers/section/component/index';
import { Card } from '@/components/display/card/component/component';
import component from '@/components/integrations/tbank/terminal/component/component.module.css';
import { TBankTerminalSkeletonProps } from '@/components/integrations/tbank/terminal/skeleton/component.interface';
import skeleton from '@/components/integrations/tbank/terminal/skeleton/component.module.css';
import { H1Skeleton } from '@/components/texts/h1/skeleton/component';
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
      <Section className={classNames(skeleton.Section)}>
        <article className={classNames(skeleton.Article)}>
          <H1Skeleton className={classNames(skeleton.H1Skeleton)} />

          <IconSkeleton className={classNames(skeleton.IconSkeleton)} />
        </article>

        <Card className={classNames(skeleton.Amount)}>
          <H1Skeleton className={classNames(skeleton.H1Skeleton)} />
        </Card>

        <Card className={classNames(skeleton.PaymentMethod)}>
          <H1Skeleton className={classNames(skeleton.H1Skeleton)}>
            <H1Skeleton className={classNames(skeleton.H1Skeleton)} />
          </H1Skeleton>

          <div className={classNames(skeleton.Buttons)}>
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
          </div>
        </Card>

        <Card className={classNames(skeleton.BankCard)}>
          <H1Skeleton className={classNames(skeleton.H1Skeleton)} />

          <div className={classNames(skeleton.Buttons)}>
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
          </div>
        </Card>
      </Section>

      {rest?.children}
    </Component>
  );
}
