import { Toast } from '@base-ui-components/react/toast';

export interface AlertProps extends Omit<Toast.Root.Props, 'toast'> {
    toast?: Toast.Root.Props['toast']
}
