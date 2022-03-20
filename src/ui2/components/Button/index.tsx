import React, { forwardRef, ButtonHTMLAttributes, FunctionComponent, PropsWithChildren } from 'react';
import 'what-input';

import { LoadingIndicator } from '../LoadingIndicator';
import { cn, ClassName } from '../../utils';
import styles from './index.module.scss';


export interface ButtonProps extends PropsWithChildren<ClassName> {
    /** Размер кнопки (высота в px) */
    size?: '64' | '56' | '48' | '40' | '32';
    variant?: 'auxiliary' | 'normal' | 'secondary' | 'background';
    loading?: boolean;

    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
    title?: ButtonHTMLAttributes<HTMLButtonElement>['title'];
    style?: ButtonHTMLAttributes<HTMLButtonElement>['style'];
    value?: ButtonHTMLAttributes<HTMLButtonElement>['value'];
    tabIndex?: ButtonHTMLAttributes<HTMLButtonElement>['tabIndex'];
}

/**
 * Стандартная кнопка в нескольких вариантах
 *
 * Вариант `auxiliary` не имеет стилей, позволяя делать кастомные кнопки со
 * стандартным поведением (навигация с клавиатуры и окантовка при фокусе)
 */
export const Button: FunctionComponent<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({
    className, children,
    variant, size, loading,
    type, onClick, disabled, title, style, value, tabIndex,
}, ref) => (
    <button
        ref={ref}
        type={type}
        className={cn(
            styles.button,
            styles[variant],
            variant !== 'auxiliary' && styles.styled,
            variant !== 'auxiliary' && styles[`size-${size}`],
            loading && styles.loading,
            className,
        )}
        onClick={onClick}
        disabled={disabled}
        title={title}
        style={style}
        value={value}
        tabIndex={tabIndex}
    >
        {loading && (
            <div className={styles.loadingIndicator}>
                <LoadingIndicator className='hcenter vcenter' />
            </div>
        )}
        {children}
    </button>
));

Button.defaultProps = {
    variant: 'auxiliary',
    type: 'button',
    size: '32',
};
