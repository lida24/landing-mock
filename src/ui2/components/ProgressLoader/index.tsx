import React, { ComponentType } from 'react';

import { cn, ClassName } from '../../utils';
import styles from './index.module.scss';


type ProgressLoaderProps = ClassName & {
    value?: number;
    indeterminate?: boolean;
};

const radius = 20;
const circumference = 2 * Math.PI * radius;
const loaderStyle = { cx: 28, cy: 28, r: radius, strokeWidth: 7, fill: 'none' };

export const ProgressLoader: ComponentType<ProgressLoaderProps> = ({
    className,
    value,
    indeterminate,
}) => (
    <svg
        version='1.1'
        viewBox='0 0 56 56'
        xmlns='http://www.w3.org/2000/svg'
        className={cn(styles.progressLoader, indeterminate && styles.indeterminate, className)}
    >
        <circle {...loaderStyle} />
        <circle
            className={styles.progress}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (indeterminate ? 0.75 : 1 - (value || 0))}
            {...loaderStyle}
        />
    </svg>
);
