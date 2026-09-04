import { SkeletonProps } from '@/components/core/skeleton/component/component.interface';
import { HTMLAttributes } from 'react';

export interface DlSkeletonProps extends HTMLAttributes<HTMLDivElement> {}
export interface DlSkeletonDlProps extends HTMLAttributes<HTMLDListElement> {}
export interface DlSkeletonDtProps extends SkeletonProps {}
export interface DlSkeletonDdProps extends SkeletonProps {}
