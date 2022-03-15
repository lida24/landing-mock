import React, { Component } from 'react';
import classNames from 'classnames';
import styles from '../App.module.scss';


export default function TableRow(props) {
    const { tableRow } = props;
    return (
        <tr key={tableRow.id} className={styles.Table_row}>
            <td className={classNames(styles.Table_column_one, styles.Typography_text_18, styles.Typography_text_bold)}>{tableRow.columnOne}</td>
            <td className={classNames(styles.Table_column_two, styles.Typography_text, styles.Typography_text_18)}>
                {tableRow.columnTwo}
            </td>
            <td className={classNames(styles.Table_column_three, styles.Typography_text, styles.Typography_text_18)}>
                {tableRow.columnThree}
            </td>
        </tr>
    );
}
