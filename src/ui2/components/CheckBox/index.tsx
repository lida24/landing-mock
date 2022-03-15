import React, { FunctionComponent, PropsWithChildren } from 'react';

import { cn, ClassName } from '../../utils';
import styles from './index.module.scss';


export interface CheckboxProps extends PropsWithChildren<ClassName> {
    size?: '24' | '32';
    variant?: 'checkbox' | 'radiobutton';
    name?: string;
    checked: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const markComponents = {
    checkbox: <path d='M12.6663 4.96918L6.75776 10.8777L4.52876 8.66114L3.68945 9.50654L6.75881 12.5627L13.5088 5.81008L12.6663 4.96918Z' />,
    radiobutton: <circle cx='8.5' cy='8.5' r='4.25' />,
};

export const CheckBox: FunctionComponent<CheckboxProps> = ({
    children,
    className,
    disabled,
    variant,
    size,
    onClick,
    ...inputProps
}) => (
    <label
        className={cn(
            styles.checkbox,
            styles[`size-${size}`],
            disabled && styles.disabled,
            className,
        )}
        onClick={disabled ? undefined : onClick}
    >
        <input type='checkbox' {...inputProps} disabled={disabled} />
        <span className={cn(styles.mark, styles[variant])}>
            <svg className='hcenter vcenter' version='1.1' fill='none' viewBox='0 0 17 17' xmlns='http://www.w3.org/2000/svg'>
                {markComponents[variant]}
            </svg>
        </span>
        {children && (
            <span className={styles.content}>
                {children}
            </span>
        )}
    </label>
);

CheckBox.defaultProps = {
    size: '24',
    variant: 'checkbox',
};
