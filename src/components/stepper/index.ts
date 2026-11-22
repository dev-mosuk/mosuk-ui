import { Stepper as Component } from '@/components/stepper/.partials/components/component';
import type { StepperProps } from '@/components/stepper/.partials/components/component.interface';
import { StepperProgress } from '@/components/stepper/.partials/components/progress/component';
import type { StepperProgressProps } from '@/components/stepper/.partials/components/progress/component.interface';
import { StepperStep } from '@/components/stepper/.partials/components/step/component';
import type { StepperStepProps } from '@/components/stepper/.partials/components/step/component.interface';
import { useStepperStep } from '@/components/stepper/.partials/hooks/hook';
import type { UseStepperStepProps } from '@/components/stepper/.partials/hooks/hook.interface';

export const Stepper = Object.assign(Component, {
  Step: StepperStep,
  Progress: StepperProgress,
});

export { useStepperStep };

export namespace Stepper {
  export type Props = StepperProps;

  export namespace Step {
    export type Props = StepperStepProps;
  }

  export namespace Progress {
    export type Props = StepperProgressProps;
  }
}

export namespace useStepperStep {
  export type Props = UseStepperStepProps;
}
