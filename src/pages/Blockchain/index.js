import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';
import IntroImage from '../../icons/IntroImage';
import FactorinLogo from '../../icons/FactorinLogo';
import Polygon from '../../icons/Polygon';
import data from '../../data';
import Detail from '../../components/Detail';
import TableRow from '../../components/TableRow';
import { PageShortIntro } from '../PageShortIntro';
import { GridColumn, GridRow, Label, Text, useMediaSwitch } from '../../ui2';


export const Blockchain = () => (
    <div className={styles.LandingLayout_landing}>
        <div className={styles.Blockchain_blockchain}>
            <PageShortIntro className={styles.Intro_container} title='Блокчейн'>
                <GridRow>
                    <GridColumn size={8}>
                        <Label textSize={useMediaSwitch('40', '24')} weight='bold' component='h1'>
                            Как и зачем Factorin использует блокчейн?
                        </Label>
                        <Text textSize={useMediaSwitch('24', '18')} component='p'>
                            Factorin — это концептуально новый подход к&nbsp;организации
                            финансовых бизнес-процессов и&nbsp;созданию ценности.
                        </Text>
                        {data.rows.map((content, index) => (
                            <Text key={`intro-${index}`} textSize='18' component='p'>
                                {content}
                            </Text>
                        ))}
                    </GridColumn>
                    <GridColumn size={4}>
                        <IntroImage />
                    </GridColumn>
                </GridRow>
            </PageShortIntro>

            <div className={styles.Container_main}>
                <Label textSize={useMediaSwitch('32', '24')} weight='bold' component='h1'>
                    Если коротко
                </Label>
                <GridRow>
                    <GridColumn size={10}>
                        <Text
                            className={cn(
                                styles.Typography_text_red,
                                styles.Head_row,
                            )}
                            textSize='24'
                            component='p'
                        >
                            Распределенная архитектура финтех-сервиса Factorin
                            позволяет принципиально иначе организовать обмен
                            данными между клиентами.
                        </Text>
                    </GridColumn>
                </GridRow>

                <table className={styles.Table}>
                    <tbody>
                        <tr className={styles.Table_header}>
                            <th />
                            <Text
                                className={cn(
                                    styles.Table_column_1,
                                    styles.Typography_text_bold,
                                )}
                                textSize='18'
                                component='th'
                            >
                                Большинство цифровых платформ
                            </Text>
                            <th className={styles.Table_column_2}>
                                <FactorinLogo />
                            </th>
                        </tr>
                        {data.tableRows.map((tableRow, index) =>
                            <TableRow key={index} tableRow={tableRow} />)}
                    </tbody>
                </table>
            </div>

            <div className={styles.Details}>
                <Label textSize={useMediaSwitch('32', '24')} weight='bold' component='h1'>
                    А теперь подробнее
                </Label>
                <GridRow className={styles.Details_map}>
                    <GridColumn className={styles.Details_column_left} size={5}>
                        {data.details.slice(0, 8).map((detail, index) =>
                            <Detail key={index} detail={detail} />)}
                    </GridColumn>

                    <GridColumn
                        className={styles.Details_between_shape}
                        size={1}
                    />
                    <GridColumn size={5} className={styles.Details_column_right}>
                        {data.details.slice(8, 14).map((detail, index) =>
                            <Detail key={index} detail={detail} />)}

                        <div className={styles.Details_row}>
                            <div className={styles.Details_row_shape}>
                                <Polygon className={styles.Details_row_polygon} />
                            </div>
                            <Text
                                className={cn(
                                    styles.Details_logo,
                                    styles.Typography_text_medium,
                                )}
                                textSize={18}
                                component='div'
                            >
                                <FactorinLogo />
                                <div>
                                    Единственное подобное решение на российском рынке
                                    платформ для управления оборотным капиталом
                                    в торгфине.
                                </div>
                            </Text>
                        </div>
                    </GridColumn>
                </GridRow>
            </div>
        </div>
    </div>
);

