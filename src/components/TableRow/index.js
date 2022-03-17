import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';
import { Text } from '../../ui2';


export default function TableRow(props) {
    const { tableRow } = props;
    return (
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
}
