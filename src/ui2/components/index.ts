import React, { PropsWithChildren } from 'react';

import { ClassName } from '../utils';


export * from './Button';
export * from './CheckBox';
export * from './Icon';
export * from './Layout';
export * from './LoadingIndicator';
export * from './TabHeader';
export * from './Tooltip';
export * from './Typography';
export * from './ProgressLoader';
export * from './Responsive';

export const UI2Migration = ({ children, className }: PropsWithChildren<ClassName>) =>
    React.createElement('div', { className, style: { fontFamily: 'TTHoves' } }, children);
