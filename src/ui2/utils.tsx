import clsx from 'clsx';
import React, { ComponentType, Consumer, SyntheticEvent, ElementType } from 'react';

import styles from './utils.module.scss';


export const { grabCursor } = styles;

export const animation: number = 300;

export const stopPropagation = (event: SyntheticEvent) =>
    event && event.stopPropagation();

export type FactorinCheckModel = {
    all: boolean;
    include: number[];
    exclude: number[];
};

export const DEFAULT_CHECK_MODEL: FactorinCheckModel = {
    all: false,
    include: [],
    exclude: [],
};

export const setHtml = (html: string) => ({
    dangerouslySetInnerHTML: { __html: html },
});

export const getDisplayName = (...args: ComponentType[]) => args
    .map(Component => Component.displayName || Component.name || 'Component')
    .join(', ');

export type Omit<TSource, KOmitted extends keyof TSource> =
    Pick<TSource, Exclude<keyof TSource, KOmitted>>;

export const contextHOC =
    <PContext extends {}>
    (Context: Consumer<PContext>) =>
        <PComponent extends PContext>(
            Component: ComponentType<PComponent>,
        ): ComponentType<Omit<PComponent, keyof PContext>> =>
            (props: Omit<PComponent, keyof PContext>) => (
                <Context>
                    {value => {
                        const allProps = { ...value, ...props } as PComponent;
                        return <Component {...allProps} />;
                    }}
                </Context>
            );

export interface ClassName {
    className?: string;
}

export const withClassName = <PComponent extends ClassName>(
    className: string,
    component: ElementType<PComponent>,
): ComponentType<PComponent> => ({ className: additionalClassName, ...props }) =>
    React.createElement(component, {
        ...props,
        className: clsx(className, additionalClassName),
    } as PComponent);

export type Forbid<TType, TForbid> = TType & {
    [K in keyof TForbid]?: never;
};

export type ComponentWrapper<PComponent, PWrapper> = PWrapper & {
    component: ElementType<Forbid<PComponent, PWrapper>>;
    componentRef?: React.Ref<any>;
};

export type ComponentWrapperProps<PComponent, PWrapper> =
    PComponent & ComponentWrapper<PComponent, PWrapper>;

export { clsx as cn };
