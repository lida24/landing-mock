import React, { PropsWithChildren, RefAttributes } from 'react';

import { cn, ClassName, ComponentWrapperProps } from '../../utils';
import styles from './index.module.scss';
import { Label } from '../Typography';


interface TooltipProps {
    tooltip: React.ReactChild;
    position?: 'right' | 'left' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg';
}


export const Tooltip = <PComponent extends PropsWithChildren<ClassName>>({
    component, componentRef,
    position, tooltip, size, // TooltipProps
    className, children, ...props // PComponent
}: ComponentWrapperProps<PComponent, TooltipProps>) =>
    React.createElement(
        component,
        {
            ...props,
            ref: componentRef,
            className: cn(styles.container, className),
        } as any as PComponent & RefAttributes<any>,
        <>
            {children}
            <Label
                component='div'
                textSize='14'
                className={cn(styles.tooltip, styles[position], styles[size])}
            >
                {tooltip}
            </Label>
        </>,
    );

Tooltip.defaultProps = {
    position: 'right',
    size: 'md',
};
