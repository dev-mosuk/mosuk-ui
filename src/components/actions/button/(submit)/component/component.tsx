import classNames from 'classnames';
import { CircleAlert, CircleCheck, LoaderCircle } from 'lucide-react';
import React, { useMemo } from 'react';
import { Button } from '../../component/component';
import { ButtonSubmitProps } from './component.interface';
import styles from './component.module.css';

export function ButtonSubmit({
  icon,
  text,

  loading,
  success,
  error,

  ...props
}: ButtonSubmitProps) {
  const stateIcon = useMemo(() => {
    if (loading?.isLoading) return loading?.icon ?? LoaderCircle;
    if (success?.isSuccess) return success?.icon ?? CircleCheck;
    if (error?.isError) return error?.icon ?? CircleAlert;
    return icon;
  }, [loading, success, error]);

  const stateText = useMemo(() => {
    if (loading?.isLoading) return loading?.text ?? 'Загрузка...';
    if (success?.isSuccess) return success?.text ?? 'Успешно';
    if (error?.isError) return error?.text ?? 'Ошибка';
    return text;
  }, [loading, success, error, text]);

  const stateClassName = useMemo(() => {
    if (loading?.isLoading) return (styles.loading ?? '') + ' ' + (loading?.className ?? '');
    if (success?.isSuccess) return (styles.success ?? '') + ' ' + (success?.className ?? '');
    if (error?.isError) return (styles.error ?? '') + ' ' + (error?.className ?? '');
    return;
  }, [loading, success, error]);

  const IconComponent = stateIcon;

  return (
    <Button
      {...props}
      type={props?.type ?? 'submit'}
      className={classNames('mosuk-button-submit', styles.button, stateClassName, props?.className)}
    >
      {icon && IconComponent && <IconComponent />}
      {text && stateText}

      {props?.children}
    </Button>
  );
}
