import { HTMLAttributes } from 'react';
import { SkeletonProps } from '../../skeleton/component/component.interface';

export interface DlSkeletonProps extends HTMLAttributes<HTMLDivElement> {}
export interface DlSkeletonDlProps extends HTMLAttributes<HTMLDListElement> {}
export interface DlSkeletonDtProps extends SkeletonProps {}
export interface DlSkeletonDdProps extends SkeletonProps {}