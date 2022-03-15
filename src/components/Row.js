import React, { Component } from 'react';
import classNames from 'classnames';
import styles from '../App.module.scss';


export default function Row(props) {
    const { row } = props;
    return (
        <div key={row.id} className={classNames(styles.Layout_row, styles.Paragraph_row, styles.Typography_text, styles.Typography_text_18)}>
            <div className={styles.Layout_column}>
                {row.text}
            </div>
        </div>
    );
}
