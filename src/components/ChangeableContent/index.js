import React, { useCallback, useState } from 'react';

import { FactorinLogo } from '../../icons';
import { Text } from '../../ui2';
import styles from './index.module.scss';
import data from '../../data';


const VersusContent = ({ text: [textContra, textPro] }) => (
    <>
        <Text
            textSize='14'
            component='div'
            weight='medium'
        >
            Большинство цифровых платформ
        </Text>
        <Text
            className={styles.Blockchain_content_text1}
            textSize='14'
            component='div'
        >
            {textContra}
        </Text>
        <div>
            <FactorinLogo />
        </div>
        <Text
            className={styles.Blockchain_content_text2}
            textSize='14'
            component='div'
        >
            {textPro}
        </Text>
    </>
);

export const ChangeableContent = () => {
    const [text, setText] = useState([
        data.tableRows[0].columns[1],
        data.tableRows[0].columns[2],
    ]);

    const onClick = useCallback(index => {
        setText([
            data.tableRows[index].columns[1],
            data.tableRows[index].columns[2],
        ]);
    }, []);

    return (
        <div className={styles.Blockchain_content}>
            <div className={styles.Blockchain_content_buttons_container}>
                {data.tableRows.map((content, i) => (
                    <Text
                        key={i}
                        content={content}
                        className={styles.Blockchain_content_button}
                        textSize='14'
                        component='button'
                        onClick={() => onClick(i)}
                    >
                        {content.columns[0]}
                    </Text>
                ))}
            </div>
            <VersusContent text={text} />
        </div>
    );
};
