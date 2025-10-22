const sampleQuestions = [
    {
        id: 1,
        type: 'single',
        text: 'Каково определение двухуровневого дизайна коммутируемой сети?',
        options: [
            { text: 'Уровни доступа, распределения и ядра объединены в один уровень с отдельным основным уровнем', correct: false },
            { text: 'Уровни доступа и распределения объединены в один уровень, а базовый уровень выделен в отдельный уровень', correct: false },
            { text: 'Уровни доступа и ядра свернуты в один уровень, а уровень распределения выделен в отдельный уровень', correct: false },
            { text: 'Уровни распределения и ядра свернуты в один уровень, а уровень доступа выделен в отдельный уровень', correct: true }
        ]
    },
    {
        id: 2,
        type: 'single',
        text: 'Что характерно для внутриполосного (in-band) управления устройствами?',
        options: [
            { text: 'Используется для мониторинга и внесения изменений в конфигурацию сетевого устройства через сетевое соединение', correct: true },
            { text: 'Использует прямое подключение к консоли или порту AUX', correct: false },
            { text: 'Используется клиент эмуляции терминала', correct: false },
            { text: 'Используется для первоначальной настройки или когда сетевое соединение недоступно', correct: false }
        ]
    },
    {
        id: 3,
        type: 'single',
        text: 'Коммутатор участвует в домене VTP и настроен как сервер VTP. Коммутатор должен распространять сеть VLAN 10 (используемую администраторами) по всему домену VTP, но не имеет напрямую подключенных мостов, использующих эту конкретную сеть VLAN. Какая конфигурация удовлетворит этому требованию?',
        options: [
            { text: 'vlan 10<br>name ADM<br>exit', correct: true },
            { text: 'VTP mode server<br>vtp password administration', correct: false },
            { text: 'interface fa0/24<br>switchport mode access<br>switchport access vlan 10', correct: false },
            { text: 'Interface g0/1<br>switchport mode trunk<br>switchport trunk native vlan 10', correct: false }
        ]
    },
    {
        id: 4,
        type: 'single',
        text: 'Какова характеристика маршрутизируемого порта коммутатора уровня 3?',
        options: [
            { text: 'Не добавляется в VLAN', correct: true },
            { text: 'Обычно используется в качестве канала WAN', correct: false },
            { text: 'Невозможно назначить IP-адрес', correct: false },
            { text: 'Поддерживает транки', correct: false }
        ]
    },
    {
        id: 5,
        type: 'single',
        text: 'Какой тип VLAN изначально является VLAN управления?',
        options: [
            { text: 'VLAN по умолчанию', correct: true },
            { text: 'VLAN управления', correct: false },
            { text: 'Native VLAN', correct: false },
            { text: 'VLAN данных', correct: false }
        ]
    },
    {
        id: 6,
        type: 'single',
        text: 'Какова функция ASIC в многоуровневом коммутаторе?',
        options: [
            { text: 'Предотвращает образование петель уровня 2, отключая избыточные каналы связи между коммутаторами', correct: false },
            { text: 'Упрощает пересылку IP-пакетов в многоуровневом коммутаторе, минуя центральный процессор', correct: true },
            { text: 'Обеспечивают питание таких устройств, как IP-телефоны и точки беспроводного доступа, через порты Ethernet', correct: false },
            { text: 'Объединяет несколько физических портов коммутатора в один логический порт', correct: false }
        ]
    },
    {
        id: 7,
        type: 'single',
        text: 'Какой компонент коммутатора сокращает время обработки пакетов в коммутаторе?',
        options: [
            { text: 'ASIC', correct: true },
            { text: 'Пересылка данных через RAM', correct: false },
            { text: 'Два процессора', correct: false },
            { text: 'Большой размер буфера', correct: false }
        ]
    },
    {
        id: 8,
        type: 'single',
        text: 'Компьютер может получить доступ к устройствам в той же сети, но не может получить доступ к устройствам в других сетях. Какова вероятная причина этой проблемы?',
        options: [
            { text: 'К сетевой карте неправильно подключен кабель', correct: false },
            { text: 'У компьютера установлена неправильная маска подсети', correct: false },
            { text: 'Компьютер имеет неверный IP-адрес', correct: false },
            { text: 'Компьютер имеет недопустимый адрес шлюза по умолчанию', correct: true }
        ]
    },
    {
        id: 9,
        type: 'single',
        text: 'Посмотрите на рисунок. Сетевой администратор просматривает назначение портов и VLAN на коммутаторе S2 и замечает, что интерфейсы Gi0/1 и Gi0/2 не включены в выходные данные. Почему в выводе отсутствуют указанные интерфейсы?',
        image: 'images/questions/1-9.jpg',
        options: [
            { text: 'Это маршрутизируемые интерфейсы', correct: false },
            { text: 'Они настроены как транковые интерфейсы', correct: true },
            { text: 'Эти интерфейсы выключены административно', correct: false },
            { text: 'К этим интерфейсам не подключены устройства', correct: false }
        ]
    },
    {
        id: 10,
        type: 'multiple',
        text: 'Какие три функции коммутатора уровня доступа учитываются при проектировании сети? (Выберите три варианта)',
        options: [
            { text: 'Скорость пересылки', correct: false },
            { text: 'Плотность портов', correct: true },
            { text: 'Сокращение широковещательного трафика', correct: false },
            { text: 'Возможность аварийного переключения', correct: true },
            { text: 'Питание через Ethernet (PoE)', correct: true },
            { text: 'Скорость сходимости', correct: false }
        ]
    },
    {
        id: 11,
        type: 'multiple',
        text: 'Каковы два способа доступа к коммутатору Cisco для внеполосного (out-of-band) управления? (Выберите два варианта)',
        options: [
            { text: 'Соединение через HTTP', correct: false },
            { text: 'Соединение через консольный порт', correct: true },
            { text: 'Соединение через порт AUX', correct: true },
            { text: 'Соединение через SSH', correct: false },
            { text: 'Соединение через Telnet', correct: false }
        ]
    },
    {
        id: 12,
        type: 'multiple',
        text: 'Учитывая следующую конфигурацию, какие два утверждения верны? (Выберите два варианта)<br><br>switch(config)# vtp version 2<br>switch(config)# vtp mode server<br>switch(config)# vtp domain Cisco<br>switch(config)# vtp password mypassword',
        options: [
            { text: 'Этот коммутатор может создавать, изменять и удалять все VLAN в пределах VTP-домена Cisco', correct: true },
            { text: 'Этот коммутатор поддерживает полный список всех VLAN и может создавать VLAN, но не может удалять или изменять существующие VLAN', correct: false },
            { text: 'Этот коммутатор может отправлять и получать VTP-сообщения только из домена Cisco', correct: true },
            { text: 'Пароль предотвратит участие неавторизованных маршрутизаторов в домене Cisco', correct: false },
            { text: 'Этот коммутатор может сообщать о своей конфигурации VLAN другим коммутаторам только в домене Cisco, но может получать объявления из других доменов', correct: false }
        ]
    },
    {
        id: 13,
        type: 'single',
        text: 'Пользователь настроил сетевую карту на ПК, как показано на рисунке, но обнаружил, что компьютер не может получить доступ к Интернету. В чем проблема?',
        image: 'images/questions/1-13.jpg',
        options: [
            { text: 'Альтернативного DNS-сервера быть не должно', correct: false },
            { text: 'Конфигурация не была применена', correct: false },
            { text: 'Неверный адрес шлюза по умолчанию', correct: true },
            { text: 'Предпочтительный DNS-адрес неверен', correct: false }
        ]
    },
    {
        id: 14,
        type: 'single',
        text: 'Что является характеристикой VTP?',
        options: [
            { text: 'Коммутаторы в режиме VTP-клиента могут увеличить номер версии конфигурации VTP', correct: false },
            { text: 'Коммутаторы в режиме клиента VTP хранят информацию о VLAN в NVRAM', correct: false },
            { text: 'Коммутаторы в прозрачном режиме VTP пересылают объявления VTP', correct: true },
            { text: 'Коммутаторы в прозрачном режиме VTP возвращаются обратно в режим сервера VTP после перезагрузки', correct: false }
        ]
    },
    {
        id: 15,
        type: 'multiple',
        text: 'Какие два параметра VTP должны быть одинаковыми на всех коммутаторах в сети, чтобы они могли участвовать в одном и том же домене VTP? (Выберите два варианта)',
        options: [
            { text: 'Режим сервера VTP', correct: false },
            { text: 'Режим клиента VTP', correct: false },
            { text: 'Прозрачный режим VTP', correct: false },
            { text: 'Номер версии конфигурации VTP', correct: false },
            { text: 'Пароль домена VTP', correct: true },
            { text: 'Доменное имя VTP', correct: true }
        ]
    },
    {
        id: 16,
        type: 'single',
        text: 'Какие действия необходимо предпринять при планировании избыточности в иерархической структуре сети?',
        options: [
            { text: 'Постоянно покупайте резервное оборудование для сети', correct: false },
            { text: 'Добавить альтернативные физические пути для передачи данных по сети', correct: true },
            { text: 'Немедленно заменять модуль, службу или устройство, которые не работают в сети', correct: false },
            { text: 'Отключить STP между коммутаторами для добавления резервных каналов связи', correct: false }
        ]
    },
    {
        id: 17,
        type: 'multiple',
        text: 'Каковы три уровня иерархической модели проектирования сети? (Выберите три варианта)',
        options: [
            { text: 'Уровень канала передачи данных', correct: false },
            { text: 'Уровень ядра', correct: true },
            { text: 'Уровень распределения', correct: true },
            { text: 'Уровень доступа', correct: true },
            { text: 'Уровень Интернета', correct: false }
        ]
    },
    {
        id: 18,
        type: 'single',
        text: 'Что происходит с портами коммутатора после удаления VLAN, которой они назначены?',
        options: [
            { text: 'Порты отключаются', correct: true },
            { text: 'Порты переносятся в VLAN 1, VLAN по умолчанию', correct: false },
            { text: 'Порты перестают обмениваться данными с подключенными устройствами', correct: false },
            { text: 'Порты переводятся в транковый режим', correct: false }
        ]
    },
    {
        id: 19,
        type: 'input',
        text: 'В коммутаторе Cisco информация о VLAN расширенного диапазона хранится в файле ______',
        correctAnswer: 'running-config',
        caseSensitive: false,
    },
    {
        id: 20,
        type: 'multiple',
        text: 'Какие два действия приведут к изменению номера версии конфигурации VTP на сервере VTP? (Выберите два варианта)',
        options: [
            { text: 'Изменение имени домена VTP', correct: true },
            { text: 'Добавление VLAN', correct: true },
            { text: 'Изменение режима коммутатора на клиент VTP', correct: false },
            { text: 'Перезагрузка коммутатора', correct: false },
            { text: 'Изменение настройки интерфейса VLAN', correct: false }
        ]
    },
    {
        id: 21,
        type: 'multiple',
        text: 'Каковы два преимущества расширения подключения пользователей на уровне доступа через беспроводную среду? (Выберите два варианта)',
        options: [
            { text: 'Большая доступность полосы пропускания', correct: false },
            { text: 'Снижение затрат', correct: true },
            { text: 'Расширенные возможности управления сетью', correct: false },
            { text: 'Снижение количества критических точек отказа', correct: false },
            { text: 'Большая гибкость', correct: true }
        ]
    },
    {
        id: 22,
        type: 'single',
        text: 'Какова основная функция уровня доступа многоуровневой архитектуры коммутируемой сети?',
        options: [
            { text: 'Предоставить доступ пользователю в сети', correct: true },
            { text: 'Обеспечить изоляцию неисправностей', correct: false },
            { text: 'Добавить границы маршрутизации', correct: false },
            { text: 'Ограничить широковещательные домены', correct: false }
        ]
    },
    {
        id: 23,
        type: 'single',
        text: 'При настройке маршрутизации между VLAN на многоуровневом коммутаторе сетевой администратор вводит команду <strong>no switchport</strong> на интерфейсе, подключенном к другому коммутатору. Какова цель этой команды?',
        options: [
            { text: 'Создать статический транковый канал', correct: false },
            { text: 'Тегировать трафик из VLAN', correct: false },
            { text: 'Создать коммутируемый виртуальный интерфейс', correct: false },
            { text: 'Создать маршрутизируемый порт для одной сети', correct: true }
        ]
    },
    {
        id: 24,
        type: 'single',
        text: 'В чем может быть недостаток использования многоуровневых коммутаторов для маршрутизации между VLAN?',
        options: [
            { text: 'STP должен быть отключен для реализации маршрутизации на многоуровневом коммутаторе', correct: false },
            { text: 'Многоуровневые коммутаторы имеют большую задержку маршрутизации', correct: false },
            { text: 'Использование многоуровневого коммутатора дороже, чем реализация RoS (router-on-a-stick)', correct: true },
            { text: 'Многоуровневые коммутаторы ограничены использованием магистральных каналов для маршрутизации', correct: false }
        ]
    },
    {
        id: 25,
        type: 'single',
        text: 'Как маршрутизируется трафик между несколькими VLAN на многоуровневом коммутаторе?',
        options: [
            { text: 'Трафик пересылается на все физические интерфейсы', correct: false },
            { text: 'Трафик маршрутизируется через подынтерфейсы', correct: false },
            { text: 'Трафик маршрутизируется через внутренние VLAN-интерфейсы', correct: true },
            { text: 'Трафик маршрутизируется через физические интерфейсы', correct: false }
        ]
    },
    {
        id: 26,
        type: 'multiple',
        text: 'Какие три действия могут вызвать проблемы с реализацией VTP? (Выберите три варианта)',
        options: [
            { text: 'Не использовать пароли VTP', correct: false },
            { text: 'Использование коммутаторов сторонних производителей', correct: true },
            { text: 'Наличие коммутатора в прозрачном режиме VTP между коммутатором сервера VTP и коммутатором клиента VTP', correct: false },
            { text: 'Использование в имени домена VTP нижнего регистра на одном коммутаторе и верхнего регистра на другом коммутаторе', correct: true },
            { text: 'Использование немагистрального канала для соединения коммутаторов', correct: true },
            { text: 'Настройка всех коммутаторов в режиме сервера VTP', correct: false }
        ]
    },
    {
        id: 27,
        type: 'single',
        text: 'Какой тип VLAN специально настраивается для сетевого трафика, такого как SSH, Telnet, HTTPS, HTTP и SNMP?',
        options: [
            { text: 'Голосовые VLAN', correct: false },
            { text: 'Магистральные VLAN', correct: false },
            { text: 'VLAN управления', correct: true },
            { text: 'VLAN безопасности', correct: false }
        ]
    },
    {
        id: 28,
        type: 'single',
        text: 'Посмотрите на рисунок. Какие устройства находятся в домене сбоя, если коммутатор S3 потеряет питание?',
        image: 'images/questions/1-28.jpg',
        options: [
            { text: 'AP_2 и AP_1', correct: false },
            { text: 'S1 и S4', correct: false },
            { text: 'S4 и PC_2', correct: false },
            { text: 'PC_3 и PC_2', correct: false },
            { text: 'PC_3 и AP_2', correct: true }
        ]
    },
    {
        id: 29,
        type: 'single',
        text: 'Какова цель протокола связующего дерева (STP)?',
        options: [
            { text: 'Позволяет устройствам Cisco обмениваться обновлениями таблиц маршрутизации', correct: false },
            { text: 'Создает домены коллизий меньшего размера', correct: false },
            { text: 'Предотвращает возникновение петель маршрутизации', correct: false },
            { text: 'Предотвращает образование колец на уровне 2', correct: true },
            { text: 'Создает широковещательные домены меньшего размера', correct: false }
        ]
    },
    {
        id: 30,
        type: 'matching',
        text: 'Сопоставьте свойство связующего дерева с типом протокола. (Не все варианты используются)',
        pairs: [
            { question: 'Собственная реализация IEEE 802.1w для каждой VLAN', answer: 'Rapid PVST+' },
            { question: 'Быстрое конвергентное усовершенствование IEEE 802.1D', answer: 'RSTP' },
            { question: 'Cisco реализация стандарта IEEE 802.1D', answer: 'PVST+' },
            { question: 'Стандарт IEEE, сокращающий количество экземпляров STP', answer: 'MSTP' }
        ],
        extraAnswers: ['STP', 'PVST', 'Rapid STP']
    },
    {
        id: 31,
        type: 'input',
        text: 'Заполните пробел. Для включения быстрого STP используется команда spanning-tree __ режима глобальной конфигурации.',
        correctAnswer: 'mode rapid-pvst',
        caseSensitive: false
    },
    {
        id: 32,
        type: 'single',
        text: 'Сетевой администратор готовит внедрение Rapid PVST+ в рабочей сети. Каким образом на интерфейсах коммутатора определяются типы каналов Rapid PVST+?',
        options: [
            { text: 'Типы каналов должны быть настроены с помощью определенных команд настройки порта', correct: false },
            { text: 'Типы каналов можно определить, только если настроен Portfast', correct: false },
            { text: 'Типы каналов определяются автоматически', correct: true },
            { text: 'Типы каналов можно настроить только для портов доступа, сконфигурированных в одной VLAN', correct: false }
        ]
    },
    {
        id: 33,
        type: 'single',
        text: 'Какова характеристика кольца на 2 уровне?',
        options: [
            { text: 'Атрибут Time-to-Live кадра устанавливается равным бесконечности', correct: false },
            { text: 'Кадры широковещательной рассылки пересылаются обратно на передающий коммутатор', correct: true },
            { text: 'Коммутатор постоянно пересылает один и тот же кадр индивидуальной рассылки', correct: false },
            { text: 'Маршрутизаторы непрерывно пересылают пакеты другим маршрутизаторам', correct: false }
        ]
    },
    {
        id: 34,
        type: 'single',
        text: 'Если в PVST не настроен приоритет моста, какие критерии учитываются при выборе корневого коммутатора?',
        options: [
            { text: 'Самый высокий IP-адрес', correct: false },
            { text: 'Самый низкий IP-адрес', correct: false },
            { text: 'Самый низкий MAC-адрес', correct: true },
            { text: 'Самый высокий MAC-адрес', correct: false }
        ]
    },
    {
        id: 35,
        type: 'single',
        text: 'Каковы преимущества PVST+?',
        options: [
            { text: 'PVST+ требует меньшего количества циклов процессора для всех коммутаторов в сети', correct: false },
            { text: 'PVST+ оптимизирует производительность сети за счет распределения нагрузки', correct: true },
            { text: 'PVST+ оптимизирует производительность сети за счет автоматического выбора корневого моста', correct: false },
            { text: 'PVST+ снижает потребление полосы пропускания по сравнению с традиционными реализациями STP, использующими CST', correct: false }
        ]
    },
    {
        id: 36,
        type: 'single',
        text: 'В какое состояние сразу же переключаются порты при настройке в PortFast?',
        options: [
            { text: 'learning', correct: false },
            { text: 'forwarding', correct: true },
            { text: 'listening', correct: false },
            { text: 'blocking', correct: false }
        ]
    },
    {
        id: 37,
        type: 'multiple',
        text: 'Какие две функции проектирования сети требуют протокола связующего дерева (STP) для обеспечения правильной работы сети? (Выберите два варианта)',
        options: [
            { text: 'Внедрение VLAN для сокращения широковещательной рассылки', correct: false },
            { text: 'Динамическая маршрутизация на основе состояния канала, обеспечивающая резервные маршруты', correct: false },
            { text: 'Резервные каналы между коммутаторами уровня 2', correct: true },
            { text: 'Статические маршруты по умолчанию', correct: false },
            { text: 'Устранение единых точек отказа с помощью нескольких коммутаторов уровня 2', correct: true }
        ]
    },
    {
        id: 38,
        type: 'single',
        text: 'Какие порты RSTP подключены к конечным устройствам?',
        options: [
            { text: 'Корневые порты', correct: false },
            { text: 'Граничные порты', correct: true },
            { text: 'Назначенные порты', correct: false },
            { text: 'Тип/к порты', correct: false }
        ]
    },
    {
        id: 39,
        type: 'single',
        text: 'Каковы последствия широковещательного шторма уровня 2?',
        options: [
            { text: 'CSMA/CD приведет к тому, что каждый хост продолжит передачу кадров', correct: false },
            { text: 'Маршрутизаторы берут на себя пересылку кадров по мере перегрузки коммутаторов', correct: false },
            { text: 'Широковещательные запросы ARP возвращаются на отправителя', correct: false },
            { text: 'Новый трафик отбрасывается коммутатором, поскольку он не может быть обработан', correct: true }
        ]
    },
    {
        id: 40,
        type: 'single',
        text: 'Какая функция коммутатора Cisco гарантирует, что сконфигурированные магистральные порты коммутатора не будут создавать кольцо второго уровня, если порт ошибочно подключен к другому коммутатору?',
        options: [
            { text: 'PVST+', correct: false },
            { text: 'BPDU guard', correct: true },
            { text: 'PortFast', correct: false },
            { text: 'Extended system ID', correct: false }
        ]
    },
    {
        id: 41,
        type: 'single',
        text: 'Посмотрите на рисунок. Какой магистральный канал не будет пересылать трафик после схождения STP?',
        image: 'images/questions/2-41.jpg',
        options: [
            { text: 'Trunk 1', correct: false },
            { text: 'Trunk 2', correct: true },
            { text: 'Trunk 3', correct: false },
            { text: 'Trunk 4', correct: false }
        ]
    },
    {
        id: 42,
        type: 'single',
        text: 'Какая дополнительная информация содержится в 12-битном расширенном идентификаторе BPDU?',
        options: [
            { text: 'MAC адрес', correct: false },
            { text: 'Идентификатор VLAN', correct: true },
            { text: 'IP адрес', correct: false },
            { text: 'Идентификатор порта', correct: false }
        ]
    },
    {
        id: 43,
        type: 'multiple',
        text: 'Какие три компонента используются совместно для формирования идентификатора моста?',
        options: [
            { text: 'Идентификатор порта', correct: false },
            { text: 'Приоритет моста', correct: true },
            { text: 'Стоимость', correct: false },
            { text: 'IP-адрес', correct: false },
            { text: 'MAC-адрес', correct: true },
            { text: 'Расширенный системный идентификатор', correct: true }
        ]
    },
    {
        id: 44,
        type: 'single',
        text: 'Какой протокол обеспечивает до 16 экземпляров RSTP, объединяет множество сетей VLAN с одинаковой физической и логической топологией в общий экземпляр RSTP и поддерживает PortFast, защиту от несанкционированных BPDU и корней, фильтрацию BPDU и защиту от петель?',
        options: [
            { text: 'Rapid PVST+', correct: false },
            { text: 'STP', correct: false },
            { text: 'PVST+', correct: false },
            { text: 'MST', correct: true }
        ]
    },
    {
        id: 45,
        type: 'single',
        text: 'Посмотрите на рисунок. Какова роль коммутатора S3?',
        image: 'images/questions/2-45.jpg',
        options: [
            { text: 'Enabled bridge', correct: false },
            { text: 'Root bridge', correct: true },
            { text: 'Designated switch', correct: false },
            { text: 'Bridge', correct: false }
        ]
    },
    {
        id: 46,
        type: 'multiple',
        text: 'Чтобы получить обзор состояния связующего дерева коммутируемой сети, сетевой инженер вводит на коммутаторе команду show spanning-tree. Какие два элемента информации будут отображаться этой командой? (Выберите два варианта)',
        options: [
            { text: 'Количество широковещательных сообщений, полученных на каждом корневом порту', correct: false },
            { text: 'Роль портов во всех VLAN', correct: true },
            { text: 'IP-адрес интерфейса VLAN управления', correct: false },
            { text: 'BID корневого коммутатора', correct: true },
            { text: 'Статус портов соседних коммутаторов', correct: false }
        ]
    },
    {
        id: 47,
        type: 'multiple',
        text: 'Какие два типа протоколов связующего дерева могут создавать неоптимальные потоки трафика, поскольку они предполагают наличие только одного экземпляра связующего дерева для всей сети? (Выберите два варианта)',
        options: [
            { text: 'MSTP', correct: false },
            { text: 'RSTP', correct: true },
            { text: 'PVST+', correct: false },
            { text: 'STP', correct: true },
            { text: 'Rapid PVST+', correct: false }
        ]
    },
    {
        id: 48,
        type: 'single',
        text: 'Какой тип порта используется между коммутаторами в стекируемом коммутаторе?',
        options: [
            { text: 'edge', correct: false },
            { text: 'root', correct: false },
            { text: 'designated', correct: false },
            { text: 'StackWise', correct: true }
        ]
    },
    {
        id: 49,
        type: 'multiple',
        text: 'В каких двух состояниях портов коммутатор запоминает MAC-адреса и обрабатывает BPDU в сети PVST? (Выберите два варианта)',
        options: [
            { text: 'blocking', correct: false },
            { text: 'listening', correct: false },
            { text: 'disabled', correct: false },
            { text: 'learning', correct: true },
            { text: 'forwarding', correct: true }
        ]
    },
    {
        id: 50,
        type: 'single',
        text: 'Какой стандарт связующего дерева поддерживает только один корневой мост, чтобы трафик из всех виртуальных локальных сетей проходил по одному и тому же пути?',
        options: [
            { text: 'PVST+', correct: false },
            { text: 'MST', correct: false },
            { text: '802.1D', correct: true },
            { text: 'Rapid PVST', correct: false }
        ]
    }
];

function getImagePath(imageName) {
    if (imageName && imageName.startsWith('images/questions/')) {
        return imageName;
    }
}