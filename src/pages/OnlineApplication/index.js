import React from 'react';
import data from 'src/data';

import styles from './index.module.scss';
<<<<<<< HEAD
import data from 'src/data';
import { OnlineApplicationImg, Watch } from '../../icons';
=======
import OnlineApplicationImg from '../../icons/OnlineApplicationImg';
import Watch from '../../icons/Watch';
>>>>>>> 88624fbdae7373d7bcf4890eb22bf3bfcd283846
import { Button, cn, GridColumn, GridRow, Label, Text } from '../../ui2';


export const OnlineApplication = () => (
    <div className='OnlineApplication'>
        <div className={styles.LandingLayout_landing}>
            <div className={styles.OnlineApplication_onlineApplication}>
                <div className={styles.Intro}>
                    <GridRow>
<<<<<<< HEAD
                        <GridColumn size={7}>
                            <Label className={styles.Intro_container} textSize='40' weight='bold' component='h1'>
=======
                        <GridColumn size={6}>
                            <Label className={styles.Intro_container} textSize='40' weight='demibold' component='h1'>
>>>>>>> 88624fbdae7373d7bcf4890eb22bf3bfcd283846
                                Заявка на факторинг <br /> за <span className={styles.Intro_container_underline}>1 минут</span>у в любой банк
                                <Text className={styles.Intro_container_head} textSize='24' component='p'>
                                    Закройте кассовый разрыв на лучших условиях. Быстрое решение для малого и среднего бизнеса от 40 банков по вашему запросу.
                                </Text>
                                <Text className={styles.Intro_container_paragraph} textSize='18' component='p'>
                                    Услуга будет доступна в ближайшее время.
                                </Text>
                                <Label className={styles.Intro_container_paragraph_red} textSize='18' weight='medium' component='p'>
                                    Получите ранний доступ, чтобы первыми обратиться к банкам.
                                </Label>
                            </Label>
                            <Button className={styles.Intro_container_button} variant='normal' size='64' type='styled'>
                                Получить ранний доступ
                            </Button>
                        </GridColumn>
                        <GridColumn size={5}>
                            <OnlineApplicationImg />
                        </GridColumn>
                    </GridRow>
                </div>
                <div className={styles.About}>
                    <GridRow>
<<<<<<< HEAD
                        <GridColumn size={7}>
                            <Label textSize='32' weight='bold' component='h1'>
=======
                        <GridColumn size={6}>
                            <Label textSize='32' weight='demibold' component='h1'>
>>>>>>> 88624fbdae7373d7bcf4890eb22bf3bfcd283846
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
<<<<<<< HEAD
                                <Text className={styles.About_head_header} textSize='18' weight='bold' component='p'>
                                    Единственная площадка, где зарегистрировано сразу
                                    <span className={styles.About_head_header_underline}>40 банков&nbsp;</span>
                                    <span className={styles.About_head_header_underline}>и&nbsp;факторинговых&nbsp;</span>
                                    <span className={styles.About_head_header_underline}>компаний.</span>
=======
                                <Text className={styles.About_head_header} textSize='18' weight='demibold' component='p'>
                                    Единственная площадка, где зарегистрировано сразу <span className={styles.About_head_header_underline}>40 банков и факторинговых компаний</span>.
>>>>>>> 88624fbdae7373d7bcf4890eb22bf3bfcd283846
                                </Text>
                                <Text className={styles.About_head_paragraph} textSize='18' component='p'>
                                    Они предоставят вам информацию о текущей стоимости финансирования кассовых разрывов при работе с отсрочкой платежа всего по одной онлайн-заявке.
                                </Text>
                                <Button variant='secondary' size='36' type='styled'>Узнать подробнее о факторинге</Button>
                            </div>
                            <div className={styles.About_section}>
                                {data.aboutRows.map((content, index) => {
                                    if (index % 2 === 0) {
                                        return (
                                            <Text className={styles.About_section_head_rows} key={index} textSize='18' component='p'>
                                                {content}
                                            </Text>
                                        );
                                    }
                                    return (
                                        <Text className={styles.About_section_rows} key={index} textSize='18' component='p'>
                                            {content}
                                        </Text>
                                    );
                                })}
                            </div>
                            <Text className={styles.About_last_paragraph} textSize='18' component='p'>
                                О всех последующих обновлениях будем рассказывать на сайте, в социальных сетях и рассылках компании.
                            </Text>
                        </GridColumn>
                        <GridColumn size={5}>
                            <Watch />
                        </GridColumn>
                    </GridRow>
                </div>
            </div>
        </div>
    </div>
);
