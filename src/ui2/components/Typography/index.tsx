import React, { RefAttributes, PropsWithChildren, AnchorHTMLAttributes, FunctionComponent, ComponentType } from 'react';

import { cn, ClassName, ComponentWrapperProps } from '../../utils';
import styles from './index.module.scss';
import { Icon } from '../Icon';


type Ellipsis = {
    ellipsis?: boolean;
};

const applyEllipsis = (ellipsis?: boolean) => ellipsis && styles.ellipsis;

type LabelProps = Ellipsis & {
    weight?: 'light' | 'regular' | 'medium' | 'demibold';
    textSize: '72' | '48' | '40' | '32' | '24' | '21-24' | '21-32' | '18' | '16' | '14' | '12' | '10' | '9';
};

export const Label = <PComponent extends PropsWithChildren<ClassName>>({
    component, componentRef,
    weight, textSize, ellipsis, // LabelProps
    className, ...props // PComponent
}: ComponentWrapperProps<PComponent, LabelProps>) =>
    React.createElement(component, {
        ...props,
        ref: componentRef,
        className: cn(
            styles.label,
            styles[weight],
            styles[`label-${textSize}`],
            applyEllipsis(ellipsis),
            className,
        ),
    } as any as PComponent & RefAttributes<any>);

Label.defaultProps = {
    weight: 'regular',
};

type TextProps = Ellipsis & {
    textSize: '24' | '21' | '18' | '16' | '14';
    weight?: 'light' | 'regular' | 'medium' | 'demibold';
};

export const Text = <PComponent extends PropsWithChildren<ClassName>>({
    component, componentRef,
    textSize, ellipsis, weight, // TextProps
    className, ...props // PComponent
}: ComponentWrapperProps<PComponent, TextProps>) =>
    React.createElement(component, {
        ...props,
        ref: componentRef,
        className: cn(
            styles.text,
            styles[weight],
            styles[`text-${textSize}`],
            applyEllipsis(ellipsis),
            className,
        ),
    } as any as PComponent & RefAttributes<any>);

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: ComponentType<ClassName>;
    standalone?: boolean;
    innerClassName?: string;
    component?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const Link: FunctionComponent<LinkProps> = ({
    icon, standalone, innerClassName, component: Component = 'a',
    className, children, ...props
}) => (
    <Component className={cn(styles.link, standalone && styles.standalone, className)} {...props}>
        {icon && !standalone && (
            <>
                <Icon className={styles.icon} icon={icon} size='24' />
                &nbsp;
            </>
        )}
        <span className={cn(styles.linkContent, innerClassName)}>
            {icon && standalone && (
                <Icon className={styles.icon} icon={icon} size='24' />
            )}
            {children}
        </span>
    </Component>
);

export const linkAnchorClass = styles.linkContent;

export const Note: FunctionComponent<ClassName> = ({ className, children }) => (
    <span className={cn(styles.note, className)}>
        {children}
    </span>
);
