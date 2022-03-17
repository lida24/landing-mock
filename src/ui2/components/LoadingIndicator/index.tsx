import React from 'react';

import { ClassName, cn } from '../../utils';
import styles from './index.module.scss';


export const LoadingIndicator: React.FunctionComponent<ClassName> = ({ className }) => (
    <svg className={cn(styles.loadingIndicator, className)} viewBox='0 0 24 24' fill='#333333' xmlns='http://www.w3.org/2000/svg'>
        <rect x='17.5356' y='5' width='2' height='5' rx='1' transform='rotate(45 17.5356 5)' />
        <rect x='16' y='11' width='5' height='2' rx='1' />
        <rect x='14' y='15.4142' width='2' height='5' rx='1' transform='rotate(-45 14 15.4142)' />
        <rect x='11' y='16' width='2' height='5' rx='1' />
        <rect x='8.53564' y='14' width='2' height='5' rx='1' transform='rotate(45 8.53564 14)' />
        <rect x='3' y='11' width='5' height='2' rx='1' />
        <rect x='5' y='6.41422' width='2' height='5' rx='1' transform='rotate(-45 5 6.41422)' />
        <rect x='11' y='3' width='2' height='5' rx='1' />
    </svg>
);
