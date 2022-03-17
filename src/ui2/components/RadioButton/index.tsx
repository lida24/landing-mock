import fp from 'lodash/fp';
import React, { PropsWithChildren, FunctionComponent } from 'react';

import { ClassName } from '../../utils';
import { CheckBox } from '../CheckBox';


interface RadioButtonGroupContext {
    size?: '24' | '32';

    selected: any;
    onChange?: (value: any) => void;
}

const RadioButtonContext = React.createContext<RadioButtonGroupContext>({ selected: null });

interface RadioGroupProps extends RadioButtonGroupContext, PropsWithChildren<{}> {}

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({ children, ...context }) => (
    <RadioButtonContext.Provider value={context}>
        {children}
    </RadioButtonContext.Provider>
);

interface RadioButtonProps extends ClassName, PropsWithChildren<{}> {
    value: any;
}

export const RadioButton: FunctionComponent<RadioButtonProps> = ({ value, ...props }) => (
    <RadioButtonContext.Consumer>
        {({ size, selected, onChange }) => (
            <CheckBox
                {...props}
                variant='radiobutton'
                size={size}
                checked={value === selected}
                onChange={value === selected ? fp.noop : () => onChange(value)}
            />
        )}
    </RadioButtonContext.Consumer>
);
