import classNames from 'classnames';
import React, { ElementType } from 'react';
import { ButtonSkeleton } from '../../../../actions/button/skeleton/component';
import { IconSkeleton } from '../../../../actions/icon/skeleton/component';
import { Article } from '../../../../containers/article/component';
import { Buttons } from '../../../../containers/buttons/component';
import { Section } from '../../../../containers/section/component';
import { Card } from '../../../../display/card/component/component';
import { H1Skeleton } from '../../../../texts/h1/skeleton/component';
import { H1TextSkeleton } from '../../../../texts/h1/skeleton/text/component';
import component from '../component/component.module.css';
import { TBankTerminalSkeletonProps } from './component.interface';
import skeleton from './component.module.css';

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
        rest?.className
      )}
    >
      <Section className={classNames(skeleton.Section)}>
        <Article className={classNames(skeleton.Article)}>
          <H1Skeleton className={classNames(skeleton.H1Skeleton)}>
            <H1TextSkeleton className={classNames(skeleton.H1TextSkeleton)} />
          </H1Skeleton>

          <IconSkeleton className={classNames(skeleton.IconSkeleton)} />
        </Article>

        <Card className={classNames(skeleton.Amount)}>
          <H1Skeleton>
            <H1TextSkeleton className={classNames(skeleton.Text)} />
          </H1Skeleton>
        </Card>

        <Card className={classNames(skeleton.PaymentMethod)}>
          <H1Skeleton className={classNames(skeleton.H1Skeleton)}>
            <H1TextSkeleton className={classNames(skeleton.H1TextSkeleton)} />
          </H1Skeleton>

          <Buttons className={classNames(skeleton.Buttons)}>
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
          </Buttons>
        </Card>

        <Card className={classNames(skeleton.BankCard)}>
          <H1Skeleton className={classNames(skeleton.H1Skeleton)}>
            <H1TextSkeleton className={classNames(skeleton.H1TextSkeleton)} />
          </H1Skeleton>

          <Buttons className={classNames(skeleton.Buttons)}>
            <ButtonSkeleton className={classNames(skeleton.Button)} />
            <ButtonSkeleton className={classNames(skeleton.Button)} />
          </Buttons>
        </Card>
      </Section>

      {rest?.children}
    </Component>
  );
}
