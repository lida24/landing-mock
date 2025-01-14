const data = {
    rows: ['Будучи ответственной компанией, мы предлагаем клиентам только отлаженные IT-решения. Они успешно прошли тестирование и учитывают действующие законодательные нормы.',
        'Однако это меньшая часть из всех разрабатываемых нами блокчейн-продуктов.',
        'Мы стремимся удивлять, а не использовать популярную архитектуру для устаревших решений. Команда прикладывает максимум усилий, чтобы в скором времени состоялся релиз новых прорывных сервисов',
    ],
    tableRows: [
        {
            columns: ['Архитектура',
                'Владелец центрального сервера – посредник, он может влиять на ценообразование, располагая всей информацией по сделкам и активности клиентов.',
                'Посредников нет, каждый из участников связан друг с другом напрямую, у Factorin отсутствуют инструменты для ценовой манипуляции.',
            ],
        },
        {
            columns: ['Неизменность',
                'У владельца центрального сервера есть доступ к скрытым правкам в базе данных и/или логике работы приложения.',
                'Весь алгоритм сделки прописан в смарт-контракте, удалить и/или изменить запись, которая уже хранится в блокчейне — невозможно.',
            ],
        },
        {
            columns: ['Конфиденциальность',
                'У владельца центрального сервера есть доступ к данным.',
                'По умолчанию у Factorin отсутствует доступ. Получить информацию можно исключительно по запросу к владельцу узла.',
            ],
        },
        {
            columns: ['Скорость',
                'Обмен данными в системе с центральным узлом зависит от доступности и сложности API и/или других сервисов для работы с базами; гарантировать скорость доставки данных — нельзя.',
                'Скорость доставки легко прогнозировать за счет автоматической синхронизации данных узлов участников в рамках консенсуса; от одного узла к другому — максимум за 20 секунд.',
            ],
        },
        {
            columns: ['Техподдержка',
                'Чтобы сообщить о проблеме, необходимо отправить заявку.',
                'Сигнал о поломке узла поступает немедленно и автоматически в систему мониторинга.',
            ],
        },
    ],
    details: ['Команда Factorin создала линейку финансовых IT-продуктов с помощью технологии распределенного реестра на базе Ethereum.',
        'Используя открытые решения, построили свою приватную одноранговую блокчейн сеть.',
        'У всех участников системы равные права доступа к данным, включая сам Factorin.',
        'Участники системы (покупатели, продавцы и факторы) совершают сделки в системе Factorin напрямую, без посредников — каждый связан с каждым.',
        'В основной сети Factorin работают 65 узла (февраль 2022), их число продолжает расти.',
        'Мы провели исследование и узнали, что существенно опережаем по числу работающих узлов все иностранные блокчейн-решения по управлению оборотным капиталом в торгфине.',
        'Все крупные участники имеют собственный узел (факторы и покупатели), более мелкие — присоединяются к их узлам (чаще, — поставщики), и так становятся блокчейн-клиентами сети.',
        'Для стабильной работы последних введена гибкая система мониторинга для немедленной реакции на проблемы.',
        'На всех этапах заключения финансовой сделки узлы обмениваются между собой набором данных.',
        'Строгую и заранее определенную последовательность передачи данных обеспечивают смарт-контракты.',
        'Эти автоматизированные «правила игры» не позволяют внести правки в текущую версию бизнес-процессов, удалить и/или изменить любую запись, которая уже хранится в блокчейне.',
        'Несмотря на то, что Factorin является разработчиком адаптера для использования блокчейна, — у нас нет одностороннего доступа к другим узлам.',
        'У остальных участников сети так же отсутствует доступ к чужим узлам.',
        'Мощности опорных узлов сети при консенсусе Proof of authority (PoA) достаточно для того, чтобы время обмена данными не превышало 20 секунд.',
        'Единственное подобное решение на российском рынке платформ для управления оборотным капиталом в торгфине.',
    ],
};
export default data;
