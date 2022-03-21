import React from 'react';

import styles from './index.module.scss';
import data from 'src/data';
import { OnlineApplicationImg, Watch, Circle, OnlineApplicationImgMobile } from '../../icons';
import { Button, cn, Desktop, GridColumn, GridRow, Label, Mobile, Text, useMediaSwitch } from '../../ui2';


export const OnlineApplication = () => (
    <div className='OnlineApplication'>
        <div className={styles.LandingLayout_landing}>
            <div className={styles.OnlineApplication_onlineApplication}>
                <div className={styles.Intro}>
                    <GridRow className={styles.Intro_content_mobile}>
                        <GridColumn size={7}>
                            <Label className={styles.Intro_container} textSize={useMediaSwitch('40', '32')} weight='bold' component='h1'>
                                Заявка на факторинг <br /> за <span className={styles.Intro_container_underline}>1 минут</span>у в любой банк <Circle />
                                <Mobile>
                                    <div className={styles.Intro_container_button_mobile}>
                                        <Button className={styles.Intro_container_button} variant='normal' size='64' type='styled'>
                                            Получить ранний доступ
                                        </Button>
                                    </div>
                                </Mobile>
                                <Text className={styles.Intro_container_head} textSize={useMediaSwitch('24', '18')} component='p'>
                                    Закройте кассовый разрыв на лучших условиях. Быстрое решение для малого и среднего бизнеса от 40 банков по вашему запросу.
                                </Text>
                                <Text className={styles.Intro_container_paragraph} textSize={useMediaSwitch('18', '14')} component='p'>
                                    Услуга будет доступна в ближайшее время.
                                </Text>
                                <Label className={styles.Intro_container_paragraph_red} textSize={useMediaSwitch('18', '14')} weight='medium' component='p'>
                                    Получите ранний доступ, чтобы первыми обратиться к банкам.
                                </Label>
                            </Label>
                            <Desktop>
                                <div className={styles.Intro_container_btn_and_svg}>
                                    <Button className={styles.Intro_container_button} variant='normal' size='64' type='styled'>
                                        Получить ранний доступ
                                    </Button>
                                    <Circle className={styles.circle_near_button} />
                                </div>
                            </Desktop>
                        </GridColumn>
                        <GridColumn size={5}>
                            <div className={styles.circle_near_img_1}>
                                <Circle />
                            </div>
                            <div className={styles.circle_near_img_2}>
                                <Circle />
                            </div>
                            <div className={styles.circle_near_img_3}>
                                <Circle />
                            </div>
                            <div className={styles.img}>
                                <Desktop>
                                    <OnlineApplicationImg />
                                </Desktop>
                                <Mobile>
                                    <OnlineApplicationImgMobile />
                                </Mobile>
                            </div>
                        </GridColumn>
                    </GridRow>
                </div>
                <div className={styles.About}>
                    <GridRow>
                        <GridColumn size={7}>
                            <Label textSize={useMediaSwitch('32', '24')} weight='bold' component='h1'>
                                Что такое заявка на факторинг?
                            </Label>
                            <Label
                                className={styles.About_head_red}
                                textSize={useMediaSwitch('24', '20')}
                                component='p'
                            >
                                Одна заявка – максимум предложений.
                            </Label>
                            <div className={styles.About_head_section}>
                                <Text className={styles.About_head_header} textSize='18' weight='bold' component='p'>
                                    Единственная площадка, где зарегистрировано сразу
                                    <span> </span>
                                    <span className={styles.About_head_header_underline}> 40 банков&nbsp;</span>
                                    <span className={styles.About_head_header_underline}>и&nbsp;факторинговых&nbsp;</span>
                                    <span className={styles.About_head_header_underline}>компаний.</span>
                                </Text>
                                <Text className={styles.About_head_paragraph} textSize={useMediaSwitch('18', '14')} component='p'>
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
                        <Desktop>
                            <GridColumn size={5}>
                                <Watch />
                            </GridColumn>
                        </Desktop>
                    </GridRow>
                </div>
            </div>
        </div>
    </div>
);
