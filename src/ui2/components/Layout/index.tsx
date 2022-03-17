import React from 'react';

import styles from './index.module.scss';
import { ClassName, cn } from '../../utils';
import { useMediaSwitch } from '../Responsive';


export const GridRow: React.FunctionComponent<ClassName> = ({ className, children }) => (
    <div className={cn(styles.row, className)}>
        {children}
    </div>
);

interface GridColumnProps extends ClassName {
    size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    offset?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}

export const GridColumn: React.FunctionComponent<GridColumnProps> = ({
    className, children,
    size, offset = 0,
}) => (
    <div
        className={cn(styles.column, className)}
        style={useMediaSwitch(
            {
                flexBasis: `calc(${100 / 12 * size}% - 32px)`,
                marginLeft: `calc(16px + ${100 / 12 * offset}%)`,
                maxWidth: `calc(${100 / 12 * size}% - 32px)`,
            },
            undefined,
        )}
    >
        {children}
    </div>
);
