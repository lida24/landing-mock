import React, { FunctionComponent } from 'react';

import { ClassName, cn } from '../../utils';
import { Button } from '../Button';
import styles from './index.module.scss';


interface TabHeaderProps extends ClassName {
    tabs: string[];
    value?: number;
    onChange?: (value: number) => void;
}

export const TabHeader: FunctionComponent<TabHeaderProps> = ({
    className,
    tabs,
    value,
    onChange,
}) => (
    <div className={cn(styles.tabHeader, className)}>
        {tabs.map((tab, idx) => (
            <Button
                key={idx}
                tabIndex={onChange ? undefined : -1}
                className={cn(
                    styles.tab,
                    !onChange && styles.passive,
                    idx === value && styles.active,
                )}
                onClick={idx !== value && onChange
                    ? () => onChange(idx)
                    : undefined}
            >
                {idx + 1}. {tab}
            </Button>
        ))}
    </div>
);
