import { Stepper as Component } from '@/components/navigation/stepper/component/.partials/components/component';
import type { StepperProps } from '@/components/navigation/stepper/component/.partials/components/component.interface';
import { StepperContent } from '@/components/navigation/stepper/component/.partials/components/content/component';
import type { StepperContentProps } from '@/components/navigation/stepper/component/.partials/components/content/component.interface';
import { StepperDescription } from '@/components/navigation/stepper/component/.partials/components/description/component';
import type { StepperDescriptionProps } from '@/components/navigation/stepper/component/.partials/components/description/component.interface';
import { StepperIcon } from '@/components/navigation/stepper/component/.partials/components/icon/component';
import type { StepperIconProps } from '@/components/navigation/stepper/component/.partials/components/icon/component.interface';
import { StepperIndicator } from '@/components/navigation/stepper/component/.partials/components/indicator/component';
import type { StepperIndicatorProps } from '@/components/navigation/stepper/component/.partials/components/indicator/component.interface';
import { StepperSeparator } from '@/components/navigation/stepper/component/.partials/components/separator/component';
import type { StepperSeparatorProps } from '@/components/navigation/stepper/component/.partials/components/separator/component.interface';
import { StepperStep } from '@/components/navigation/stepper/component/.partials/components/step/component';
import type { StepperStepProps } from '@/components/navigation/stepper/component/.partials/components/step/component.interface';
import { StepperTitle } from '@/components/navigation/stepper/component/.partials/components/title/component';
import type { StepperTitleProps } from '@/components/navigation/stepper/component/.partials/components/title/component.interface';
import { useStepperStep } from '@/components/navigation/stepper/component/.partials/hooks/hook';
import type { UseStepperStepProps } from '@/components/navigation/stepper/component/.partials/hooks/hook.interface';

export const Stepper = Object.assign(Component, {
  Step: StepperStep,
  Indicator: StepperIndicator,
  Icon: StepperIcon,
  Content: StepperContent,
  Title: StepperTitle,
  Description: StepperDescription,
  Separator: StepperSeparator,
});

export { useStepperStep };

export namespace Stepper {
  export type Props = StepperProps;

  export namespace Step {
    export type Props = StepperStepProps;
  }

  export namespace Indicator {
    export type Props = StepperIndicatorProps;
  }

  export namespace Icon {
    export type Props = StepperIconProps;
  }

  export namespace Content {
    export type Props = StepperContentProps;
  }

  export namespace Title {
    export type Props = StepperTitleProps;
  }

  export namespace Description {
    export type Props = StepperDescriptionProps;
  }

  export namespace Separator {
    export type Props = StepperSeparatorProps;
  }
}

export namespace useStepperStep {
  export type Props = UseStepperStepProps;
}
