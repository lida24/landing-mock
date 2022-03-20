import React, { useCallback, useState } from 'react';

import { FactorinLogo } from '../../icons';
import { Text, Label, cn } from '../../ui2';
import styles from './index.module.scss';
import data from '../../data';


const VersusContent = ({ text: [textContra, textPro] }) => (
    <>
        <Label
            className={styles.Blockchain_content_header}
            textSize='14'
            weight='medium'
            component='div'
        >
            Большинство цифровых платформ
        </Label>
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

    const [activeTab, setActiveTab] = useState(0);


    const onClick = useCallback(index => {
        setText([
            data.tableRows[index].columns[1],
            data.tableRows[index].columns[2],
        ]);
        setActiveTab(index);
    }, []);

    return (
        <div className={styles.Blockchain_content}>
            <div className={styles.Blockchain_content_buttons_container}>
                {data.tableRows.map((content, i) => (
                    <Label
                        key={i}
                        content={content}
                        className={cn(activeTab === i ? styles.Tab_active : styles.Tab_unactive, styles.Blockchain_content_button)}
                        textSize='14'
                        weight='medium'
                        component='button'
                        onClick={() => onClick(i)}
                    >
                        {content.columns[0]}
                    </Label>
                ))}
            </div>
            <VersusContent text={text} />
        </div>
    );
};
