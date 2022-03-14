import React from 'react';

import './App.css';
import styles from './App.module.scss';

import classNames from 'classnames';

import SvgSelector from './SvgSelector';
import FactorinLogo from './FactorinLogo';
import FactorinLogoDetail from './FactorinLogoDetail';
import Polygon from './Polygon';


function App() {
      return (
          <div className='App'>
              <div className={styles.LandingLayout_landing}>
                  <div className={styles.Blockchain_blockchain}>
                      <div className={styles.PageIntro_intro}>
                          <div className={styles.PageIntro_title}>Блокчейн</div>
                          <div className={styles.Container_intro}>
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
                                  <div className={classNames(styles.Layout_row, styles.Paragraph_row, styles.Typography_text, styles.Typography_text_18)}>
                                      <div className={styles.Layout_column}>
                                          Будучи ответственной компанией, мы предлагаем клиентам только
                                          отлаженные IT-решения. Они успешно прошли тестирование и
                                          учитывают действующие законодательные нормы.
                                      </div>
                                  </div>
                                  <div className={classNames(styles.Layout_row, styles.Paragraph_row, styles.Typography_text, styles.Typography_text_18)}>
                                      <div className={styles.Layout_column}>
                                          Однако это меньшая часть из всех разрабатываемых нами
                                          блокчейн-продуктов.
                                      </div>
                                  </div>
                                  <div className={classNames(styles.Layout_row, styles.Paragraph_row, styles.Typography_text, styles.Typography_text_18)}>
                                      <div className={styles.Layout_column}>
                                          Мы стремимся удивлять, а не использовать популярную архитектуру
                                          для устаревших решений. Команда прикладывает максимум усилий,
                                          чтобы в скором времени состоялся релиз новых прорывных сервисов
                                      </div>
                                  </div>
                              </div>
                              <div>
                                  <SvgSelector />
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
                              <table className={styles.Table_main}>
                                  <tr>
                                      <th rowSpan='2'> </th>
                                  </tr>
                                  <tr className={styles.Table_header}>
                                      <th className={classNames(styles.Column_two, styles.Typography_text_18, styles.Typography_text_bold)}>Большинство цифровых платформ</th>
                                      <th className={classNames(styles.Column_three)}><FactorinLogo /></th>
                                  </tr>
                                  <tr className={styles.Table_container}>
                                      <td className={classNames(styles.Column_one, styles.Typography_text_18, styles.Typography_text_bold)}>Архитектура</td>
                                      <td className={classNames(styles.Column_two, styles.Typography_text, styles.Typography_text_18)}>
                                          Владелец центрального сервера –посредник, он может влиять на
                                          ценообразование, располагая всей
                                          информацией по сделкам и активности
                                          клиентов.
                                      </td>
                                      <td className={classNames(styles.Column_three, styles.Typography_text, styles.Typography_text_18)}>
                                          Посредников нет, каждый из участников
                                          связан друг с другом напрямую, у Factorin
                                          отсутствуют инструменты для ценовой
                                          манипуляции.
                                      </td>
                                  </tr>
                                  <tr className={styles.Table_container}>
                                      <td className={classNames(styles.Column_one, styles.Typography_text_18, styles.Typography_text_bold)}>Неизменность</td>
                                      <td className={classNames(styles.Column_two, styles.Typography_text, styles.Typography_text_18)}>
                                          У владельца центрального сервера есть
                                          доступ к скрытым правкам в базе данных
                                          и/или логике работы приложения.
                                      </td>
                                      <td className={classNames(styles.Column_three, styles.Typography_text, styles.Typography_text_18)}>
                                          Весь алгоритм сделки прописан в
                                          смарт-контракте, удалить и/или изменить
                                          запись, которая уже хранится в блокчейне —
                                          невозможно.
                                      </td>
                                  </tr>
                                  <tr className={styles.Table_container}>
                                      <td className={classNames(styles.Column_one, styles.Typography_text_18, styles.Typography_text_bold)}>Конфиденциальность</td>
                                      <td className={classNames(styles.Column_two, styles.Typography_text, styles.Typography_text_18)}>
                                          У владельца центрального сервера есть
                                          доступ к данным.
                                      </td>
                                      <td className={classNames(styles.Column_three, styles.Typography_text, styles.Typography_text_18)}>
                                          По умолчанию у Factorin отсутствует доступ.
                                          Получить информацию можно
                                          исключительно по запросу к владельцу узла.
                                      </td>
                                  </tr>
                                  <tr className={styles.Table_container}>
                                      <td className={classNames(styles.Column_one, styles.Typography_text_18, styles.Typography_text_bold)}>Скорость</td>
                                      <td className={classNames(styles.Column_two, styles.Typography_text, styles.Typography_text_18)}>
                                          Обмен данными в системе с центральным
                                          узлом зависит от доступности и сложности
                                          API и/или других сервисов для работы с
                                          базами; гарантировать скорость доставки
                                          данных — нельзя.
                                      </td>
                                      <td className={classNames(styles.Column_three, styles.Typography_text, styles.Typography_text_18)}>
                                          Скорость доставки легко прогнозировать за
                                          счет автоматической синхронизации данных
                                          узлов участников в рамках консенсуса; от
                                          одного узла к другому — максимум за 20
                                          секунд.
                                      </td>
                                  </tr>
                                  <tr className={styles.Table_container}>
                                      <td className={classNames(styles.Column_one, styles.Typography_text_18, styles.Typography_text_bold)}>Техподдержка</td>
                                      <td className={classNames(styles.Column_two, styles.Typography_text, styles.Typography_text_18)}>
                                          Чтобы сообщить о проблеме, необходимо отправить заявку.
                                      </td>
                                      <td className={classNames(styles.Column_three, styles.Typography_text, styles.Typography_text_18)}>
                                          Сигнал о поломке узла поступает
                                          немедленно и автоматически в систему
                                          мониторинга.
                                      </td>
                                  </tr>
                              </table>
                          </div>
                          <div className={styles.Container_details}>
                              <div className={styles.Layout_row}>
                                  <div className={styles.Layout_column}>
                                      <h2 className={classNames(styles.Typography_label_32, styles.Typography_text_bold, styles.Head_block)}>
                                          А теперь подробнее
                                      </h2>
                                  </div>
                              </div>
                              <div className={styles.Map_details}>
                                  <div className={styles.Details_left}>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_left, styles.Typography_text, styles.Typography_text_18)}>
                                              Команда Factorin создала линейку финансовых IT-продуктов с помощью технологии распределенного реестра на базе Ethereum.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_left, styles.Typography_text, styles.Typography_text_18)}>
                                              Используя открытые решения, построили свою приватную одноранговую блокчейн сеть.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_left, styles.Typography_text, styles.Typography_text_18)}>
                                              У всех участников системы равные права доступа к данным, включая сам Factorin.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_left, styles.Typography_text, styles.Typography_text_18)}>
                                              Участники системы (покупатели, продавцы и факторы) совершают сделки в системе Factorin напрямую, без посредников — каждый связан с каждым.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_left, styles.Typography_text, styles.Typography_text_18)}>
                                              В основной сети Factorin работают 65 узла (февраль 2022), их число продолжает расти.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_left, styles.Typography_text, styles.Typography_text_18)}>
                                              Мы провели исследование и узнали, что существенно опережаем по числу работающих узлов все иностранные блокчейн-решения по управлению оборотным
                                              капиталом в торгфине.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_left, styles.Typography_text, styles.Typography_text_18)}>
                                              Все крупные участники имеют собственный узел (факторы и покупатели), более мелкие — присоединяются к их узлам (чаще, — поставщики), и так
                                              становятся блокчейн-клиентами сети.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_left, styles.Typography_text, styles.Typography_text_18)}>
                                              Для стабильной работы последних введена гибкая система мониторинга для немедленной реакции на проблемы.
                                          </div>
                                      </div>
                                  </div>
                                  <div className={styles.Details_right}>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_right, styles.Typography_text, styles.Typography_text_18)}>
                                              На всех этапах заключения финансовой сделки узлы обмениваются между собой набором данных.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_right, styles.Typography_text, styles.Typography_text_18)}>
                                              Строгую и заранее определенную последовательность передачи данных обеспечивают смарт-контракты.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_right, styles.Typography_text, styles.Typography_text_18)}>
                                              Эти автоматизированные «правила игры» не позволяют внести правки в текущую версию бизнес-процессов,
                                              удалить и/или изменить любую запись, которая уже хранится в блокчейне.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_right, styles.Typography_text, styles.Typography_text_18)}>
                                              Несмотря на то, что Factorin является разработчиком адаптера для использования блокчейна, — у нас нет
                                              одностороннего доступа к другим узлам.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_right, styles.Typography_text, styles.Typography_text_18)}>
                                              У остальных участников сети так же отсутствует доступ к чужим узлам.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Column_right, styles.Typography_text, styles.Typography_text_18)}>
                                              Мощности опорных узлов сети при консенсусе Proof of   authority (PoA) достаточно для того, чтобы время
                                              обмена данными не превышало 20 секунд.
                                          </div>
                                      </div>
                                      <div className={styles.Detail}>
                                          <div className={styles.Shape}>
                                              <Polygon className={styles.Polygon} />
                                          </div>
                                          <div className={classNames(styles.Detail_logo, styles.Typography_text, styles.Typography_text_18)}>
                                              <FactorinLogoDetail />
                                              <div className={styles.Column_right_detail}>
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
