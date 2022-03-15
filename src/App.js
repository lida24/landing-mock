import React from 'react';

import './App.css';
import styles from './App.module.scss';

import classNames from 'classnames';

import IntroImage from './icons/IntroImage';
import FactorinLogo from './icons/FactorinLogo';
import Polygon from './icons/Polygon';

import data from './data';
import Detail from './components/Detail';
import Row from './components/Row';
import TableRow from './components/TableRow';


function App() {
      return (
          <div className='App'>
              <div className={styles.LandingLayout_landing}>
                  <div className={styles.Blockchain_blockchain}>
                      <div className={styles.PageIntro_intro}>
                          <div className={styles.PageIntro_title}>Блокчейн</div>
                          <div className={styles.Intro_container}>
                              <div>
                                  <div className={styles.Layout_row}>
                                      <div className={styles.Layout_column}>
                                          <h1 className={classNames(styles.Typography_label_40, styles.Head_block)}>
                                              Как и зачем Factorin использует блокчейн?
                                          </h1>
                                      </div>
                                  </div>
                                  <div className={classNames(styles.Layout_row, styles.Head_row, styles.Typography_text, styles.Typography_text_24)}>
                                      <div className={styles.Layout_column}>
                                          FACTORIN — это концептуально новый подход к организации финансовых
                                          бизнес-процессов и созданию ценности.
                                      </div>
                                  </div>
                                  {data.rows.map(row => <Row key={row.id} row={row}> </Row>)}
                              </div>
                              <div>
                                  <IntroImage />
                              </div>
                          </div>
                          <div className={styles.Container_main}>
                              <div className={styles.Layout_row}>
                                  <div className={styles.Layout_column}>
                                      <h2 className={classNames(styles.Typography_label_32, styles.Typography_text_bold, styles.Head_block)}>
                                          Если коротко
                                      </h2>
                                  </div>
                              </div>
                              <div className={classNames(styles.Layout_row, styles.Head_row, styles.Typography_text_red, styles.Typography_text_24)}>
                                  <div className={styles.Layout_column}>
                                      Распределенная архитектура финтех-сервиса Factorin
                                      позволяет принципиально иначе организовать обмен
                                      данными между клиентами.
                                  </div>
                              </div>
                              <table className={styles.Table}>
                                  <tr>
                                      <th rowSpan='2'> </th>
                                  </tr>
                                  <tr className={styles.Table_header}>
                                      <th className={classNames(styles.Table_column_two, styles.Typography_text_18, styles.Typography_text_bold)}>Большинство цифровых платформ</th>
                                      <th className={classNames(styles.Table_column_three)}><FactorinLogo /></th>
                                  </tr>
                                  {data.tableRows.map(tableRow => <TableRow key={tableRow.id} tableRow={tableRow}> </TableRow>)}
                              </table>
                          </div>
                          <div className={styles.Details}>
                              <div className={styles.Layout_row}>
                                  <div className={styles.Layout_column}>
                                      <h2 className={classNames(styles.Typography_label_32, styles.Typography_text_bold, styles.Head_block)}>
                                          А теперь подробнее
                                      </h2>
                                  </div>
                              </div>
                              <div className={styles.Details_map}>
                                  <div className={styles.Details_column_left}>
                                      {data.details.slice(0, 8).map(detail => <Detail key={detail.id} detail={detail}> </Detail>)}
                                  </div>
                                  <div className={styles.Details_column_right}>
                                      {data.details.slice(8, 14).map(detail => <Detail key={detail.id} detail={detail}> </Detail>)}
                                      <div className={styles.Details_row}>
                                          <div className={styles.Details_row_shape}>
                                              <Polygon className={styles.Details_row_polygon} />
                                          </div>
                                          <div className={classNames(styles.Details_logo, styles.Typography_text, styles.Typography_text_18)}>
                                              <FactorinLogo />
                                              <div>
                                                  Единственное подобное решение на российском рынке платформ для управления оборотным капиталом в торгфине.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }

export default App;
