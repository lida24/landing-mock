import React from 'react';

import styles from './index.module.scss';
import { Text } from '../../ui2';


export const TableRow = ({ tableRow }) => (
    <tr className={styles.Table_row}>
        {tableRow.columns.map((content, index) => (
            <Text
                key={index}
                className={styles[`Table_column_${index}`]}
                textSize='18'
                component='td'
            >
                { content }
            </Text>
        ))}
    </tr>
);
