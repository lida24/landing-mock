import React, { Component } from 'react';
import classNames from 'classnames';
import styles from '../App.module.scss';
import Polygon from '../icons/Polygon';


export default function Detail(props) {
    const { detail } = props;
    return (
        <div className={styles.Details_row}>
            <div className={styles.Details_row_shape}>
                <Polygon className={styles.Details_row_polygon} />
            </div>
            <div key={detail.id} className={classNames(styles.Details_row_column, styles.Typography_text, styles.Typography_text_18)}>
                {detail.text}
            </div>
        </div>
    );
}
