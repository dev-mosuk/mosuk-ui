import { StepperSkeleton as Component } from '@/components/navigation/stepper/skeleton/.partials/components/component';
import type { StepperSkeletonProps as ComponentProps } from '@/components/navigation/stepper/skeleton/.partials/components/component.interface';
import { StepperContentSkeleton } from '@/components/navigation/stepper/skeleton/.partials/components/content/component';
import type { StepperContentSkeletonProps } from '@/components/navigation/stepper/skeleton/.partials/components/content/component.interface';
import { StepperIndicatorSkeleton } from '@/components/navigation/stepper/skeleton/.partials/components/indicator/component';
import type { StepperIndicatorSkeletonProps } from '@/components/navigation/stepper/skeleton/.partials/components/indicator/component.interface';
import { StepperStepSkeleton } from '@/components/navigation/stepper/skeleton/.partials/components/step/component';
import type { StepperStepSkeletonProps } from '@/components/navigation/stepper/skeleton/.partials/components/step/component.interface';

export const StepperSkeleton = Object.assign(Component, {
  Step: StepperStepSkeleton,
  Indicator: StepperIndicatorSkeleton,
  Content: StepperContentSkeleton,
});

export namespace StepperSkeleton {
  export type Props = ComponentProps;

  export namespace Step {
    export type Props = StepperStepSkeletonProps;
  }

  export namespace Indicator {
    export type Props = StepperIndicatorSkeletonProps;
  }

  export namespace Content {
    export type Props = StepperContentSkeletonProps;
  }
}
