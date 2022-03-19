import React from 'react';

import styles from './index.module.scss';
import data from 'src/data';
import OnlineApplicationImg from '../../icons/OnlineApplicationImg';
import Watch from '../../icons/Watch';
import { Button, cn, GridColumn, GridRow, Label, Text } from '../../ui2';


export const OnlineApplication = () => (
    <div className='OnlineApplication'>
        <div className={styles.LandingLayout_landing}>
            <div className={styles.OnlineApplication_onlineApplication}>
                <div className={styles.Intro}>
                    <GridRow>
                        <GridColumn size={6}>
                            <Label className={styles.Intro_container} textSize='40' weight='bold' component='h1'>
                                Заявка на факторинг <br /> за <span className={styles.Intro_container_underline}>1 минут</span>у в любой банк
                                <Text className={styles.Intro_container_head} textSize='24' component='p'>
                                    Закройте кассовый разрыв на лучших условиях. Быстрое решение для малого и среднего бизнеса от 40 банков по вашему запросу.
                                </Text>
                                <Text className={styles.Intro_container_paragraph} textSize='18' component='p'>
                                    Услуга будет доступна в ближайшее время.
                                </Text>
                                <Text className={styles.Intro_container_paragraph_red} textSize='18' component='p'>
                                    Получите ранний доступ, чтобы первыми обратиться к банкам.
                                </Text>
                            </Label>
                            <Button className={styles.Intro_container_button} variant='normal' size='64' type='styled'>
                                Получить ранний доступ
                            </Button>
                        </GridColumn>
                        <GridColumn size={10}>
                            <OnlineApplicationImg />
                        </GridColumn>
                    </GridRow>
                </div>
                <div className={styles.About}>
                    <GridRow>
                        <GridColumn size={6}>
                            <Label textSize='32' weight='bold' component='h1'>
                                Что такое заявка на факторинг?
                            </Label>
                            <Text
                                className={styles.About_head_red}
                                textSize='24'
                                component='p'
                            >
                                Одна заявка – максимум предложений.
                            </Text>
                            <div className={styles.About_head_section}>
                                <Text className={styles.About_head_header} textSize='18' weight='bold' component='p'>
                                    Единственная площадка, где зарегистрировано сразу <span className={styles.About_head_header_underline}>40 банков и факторинговых компаний</span>.
                                </Text>
                                <Text className={styles.About_head_paragraph} textSize='18' component='p'>
                                    Они предоставят вам информацию о текущей стоимости финансирования кассовых разрывов при работе с отсрочкой платежа всего по одной онлайн-заявке.
                                </Text>
                                <Button variant='secondary' size='36' type='styled'>Узнать подробнее о факторинге</Button>
                            </div>
                            <div className={styles.About_section}>
                                {data.aboutRows.map((content, index) => (
                                    <Text key={index} textSize='18' component='p'>
                                        {content.rows.map((column, i) => {
                                            if (i % 2 === 0) {
                                                return (
                                                    <Text className={styles.About_section_head_rows} key={i} textSize='18' component='p'>
                                                        {column}
                                                    </Text>
                                                );
                                            }
                                            return (
                                                <Text className={styles.About_section_rows} key={i} textSize='18' component='p'>
                                                    {column}
                                                </Text>
                                            );
                                        })}
                                    </Text>
                                ))}
                            </div>
                            <Text className={styles.About_last_paragraph} textSize='18' component='p'>
                                О всех последующих обновлениях будем рассказывать на сайте, в социальных сетях и рассылках компании.
                            </Text>
                        </GridColumn>
                        <GridColumn size={12}>
                            <Watch />
                        </GridColumn>
                    </GridRow>
                </div>
            </div>
        </div>
    </div>
);
