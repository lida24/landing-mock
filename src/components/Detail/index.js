import React from 'react';

import styles from './index.module.scss';
import Polygon from '../../icons/Polygon';
import { Text, useMediaSwitch } from '../../ui2';


export default function Detail(props) {
    const { detail } = props;
    return (
        <div className={styles.Details_row}>
            <div className={styles.Details_row_shape}>
                <Polygon className={styles.Details_row_polygon} />
            </div>
            <Text
                className={styles.Details_row_column}
                textSize={useMediaSwitch('18', '14')}
                component='div'
            >
                {detail}
            </Text>
        </div>
    );
}
