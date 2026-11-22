export type StepperOrientation = 'horizontal' | 'vertical';

export type StepperStepStatus = 'inactive' | 'active' | 'complete';

export interface StepperContextProps {
  step: number;
  onStepChange?: (step: number) => void;
  orientation: StepperOrientation;
  size: number;
  isClickable: boolean;
  stepCount: number;
}

export interface StepperStepContextProps {
  index: number;
  status: StepperStepStatus;
}
