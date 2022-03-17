import React from 'react';

import data from '../../data';
import FactorinLogo from 'src/icons/FactorinLogo';
import styles from './index.module.scss';
import { Text } from 'src/ui2';
import cn from 'classnames';


export default class ChangeableContent extends React.Component {
    state = {
        clickedText1: data.tableRows[0].columns[1],
        clickedText2: data.tableRows[0].columns[2],
    };


    handleClick = i => {
        this.setState({ clickedText1: data.tableRows[i].columns[1] });
        this.setState({ clickedText2: data.tableRows[i].columns[2] });
    };

    render() {
        const { clickedText1 } = this.state;
        const { clickedText2 } = this.state;
        return (
            <div className={styles.Blockchain_content}>
                <div className={styles.Blockchain_content_buttons_container}>
                    {data.tableRows.map((content, i) => (
                        <Text
                            key={i}
                            content={content}
                            className={cn(
                                styles.Blockchain_content_button,
                                styles.Typography_text_medium,
                            )}
                            textSize='14'
                            component='button'
                            onClick={() => this.handleClick(i)}
                        >
                            {content.columns[0]}
                        </Text>
                    ))}
                </div>
                <Text
                    className={cn(
                        styles.Typography_text_medium,
                    )}
                    textSize='14'
                    component='div'
                >
                    Большинство цифровых платформ
                </Text>
                <Text
                    className={cn(
                        styles.Typography_text,
                        styles.Blockchain_content_text1,
                    )}
                    textSize='14'
                    component='div'
                >
                    {clickedText1}
                </Text>
                <div>
                    <FactorinLogo />
                </div>
                <Text
                    className={cn(
                        styles.Typography_text,
                        styles.Blockchain_content_text2,
                    )}
                    textSize='14'
                    component='div'
                >
                    {clickedText2}
                </Text>
            </div>
        );
    }
}
