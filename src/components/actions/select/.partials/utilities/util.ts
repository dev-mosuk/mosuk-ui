import type { Select as SelectPrimitive } from '@base-ui/react/select';

export function createSelectClearDetails(): SelectPrimitive.Root.ChangeEventDetails {
  let canceled = false;
  let propagationAllowed = false;

  return {
    reason: 'none',
    event: new Event('base-ui'),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      propagationAllowed = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return propagationAllowed;
    },
    trigger: undefined,
  };
}
