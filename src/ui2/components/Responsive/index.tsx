import React from 'react';
import Responsive, { MediaQueryProps, useMediaQuery } from 'react-responsive';


type ResponsiveProps = {
    children: MediaQueryProps['children'];
};

export const Desktop: React.ComponentType<ResponsiveProps> = ({ children }) => (
    <Responsive minWidth={481}>
        {children}
    </Responsive>
);

export const Mobile: React.ComponentType<ResponsiveProps> = ({ children }) => (
    <Responsive maxWidth={480}>
        {children}
    </Responsive>
);

export const useMediaSwitch = <TArg1 extends any, TArg2 extends any>(
    desktop: TArg1,
    mobile: TArg2,
) : TArg1 | TArg2 =>
    useMediaQuery({ maxWidth: 480 })
        ? mobile
        : desktop;
