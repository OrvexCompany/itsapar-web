// --- Данные вопросов ---
const questions = [
    { id: 'mountains', title_ru: 'Горы?', desc_ru: 'Любите ли вы походы и свежий горный воздух?', title_kz: 'Таулар?', desc_kz: 'Тауға шығуды және таза тау ауасын ұнатасыз ба?' },
    { id: 'sea', title_ru: 'Море/Вода?', desc_ru: 'Предпочитаете пляжный отдых или озера?', title_kz: 'Теңіз/Су?', desc_kz: 'Жағажай демалысын немесе көлдерді қалайсыз ба?' },
    { id: 'city', title_ru: 'Города?', desc_ru: 'Вам нравится шум мегаполиса и архитектура?', title_kz: 'Қалалар?', desc_kz: 'Мегаполис шуы мен архитектурасы ұнай ма?' },
    { id: 'activity', title_ru: 'Активность?', desc_ru: 'Готовы ли вы к экстриму и долгим прогулкам?', title_kz: 'Белсенділік?', desc_kz: 'Экстримге және ұзақ серуендеуге дайынсыз ба?' },
    { id: 'culture', title_ru: 'Культура?', desc_ru: 'Интересуетесь ли вы историей и музеями?', title_kz: 'Мәдениет?', desc_kz: 'Тарихқа және мұражайларға қызығасыз ба?' },
    { id: 'gastronomy', title_ru: 'Гастрономия', desc_ru: 'Важно ли для вас пробовать уникальные национальные блюда и посещать колоритные рестораны?', title_kz: 'Гастрономия', desc_kz: 'Сіз үшін бірегей ұлттық тағамдарды татып көру және ерекше мейрамханаларға бару маңызды ма?' },
    { id: 'seclusion', title_ru: 'Уединение', desc_ru: 'Ищете ли вы тишину и возможность отдохнуть в местах вдали от больших толп туристов?', title_kz: 'Оқшаулану', desc_kz: 'Сіз тыныштықты және туристердің көптігінен алыс жерлерде демалу мүмкіндігін іздейсіз бе?' },
    { id: 'shopping', title_ru: 'Шоппинг', desc_ru: 'Любите ли вы прогулки по современным торговым центрам и поиск уникальных вещей на местных рынках?', title_kz: 'Шопинг', desc_kz: 'Заманауи сауда орталықтарында серуендеуді және жергілікті базарлардан бірегей заттарды іздеуді ұнатасыз ба?' },
    { id: 'family_fun', title_ru: 'Семейный отдых', desc_ru: 'Нужны ли вам игровые зоны, аквапарки и развлечения, подходящие для детей?', title_kz: 'Отбасылық демалыс', desc_kz: 'Сізге ойын аймақтары, аквапарктер және балаларға арналған ойын-сауықтар қажет пе?' },
    { id: 'eco_tourism', title_ru: 'Эко-туризм', desc_ru: 'Вас привлекают заповедники, бескрайние степи и наблюдение за дикой природой в её первозданном виде?', title_kz: 'Эко-туризм', desc_kz: 'Сізді қорықтар, шексіз далалар және жабайы табиғатты оның бастапқы қалпында бақылау қызықтыра ма?' }
];

// --- Данные городов с характеристиками и отелями ---
const allCities = [
    {
        n: 'Алматы',
        n_kz: 'Алматы',
        d: 'Идеально для любителей гор и активного отдыха, культурный центр.',
        img: 'https://images.unsplash.com/photo-1589112953018-0248f39589d8?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Q7 Almaty', name_kz: 'Q7 Almaty хостелі', address: 'ул. Сарсена Аманжолова, 42а', address_kz: 'Сәрсен Аманжолов к-сі, 42а' },
            { name: 'Evergreen Hostel', name_kz: 'Evergreen хостелі', address: 'ул. Метростроевская, 32', address_kz: 'Метростроевская к-сі, 32' }
        ],
        hotels_expensive: [
            { name: 'The Ritz-Carlton, Almaty', name_kz: 'The Ritz-Carlton, Алматы', address: 'пр. Аль-Фараби, 77/7', address_kz: 'Әл-Фараби даңғылы, 77/7' },
            { name: 'Rixos Almaty', name_kz: 'Rixos Алматы', address: 'пр. Сейфуллина, 506/99', address_kz: 'Сейфуллин даңғылы, 506/99' }
        ],
        restaurants_budget: [
            { name: 'Qaganat (Столовая)', name_kz: 'Қағанат (Асхана)', address: 'пр. Абая, 48в', address_kz: 'Абай даңғылы, 48в' },
            { name: 'Basilic', name_kz: 'Basilic', address: 'ул. Шевченко, 127', address_kz: 'Шевченко к-сі, 127' }
        ],
        restaurants_expensive: [
            { name: 'Seven Bar & Restaurant', name_kz: 'Seven Bar & Restaurant', address: 'пр. Аль-Фараби, 77/7', address_kz: 'Әл-Фараби даңғылы, 77/7' },
            { name: 'Villa Dei Fiori', name_kz: 'Villa Dei Fiori', address: 'пр. Аль-Фараби, 140а', address_kz: 'Әл-Фараби даңғылы, 140а' }
        ],
        locations: [
            { n: 'Шымбулак', n_kz: 'Шымбұлақ', t: 'Горы, Активность', t_kz: 'Таулар, Белсенділік' },
            { n: 'Медеу', n_kz: 'Медеу', t: 'Активность, Семья', t_kz: 'Белсенділік, Отбасы' },
            { n: 'Зеленый базар', n_kz: 'Көк базар', t: 'Гастрономия, Шоппинг', t_kz: 'Гастрономия, Шопинг' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Май и Сентябрь. В мае город утопает в зелени, а сентябрь дарит идеальную «бархатную» осень.',
        d_kz: 'Тауларды және белсенді демалысты ұнататындар үшін тамаша, мәдени орталық.',
        bestTime_kz: 'Мамыр және Қыркүйек. Мамырда қала жасыл желекке оранады, ал қыркүйекте тамаша «барқыт» күзі жеміс-жидекке толы болады.'
    },
    {
        n: 'Астана',
        n_kz: 'Астана',
        d: 'Сердце страны с футуристичной архитектурой и множеством музеев.',
        d_kz: 'Елдің жүрегі, футуристік архитектурасы мен көптеген мұражайлары бар қала.',
        img: 'https://images.unsplash.com/photo-1628172776332-959952044322?q=80&w=600',
        hotels_budget: [
            { name: 'Hostel 13/77', name_kz: 'Hostel 13/77', address: 'ул. Ташенова, 13/2', address_kz: 'Тәшенов к-сі, 13/2' },
            { name: 'Caps Lock Future Hotel', name_kz: 'Caps Lock Future Hotel', address: 'ул. Кунаева, 29', address_kz: 'Қонаев к-сі, 29' }
        ],
        hotels_expensive: [
            { name: 'The St. Regis Astana', name_kz: 'The St. Regis Astana', address: 'пр. Кабанбай Батыра, 1', address_kz: 'Қабанбай Батыр даңғылы, 1' },
            { name: 'Sheraton Astana Hotel', name_kz: 'Sheraton Astana Hotel', address: 'ул. Сыганак, 60/1', address_kz: 'Сығанақ к-сі, 60/1' }
        ],
        restaurants_budget: [
            { name: 'У Апашки (Столовая)', name_kz: 'Апамның үйінде (Асхана)', address: 'ул. Куйши Дина, 9', address_kz: 'Күйші Дина к-сі, 9' },
            { name: 'Избушка', name_kz: 'Избушка', address: 'пр. Абая, 17', address_kz: 'Абай даңғылы, 17' },
            { name: 'Центр Плова', name_kz: 'Палау орталығы', address: 'ул. Кенесары, 52', address_kz: 'Кенесары к-сі, 52' }
        ],
        restaurants_expensive: [
            { name: 'Selfie Astana', name_kz: 'Selfie Астана', address: 'ул. Достык, 16', address_kz: 'Достық к-сі, 16' },
            { name: 'Qazaq Gourmet', name_kz: 'Qazaq Gourmet', address: 'пр. Мангилик Ел, 29', address_kz: 'Мәңгілік Ел даңғылы, 29' },
            { name: 'Tiflis', name_kz: 'Тифлис', address: 'ул. Иманова, 11', address_kz: 'Иманов к-сі, 11' }
        ],
        locations: [
            { n: 'Байтерек', n_kz: 'Бәйтерек', t: 'Города, Культура', t_kz: 'Қалалар, Мәдениет' },
            { n: 'Хан Шатыр', n_kz: 'Хан Шатыр', t: 'Шоппинг, Семья', t_kz: 'Шопинг, Отбасы' },
            { n: 'Набережная реки Есиль', n_kz: 'Есіл өзенінің жағалауы', t: 'Море/Вода, Активность', t_kz: 'Теңіз/Су, Белсенділік' },
            { n: 'Национальный музей', n_kz: 'Ұлттық мұражай', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Tiflis (ресторан)', n_kz: 'Тифлис (мейрамхана)', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: true, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: false, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Самое комфортное время для прогулок без пронизывающего ветра.',
        d_kz: 'Футуристік архитектурасы және көптеген мұражайлары бар елдің жүрегі.',
        bestTime_kz: 'Маусым – Тамыз. Желсіз серуендеу үшін ең ыңғайлы уақыт.'
    },
    {
        n: 'Актау',
        n_kz: 'Ақтау',
        d: 'Единственный город на берегу моря с уникальными Каспийскими закатами.',
        d_kz: 'Каспий теңізінің бірегей күн батуы бар теңіз жағасындағы жалғыз қала.',
        img: 'https://images.unsplash.com/photo-1623589414995-2d6ec4c389be?q=80&w=600',
        hotels_budget: [
            { name: 'Tarlan Hotel', name_kz: 'Тарлан қонақ үйі', address: '29-й мкр, 226', address_kz: '29-шы ықшам аудан, 226' },
            { name: 'Гостиница Рауан', name_kz: 'Рауан қонақ үйі', address: '28-й мкр, 48/1', address_kz: '28-ші ықшам аудан, 48/1' }
        ],
        hotels_expensive: [
            { name: 'Caspian Riviera Grand Palace', name_kz: 'Caspian Riviera Grand Palace', address: '4-й мкр, 39', address_kz: '4-ші ықшам аудан, 39' },
            { name: 'Rixos Water World Aktau', name_kz: 'Rixos Water World Ақтау', address: 'Варшавская ул., 1', address_kz: 'Варшава к-сі, 1' }
        ],
        restaurants_budget: [
            { name: 'Столовая Тагам', name_kz: 'Тағам асханасы', address: '28-й мкр, 23', address_kz: '28-ші ықшам аудан, 23' },
            { name: 'Fusion Food', name_kz: 'Fusion Food', address: '29-й мкр, 51', address_kz: '29-шы ықшам аудан, 51' },
            { name: 'Асхана Асқабақ', name_kz: 'Асқабақ асханасы', address: '3-й мкр, 65', address_kz: '3-ші ықшам аудан, 65' }
        ],
        restaurants_expensive: [
            { name: 'Barashka', name_kz: 'Барашка', address: '21-й мкр, 4', address_kz: '21-ші ықшам аудан, 4' },
            { name: 'Aidana Plaza Restaurant', name_kz: 'Aidana Plaza мейрамханасы', address: '14-й мкр, 59', address_kz: '14-ші ықшам аудан, 59' },
            { name: 'Fregat', name_kz: 'Фрегат', address: '4-й мкр, набережная', address_kz: '4-ші ықшам аудан, жағалау' }
        ],
        locations: [
            { n: 'Скальная тропа', n_kz: 'Жартасты соқпақ', t: 'Море/Вода, Активность', t_kz: 'Теңіз/Су, Белсенділік' },
            { n: 'Впадина Карагие', n_kz: 'Қарақия ойпаты', t: 'Эко-туризм, Горы', t_kz: 'Эко-туризм, Таулар' },
            { n: 'Пляж Маракеш', n_kz: 'Маракеш жағажайы', t: 'Море/Вода, Семья', t_kz: 'Теңіз/Су, Отбасы' },
            { n: 'ТРЦ Aktau', n_kz: 'Ақтау СОО', t: 'Шоппинг, Семья', t_kz: 'Шопинг, Отбасы' },
            { n: 'Маяк на крыше дома', n_kz: 'Үй төбесіндегі шамшырақ', t: 'Города, Культура', t_kz: 'Қалалар, Мәдениет' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: false, gastronomy: false, seclusion: false, shopping: true, family_fun: false, eco_tourism: true },
        budget_suitability: { low: false, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июль – Август (для купания) или Май (для прогулок). Каспий прогревается только к середине лета.',
        d_kz: 'Каспий теңізінің бірегей күн батуы бар теңіз жағасындағы жалғыз қала.',
        bestTime_kz: 'Шілде – Тамыз (шомылу үшін) немесе Мамыр (серуендеу үшін). Каспий тек жаздың ортасына қарай жылынады.'
    },
    {
        n: 'Туркестан',
        n_kz: 'Түркістан',
        d: 'Древняя колыбель культуры, идеальна для спокойного изучения истории.',
        d_kz: 'Мәдениеттің көне бесігі, тарихты сабырмен зерттеуге өте қолайлы.',
        img: 'https://images.unsplash.com/photo-1605553641243-7f15951ca857?q=80&w=600',
        hotels_budget: [
            { name: 'Hostel Turkistan', name_kz: 'Түркістан хостелі', address: 'ул. Толе Би, 1', address_kz: 'Төле би к-сі, 1' },
            { name: 'Гостевой дом Сауран', name_kz: 'Сауран қонақ үйі', address: 'ул. Ерубаева, 15', address_kz: 'Ерубаев к-сі, 15' }
        ],
        hotels_expensive: [
            { name: 'Rixos Khadisha Turkestan', name_kz: 'Rixos Khadisha Түркістан', address: 'ул. Б. Саттарханова, 25', address_kz: 'Б. Саттарханов к-сі, 25' },
            { name: 'Karavansaray Turkistan', name_kz: 'Керуенсарай Түркістан', address: 'ул. Б. Саттарханова, 25/5', address_kz: 'Б. Саттарханов к-сі, 25/5' }
        ],
        restaurants_budget: [
            { name: 'Эдем (Столовая)', name_kz: 'Эдем (Асхана)', address: 'ул. Байбурт, 5', address_kz: 'Байбурт к-сі, 5' },
            { name: 'Туркестан Лагман', name_kz: 'Түркістан Лағман', address: 'ул. Кожанова, б/н', address_kz: 'Қожанов к-сі, б/н' },
            { name: 'Dastarkhan', name_kz: 'Дастархан', address: 'пр. Тауке Хана, 10', address_kz: 'Тәуке хан даңғылы, 10' }
        ],
        restaurants_expensive: [
            { name: 'Karavansaray Restaurant', name_kz: 'Керуенсарай мейрамханасы', address: 'комплекс Караван-сарай', address_kz: 'Керуенсарай кешені' },
            { name: 'Sandyk', name_kz: 'Сандық', address: 'ул. Б. Саттарханова, 25', address_kz: 'Б. Саттарханов к-сі, 25' },
            { name: 'Al-Farabi', name_kz: 'Әл-Фараби', address: 'пр. Тауке Хана, 150', address_kz: 'Тәуке хан даңғылы, 150' }
        ],
        locations: [
            { n: 'Мавзолей Ясави', n_kz: 'Ясауи кесенесі', t: 'Культура, Уединение', t_kz: 'Мәдениет, Оқшаулану' },
            { n: 'Керуен-сарай', n_kz: 'Керуенсарай', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Летающий театр', n_kz: 'Ұшатын театр', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Ресторан Sandyk', n_kz: 'Сандық мейрамханасы', t: 'Гастрономия', t_kz: 'Гастрономия' },
            { n: 'Заповедник Каратау', n_kz: 'Қаратау қорығы', t: 'Эко-туризм, Горы', t_kz: 'Эко-туризм, Таулар' }
        ],
        tags: { mountains: true, sea: false, city: true, activity: false, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: false, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель или Октябрь. Весной и осенью температура идеальна для осмотра мавзолеев.',
        d_kz: 'Ежелгі мәдениет бесігі, тарихты тыныш зерттеу үшін тамаша.',
        bestTime_kz: 'Сәуір немесе Қазан. Көктемде және күзде мавзолейлерді аралау үшін температура өте қолайлы.'
    },
    {
        n: 'Боровое',
        n_kz: 'Бурабай',
        d: 'Казахстанская Швейцария - подойдет абсолютно всем, природа и свежий воздух.',
        d_kz: 'Қазақстандық Швейцария - барлығына жарамды, табиғат пен таза ауа.',
        img: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=600',
        hotels_budget: [
            { name: 'Гостевой дом Алтын-Кун', name_kz: 'Алтын-Күн қонақ үйі', address: 'ул. Советская, 20', address_kz: 'Советская к-сі, 20' },
            { name: 'Отель Архидом', name_kz: 'Архидом қонақ үйі', address: 'ул. Кокшетау, 16', address_kz: 'Көкшетау к-сі, 16' }
        ],
        hotels_expensive: [
            { name: 'Rixos Borovoe', name_kz: 'Rixos Бурабай', address: 'Северный берег оз. Щучье', address_kz: 'Шортанды көлінің солтүстік жағалауы' },
            { name: 'Wyndham Garden Burabay', name_kz: 'Wyndham Garden Бурабай', address: 'ул. Кенесары, 1', address_kz: 'Кенесары к-сі, 1' }
        ],
        restaurants_budget: [
            { name: 'Столовая у Мамы', name_kz: 'Маманың асханасы', address: 'ул. Кенесары, 25', address_kz: 'Кенесары к-сі, 25' },
            { name: 'Kishlak', name_kz: 'Қышлақ', address: 'ул. Кенесары, 30', address_kz: 'Кенесары к-сі, 30' },
            { name: 'Асхана на Берегу', name_kz: 'Жағалаудағы асхана', address: 'ул. Набережная, 12', address_kz: 'Жағалау к-сі, 12' }
        ],
        restaurants_expensive: [
            { name: 'L\'Olivo', name_kz: 'L\'Olivo', address: 'отель Rixos Borovoe', address_kz: 'Rixos Бурабай қонақ үйі' },
            { name: 'Chalet', name_kz: 'Chalet', address: 'ул. Кенесары, 1 (в Wyndham)', address_kz: 'Кенесары к-сі, 1 (Wyndham ішінде)' },
            { name: 'Кон-Тики', name_kz: 'Кон-Тики', address: 'набережная оз. Бурабай', address_kz: 'Бурабай көлінің жағалауы' }
        ],
        locations: [
            { n: 'Поляна Абылай-хана', n_kz: 'Абылай хан алаңы', t: 'Культура, Эко-туризм', t_kz: 'Мәдениет, Эко-туризм' },
            { n: 'Гора Болектау', n_kz: 'Бөлектау тауы', t: 'Горы, Активность', t_kz: 'Таулар, Белсенділік' },
            { n: 'Озеро Щучье', n_kz: 'Шортанды көлі', t: 'Море/Вода, Уединение', t_kz: 'Теңіз/Су, Оқшаулану' },
            { n: 'Казахстанская Лапландия', n_kz: 'Қазақстандық Лапландия', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Центральный рынок', n_kz: 'Орталық базар', t: 'Шоппинг, Гастрономия', t_kz: 'Шопинг, Гастрономия' }
        ],
        tags: { mountains: true, sea: true, city: false, activity: true, culture: false, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Пик купального сезона и время работы всей развлекательной инфраструктуры.',
        d_kz: 'Қазақстандық Швейцария – барлығына жарайды, табиғат және таза ауа.',
        bestTime_kz: 'Маусым – Тамыз. Шомылу маусымының шыңы және барлық ойын-сауық инфрақұрылымының жұмыс істейтін уақыты.'
    },
    {
        n: 'Шымкент',
        n_kz: 'Шымкент',
        d: 'Один из старейших городов Казахстана, южный колорит, оживленный базар, исторические места.',
        d_kz: 'Қазақстанның ең көне қалаларының бірі, оңтүстік колориті, жанды базар, тарихи орындар.',
        img: 'https://images.unsplash.com/photo-1634718841452-9577742d4805?q=80&w=600',
        hotels_budget: [
            { name: 'Shymkent Hostel', name_kz: 'Шымкент хостелі', address: 'ул. Туркестанская, 4', address_kz: 'Түркістан к-сі, 4' },
            { name: 'Отель Орда', name_kz: 'Орда қонақ үйі', address: 'пр. Республики, 21', address_kz: 'Республика даңғылы, 21' }
        ],
        hotels_expensive: [
            { name: 'Rixos Khadisha Shymkent', name_kz: 'Rixos Khadisha Шымкент', address: 'ул. Желтоксан, 17', address_kz: 'Желтоқсан к-сі, 17' },
            { name: 'Aidana Plaza Hotel', name_kz: 'Aidana Plaza қонақ үйі', address: 'ул. Бейбитшилик, 13', address_kz: 'Бейбітшілік к-сі, 13' }
        ],
        restaurants_budget: [
            { name: 'Кок-Сарай (Шашлычная)', name_kz: 'Көк-Сарай (Кәуапхана)', address: 'ул. Адырбекова, 80', address_kz: 'Адырбеков к-сі, 80' },
            { name: 'Кафе Керемет', name_kz: 'Керемет кафесі', address: 'ул. Байтурсынова, 12', address_kz: 'Байтұрсынов к-сі, 12' },
            { name: 'Лагманхана №1', name_kz: 'Лағманхана №1', address: 'ул. Рыскулова, 45', address_kz: 'Рысқұлов к-сі, 45' }
        ],
        restaurants_expensive: [
            { name: 'Cinzzano', name_kz: 'Cinzzano', address: 'ул. Желтоксан, 17', address_kz: 'Желтоқсан к-сі, 17' },
            { name: 'Mozzarella', name_kz: 'Mozzarella', address: 'пр. Тауке хана, 13', address_kz: 'Тәуке хан даңғылы, 13' },
            { name: 'Bar Villa', name_kz: 'Bar Villa', address: 'ул. Казыбек Би, 29', address_kz: 'Қазыбек би к-сі, 29' }
        ],
        locations: [
            { n: 'Дендропарк', n_kz: 'Дендросаябақ', t: 'Эко-туризм, Семья', t_kz: 'Эко-туризм, Отбасы' },
            { n: 'Цитадель', n_kz: 'Цитадель', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Зоопарк', n_kz: 'Хайуанаттар бағы', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Shymkent Plaza', n_kz: 'Shymkent Plaza', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Кафе Кок-Сарай', n_kz: 'Көк-Сарай кафесі', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: false, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель – Май. Настоящая южная весна. Летом здесь экстремально жарко (выше 40°C).',
        d_kz: 'Қазақстанның ең көне қалаларының бірі, оңтүстік колориті, жанды базар, тарихи орындар.',
        bestTime_kz: 'Сәуір – Мамыр. Бұл уақытта мұнда нағыз көктем, бәрі гүлдейді. Жазда Шымкентте өте ыстық (40°C-тан жоғары).'
    },
    {
        n: 'Караганда',
        n_kz: 'Қарағанды',
        d: 'Крупный индустриальный и культурный центр, шахтерская история, музеи и театры.',
        d_kz: 'Ірі индустриялық және мәдени орталық, шахтерлер тарихы, мұражайлар мен театрлар.',
        img: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Comfort', name_kz: 'Comfort хостелі', address: 'ул. Ермекова, 52', address_kz: 'Ермеков к-сі, 52' },
            { name: 'Гостиница Турист', name_kz: 'Турист қонақ үйі', address: 'б-р Мира, 32', address_kz: 'Мир бульвары, 32' }
        ],
        hotels_expensive: [
            { name: 'Cosmonaut', name_kz: 'Космонавт', address: 'ул. Кривогуза, 162а', address_kz: 'Кривогуз к-сі, 162а' },
            { name: 'Senator Hotel', name_kz: 'Senator қонақ үйі', address: 'ул. Ерубаева, 32', address_kz: 'Ерубаев к-сі, 32' }
        ],
        restaurants_budget: [
            { name: 'Магнит (Столовая)', name_kz: 'Магнит (Асхана)', address: 'пр. Бухар Жырау, 52', address_kz: 'Бұқар жырау даңғылы, 52' },
            { name: 'Тагам', name_kz: 'Тағам', address: 'пр. Н. Абдирова, 12', address_kz: 'Н. Әбдіров даңғылы, 12' },
            { name: 'Донерофф', name_kz: 'Донерофф', address: 'пр. Бухар Жырау, 41', address_kz: 'Бұқар жырау даңғылы, 41' }
        ],
        restaurants_expensive: [
            { name: 'Sadre', name_kz: 'Sadre', address: 'ул. Ерубаева, 71/1', address_kz: 'Ерубаев к-сі, 71/1' },
            { name: 'Grill Bar', name_kz: 'Grill Bar', address: 'ул. Кривогуза, 162а', address_kz: 'Кривогуз к-сі, 162а' },
            { name: 'Line Brew', name_kz: 'Line Brew', address: 'пр. Н. Абдирова, 20', address_kz: 'Н. Әбдіров даңғылы, 20' }
        ],
        locations: [
            { n: 'Музей Карлага', n_kz: 'Қарлаг мұражайы', t: 'Культура, Уединение', t_kz: 'Мәдениет, Оқшаулану' },
            { n: 'Центральный парк', n_kz: 'Орталық саябақ', t: 'Семья, Море/Вода', t_kz: 'Отбасы, Теңіз/Су' },
            { n: 'ТРЦ City Mall', n_kz: 'City Mall СОО', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Этнопарк', n_kz: 'Этносаябақ', t: 'Города, Эко-туризм', t_kz: 'Қалалар, Эко-туризм' },
            { n: 'Спортивный комплекс им. Абдирова', n_kz: 'Әбдіров атындағы спорт кешені', t: 'Активность', t_kz: 'Белсенділік' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: true, culture: true, gastronomy: false, seclusion: false, shopping: true, family_fun: false, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: false }, // City names (n) are not translated here
        bestTime: 'Май – Июнь. Степь цветет, а жара еще не стала изнуряющей.',
        d_kz: 'Ірі индустриалды және мәдени орталық, шахтерлер тарихы, мұражайлар мен театрлар.',
        bestTime_kz: 'Мамыр – Маусым. Дала гүлдейді, ал ыстық әлі қатты емес.'
    },
    {
        n: 'Актобе',
        n_kz: 'Ақтөбе',
        d: 'Индустриальный город на западе Казахстана, спокойный, степные пейзажи.',
        d_kz: 'Қазақстанның батысындағы индустриялық қала, тыныш, далалық пейзаждар.',
        img: 'https://images.unsplash.com/photo-1596435804368-69279761f005?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Актобе', name_kz: 'Ақтөбе хостелі', address: 'пр. Абилкайыр хана, 83', address_kz: 'Әбілқайыр хан даңғылы, 83' },
            { name: 'Отель Илек', name_kz: 'Елек қонақ үйі', address: 'ул. Шайкенова, 11', address_kz: 'Шайкенов к-сі, 11' }
        ],
        hotels_expensive: [
            { name: 'Sheraton Celebration', name_kz: 'Sheraton Celebration', address: 'пр. Абилкайыр хана, 92', address_kz: 'Әбілқайыр хан даңғылы, 92' },
            { name: 'Amsterdam Hotel', name_kz: 'Amsterdam қонақ үйі', address: 'ул. Богенбай батыра, 12а', address_kz: 'Бөгенбай батыр к-сі, 12а' }
        ],
        restaurants_budget: [
            { name: 'Столовая "Ас-Ас"', name_kz: '"Ас-Ас" асханасы', address: 'ул. Маресьева, 81', address_kz: 'Маресьев к-сі, 81' },
            { name: 'Кухня №1', name_kz: 'Тағам №1', address: 'ул. Есет батыра, 105', address_kz: 'Есет батыр к-сі, 105' },
            { name: 'Бургер Клаб', name_kz: 'Бургер Клаб', address: 'пр. Алии Молдагуловой, 46', address_kz: 'Әлия Молдағұлова даңғылы, 46' }
        ],
        restaurants_expensive: [
            { name: 'Venezia', name_kz: 'Venezia', address: 'пр. Абилкайыр хана, 67', address_kz: 'Әбілқайыр хан даңғылы, 67' },
            { name: 'Zina', name_kz: 'Zina', address: 'пр. Санкибай батыра, 14л', address_kz: 'Сәнкібай батыр даңғылы, 14л' },
            { name: 'Kishlak', name_kz: 'Қышлақ', address: 'пр. Абилкайыр хана, 44', address_kz: 'Әбілқайыр хан даңғылы, 44' }
        ],
        locations: [
            { n: 'Мечеть Нур Гасыр', n_kz: 'Нұр Ғасыр мешіті', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Парк Первого Президента', n_kz: 'Тұңғыш Президент саябағы', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'ТРЦ Keruen City', n_kz: 'Keruen City СОО', t: 'Шоппинг, Семья', t_kz: 'Шопинг, Отбасы' },
            { n: 'Актюбинское море', n_kz: 'Ақтөбе теңізі', t: 'Море/Вода, Активность', t_kz: 'Теңіз/Су, Белсенділік' },
            { n: 'Кафе Zina', n_kz: 'Zina кафесі', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: true, culture: false, gastronomy: false, seclusion: false, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: false }, // City names (n) are not translated here
        bestTime: 'Май или Сентябрь. Оптимально, чтобы избежать степных ветров и пыльных бурь.',
        d_kz: 'Қазақстанның батысындағы индустриалды қала, тыныш, далалық пейзаждар.',
        bestTime_kz: 'Мамыр немесе Қыркүйек. Дала желі мен шаңды дауылдан аулақ болу үшін оңтайлы.'
    },
    {
        n: 'Тараз',
        n_kz: 'Тараз',
        d: 'Древний город с богатой историей, Шелковый путь, мавзолеи и археологические памятники.',
        d_kz: 'Бай тарихы бар көне қала, Жібек жолы, кесенелер мен археологиялық ескерткіштер.',
        img: 'https://images.unsplash.com/photo-1544984243-75a800232997?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Тараз', name_kz: 'Тараз хостелі', address: 'ул. Сулейменова, 2', address_kz: 'Сүлейменов к-сі, 2' },
            { name: 'Отель Жамбыл', name_kz: 'Жамбыл қонақ үйі', address: 'ул. Толе Би, 42', address_kz: 'Төле би к-сі, 42' }
        ],
        hotels_expensive: [
            { name: 'Arai Plaza Hotel', name_kz: 'Arai Plaza қонақ үйі', address: 'мкр. Арай, ул. Домалак Ана, 1', address_kz: 'Арай ықшам ауданы, Домалақ Ана к-сі, 1' },
            { name: 'Grand Hotel Talas', name_kz: 'Grand Hotel Talas', address: 'ул. Пушкина, 61', address_kz: 'Пушкин к-сі, 61' }
        ],
        restaurants_budget: [
            { name: 'Столовая Бауырсақ', name_kz: 'Бауырсақ асханасы', address: 'ул. Казыбек Би, 110', address_kz: 'Қазыбек би к-сі, 110' },
            { name: 'Пиросмани (бюджетное)', name_kz: 'Пиросмани (арзан)', address: 'ул. Койгельды, 158', address_kz: 'Қойгелді к-сі, 158' },
            { name: 'Отырар', name_kz: 'Отырар', address: 'пр. Толе Би, 60', address_kz: 'Төле би даңғылы, 60' }
        ],
        restaurants_expensive: [
            { name: 'Marrakesh', name_kz: 'Marrakesh', address: 'ул. Сулейменова, 1', address_kz: 'Сүлейменов к-сі, 1' },
            { name: 'Prime Garden', name_kz: 'Prime Garden', address: 'Парк Первого Президента', address_kz: 'Тұңғыш Президент саябағы' },
            { name: 'Arbat', name_kz: 'Арбат', address: 'пр. Жамбыла, 160', address_kz: 'Жамбыл даңғылы, 160' }
        ],
        locations: [
            { n: 'Мавзолей Айша-Биби', n_kz: 'Айша-Бибі кесенесі', t: 'Культура, Уединение', t_kz: 'Мәдениет, Оқшаулану' },
            { n: 'Арбат Тараз', n_kz: 'Тараз Арбаты', t: 'Города, Шоппинг', t_kz: 'Қалалар, Шопинг' },
            { n: 'Озеро Зербулак', n_kz: 'Зербұлақ көлі', t: 'Море/Вода, Семья', t_kz: 'Теңіз/Су, Отбасы' },
            { n: 'Эко-парк «Женис»', n_kz: '«Жеңіс» эко-паркі', t: 'Эко-туризм, Семья', t_kz: 'Эко-туризм, Отбасы' },
            { n: 'Ресторан Marrakesh', n_kz: 'Marrakesh мейрамханасы', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: false, activity: false, culture: true, gastronomy: true, seclusion: true, shopping: false, family_fun: false, eco_tourism: false },
        budget_suitability: { low: true, medium: false, high: false }, // City names (n) are not translated here
        bestTime: 'Апрель – Май. Время активного цветения и комфортных прогулок по городищам.',
        d_kz: 'Бай тарихы бар ежелгі қала, Жібек жолы, мавзолейлер және археологиялық ескерткіштер.',
        bestTime_kz: 'Сәуір – Мамыр. Гүлденудің белсенді уақыты және тарихи қалашықтарды аралау үшін ыңғайлы.'
    },
    {
        n: 'Павлодар',
        n_kz: 'Павлодар',
        d: 'Город на реке Иртыш, индустриальный центр, набережная, музеи.',
        d_kz: 'Ертіс өзенінің бойындағы қала, индустриялық орталық, жағалау, мұражайлар.',
        img: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Вегас', name_kz: 'Вегас хостелі', address: 'ул. Торайгырова, 1/3', address_kz: 'Торайғыров к-сі, 1/3' },
            { name: 'Гостиница Сары-Арка', name_kz: 'Сарыарқа қонақ үйі', address: 'ул. Торайгырова, 1', address_kz: 'Торайғыров к-сі, 1' }
        ],
        hotels_expensive: [
            { name: 'River Court', name_kz: 'River Court', address: 'ул. Ак. Сатпаева, 156', address_kz: 'Ак. Сәтпаев к-сі, 156' },
            { name: 'Irtysh Hotel', name_kz: 'Ертіс қонақ үйі', address: 'ул. Ак. Сатпаева, 158', address_kz: 'Ак. Сәтпаев к-сі, 158' }
        ],
        restaurants_budget: [
            { name: 'Мария (Столовая)', name_kz: 'Мария (Асхана)', address: 'ул. Естая, 40', address_kz: 'Естай к-сі, 40' },
            { name: 'Колобок', name_kz: 'Колобок', address: 'ул. Кривенко, 25', address_kz: 'Кривенко к-сі, 25' },
            { name: 'Славянка', name_kz: 'Славянка', address: 'ул. Лермонтова, 91', address_kz: 'Лермонтов к-сі, 91' }
        ],
        restaurants_expensive: [
            { name: 'Каспий', name_kz: 'Каспий', address: 'ул. Ак. Сатпаева, 156', address_kz: 'Ак. Сәтпаев к-сі, 156' },
            { name: 'Blackwood', name_kz: 'Blackwood', address: 'ул. Бухар Жырау, 2', address_kz: 'Бұқар жырау к-сі, 2' },
            { name: 'Marmaris', name_kz: 'Marmaris', address: 'ул. Толстого, 143/1', address_kz: 'Толстой к-сі, 143/1' }
        ],
        locations: [
            { n: 'Набережная Иртыша', n_kz: 'Ертіс жағалауы', t: 'Море/Вода, Активность', t_kz: 'Теңіз/Су, Белсенділік' },
            { n: 'Мечеть Машхура Жусупа', n_kz: 'Мәшһүр Жүсіп мешіті', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Batyr Mall', n_kz: 'Batyr Mall', t: 'Шоппинг, Семья', t_kz: 'Шопинг, Отбасы' },
            { n: 'Музей «Шафер»', n_kz: '«Шафер» мұражайы', t: 'Культура, Уединение', t_kz: 'Мәдениет, Оқшаулану' },
            { n: 'Гусиный перелет', n_kz: 'Қаз ұшуы', t: 'Эко-туризм, Города', t_kz: 'Эко-туризм, Қалалар' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: false, culture: false, gastronomy: false, seclusion: false, shopping: false, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: false }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Лучшее время для прогулок по набережной Иртыша.',
        d_kz: 'Ертіс өзені бойындағы қала, индустриалды орталық, жағалау, мұражайлар.',
        bestTime_kz: 'Маусым – Тамыз. Ертіс жағалауында серуендеу үшін ең жақсы уақыт.'
    },
    {
        n: 'Усть-Каменогорск',
        n_kz: 'Өскемен',
        d: 'Восточно-Казахстанский город, окруженный горами и реками, индустриальный.',
        d_kz: 'Шығыс Қазақстанның таулармен және өзендермен қоршалған индустриялық қаласы.',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел «Сити»', name_kz: '«Сити» хостелі', address: 'ул. Казахстан, 64', address_kz: 'Қазақстан к-сі, 64' },
            { name: 'Гостиница «Турист»', name_kz: '«Турист» қонақ үйі', address: 'ул. Ади Шарипова, 92', address_kz: 'Әді Шәріпов к-сі, 92' }
        ],
        hotels_expensive: [
            { name: 'Dedeman Oskemen', name_kz: 'Dedeman Oskemen', address: 'ул. Пермитина, 11/1', address_kz: 'Пермитин к-сі, 11/1' },
            { name: 'Shiny River', name_kz: 'Shiny River', address: 'ул. Астана, 8/1', address_kz: 'Астана к-сі, 8/1' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Сели-Поели»', name_kz: '«Сели-Поели» асханасы', address: 'ул. Горького, 50', address_kz: 'Горький к-сі, 50' },
            { name: 'Донерная «Master Food»', name_kz: '«Master Food» донерханасы', address: 'ул. Виноградова, 17', address_kz: 'Виноградов к-сі, 17' },
            { name: 'Асхана «Береке»', name_kz: '«Береке» асханасы', address: 'пр. Назарбаева, 5/3', address_kz: 'Назарбаев даңғылы, 5/3' }
        ],
        restaurants_expensive: [
            { name: 'Barhat', name_kz: 'Barhat', address: 'ул. Казахстан, 64', address_kz: 'Қазақстан к-сі, 64' },
            { name: 'Two Rivers', name_kz: 'Two Rivers', address: 'ул. Пермитина, 11/1 (в Dedeman)', address_kz: 'Пермитин к-сі, 11/1 (Dedeman ішінде)' },
            { name: 'Пицца Блюз (Премиум зал)', name_kz: 'Пицца Блюз (Премиум залы)', address: 'ул. Максима Горького, 56', address_kz: 'Максим Горький к-сі, 56' }
        ],
        locations: [
            { n: 'Левобережный комплекс', n_kz: 'Сол жағалау кешені', t: 'Культура, Семья', t_kz: 'Мәдениет, Отбасы' },
            { n: 'Гора Казахстан', n_kz: 'Қазақстан тауы', t: 'Горы, Активность', t_kz: 'Таулар, Белсенділік' },
            { n: 'Бухтарминское водохранилище', n_kz: 'Бұқтырма су қоймасы', t: 'Море/Вода, Уединение', t_kz: 'Теңіз/Су, Оқшаулану' },
            { n: 'Emporium', n_kz: 'Emporium', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Парк Жастар', n_kz: 'Жастар саябағы', t: 'Эко-туризм, Семья', t_kz: 'Эко-туризм, Отбасы' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Идеально для походов в горы и отдыха на водохранилищах.',
        d_kz: 'Шығыс Қазақстан қаласы, таулар мен өзендермен қоршалған, индустриалды.',
        bestTime_kz: 'Маусым – Тамыз. Тауға шығу және су қоймаларында демалу үшін тамаша уақыт.'
    },
    {
        n: 'Семей',
        n_kz: 'Семей',
        d: 'Исторический город на Иртыше, связанный с Абаем Кунанбаевым и Достоевским.',
        d_kz: 'Абай Құнанбаев пен Достоевскийдің есімдерімен байланысты Ертіс бойындағы тарихи қала.',
        img: 'https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Спартак»', name_kz: '«Спартак» қонақ үйі', address: 'ул. Бозтаева, 4', address_kz: 'Бозтаев к-сі, 4' },
            { name: 'Хостел «Nomad»', name_kz: '«Nomad» хостелі', address: 'ул. Кабанбай Батыра, 42', address_kz: 'Қабанбай батыр к-сі, 42' }
        ],
        hotels_expensive: [
            { name: 'Semey Hotel', name_kz: 'Семей қонақ үйі', address: 'ул. Абая, 94', address_kz: 'Абай к-сі, 94' },
            { name: 'Nomad Hotel', name_kz: 'Nomad Hotel', address: 'ул. Ленина, 9', address_kz: 'Ленин к-сі, 9' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Центральная»', name_kz: '«Орталық» асханасы', address: 'ул. Чокана Валиханова, 137', address_kz: 'Шоқан Уәлиханов к-сі, 137' },
            { name: 'Кафе «Береке»', name_kz: '«Береке» кафесі', address: 'ул. Жамакаева, 98', address_kz: 'Жамақаев к-сі, 98' },
            { name: 'Донерная «King Food»', name_kz: '«King Food» донерханасы', address: 'пр. Шакерима, 12', address_kz: 'Шәкәрім даңғылы, 12' }
        ],
        restaurants_expensive: [
            { name: 'Turandot', name_kz: 'Turandot', address: 'ул. Абая, 94', address_kz: 'Абай к-сі, 94' },
            { name: 'Zodiak', name_kz: 'Zodiak', address: 'ул. Уранхаева, 21', address_kz: 'Оранхаев к-сі, 21' },
            { name: 'Pekin', name_kz: 'Pekin', address: 'ул. Герцена, 32', address_kz: 'Герцен к-сі, 32' }
        ],
        locations: [
            { n: 'Музей Абая', n_kz: 'Абай мұражайы', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Подвесной мост', n_kz: 'Аспалы көпір', t: 'Города, Активность', t_kz: 'Қалалар, Белсенділік' },
            { n: 'Остров Полковничий', n_kz: 'Полковник аралы', t: 'Море/Вода, Семья', t_kz: 'Теңіз/Су, Отбасы' },
            { n: 'Сосновый бор', n_kz: 'Қарағайлы орман', t: 'Эко-туризм, Уединение', t_kz: 'Эко-туризм, Оқшаулану' },
            { n: 'Пиццерия «Додо»', n_kz: '«Додо» пиццериясы', t: 'Гастрономия, Семья', t_kz: 'Гастрономия, Отбасы' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: false, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Сентябрь. Комфортный период для посещения соснового бора и музеев.',
        d_kz: 'Абай Құнанбаев және Достоевскиймен байланысты Ертіс бойындағы тарихи қала.',
        bestTime_kz: 'Маусым – Қыркүйек. Қарағайлы орманды және мұражайларды аралау үшін ыңғайлы кезең.'
    },
    {
        n: 'Атырау',
        n_kz: 'Атырау',
        d: 'Нефтяная столица Казахстана, расположен на реке Урал, близость к Каспийскому морю.',
        d_kz: 'Қазақстанның мұнай астанасы, Жайық өзенінің бойында орналасқан, Каспий теңізіне жақын.',
        img: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Ак Жайык»', name_kz: '«Ақжайық» қонақ үйі', address: 'ул. Абая, 15а', address_kz: 'Абай к-сі, 15а' },
            { name: 'Hostel 24', name_kz: 'Hostel 24', address: 'мкр. Авангард-3, 34', address_kz: 'Авангард-3 ықшам ауданы, 34' }
        ],
        hotels_expensive: [
            { name: 'Renaissance Atyrau Hotel', name_kz: 'Renaissance Атырау қонақ үйі', address: 'ул. Сатпаева, 15б', address_kz: 'Сәтпаев к-сі, 15б' },
            { name: 'River Palace', name_kz: 'River Palace', address: 'ул. Айтеке Би, 55', address_kz: 'Әйтеке би к-сі, 55' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Тагам»', name_kz: '«Тағам» асханасы', address: 'ул. Кулманова, 113', address_kz: 'Құлманов к-сі, 113' },
            { name: 'Базилик', name_kz: 'Базилик', address: 'ул. Сатпаева, 19', address_kz: 'Сәтпаев к-сі, 19' },
            { name: 'Донерная «The Best»', name_kz: '«The Best» донерханасы', address: 'ул. Махамбета, 116', address_kz: 'Махамбет к-сі, 116' }
        ],
        restaurants_expensive: [
            { name: 'Cinzzano', name_kz: 'Cinzzano', address: 'ул. Сатпаева, 15б', address_kz: 'Сәтпаев к-сі, 15б' },
            { name: 'Caravella', name_kz: 'Caravella', address: 'ул. Айтеке Би, 55', address_kz: 'Әйтеке би к-сі, 55' },
            { name: 'O\'Hara Irish Pub', name_kz: 'O\'Hara Irish Pub', address: 'ул. Канцева, 7', address_kz: 'Канцев к-сі, 7' }
        ],
        locations: [
            { n: 'Мост Европа-Азия', n_kz: 'Еуропа-Азия көпірі', t: 'Города, Активность', t_kz: 'Қалалар, Белсенділік' },
            { n: 'Река Урал (прогулки)', n_kz: 'Жайық өзені (серуендеу)', t: 'Море/Вода, Эко-туризм', t_kz: 'Теңіз/Су, Эко-туризм' },
            { n: 'Baizaar ТРЦ', n_kz: 'Baizaar СОО', t: 'Шоппинг, Семья', t_kz: 'Шопинг, Отбасы' },
            { n: 'Городище Сарайшык', n_kz: 'Сарайшық қалашығы', t: 'Культура, Уединение', t_kz: 'Мәдениет, Оқшаулану' },
            { n: 'Рыбный рынок', n_kz: 'Балық базары', t: 'Гастрономия, Шоппинг', t_kz: 'Гастрономия, Шопинг' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Май или Сентябрь. В это время меньше комаров и нет удушающей жары.',
        d_kz: 'Қазақстанның мұнай астанасы, Жайық өзені бойында орналасқан, Каспий теңізіне жақын.',
        bestTime_kz: 'Мамыр немесе Қыркүйек. Бұл уақытта маса аз және Каспий маңы ойпатының қайнаған ыстығы жоқ.'
    },
    {
        n: 'Костанай',
        n_kz: 'Қостанай',
        d: 'Аграрный регион, спокойный город с парками и скверами, озера неподалеку.',
        d_kz: 'Аграрлық аймақ, саябақтары мен скверлері бар тыныш қала, жақын маңда көлдер бар.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Турист»', name_kz: '«Турист» қонақ үйі', address: 'ул. Байтурсынова, 95', address_kz: 'Байтұрсынов к-сі, 95' },
            { name: 'Hostel Kostanay', name_kz: 'Қостанай хостелі', address: 'ул. Гоголя, 144', address_kz: 'Гоголь к-сі, 144' }
        ],
        hotels_expensive: [
            { name: 'Medeu Hotel', name_kz: 'Медеу қонақ үйі', address: 'ул. Байтурсынова, 82', address_kz: 'Байтұрсынов к-сі, 82' },
            { name: 'Tobol Hotel', name_kz: 'Тобыл қонақ үйі', address: 'ул. 5 Декабря, 100', address_kz: '5 желтоқсан к-сі, 100' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Любимая»', name_kz: '«Любимая» асханасы', address: 'пр. Абая, 162', address_kz: 'Абай даңғылы, 162' },
            { name: 'Пловная №1', name_kz: 'Палаухана №1', address: 'ул. Аль-Фараби, 88', address_kz: 'Әл-Фараби к-сі, 88' },
            { name: 'Пиццерия «Додо»', name_kz: '«Додо» пиццериясы', address: 'ул. Пушкина, 65', address_kz: 'Пушкин к-сі, 65' }
        ],
        restaurants_expensive: [
            { name: 'Marrakesh', name_kz: 'Marrakesh', address: 'ул. Гоголя, 62', address_kz: 'Гоголь к-сі, 62' },
            { name: 'Гарри Поттер', name_kz: 'Гарри Поттер', address: 'ул. Тауелсиздик, 116', address_kz: 'Тәуелсіздік к-сі, 116' },
            { name: 'The Ch樓', name_kz: 'The Ch樓', address: 'пр. Абая, 151/1', address_kz: 'Абай даңғылы, 151/1' }
        ],
        locations: [
            { n: 'Парк культуры', n_kz: 'Мәдениет саябағы', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Kostanay Plaza', n_kz: 'Kostanay Plaza', t: 'Шоппинг, Семья', t_kz: 'Шопинг, Отбасы' },
            { n: 'Французский квартал', n_kz: 'Француз кварталы', t: 'Города, Культура', t_kz: 'Қалалар, Мәдениет' },
            { n: 'Набережная «Шагала»', n_kz: '«Шағала» жағалауы', t: 'Море/Вода, Активность', t_kz: 'Теңіз/Су, Белсенділік' },
            { n: 'Кондитерская фабрика (магазин)', n_kz: 'Кондитерлік фабрика (дүкен)', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Июль. Время для загородного отдыха и прогулок по лесопаркам.',
        d_kz: 'Аграрлық аймақ, саябақтары мен скверлері бар тыныш қала, жақын маңда көлдер бар.',
        bestTime_kz: 'Маусым – Шілде. Қала сыртында демалу және орман-саябақтарда серуендеу уақыты.'
    },
    {
        n: 'Кызылорда',
        n_kz: 'Қызылорда',
        d: 'Исторический город, расположенный в пустынной местности, связан с космодромом Байконур.',
        d_kz: 'Шөлді жерде орналасқан тарихи қала, Байқоңыр ғарыш айлағымен байланысты.',
        img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Кызылорда»', name_kz: '«Қызылорда» қонақ үйі', address: 'ул. Журбы, 1', address_kz: 'Журба к-сі, 1' },
            { name: 'Хостел «Орда»', name_kz: '«Орда» хостелі', address: 'ул. Абая, 55', address_kz: 'Абай к-сі, 55' }
        ],
        hotels_expensive: [
            { name: 'Sultan Plaza', name_kz: 'Sultan Plaza', address: 'пр. Астана, 44', address_kz: 'Астана даңғылы, 44' },
            { name: 'Grand Hotel Nomads', name_kz: 'Grand Hotel Nomads', address: 'ул. Коркыт Ата, 123', address_kz: 'Қорқыт ата к-сі, 123' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Ас-Мар»', name_kz: '«Ас-Мар» асханасы', address: 'ул. Токмагамбетова, 15', address_kz: 'Тоқмағамбетов к-сі, 15' },
            { name: 'Лагманхана «Тулпар»', name_kz: '«Тұлпар» лағманханасы', address: 'ул. Байтурсынова, 40', address_kz: 'Байтұрсынов к-сі, 40' },
            { name: 'Кафе «Береке»', name_kz: '«Береке» кафесі', address: 'пр. Абая, 22', address_kz: 'Абай даңғылы, 22' }
        ],
        restaurants_expensive: [
            { name: 'Arbat', name_kz: 'Arbat', address: 'ул. Айтеке Би, 11', address_kz: 'Әйтеке би к-сі, 11' },
            { name: 'Zhibek Zholy', name_kz: 'Жібек жолы', address: 'пр. Султана Бейбарыса, 4', address_kz: 'Сұлтан Бейбарыс даңғылы, 4' },
            { name: 'Vivaldi', name_kz: 'Vivaldi', address: 'ул. Желтоксан, 1', address_kz: 'Желтоқсан к-сі, 1' }
        ],
        locations: [
            { n: 'Мемориал Коркыт Ата', n_kz: 'Қорқыт ата мемориалы', t: 'Культура, Уединение', t_kz: 'Мәдениет, Оқшаулану' },
            { n: 'Набережная Сырдарьи', n_kz: 'Сырдария жағалауы', t: 'Море/Вода, Семья', t_kz: 'Теңіз/Су, Отбасы' },
            { n: 'ТРЦ Aray', n_kz: 'Aray СОО', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Площадь Тагзым', n_kz: 'Тағзым алаңы', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Лагманхана «Тулпар»', n_kz: '«Тұлпар» лағманханасы', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: false, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Сентябрь – Октябрь. Время знаменитых дынь и арбузов, когда жара спадает.',
        d_kz: 'Шөлді жерде орналасқан тарихи қала, Байқоңыр ғарыш айлағымен байланысты.',
        bestTime_kz: 'Қыркүйек – Қазан. Ыстық қайтқан кездегі атақты қызылордалық қауын-қарбыз уақыты.'
    },
    {
        n: 'Уральск',
        n_kz: 'Орал',
        d: 'Старинный город на реке Урал, богатая история, архитектура 19 века.',
        d_kz: 'Жайық өзеніндегі көне қала, бай тарихы, 19-ғасырдың архитектурасы.',
        img: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Урал»', name_kz: '«Орал» қонақ үйі', address: 'пр. Назарбаева, 184', address_kz: 'Назарбаев даңғылы, 184' },
            { name: 'Хостел «Дом»', name_kz: '«Дом» хостелі', address: 'ул. Курмангазы, 150', address_kz: 'Құрманғазы к-сі, 150' }
        ],
        hotels_expensive: [
            { name: 'Park Hotel', name_kz: 'Park Hotel', address: 'ул. Сарайшык, 28/2', address_kz: 'Сарайшық к-сі, 28/2' },
            { name: 'Pushkin Hotel', name_kz: 'Пушкин қонақ үйі', address: 'пр. Назарбаева, 148', address_kz: 'Назарбаев даңғылы, 148' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Как дома»', name_kz: '«Как дома» асханасы', address: 'ул. Дины Нурпеисовой, 15', address_kz: 'Дина Нұрпейісова к-сі, 15' },
            { name: 'Бургерная «Black Star» (акции)', name_kz: 'Black Star бургерханасы', address: 'пр. Назарбаева, 191', address_kz: 'Назарбаев даңғылы, 191' },
            { name: 'Асхана «Дастархан»', name_kz: '«Дастархан» асханасы', address: 'ул. Мухита, 78', address_kz: 'Мұхит к-сі, 78' }
        ],
        restaurants_expensive: [
            { name: 'Venezia', name_kz: 'Venezia', address: 'пр. Назарбаева, 162/1', address_kz: 'Назарбаев даңғылы, 162/1' },
            { name: 'Zina', name_kz: 'Zina', address: 'ул. Сарайшык, 28', address_kz: 'Сарайшық к-сі, 28' },
            { name: 'Pivovaroff', name_kz: 'Пивоварофф', address: 'ул. Карева, 47', address_kz: 'Карев к-сі, 47' }
        ],
        locations: [
            { n: 'Музей Пушкина', n_kz: 'Пушкин мұражайы', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Парк им. Кирова', n_kz: 'Киров атындағы саябақ', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Озеро Шалкар', n_kz: 'Шалқар көлі', t: 'Море/Вода, Эко-туризм', t_kz: 'Теңіз/Су, Эко-туризм' },
            { n: 'City Center', n_kz: 'City Center', t: 'Шоппинг, Семья', t_kz: 'Шопинг, Отбасы' },
            { n: 'Старая мечеть', n_kz: 'Ескі мешіт', t: 'Культура, Уединение', t_kz: 'Мәдениет, Оқшаулану' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Май – Июнь. Самое красивое время, когда берега реки Урал максимально зеленые.',
        d_kz: 'Жайық өзені бойындағы көне қала, бай тарихы, 19 ғасыр архитектурасы.',
        bestTime_kz: 'Мамыр – Маусым. Жайық өзенінің жағалаулары ең жасыл болған ең әдемі уақыт.'
    },
    {
        n: 'Петропавловск',
        n_kz: 'Петропавл',
        d: 'Северный город Казахстана, исторический центр, озера и леса вокруг.',
        d_kz: 'Қазақстанның солтүстік қаласы, тарихи орталық, айналасында көлдер мен ормандар.',
        img: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Восход»', name_kz: '«Восход» қонақ үйі', address: 'ул. Конституции Казахстана, 52', address_kz: 'Қазақстан Конституциясы к-сі, 52' },
            { name: 'Хостел «Север»', name_kz: '«Север» хостелі', address: 'ул. Мира, 215', address_kz: 'Мир к-сі, 215' }
        ],
        hotels_expensive: [
            { name: 'Park Hotel North', name_kz: 'Park Hotel North', address: 'ул. Кеншинбаева, 22', address_kz: 'Кеншінбаев к-сі, 22' },
            { name: 'Skif Hotel', name_kz: 'Скиф қонақ үйі', address: 'ул. Партизанская, 118', address_kz: 'Партизанская к-сі, 118' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Сарбай»', name_kz: '«Сарбай» асханасы', address: 'ул. Интернациональная, 59', address_kz: 'Интернациональная к-сі, 59' },
            { name: 'Кафе «Блинчик»', name_kz: '«Блинчик» кафесі', address: 'ул. Конституции Казахстана, 13', address_kz: 'Қазақстан Конституциясы к-сі, 13' },
            { name: 'Донерная «Best»', name_kz: '«Best» донерханасы', address: 'ул. Жамбыла, 150', address_kz: 'Жамбыл к-сі, 150' }
        ],
        restaurants_expensive: [
            { name: 'Kishlak', name_kz: 'Қышлақ', address: 'ул. Конституции Казахстана, 31', address_kz: 'Қазақстан Конституциясы к-сі, 31' },
            { name: 'Friends', name_kz: 'Friends', address: 'ул. Интернациональная, 21', address_kz: 'Интернациональная к-сі, 21' },
            { name: 'Emerald', name_kz: 'Emerald', address: 'ул. Мира, 122', address_kz: 'Мир к-сі, 122' }
        ],
        locations: [
            { n: 'Резиденция Абылай-хана', n_kz: 'Абылай хан резиденциясы', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Улица Конституции', n_kz: 'Конституция көшесі', t: 'Города, Шоппинг', t_kz: 'Қалалар, Шопинг' },
            { n: 'Озеро Пестрое', n_kz: 'Пестрое көлі', t: 'Море/Вода, Активность', t_kz: 'Теңіз/Су, Белсенділік' },
            { n: 'Аквапарк «Нептун»', n_kz: '«Нептун» аквапаркі', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Мещерский лес', n_kz: 'Мещерский орманы', t: 'Эко-туризм, Уединение', t_kz: 'Эко-туризм, Оқшаулану' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: false, gastronomy: false, seclusion: true, shopping: false, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Самый теплый период в самом северном городе страны.',
        d_kz: 'Қазақстанның солтүстік қаласы, тарихи орталық, айналасында көлдер мен ормандар.',
        bestTime_kz: 'Маусым – Тамыз. Елдің ең солтүстік қаласындағы ең жылы кезең.'
    },
    {
        n: 'Кокшетау',
        n_kz: 'Көкшетау',
        d: 'Уютный город у подножия сопок, ворота в край озер и живописной природы.',
        d_kz: 'Шоқылар етегіндегі жайлы қала, көлдер мен көрікті табиғат өлкесіне ашылған қақпа.',
        img: 'https://images.unsplash.com/photo-1549416805-0e7740e2136e?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Достык»', name_kz: '«Достық» қонақ үйі', address: 'ул. Ауэзова, 183', address_kz: 'Әуезов к-сі, 183' },
            { name: 'Хостел «Кокше»', name_kz: '«Көкше» хостелі', address: 'ул. Горького, 19', address_kz: 'Горький к-сі, 19' }
        ],
        hotels_expensive: [
            { name: 'Green Which Hotel', name_kz: 'Green Which Hotel', address: 'ул. Ауэзова, 157', address_kz: 'Әуезов к-сі, 157' },
            { name: 'Plaza Hotel', name_kz: 'Plaza қонақ үйі', address: 'ул. Абая, 114', address_kz: 'Абай к-сі, 114' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Арзан»', name_kz: '«Арзан» асханасы', address: 'ул. Сатпаева, 10', address_kz: 'Сәтпаев к-сі, 10' },
            { name: 'Кафе «Шафран»', name_kz: '«Шафран» кафесі', address: 'ул. Горького, 31', address_kz: 'Горький к-сі, 31' },
            { name: 'Бистро «Fast Food»', name_kz: 'Fast Food бистросы', address: 'ул. Ауэзова, 190', address_kz: 'Әуезов к-сі, 190' }
        ],
        restaurants_expensive: [
            { name: 'GQ Restaurant', name_kz: 'GQ мейрамханасы', address: 'ул. Абая, 114', address_kz: 'Абай к-сі, 114' },
            { name: 'Tiflis', name_kz: 'Тифлис', address: 'ул. Ауэзова, 157', address_kz: 'Әуезов к-сі, 157' },
            { name: 'Zhibek Zholy', name_kz: 'Жібек жолы', address: 'пр. Назарбаева, 15', address_kz: 'Назарбаев даңғылы, 15' }
        ],
        locations: [
            { n: 'Сопка Букпа', n_kz: 'Бұқпа шоқысы', t: 'Горы, Активность', t_kz: 'Таулар, Белсенділік' },
            { n: 'Озеро Копа', n_kz: 'Қопа көлі', t: 'Море/Вода, Семья', t_kz: 'Теңіз/Су, Отбасы' },
            { n: 'ТЦ Рио', n_kz: 'Рио СОО', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Музей истории', n_kz: 'Тарих мұражайы', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Сквер «Мангилик Ел»', n_kz: '«Мәңгілік ел» сквері', t: 'Уединение, Города', t_kz: 'Оқшаулану, Қалалар' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Приятная погода для отдыха у озера Копа.',
        d_kz: 'Төбелердің етегіндегі жайлы қала, көлдер мен әдемі табиғат аймағына қақпа.',
        bestTime_kz: 'Маусым – Тамыз. Қопа көлінде демалу үшін жағымды ауа райы.'
    },
    {
        n: 'Талдыкорган',
        n_kz: 'Талдықорған',
        d: 'Зеленый город с богатой культурой и множеством возможностей для активного отдыха.',
        d_kz: 'Мәдениеті бай және белсенді демалысқа арналған мүмкіндіктері мол жасыл қала.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Талдыкорган»', name_kz: '«Талдықорған» қонақ үйі', address: 'ул. Тауелсиздик, 67', address_kz: 'Тәуелсіздік к-сі, 67' },
            { name: 'Гостевой дом «Алтын»', name_kz: '«Алтын» қонақ үйі', address: 'ул. Кабанбай Батыра, 34', address_kz: 'Қабанбай батыр к-сі, 34' }
        ],
        hotels_expensive: [
            { name: 'Grand Hotel Zhetysu', name_kz: 'Grand Hotel Жетісу', address: 'ул. Кабанбай батыра, 40', address_kz: 'Қабанбай батыр к-сі, 40' },
            { name: 'Alatau Hotel', name_kz: 'Алатау қонақ үйі', address: 'ул. Жансугурова, 112', address_kz: 'Жансүгіров к-сі, 112' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Береке»', name_kz: '«Береке» асханасы', address: 'ул. Биржан Сал, 45', address_kz: 'Біржан сал к-сі, 45' },
            { name: 'Кафе «Улытау»', name_kz: '«Ұлытау» кафесі', address: 'ул. Балапанова, 23', address_kz: 'Балапанов к-сі, 23' },
            { name: 'Донер «Master»', name_kz: 'Master донері', address: 'ул. Тауелсиздик, 100', address_kz: 'Тәуелсіздік к-сі, 100' }
        ],
        restaurants_expensive: [
            { name: 'Arbat', name_kz: 'Арбат', address: 'ул. Гаухар Ана, 110', address_kz: 'Гауһар ана к-сі, 110' },
            { name: 'Senator', name_kz: 'Сенатор', address: 'ул. Жансугурова, 187', address_kz: 'Жансүгіров к-сі, 187' },
            { name: 'Zhetysu Restaurant', name_kz: 'Жетісу мейрамханасы', address: 'ул. Кабанбай батыра, 40', address_kz: 'Қабанбай батыр к-сі, 40' }
        ],
        locations: [
            { n: 'Парк «Жастар»', n_kz: '«Жастар» саябағы', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Набережная Каратала', n_kz: 'Қаратал жағалауы', t: 'Море/Вода, Эко-туризм', t_kz: 'Теңіз/Су, Эко-туризм' },
            { n: 'City Center', n_kz: 'City Center', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Арка Талдыкоргана', n_kz: 'Талдықорған аркасы', t: 'Города, Культура', t_kz: 'Қалалар, Мәдениет' },
            { n: 'Ресторан Arbat', n_kz: 'Арбат мейрамханасы', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: false, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Май – Июнь. Пик красоты предгорий Джунгарского Алатау.',
        d_kz: 'Жасыл қала, бай мәдениеті және белсенді демалыс үшін көптеген мүмкіндіктер.',
        bestTime_kz: 'Мамыр – Маусым. Жетісу Алатауының етегіндегі табиғаттың ең әдемі кезеңі.'
    },
    {
        n: 'Балхаш',
        n_kz: 'Балқаш',
        d: 'Город на берегу уникального озера, идеален для водных активностей и отдыха на пляже.',
        d_kz: 'Бірегей көл жағасындағы қала, су белсенділіктері мен жағажай демалысына өте қолайлы.',
        img: 'https://images.unsplash.com/photo-1506929662133-570c13a5c32d?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Центральная»', name_kz: '«Орталық» қонақ үйі', address: 'ул. Желтоксан, 11', address_kz: 'Желтоқсан к-сі, 11' },
            { name: 'База отдыха «Голубая Лагуна»', name_kz: '«Голубая Лагуна» демалыс базасы', address: 'набережная, б/н', address_kz: 'жағалау, н/з' }
        ],
        hotels_expensive: [
            { name: 'Pearl Hotel', name_kz: 'Pearl Hotel', address: 'ул. Желтоксан, 15', address_kz: 'Желтоқсан к-сі, 15' },
            { name: 'Riviera', name_kz: 'Riviera', address: 'пос. Чубар-Тюбек, береговая зона', address_kz: 'Шұбар түбек кенті, жағалау аймағы' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Рыбацкая»', name_kz: '«Рыбацкая» асханасы', address: 'ул. Ленина, 34', address_kz: 'Ленин к-сі, 34' },
            { name: 'Кафе «Ак Жайык»', name_kz: '«Ақжайық» кафесі', address: 'ул. Мира, 12', address_kz: 'Мир к-сі, 12' },
            { name: 'Донерная «Центр»', name_kz: '«Орталық» донерханасы', address: 'ул. Желтоксан, 5', address_kz: 'Желтоқсан к-сі, 5' }
        ],
        restaurants_expensive: [
            { name: 'Balkhash Gold', name_kz: 'Balkhash Gold', address: 'ул. Караменде Би, 15', address_kz: 'Қараменде би к-сі, 15' },
            { name: 'Empire', name_kz: 'Empire', address: 'ул. Ленина, 45', address_kz: 'Ленин к-сі, 45' },
            { name: 'Aura', name_kz: 'Aura', address: 'ул. Желтоксан, 15', address_kz: 'Желтоқсан к-сі, 15' }
        ],
        locations: [
            { n: 'Городской пляж', n_kz: 'Қалалық жағажай', t: 'Море/Вода, Семья', t_kz: 'Теңіз/Су, Отбасы' },
            { n: 'Бектау-Ата', n_kz: 'Бектау ата', t: 'Горы, Эко-туризм', t_kz: 'Таулар, Эко-туризм' },
            { n: 'Краеведческий музей', n_kz: 'Өлкетану мұражайы', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Набережная', n_kz: 'Жағалау', t: 'Активность, Города', t_kz: 'Белсенділік, Қалалар' },
            { n: 'Рыбный рынок', n_kz: 'Балық базары', t: 'Гастрономия, Шоппинг', t_kz: 'Гастрономия, Шопинг' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июль – Август. Озеро прогревается хорошо, это лучшие месяцы для пляжа.',
        d_kz: 'Бірегей көлдің жағасындағы қала, су белсенділігі және жағажай демалысы үшін тамаша.',
        bestTime_kz: 'Шілде – Тамыз. Көл жақсы жылынады, бұл жағажай демалысы үшін ең жақсы айлар.'
    },
    {
        n: 'Экибастуз',
        n_kz: 'Екібастұз',
        d: 'Индустриальный гигант с масштабными разрезами и интересными культурными объектами.',
        d_kz: 'Ауқымды кеніштері мен қызықты мәдени нысандары бар индустриялық алып.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Дружба»', name_kz: '«Достық» қонақ үйі', address: 'ул. Машхур Жусупа, 46', address_kz: 'Мәшһүр Жүсіп к-сі, 46' },
            { name: 'Хостел «Энергетик»', name_kz: '«Энергетик» хостелі', address: 'ул. Строительная, 21', address_kz: 'Құрылыс к-сі, 21' }
        ],
        hotels_expensive: [
            { name: 'Green Hotel', name_kz: 'Green Hotel', address: 'ул. Ауэзова, 147', address_kz: 'Әуезов к-сі, 147' },
            { name: 'Rixos (местный)', name_kz: 'Rixos (жергілікті)', address: 'ул. Кунаева, 12', address_kz: 'Қонаев к-сі, 12' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Ас-Мар»', name_kz: '«Ас-Мар» асханасы', address: 'ул. М. Жусупа, 50', address_kz: 'М. Жүсіп к-сі, 50' },
            { name: 'Кафе «Пиросмани» (бюджет)', name_kz: '«Пиросмани» кафесі (бюджеттік)', address: 'ул. Абая, 92', address_kz: 'Абай к-сі, 92' },
            { name: 'Бургер Кинг (ТЦ)', name_kz: 'Бургер Кинг (СОО)', address: 'ул. Кунаева, 2', address_kz: 'Қонаев к-сі, 2' }
        ],
        restaurants_expensive: [
            { name: 'Old Castle', name_kz: 'Old Castle', address: 'ул. Строительная, 88', address_kz: 'Құрылыс к-сі, 88' },
            { name: 'Versailles', name_kz: 'Versailles', address: 'ул. Энергетиков, 91', address_kz: 'Энергетиктер к-сі, 91' },
            { name: 'Assorti', name_kz: 'Assorti', address: 'ул. М. Жусупа, 115', address_kz: 'М. Жүсіп к-сі, 115' }
        ],
        locations: [
            { n: 'Разрез «Богатырь»', n_kz: '«Богатырь» кеніші', t: 'Города, Эко-туризм', t_kz: 'Қалалар, Эко-туризм' },
            { n: 'Парк «Шахтер»', n_kz: '«Шахтер» саябағы', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'ГРЭС-2 (труба)', n_kz: 'МАЭС-2 (мұржа)', t: 'Города, Культура', t_kz: 'Қалалар, Мәдениет' },
            { n: 'ТЦ Maxell', n_kz: 'Maxell СОО', t: 'Шоппинг, Семья', t_kz: 'Шопинг, Отбасы' },
            { n: 'Кафе «Ас-Мар»', n_kz: '«Ас-Мар» кафесі', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: false, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Сентябрь. Жары уже нет, а карьеры лучше осматривать в сухую погоду.',
        d_kz: 'Масштабты карьерлері және қызықты мәдени нысандары бар индустриалды алып.',
        bestTime_kz: 'Қыркүйек. Ыстық жоқ, ал атақты карьерлерді құрғақ ауа райында қараған дұрыс.'
    },
    {
        n: 'Рудный',
        n_kz: 'Рудный',
        d: 'Город горняков с оживленной атмосферой и разнообразными парками.',
        d_kz: 'Қызу атмосферасы мен алуан түрлі саябақтары бар кеншілер қаласы.',
        img: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Уют»', name_kz: '«Уют» қонақ үйі', address: 'ул. Ленина, 101', address_kz: 'Ленин к-сі, 101' },
            { name: 'Гостевой дом «Металлург»', name_kz: '«Металлург» қонақ үйі', address: 'ул. 50 лет Октября, 42', address_kz: 'Қазан төңкерісіне 50 жыл к-сі, 42' }
        ],
        hotels_expensive: [
            { name: 'Victoria Hotel', name_kz: 'Victoria Hotel', address: 'ул. Ленина, 187', address_kz: 'Ленин к-сі, 187' },
            { name: 'Gorniak Hotel', name_kz: 'Горняк қонақ үйі', address: 'ул. Космонавтов, 10', address_kz: 'Ғарышкерлер к-сі, 10' }
        ],
        restaurants_budget: [
            { name: 'Столовая №1', name_kz: '№1 асхана', address: 'ул. Горняков, 74', address_kz: 'Кеншілер к-сі, 74' },
            { name: 'Кафе «Чебурек»', name_kz: '«Чебурек» кафесі', address: 'ул. Ленина, 50', address_kz: 'Ленин к-сі, 50' },
            { name: 'Пиццерия «Дока»', name_kz: '«Дока» пиццериясы', address: 'ул. 40 лет Октября, 15', address_kz: 'Қазан төңкерісіне 40 жыл к-сі, 15' }
        ],
        restaurants_expensive: [
            { name: 'Saray', name_kz: 'Saray', address: 'ул. Парковая, 2', address_kz: 'Парковая к-сі, 2' },
            { name: 'Prestige', name_kz: 'Prestige', address: 'ул. Ленина, 107', address_kz: 'Ленин к-сі, 107' },
            { name: 'Graf', name_kz: 'Graf', address: 'ул. Качарская, 12', address_kz: 'Қашар к-сі, 12' }
        ],
        locations: [
            { n: 'Парк культуры', n_kz: 'Мәдениет саябағы', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Река Тобол', n_kz: 'Тобыл өзені', t: 'Море/Вода, Уединение', t_kz: 'Теңіз/Су, Оқшаулану' },
            { n: 'Скульптура «Горняк»', n_kz: '«Кенші» мүсіні', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'ТЦ на ул. Ленина', n_kz: 'Ленин к-сіндегі СО', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Ледовый дворец', n_kz: 'Мұз сарайы', t: 'Активность, Семья', t_kz: 'Белсенділік, Отбасы' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Сентябрь. Время золотой осени, когда город выглядит наиболее уютно.',
        d_kz: 'Жанды атмосферасы және әртүрлі саябақтары бар кеншілер қаласы.',
        bestTime_kz: 'Қыркүйек. Қала ең жайлы көрінетін алтын күз уақыты.'
    },
    {
        n: 'Конаев',
        n_kz: 'Қонаев',
        d: 'Морской курорт близ Алматы, центр развлечений и пляжного отдыха.',
        d_kz: 'Алматы маңындағы теңіз курорты, ойын-сауық пен жағажай демалысының орталығы.',
        img: 'https://images.unsplash.com/photo-1544984243-75a800232997?q=80&w=600',
        hotels_budget: [
            { name: 'База отдыха «Алтын Эмель»', name_kz: '«Алтын Емел» демалыс базасы', address: 'Северное побережье', address_kz: 'Солтүстік жағалау' },
            { name: 'Гостиница «Море»', name_kz: '«Теңіз» қонақ үйі', address: '1-й мкр, 15', address_kz: '1-ші ықшам аудан, 15' }
        ],
        hotels_expensive: [
            { name: 'Royal Tulip Almaty (Casinos)', name_kz: 'Royal Tulip Алматы (Казино)', address: 'зона отдыха Гранд Капшагай', address_kz: 'Гранд Қапшағай демалыс аймағы' },
            { name: 'Bellagio', name_kz: 'Bellagio', address: 'ул. Кунаева, 10', address_kz: 'Қонаев к-сі, 10' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Рыбачка»', name_kz: '«Балықшы» асханасы', address: 'трасса Алматы-Конаев', address_kz: 'Алматы-Қонаев тас жолы' },
            { name: 'Кафе «Айша»', name_kz: '«Айша» кафесі', address: 'ул. Сейфуллина, 22', address_kz: 'Сейфуллин к-сі, 22' },
            { name: 'Донерная «Fresh»', name_kz: '«Fresh» донерханасы', address: '3-й мкр, 5', address_kz: '3-ші ықшам аудан, 5' }
        ],
        restaurants_expensive: [
            { name: 'Casino Bombay (ресторан)', name_kz: 'Casino Bombay (мейрамхана)', address: 'Индустриальная ул., 9', address_kz: 'Индустриалды к-сі, 9' },
            { name: 'Riviera', name_kz: 'Riviera', address: 'ул. Кунаева, 1', address_kz: 'Қонаев к-сі, 1' },
            { name: 'Macao', name_kz: 'Macao', address: 'Игорная зона', address_kz: 'Ойын аймағы' }
        ],
        locations: [
            { n: 'Пляжи Капшагая', n_kz: 'Қапшағай жағажайлары', t: 'Море/Вода, Семья', t_kz: 'Теңіз/Су, Отбасы' },
            { n: 'Казино (игорная зона)', n_kz: 'Казино (ойын аймағы)', t: 'Активность, Города', t_kz: 'Белсенділік, Қалалар' },
            { n: 'Аквапарк', n_kz: 'Аквапарк', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'Набережная Кунаева', n_kz: 'Қонаев жағалауы', t: 'Города, Активность', t_kz: 'Қалалар, Белсенділік' },
            { n: 'Ресторан Riviera', n_kz: 'Riviera мейрамханасы', t: 'Гастрономия, Море/Вода', t_kz: 'Гастрономия, Теңіз/Су' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: false, gastronomy: true, seclusion: false, shopping: false, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Сентябрь. Длинный купальный сезон благодаря мелководью Капшагая.',
        d_kz: 'Алматыға жақын теңіз курорты, ойын-сауық және жағажай демалысы орталығы.',
        bestTime_kz: 'Маусым – Қыркүйек. Қапшағай су қоймасының таяздығы арқасында ұзақ шомылу маусымы.'
    },
    {
        n: 'Басши (Алтын-Эмель)',
        n_kz: 'Басши (Алтын-Емел)',
        d: 'Уникальный природный заповедник с поющими барханами и марсианскими пейзажами.',
        d_kz: 'Әнші бархандары мен марстық пейзаждары бар бірегей табиғи қорық.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Айман»', name_kz: '«Айман» қонақ үйі', address: 'ул. Центральная, 12', address_kz: 'Орталық к-сі, 12' },
            { name: 'Кемпинг парка', name_kz: 'Парк кемпингі', address: 'Территория ГНПП', address_kz: 'МҰТП аумағы' }
        ],
        hotels_expensive: [
            { name: 'Altyn Emel Hotel (VIP)', name_kz: 'Altyn Emel Hotel (VIP)', address: 'ул. Школьная, 5', address_kz: 'Мектеп к-сі, 5' },
            { name: 'Oshaktas Guest House (Люкс)', name_kz: 'Ошақтас қонақ үйі (Люкс)', address: 'ул. Ленина, 20', address_kz: 'Ленин к-сі, 20' }
        ],
        restaurants_budget: [
            { name: 'Столовая в визит-центре', name_kz: 'Визит-орталықтағы асхана', address: 'въезд в парк', address_kz: 'паркке кіреберіс' },
            { name: 'Кафе «Жулдыз»', name_kz: '«Жұлдыз» кафесі', address: 'трасса рядом с поселком', address_kz: 'кент маңындағы тас жол' },
            { name: 'Домашняя кухня «У Сауле»', name_kz: 'Сәуленің үй тағамдары', address: 'ул. Центральная, 5', address_kz: 'Орталық к-сі, 5' }
        ],
        restaurants_expensive: [
            { name: 'Ресторан Altyn Emel', name_kz: 'Алтын Емел мейрамханасы', address: 'ул. Школьная, 5', address_kz: 'Мектеп к-сі, 5' },
            { name: 'Юрточный лагерь (VIP)', name_kz: 'Киіз үй лагері (VIP)', address: 'территория парка', address_kz: 'парк аумағы' },
            { name: 'Банкетный зал «Басши»', name_kz: '«Басши» банкет залы', address: 'ул. Абая, 1', address_kz: 'Абай к-сі, 1' }
        ],
        locations: [
            { n: 'Поющий бархан', n_kz: 'Әнші бархан', t: 'Горы, Эко-туризм', t_kz: 'Таулар, Эко-туризм' },
            { n: 'Горы Актау', n_kz: 'Ақтау таулары', t: 'Горы, Эко-туризм', t_kz: 'Таулар, Эко-туризм' },
            { n: 'Горы Катутау', n_kz: 'Қаттытау таулары', t: 'Горы, Уединение', t_kz: 'Таулар, Оқшаулану' },
            { n: '700-летняя Ива', n_kz: '700 жылдық тал', t: 'Эко-туризм, Культура', t_kz: 'Эко-туризм, Мәдениет' },
            { n: 'Визит-центр', n_kz: 'Визит-орталық', t: 'Культура, Семья', t_kz: 'Мәдениет, Отбасы' }
        ],
        tags: { mountains: true, sea: false, city: false, activity: false, culture: true, gastronomy: false, seclusion: true, shopping: false, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель – Май. В пустыне еще не жарко, комфортно для подъема на барханы.',
        d_kz: 'Әнші бархандары және марстық пейзаждары бар бірегей табиғи қорық.',
        bestTime_kz: 'Сәуір – Мамыр. Шөлде әлі ыстық емес, бархандарға көтерілу үшін ыңғайлы.'
    },
    {
        n: 'Жанаозен',
        n_kz: 'Жаңаөзен',
        d: 'Город в сердце Мангистау, отправная точка для путешествий по пустыням и каньонам.',
        d_kz: 'Маңғыстаудың қақ ортасындағы қала, шөлдер мен каньондарға саяхаттаудың бастапқы нүктесі.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Аруана»', name_kz: '«Аруана» қонақ үйі', address: 'мкр. Самал, 44', address_kz: 'Самал ықшам ауданы, 44' },
            { name: 'Хостел «Мунайши»', name_kz: '«Мұнайшы» хостелі', address: 'мкр. Коктем, 1', address_kz: 'Көктем ықшам ауданы, 1' }
        ],
        hotels_expensive: [
            { name: 'Kendirli (Resort)', name_kz: 'Кендірлі (курорт)', address: '70 км от города', address_kz: 'қаладан 70 км' },
            { name: 'Hotel Nauryz', name_kz: 'Наурыз қонақ үйі', address: 'мкр. Оркен, 55', address_kz: 'Өркен ықшам ауданы, 55' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Ас-Ман»', name_kz: '«Ас-Ман» асханасы', address: 'мкр. Шанырак, 12', address_kz: 'Шаңырақ ықшам ауданы, 12' },
            { name: 'Кафе «Шугла»', name_kz: '«Шұғыла» кафесі', address: 'мкр. Мунайши, 5', address_kz: 'Мұнайшы ықшам ауданы, 5' },
            { name: 'Донерная «Baiterek»', name_kz: 'Baiterek донерханасы', address: 'пр. Сатпаева, 10', address_kz: 'Сәтпаев даңғылы, 10' }
        ],
        restaurants_expensive: [
            { name: 'Altyn Adam', name_kz: 'Алтын Адам', address: 'мкр. Шугыла, 25', address_kz: 'Шұғыла ықшам ауданы, 25' },
            { name: 'Kendirli Restaurant', name_kz: 'Кендірлі мейрамханасы', address: 'зона отдыха Кендирли', address_kz: 'Кендірлі демалыс аймағы' },
            { name: 'Tandyr', name_kz: 'Тандыр', address: 'мкр. Самал, 15', address_kz: 'Самал ықшам ауданы, 15' }
        ],
        locations: [
            { n: 'Каньоны Кызылкуп', n_kz: 'Қызылқұп каньондары', t: 'Эко-туризм, Горы', t_kz: 'Эко-туризм, Таулар' },
            { n: 'Плато Устюрт', n_kz: 'Үстірт үстірті', t: 'Эко-туризм, Уединение', t_kz: 'Эко-туризм, Оқшаулану' },
            { n: 'ТЦ Nauryz', n_kz: 'Наурыз СО', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Мечеть Бекет-Ата', n_kz: 'Бекет ата мешіті', t: 'Культура, Уединение', t_kz: 'Мәдениет, Оқшаулану' },
            { n: 'Зона отдыха Кендирли', n_kz: 'Кендірлі демалыс аймағы', t: 'Море/Вода, Семья', t_kz: 'Теңіз/Су, Отбасы' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: false, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель – Май. Идеально для каньонов Устюрта, пока солнце не выжгло пустыню.',
        d_kz: 'Маңғыстаудың жүрегіндегі қала, шөлдер мен каньондарға саяхаттар үшін бастау нүктесі.',
        bestTime_kz: 'Сәуір – Мамыр. Күн шөлді күйдіріп жібермей тұрғанда Үстірт каньондарына саяхат жасау үшін тамаша.'
    },
    {
        n: 'Риддер',
        n_kz: 'Риддер',
        d: 'Горный край на востоке с альпийскими лугами и сибирской тайгой.',
        d_kz: 'Шығыстағы альпілік шалғындары мен сібір тайгасы бар таулы өлке.',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Алтай»', name_kz: '«Алтай» қонақ үйі', address: 'пр. Независимости, 10', address_kz: 'Тәуелсіздік даңғылы, 10' },
            { name: 'Турбаза «Светлячок»', name_kz: '«Светлячок» турбазасы', address: 'окраина города', address_kz: 'қала шеті' }
        ],
        hotels_expensive: [
            { name: 'Лесная Сказка (Риддер Гул)', name_kz: 'Орман ертегісі (Риддер Гүл)', address: 'ул. Семипалатинская, 150', address_kz: 'Семей к-сі, 150' },
            { name: 'Black Rock', name_kz: 'Black Rock', address: 'район горнолыжного спуска', address_kz: 'тау шаңғысы түсу ауданы' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Кедр»', name_kz: '«Кедр» асханасы', address: 'ул. Ауэзова, 12', address_kz: 'Әуезов к-сі, 12' },
            { name: 'Кафе «У фонтана»', name_kz: '«Субұрқақ жанында» кафесі', address: 'Центральная площадь', address_kz: 'Орталық алаң' },
            { name: 'Пиццерия «Smile»', name_kz: '«Smile» пиццериясы', address: 'пр. Независимости, 15', address_kz: 'Тәуелсіздік даңғылы, 15' }
        ],
        restaurants_expensive: [
            { name: 'Edelweiss', name_kz: 'Edelweiss', address: 'ул. Горная, 1', address_kz: 'Горная к-сі, 1' },
            { name: 'Медвежий угол', name_kz: 'Аю бұрышы', address: 'лесная зона', address_kz: 'орман аймағы' },
            { name: 'Versailles', name_kz: 'Versailles', address: 'ул. Гоголя, 45', address_kz: 'Гоголь к-сі, 45' }
        ],
        locations: [
            { n: 'Гора Три Брата', n_kz: 'Үш ағайынды тауы', t: 'Горы, Активность', t_kz: 'Таулар, Белсенділік' },
            { n: 'Западно-Алтайский заповедник', n_kz: 'Батыс Алтай қорығы', t: 'Эко-туризм, Уединение', t_kz: 'Эко-туризм, Оқшаулану' },
            { n: 'Горнолыжный спуск', n_kz: 'Тау шаңғысы трассасы', t: 'Активность, Горы', t_kz: 'Белсенділік, Таулар' },
            { n: 'Краеведческий музей', n_kz: 'Өлкетану мұражайы', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'База отдыха «Светлячок»', n_kz: '«Светлячок» демалыс базасы', t: 'Семья, Эко-туризм', t_kz: 'Отбасы, Эко-туризм' }
        ],
        tags: { mountains: true, sea: false, city: false, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: false, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Зима (лыжи) или Июль (походы). Здесь выпадает аномальное количество снега.',
        d_kz: 'Шығыстағы таулы аймақ, альпілік шалғындар және сібірлік тайга.',
        bestTime_kz: 'Қыс (шаңғы) немесе Шілде (жаяу серуендеу). Мұнда қар өте көп жауады, бұл оны фрирайд үшін жұмаққа айналдырады.'
    },
    {
        n: 'Степногорск',
        n_kz: 'Степногорск',
        d: 'Индустриальный город с интересной архитектурой и активной жизнью.',
        d_kz: 'Индустриялық қала, қызықты архитектурасы мен белсенді өмірі бар.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Степногорск»', name_kz: '«Степногорск» қонақ үйі', address: '4-й мкр, 45', address_kz: '4-ші ықшам аудан, 45' },
            { name: 'Хостел «Мир»', name_kz: '«Мир» хостелі', address: '6-й мкр, 12', address_kz: '6-шы ықшам аудан, 12' }
        ],
        hotels_expensive: [
            { name: 'Serebryany Bor', name_kz: 'Күміс бор', address: 'лесная зона за городом', address_kz: 'қала сыртындағы орман аймағы' },
            { name: 'Central Hotel', name_kz: 'Central Hotel', address: '3-й мкр, 20', address_kz: '3-ші ықшам аудан, 20' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Трапеза»', name_kz: '«Трапеза» асханасы', address: '7-й мкр, 5', address_kz: '7-ші ықшам аудан, 5' },
            { name: 'Кафе «Удача»', name_kz: '«Удача» кафесі', address: '5-й мкр, 10', address_kz: '5-ші ықшам аудан, 10' },
            { name: 'Донер-центр', name_kz: 'Донер-орталық', address: 'пр. Лунного света, 2', address_kz: 'Ай сәулесі даңғылы, 2' }
        ],
        restaurants_expensive: [
            { name: 'Astoria', name_kz: 'Astoria', address: '9-й мкр, 1', address_kz: '9-шы ықшам аудан, 1' },
            { name: 'Zodiac', name_kz: 'Zodiac', address: '4-й мкр, 22', address_kz: '4-ші ықшам аудан, 22' },
            { name: 'Palace', name_kz: 'Palace', address: 'пр. Ленина, 15', address_kz: 'Ленин даңғылы, 15' }
        ],
        locations: [
            { n: 'Городской парк', n_kz: 'Қалалық саябақ', t: 'Семья, Активность', t_kz: 'Отбасы, Белсенділік' },
            { n: 'ДК «Горняк»', n_kz: '«Кенші» мәдениет үйі', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Зона отдыха «Серебряный бор»', n_kz: '«Күміс бор» демалыс аймағы', t: 'Уединение, Эко-туризм', t_kz: 'Оқшаулану, Эко-туризм' },
            { n: 'Центральный ТЦ', n_kz: 'Орталық СО', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Кафе «Трапеза»', n_kz: '«Трапеза» кафесі', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Мамыр немесе Қыркүйек. Солтүстік далаға тән экстремалды температурасыз кезең.',
        d_kz: 'Қызықты архитектурасы және белсенді өмірі бар индустриалды қала.',
        bestTime_kz: 'Мамыр немесе Қыркүйек. Солтүстік далаға тән экстремалды температурасыз кезең.'
    },
    {
        n: 'Байконур',
        n_kz: 'Байқоңыр',
        d: 'Уникальный город-космодром, место старта легендарных космических миссий.',
        d_kz: 'Бірегей қала-ғарыш айлағы, аңызға айналған ғарыш миссияларының бастау орны.',
        img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Центральная»', name_kz: '«Орталық» қонақ үйі', address: 'ул. Королева, 11', address_kz: 'Королев к-сі, 11' },
            { name: 'Отель «Поехали»', name_kz: '«Поехали» қонақ үйі', address: 'ул. Гагарина, 5', address_kz: 'Гагарин к-сі, 5' }
        ],
        hotels_expensive: [
            { name: 'Sputnik Hotel', name_kz: 'Спутник қонақ үйі', address: 'ул. Сейфуллина, 7', address_kz: 'Сейфуллин к-сі, 7' },
            { name: 'Cosmonaut Hotel', name_kz: 'Ғарышкер қонақ үйі', address: 'ул. Гагарина, 12', address_kz: 'Гагарин к-сі, 12' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Звездное небо»', name_kz: '«Жұлдызды аспан» асханасы', address: 'ул. Янгеля, 5', address_kz: 'Янгель к-сі, 5' },
            { name: 'Кафе «Восток»', name_kz: '«Восток» кафесі', address: 'пр. Королева, 15', address_kz: 'Королев даңғылы, 15' },
            { name: 'Донер «Союз»', name_kz: '«Союз» донері', address: 'ул. Гагарина, 10', address_kz: 'Гагарин к-сі, 10' }
        ],
        restaurants_expensive: [
            { name: 'Zvezdny', name_kz: 'Жұлдызды', address: 'ул. Королева, 11', address_kz: 'Королев к-сі, 11' },
            { name: 'Gagarin', name_kz: 'Гагарин', address: 'ул. Сейфуллина, 7', address_kz: 'Сейфуллин к-сі, 7' },
            { name: 'Soyuz-Apollo', name_kz: 'Союз-Аполлон', address: 'пр. Мира, 20', address_kz: 'Мир даңғылы, 20' }
        ],
        locations: [
            { n: 'Музей истории космодрома', n_kz: 'Ғарыш айлағы тарихы мұражайы', t: 'Культура, Города', t_kz: 'Мәдениет, Қалалар' },
            { n: 'Аллея Космонавтов', n_kz: 'Ғарышкерлер аллеясы', t: 'Уединение, Культура', t_kz: 'Оқшаулану, Мәдениет' },
            { n: 'Макет ракеты «Союз»', n_kz: '«Союз» зымыранының макеті', t: 'Города, Семья', t_kz: 'Қалалар, Отбасы' },
            { n: 'Набережная Сырдарьи', n_kz: 'Сырдария жағалауы', t: 'Море/Вода, Активность', t_kz: 'Теңіз/Су, Белсенділік' },
            { n: 'Ресторан «Звездное небо»', n_kz: '«Жұлдызды аспан» мейрамханасы', t: 'Гастрономия, Культура', t_kz: 'Гастрономия, Мәдениет' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: false, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель – Май или Сентябрь – Октябрь. Самые мягкие месяцы по погоде.',
        d_kz: 'Бірегей қала-ғарыш айлағы, аты аңызға айналған ғарыш миссияларының бастау орны.',
        bestTime_kz: 'Сәуір – Мамыр немесе Қыркүйек – Қазан. Ауа райы бойынша ең жұмсақ айлар.'
    },
    {
        n: 'Щучинск',
        n_kz: 'Щучинск',
        d: 'Курортный город среди сосновых лесов и гор, центр зимних видов спорта.',
        d_kz: 'Қарағайлы ормандар мен таулар арасындағы курортты қала, қысқы спорт түрлерінің орталығы.',
        img: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Щучинск»', name_kz: '«Щучинск» қонақ үйі', address: 'ул. Едомского, 22', address_kz: 'Едомский к-сі, 22' },
            { name: 'Хостел «Бурабай»', name_kz: '«Бурабай» хостелі', address: 'ул. Сейфуллина, 80', address_kz: 'Сейфуллин к-сі, 80' }
        ],
        hotels_expensive: [
            { name: 'Rixos Borovoe', name_kz: 'Rixos Бурабай', address: 'берег оз. Щучье', address_kz: 'Шортанды көлінің жағалауы' },
            { name: 'Park House', name_kz: 'Park House', address: 'юго-западный берег оз. Щучье', address_kz: 'Шортанды көлінің оңтүстік-батыс жағалауы' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Вкусный мир»', name_kz: '«Вкусный мир» асханасы', address: 'ул. Абылай Хана, 45', address_kz: 'Абылай хан к-сі, 45' },
            { name: 'Кафе «Домашнее»', name_kz: '«Домашнее» кафесі', address: 'ул. Ауэзова, 12', address_kz: 'Әуезов к-сі, 12' },
            { name: 'Донер «Street Food»', name_kz: 'Street Food донері', address: 'ул. Ленина, 2', address_kz: 'Ленин к-сі, 2' }
        ],
        restaurants_expensive: [
            { name: 'L’Olivo', name_kz: 'L’Olivo', address: 'отель Rixos Borovoe', address_kz: 'Rixos Бурабай қонақ үйі' },
            { name: 'Challet', name_kz: 'Challet', address: 'ул. Набережная, 1', address_kz: 'Жағалау к-сі, 1' },
            { name: 'Sultan', name_kz: 'Сұлтан', address: 'пр. Абая, 100', address_kz: 'Абай даңғылы, 100' }
        ],
        locations: [
            { n: 'Озеро Щучье', n_kz: 'Шортанды көлі', t: 'Море/Вода, Уединение', t_kz: 'Теңіз/Су, Оқшаулану' },
            { n: 'Лыжный трамплин', n_kz: 'Шаңғы трамплині', t: 'Активность, Горы', t_kz: 'Белсенділік, Таулар' },
            { n: 'Дендропарк', n_kz: 'Дендросаябақ', t: 'Эко-туризм, Семья', t_kz: 'Эко-туризм, Отбасы' },
            { n: 'ТЦ «Grand Plaza»', n_kz: 'Grand Plaza СО', t: 'Шоппинг, Города', t_kz: 'Шопинг, Қалалар' },
            { n: 'Ресторан Sultan', n_kz: 'Сұлтан мейрамханасы', t: 'Гастрономия', t_kz: 'Гастрономия' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: false, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Январь – Февраль. Отличное время для лыж и зимней рыбалки.',
        d_kz: 'Қарағайлы ормандар мен таулар арасындағы курортты қала, қысқы спорт түрлерінің орталығы.',
        bestTime_kz: 'Қаңтар – Ақпан. Шаңғы тебу және қысқы балық аулау үшін тамаша уақыт.'
    }
];

// Объект для хранения переводов
const translations = {
    'ru': {
        // General UI
        'app_name': 'ITSapar',
        'app_slogan': 'Ваше идеальное путешествие',
        'app_description': 'Умный подбор городов Казахстана для перелетов, поездок на поезде и авто.',
        'start_registration': 'Начать регистрацию',
        'login': 'Войти',
        'no_account': 'Нет аккаунта?',
        'create_account': 'Создать',
        'login_panel_title': 'Вход в панель',
        'username_label': 'Логин',
        'password_label': 'Пароль',
        'login_button': 'Войти',
        'login_error': 'Неверный логин или пароль',
        'register_panel_title': 'Регистрация',
        'register_button': 'Зарегистрироваться',
        'register_error': 'Ошибка регистрации: пользователь существует или неверные данные',
        'already_have_account': 'Уже есть аккаунт?',
        'full_name_label': 'ФИО',
        'age_label': 'Возраст',
        'budget_label': 'Бюджет на поездку (на человека)',
        'budget_low': 'до 50 000 ₸',
        'budget_medium': '50 000 - 200 000 ₸',
        'budget_high': 'от 200 000 ₸',
        'trip_type_label': 'Тип поездки',
        'trip_solo': 'Один',
        'trip_family': 'Семья',
        'trip_friends': 'Друзья',
        'next_button': 'Далее',
        'age_restriction_alert': 'Вы должны быть старше 18 лет, чтобы планировать межгородские путешествия.',
        'question_title_default': 'Вопрос',
        'question_desc_default': 'Описание вопроса',
        'yes_button': 'Да',
        'no_button': 'Нет',
        'results_title_ideal': '✨ Подходит вам',
        'results_title_popular': '🔥 Популярно',
        'results_no_match': 'К сожалению, мы не смогли подобрать идеальный город по вашим критериям. Попробуйте изменить ответы в опросе.',
        'retake_survey': 'Пройти опрос заново',
        'show_all_cities': '🔽 Показать все города',
        'hide_all_cities': '🔼 Скрыть список городов',
        'all_cities_title': 'Все города Казахстана',
        'all_cities_note': '(сайт выбрал этот город как идеальный для вас)',
        'city_details_hotels': '🏨 Рекомендуемые отели:',
        'city_details_locations': '🗺️ Места для посещения:',
        'city_details_restaurants': '🍽️ Где поесть:',
        'city_details_best_time': '📅 Лучшее время для посещения:',
        'data_refining': 'Данные уточняются',
        'details_button': 'Подробнее',
        'collapse_button': 'Свернуть',
        'results_ideal_header': '✨ Подходит вам',
        'results_popular_header': '🔥 Популярно',
        'retake_btn': 'Пройти заново',
        'home_btn': 'На главную',
        'register_title': 'Создать аккаунт',
        'login_link_text': 'Войти',
        'create_acc_link': 'Создать',
        'form_title': 'Расскажите о себе',
        'form_budget_label': 'Бюджет (₸)',
        'form_trip_type_label': 'Тип поездки',
        'form_trip_solo': 'Одиночная',
        'form_trip_family': 'Семейная',
        'form_trip_friends': 'С друзьями',
        'admin_panel_title': 'Пользователи системы',
        'admin_search_placeholder': 'Поиск по имени или логину...',
        'admin_analytics_button': '📊 Аналитика',
        'admin_logout_button': 'Выйти',
        'admin_table_fio_login': 'ФИО (Логин)',
        'admin_table_age': 'Возраст',
        'admin_table_budget': 'Бюджет',
        'admin_table_type': 'Тип',
        'admin_table_interests': 'Интересы',
        'admin_table_actions': 'Действия',
        'admin_table_no_data': 'Пользователей пока нет',
        'admin_table_not_filled': '<i>Анкета не заполнена</i>',
        'admin_table_budget_low_short': 'до 50к',
        'admin_table_budget_medium_short': '50к-200к',
        'admin_table_budget_high_short': 'от 200к',
        'admin_table_results_button': 'Результаты',
        'admin_table_delete_button': 'Удалить',
        'admin_analytics_title': '📈 Админ аналитика',
        'admin_analytics_back_button': 'Назад',
        'admin_analytics_total_users': 'Всего пользователей',
        'admin_analytics_avg_budget': 'Средний бюджет',
        'admin_analytics_interests_chart': 'Интересы пользователей',
        'admin_analytics_cities_chart': 'Популярные города (Топ)',
        'admin_analytics_active_surveys': 'Список активных анкет',
        'admin_analytics_loading': 'Загрузка данных...',
        'admin_analytics_error_access_denied': 'Доступ запрещен',
        'admin_analytics_error_server': 'Ошибка сервера',
        'admin_analytics_reload_data': 'Перезагрузить данные',
        'budget_formula_title': '🧮 Как считается бюджет?',
        'budget_formula_desc1': 'Поскольку пользователи выбирают диапазон, мы присваиваем каждой категории числовой вес:',
        'budget_formula_low': '<strong>"До 50 000 ₸":</strong> 50,000 ₸',
        'budget_formula_medium': '<strong>"50 000 - 200 000 ₸":</strong> 125,000 ₸',
        'budget_formula_high': '<strong>"От 200 000 ₸":</strong> 250,000 ₸',
        'budget_formula_formula': '<strong>Формула:</strong><br>(Сумма всех весов) ÷ (Кол-во заполненных анкет)',
        'budget_formula_understand': 'Понятно',
        'policy_title': 'Соглашение и защита данных',
        'policy_p1': 'Добро пожаловать в ITSapar. Используя сервис, вы подтверждаете:',
        'policy_p2': 'Настоящим подтверждается согласие пользователя с условиями эксплуатации сервиса ITSapar:',
        'policy_li1': 'Вам исполнилось <strong>18 лет</strong>.',
        'policy_li2': 'Данные используются только для подбора маршрута.',
        'policy_li3': 'Вся информация хранится локально в вашем браузере.',
        'policy_li4': 'Вы обязуетесь не копировать контент (Закон РК «Об авторском праве»).',
        'policy_li5': '<strong>Возрастной ценз:</strong> Доступ к функционалу сервиса разрешен исключительно лицам, достигшим 18-летнего возраста.',
        'policy_li6': '<strong>Конфиденциальность данных:</strong> Информация обрабатывается только для формирования рекомендаций и хранится локально (LocalStorage).',
        'policy_li7': '<strong>Кибербезопасность:</strong> Категорически запрещены любые формы несанкционированного доступа, попытки взлома, декомпиляции кода или нарушения целостности системы.',
        'policy_li8': '<strong>Авторское право:</strong> Весь контент защищен законодательством РК «Об авторском праве и смежных правах». Копирование запрещено.',
        'policy_li9': '<strong>Юридическая ответственность:</strong> Незаконные действия в отношении ресурса влекут ответственность согласно Уголовному кодексу РК.',
        'policy_li10': '<strong>Отказ от ответственности:</strong> Сервис носит справочный характер; окончательный выбор маршрута остается за пользователем.',
        'policy_checkbox_label': 'Я ознакомлен с условиями Соглашения и подтверждаю возраст 18+',
        'policy_accept_button': 'Принять и продолжить',
        'chat_title': 'AI помощник ITSapar',
        'chat_close': '&times;',
        'chat_initial_message': 'Привет! Я помогу выбрать город. Что вас интересует?',
        'chat_option_mountains': 'Горы',
        'chat_option_sea': 'Море',
        'chat_option_city': 'Город',
        'chat_option_culture': 'Культура',
        'chat_option_activity': 'Активный отдых',
        'chat_option_show_more': 'Показать ещё',
        'chat_option_reset': 'Сбросить выбор',
        'chat_response_mountains': 'Рекомендую Алматы — отличное место для горного отдыха и походов на Шымбулак.',
        'chat_response_sea': 'Актау — лучший вариант для отдыха у моря в Казахстане на Каспийском побережье.',
        'chat_response_city': 'Астана — современный мегаполис с уникальной архитектурой и множеством музеев.',
        'chat_response_culture': 'Туркестан подойдёт для глубокого культурного и исторического путешествия.',
        'chat_response_activity': 'Алматы или Шымкент — отличные варианты для тех, кто не любит сидеть на месте.',
        'chat_response_default': 'Интересный выбор! Хотите узнать больше?',
        'chat_disclaimer': 'AI помощник работает на основе заранее заданных сценариев. Он не подключён к интернету. Рекомендуется проверять важную информацию.',
        'admin_delete_confirm_prompt': 'Внимание! Вы пытаетесь удалить пользователя. Для подтверждения операции введите пароль администратора:',
        'admin_delete_success': 'Пользователь {username} успешно удален из базы данных.',
        'admin_delete_error_server': 'Ошибка при связи с сервером.',
        'admin_delete_wrong_password': 'Ошибка! Неверный пароль администратора. Операция отменена.',
        'admin_clear_all_prompt': 'Введите пароль администратора для ПОЛНОЙ очистки:',
        'admin_clear_all_success': 'Система полностью очищена.',
        'admin_clear_all_wrong_password': 'Неверный пароль.',
        'server_error_alert': "Сервер не запущен. Запустите 'node server.js'",
        'admin_table_error_msg': 'Ошибка сервера (500)',
        'admin_table_access_denied': 'Доступ запрещен',
        'admin_table_reload_data': 'Перезагрузить данные',
        'admin_table_no_users': 'Пользователей пока нет',
        'admin_table_fio_not_filled': '<i>Анкета не заполнена</i>',
        'admin_table_age_years': 'лет',
        'admin_table_recommendations_for': 'Для пользователя {fullName} идеально подходят: {cities}',
        'admin_table_no_survey_filled': 'Пользователь еще не заполнил анкету или не прошел свайп-опрос.',
        'admin_table_budget_low_short': 'до 50к',
        'admin_table_budget_medium_short': '50к-200к',
        'admin_table_budget_high_short': 'от 200к',
        'admin_table_recommendations_count': 'Кол-во рекомендаций'
    },
    'kz': {
        // General UI
        'app_name': 'ITSapar',
        'app_slogan': 'Сіздің тамаша саяхатыңыз',
        'app_description': 'Қазақстан қалаларын ұшақ, пойыз және автокөлікпен саяхаттау үшін ақылды таңдау.',
        'start_registration': 'Тіркелуді бастау',
        'login': 'Кіру',
        'no_account': 'Аккаунтыңыз жоқ па?',
        'create_account': 'Жасау',
        'login_panel_title': 'Панельге кіру',
        'username_label': 'Логин',
        'password_label': 'Құпия сөз',
        'login_button': 'Кіру',
        'login_error': 'Қате логин немесе құпия сөз',
        'register_panel_title': 'Тіркелу',
        'register_button': 'Тіркелу',
        'register_error': 'Тіркеу қатесі: пайдаланушы бар немесе деректер қате',
        'already_have_account': 'Аккаунтыңыз бар ма?',
        'full_name_label': 'Аты-жөні',
        'age_label': 'Жасы',
        'budget_label': 'Саяхат бюджеті (бір адамға)',
        'budget_low': '50 000 ₸ дейін',
        'budget_medium': '50 000 - 200 000 ₸',
        'budget_high': '200 000 ₸ жоғары',
        'trip_type_label': 'Саяхат түрі',
        'trip_solo': 'Жалғыз',
        'trip_family': 'Отбасы',
        'trip_friends': 'Достар',
        'next_button': 'Келесі',
        'age_restriction_alert': 'Қалааралық саяхаттарды жоспарлау үшін 18 жастан асқан болуыңыз керек.',
        'question_title_default': 'Сұрақ',
        'question_desc_default': 'Сұрақ сипаттамасы',
        'yes_button': 'Иә',
        'no_button': 'Жоқ',
        'results_title_ideal': '✨ Сізге сәйкес келеді',
        'results_title_popular': '🔥 Танымал',
        'results_no_match': 'Өкінішке орай, біз сіздің критерийлеріңіз бойынша тамаша қаланы таба алмадық. Сауалнамадағы жауаптарды өзгертіп көріңіз.',
        'retake_survey': 'Сауалнаманы қайта өту',
        'show_all_cities': '🔽 Барлық қалаларды көрсету',
        'hide_all_cities': '🔼 Қалалар тізімін жасыру',
        'all_cities_title': 'Қазақстанның барлық қалалары',
        'all_cities_note': '(сайт бұл қаланы сіз үшін тамаша деп таңдады)',
        'city_details_hotels': '🏨 Ұсынылатын қонақүйлер:',
        'city_details_locations': '🗺️ Баруға болатын орындар:',
        'city_details_restaurants': '🍽️ Тамақтану орындары:',
        'city_details_best_time': '📅 Бару үшін ең жақсы уақыт:',
        'data_refining': 'Деректер нақтылануда',
        'details_button': 'Толығырақ',
        'collapse_button': 'Жиыру',
        'results_ideal_header': '✨ Сізге сәйкес келеді',
        'results_popular_header': '🔥 Танымал',
        'retake_btn': 'Сауалнаманы қайта өту',
        'home_btn': 'Басты бетке',
        'register_title': 'Тіркелу',
        'login_link_text': 'Кіру',
        'create_acc_link': 'Жасау',
        'form_title': 'Өзіңіз туралы айтып беріңіз',
        'form_budget_label': 'Бюджет (₸)',
        'form_trip_type_label': 'Саяхат түрі',
        'form_trip_solo': 'Жалғыз',
        'form_trip_family': 'Отбасылық',
        'form_trip_friends': 'Достармен',
        'admin_panel_title': 'Жүйе пайдаланушылары',
        'admin_search_placeholder': 'Аты-жөні немесе логин бойынша іздеу...',
        'admin_analytics_button': '📊 Аналитика',
        'admin_logout_button': 'Шығу',
        'admin_table_fio_login': 'Аты-жөні (Логин)',
        'admin_table_age': 'Жасы',
        'admin_table_budget': 'Бюджет',
        'admin_table_type': 'Түрі',
        'admin_table_interests': 'Қызығушылықтар',
        'admin_table_actions': 'Әрекеттер',
        'admin_table_no_data': 'Пайдаланушылар әлі жоқ',
        'admin_table_not_filled': '<i>Сауалнама толтырылмаған</i>',
        'admin_table_budget_low_short': '50к дейін',
        'admin_table_budget_medium_short': '50к-200к',
        'admin_table_budget_high_short': '200к жоғары',
        'admin_table_results_button': 'Нәтижелер',
        'admin_table_delete_button': 'Жою',
        'admin_analytics_title': '📈 Әкімші аналитикасы',
        'admin_analytics_back_button': 'Артқа',
        'admin_analytics_total_users': 'Барлық пайдаланушылар',
        'admin_analytics_avg_budget': 'Орташа бюджет',
        'admin_analytics_interests_chart': 'Пайдаланушылардың қызығушылықтары',
        'admin_analytics_cities_chart': 'Танымал қалалар (Топ)',
        'admin_analytics_active_surveys': 'Белсенді сауалнамалар тізімі',
        'admin_analytics_loading': 'Деректер жүктелуде...',
        'admin_analytics_error_access_denied': 'Рұқсат жоқ',
        'admin_analytics_error_server': 'Сервер қатесі',
        'admin_analytics_reload_data': 'Деректерді қайта жүктеу',
        'budget_formula_title': '🧮 Бюджет қалай есептеледі?',
        'budget_formula_desc1': 'Пайдаланушылар диапазонды таңдағандықтан, біз әр санатқа сандық салмақ береміз:',
        'budget_formula_low': '<strong>"50 000 ₸ дейін":</strong> 50,000 ₸',
        'budget_formula_medium': '<strong>"50 000 - 200 000 ₸":</strong> 125,000 ₸',
        'budget_formula_high': '<strong>"200 000 ₸ жоғары":</strong> 250,000 ₸',
        'budget_formula_formula': '<strong>Формула:</strong><br>(Барлық салмақтардың сомасы) ÷ (Толтырылған сауалнамалар саны)',
        'budget_formula_understand': 'Түсінікті',
        'policy_title': 'Келісім және деректерді қорғау',
        'policy_p1': 'ITSapar-ға қош келдіңіз. Қызметті пайдалана отырып, сіз растайсыз:',
        'policy_p2': 'Осы арқылы пайдаланушы ITSapar қызметін пайдалану шарттарымен келісетінін растайды:',
        'policy_li1': 'Сіз <strong>18 жастан</strong> асқансыз.',
        'policy_li2': 'Деректер тек маршрутты таңдау үшін пайдаланылады.',
        'policy_li3': 'Барлық ақпарат браузеріңізде жергілікті жерде сақталады.',
        'policy_li4': 'Сіз контентті көшірмеуге міндеттенесіз (ҚР «Авторлық құқық туралы» Заңы).',
        'policy_li5': '<strong>Жас шектеуі:</strong> Қызмет функционалына тек 18 жасқа толған тұлғаларға рұқсат етіледі.',
        'policy_li6': '<strong>Деректер құпиялылығы:</strong> Ақпарат тек ұсыныстарды қалыптастыру үшін өңделеді және жергілікті жерде сақталады (LocalStorage).',
        'policy_li7': '<strong>Киберқауіпсіздік:</strong> Рұқсатсыз кірудің, бұзу әрекеттерінің, кодты декомпиляциялаудың немесе жүйенің тұтастығын бұзудың кез келген түріне қатаң тыйым салынады.',
        'policy_li8': '<strong>Авторлық құқық:</strong> Барлық контент ҚР «Авторлық құқық және сабақтас құқықтар туралы» заңнамасымен қорғалған. Көшіруге тыйым салынады.',
        'policy_li9': '<strong>Заңды жауапкершілік:</strong> Ресурстың заңсыз әрекеттері ҚР Қылмыстық кодексіне сәйкес жауапкершілікке әкеп соғады.',
        'policy_li10': '<strong>Жауапкершіліктен бас тарту:</strong> Қызмет анықтамалық сипатта болады; маршрутты соңғы таңдау пайдаланушыда қалады.',
        'policy_checkbox_label': 'Мен Келісім шарттарымен таныстым және 18 жастан асқанымды растаймын',
        'policy_accept_button': 'Қабылдау және жалғастыру',
        'chat_title': 'ITSapar AI көмекшісі',
        'chat_close': '&times;',
        'chat_initial_message': 'Сәлем! Мен қала таңдауға көмектесемін. Сізді не қызықтырады?',
        'chat_option_mountains': 'Таулар',
        'chat_option_sea': 'Теңіз',
        'chat_option_city': 'Қала',
        'chat_option_culture': 'Мәдениет',
        'chat_option_activity': 'Белсенді демалыс',
        'chat_option_show_more': 'Көбірек көрсету',
        'chat_option_reset': 'Таңдауды қалпына келтіру',
        'chat_response_mountains': 'Алматыны ұсынамын — таулы демалыс және Шымбұлаққа жорықтар үшін тамаша орын.',
        'chat_response_sea': 'Ақтау — Қазақстанда Каспий теңізі жағалауында теңіз демалысы үшін ең жақсы нұсқа.',
        'chat_response_city': 'Астана — бірегей архитектурасы және көптеген мұражайлары бар заманауи мегаполис.',
        'chat_response_culture': 'Түркістан терең мәдени және тарихи саяхат үшін қолайлы.',
        'chat_response_activity': 'Алматы немесе Шымкент — орнында отыруды ұнатпайтындар үшін тамаша нұсқалар.',
        'chat_response_default': 'Қызықты таңдау! Көбірек білгіңіз келе ме?',
        'chat_disclaimer': 'AI көмекшісі алдын ала белгіленген сценарийлер негізінде жұмыс істейді. Ол интернетке қосылмаған. Маңызды ақпаратты тексеру ұсынылады.',
        'admin_delete_confirm_prompt': 'Назар аударыңыз! Сіз пайдаланушыны жоюға тырысып жатырсыз. Операцияны растау үшін әкімші құпия сөзін енгізіңіз:',
        'admin_delete_success': '{username} пайдаланушысы дерекқордан сәтті жойылды.',
        'admin_delete_error_server': 'Сервермен байланыс қатесі.',
        'admin_delete_wrong_password': 'Қате! Әкімші құпия сөзі қате. Операция тоқтатылды.',
        'admin_clear_all_prompt': 'ТОЛЫҚ тазалау үшін әкімші құпия сөзін енгізіңіз:',
        'admin_clear_all_success': 'Жүйе толығымен тазаланды.',
        'admin_clear_all_wrong_password': 'Қате құпия сөз.',
        'server_error_alert': "Сервер іске қосылмаған. 'node server.js' іске қосыңыз",
        'admin_table_error_msg': 'Сервер қатесі (500)',
        'admin_table_access_denied': 'Рұқсат жоқ',
        'admin_table_reload_data': 'Деректерді қайта жүктеу',
        'admin_table_no_users': 'Пайдаланушылар әлі жоқ',
        'admin_table_fio_not_filled': '<i>Сауалнама толтырылмаған</i>',
        'admin_table_age_years': 'жас',
        'admin_table_recommendations_for': '{fullName} пайдаланушысы үшін келесі қалалар тамаша сәйкес келеді: {cities}',
        'admin_table_no_survey_filled': 'Пайдаланушы әлі сауалнаманы толтырмаған немесе свайп-сауалнамадан өтпеген.',
        'admin_table_budget_low_short': '50к дейін',
        'admin_table_budget_medium_short': '50к-200к',
        'admin_table_budget_high_short': '200к жоғары',
        'admin_table_recommendations_count': 'Ұсыныстар саны'
    }
};

let currentLang = localStorage.getItem('lang') || 'ru';

// Функция для установки языка и обновления всех текстовых элементов
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Обновляем статический текст с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    // Обновляем плейсхолдеры
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Исправляем логику кнопки "Показать все города" через ComputedStyle
    const showAllCitiesBtn = document.getElementById('showAllCitiesBtn');
    if (showAllCitiesBtn) {
        const allCitiesContainer = document.getElementById('allCitiesContainer');
        const isHidden = !allCitiesContainer || window.getComputedStyle(allCitiesContainer).display === 'none';
        showAllCitiesBtn.innerText = isHidden ? translations[currentLang].show_all_cities : translations[currentLang].hide_all_cities;
    }

    // Мягкое обновление динамического контента (с проверкой на null)
    if (document.getElementById('adminTableBody')) renderAdminTable(document.getElementById('adminSearch')?.value || '');
    if (document.getElementById('analyticsContainer') && typeof loadAnalytics === 'function') {
        // Проверяем, что элементы для аналитики существуют перед вызовом loadAnalytics
        if (document.getElementById('totalUsers')) loadAnalytics();
    }
    if (document.getElementById('swipeCard')) renderSwipe();
    if (document.getElementById('resultsList')) showResults();

    // Обновляем чат, если он открыт или если есть история
    if (document.getElementById('chatWindow') && (document.getElementById('chatWindow').style.display === 'flex' || localStorage.getItem('chatHistory'))) {
        document.getElementById('chatMessages').innerHTML = '';
        loadChatHistory();
    }
}

// Функция для внедрения переключателя языка
function injectLanguageToggle() {
    if (document.getElementById('languageToggleContainer')) return;

    const toggleContainer = document.createElement('div');
    toggleContainer.id = 'languageToggleContainer';
    toggleContainer.className = 'language-toggle-container';
    toggleContainer.innerHTML = `
        <span class="lang-label">РУС</span>
        <label class="language-toggle-switch">
            <input type="checkbox" id="langToggleCheckbox">
            <span class="language-slider"></span>
        </label>
        <span class="lang-label">ҚАЗ</span>
    `;
    document.body.appendChild(toggleContainer);

    const checkbox = document.getElementById('langToggleCheckbox');
    if (currentLang === 'kz') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', (e) => {
        const newLang = e.target.checked ? 'kz' : 'ru';
        setLanguage(newLang);
    });
}

// --- Глобальные функции (объявлены здесь, чтобы быть доступными везде) ---

// Функция для плавного перехода
function navigateWithTransition(url) {
    document.body?.classList.remove('page-loaded');
    document.body?.classList.add('page-exit');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

// --- Инициализация ---
// Мы убираем opacity: 0 из CSS и используем JS для управления видимостью
document.addEventListener('DOMContentLoaded', () => {
    console.log("Приложение инициализируется...");
    // Гарантируем видимость
    document.body?.classList.add('page-loaded');

    try {
        initTheme();
        injectLanguageToggle(); // Внедряем переключатель языка
        setLanguage(currentLang); // Устанавливаем начальный язык
        injectChat(); // Добавляем вызов функции чата
        initApp();
        console.log("Приложение успешно запущено");
    } catch (error) {
        console.error("Критическая ошибка при запуске:", error);
    }
});

// Исправление "белого экрана" при навигации назад/вперед (bfcache)
window.addEventListener('pageshow', (event) => {
    if (document.body) {
        document.body.classList.remove('page-exit');
        document.body.classList.add('page-loaded');
    }
});

// --- Логика переключения темы ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    injectThemeToggle(savedTheme);
}

function injectThemeToggle(currentTheme) {
    if (document.getElementById('themeToggle')) return;
    
    const btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.className = 'theme-toggle';
    btn.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
    btn.title = 'Переключить тему';
    
    btn.onclick = () => {
        const html = document.documentElement;
        const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        btn.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
    };
    
    document.body.appendChild(btn);
}

function injectPolicy(targetUrl = null) {
    const wrapper = document.getElementById('policyWrapper');
    if (!wrapper) return; // Если на странице нет контейнера, ничего не делаем

    // Мы убрали проверку localStorage.getItem('policyAccepted'), 
    // теперь окно будет создаваться при каждом заходе на страницу.
    wrapper.innerHTML = `
        <div id="policyModal" class="modal-overlay" style="display: flex;">
            <div class="card modal-card">
                <h2 data-i18n="policy_title"></h2>
                <div class="policy-text">
                    <p data-i18n="policy_p1"></p>
                    <p data-i18n="policy_p2"></p>
                    <ul>
                        <li data-i18n="policy_li1"></li>
                        <li data-i18n="policy_li2"></li>
                        <li data-i18n="policy_li3"></li>
                        <li data-i18n="policy_li4"></li>
                        <li data-i18n="policy_li5"></li>
                        <li data-i18n="policy_li6"></li>
                        <li data-i18n="policy_li7"></li>
                        <li data-i18n="policy_li8"></li>
                        <li data-i18n="policy_li9"></li>
                        <li data-i18n="policy_li10"></li>
                    </ul>
                </div>
                <div class="policy-check">
                    <input type="checkbox" id="policyCheckbox">
                    <label for="policyCheckbox" data-i18n="policy_checkbox_label"></label>
                </div>
                <button id="acceptPolicy" class="btn btn-primary full-width" disabled data-i18n="policy_accept_button"></button>
            </div>
        </div>
    `;
    setLanguage(currentLang); // Гарантируем перевод сразу после вставки HTML

    const btn = document.getElementById('acceptPolicy');
    const chk = document.getElementById('policyCheckbox');
    
    chk.addEventListener('change', (e) => btn.disabled = !e.target.checked);
    btn.addEventListener('click', () => {
        localStorage.setItem('policyAccepted', 'true'); // Запоминаем, что пользователь принял
        document.getElementById('policyModal').style.display = 'none';
    });
}

// --- AI Чат Логика ---
function injectChat() {
    if (document.getElementById('aiChatWidget')) return;

    const chatHtml = `
        <div id="aiChatWidget" class="chat-widget">
            <button class="chat-btn" id="toggleChat">💬</button>
            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <h4>AI помощник ITSapar</h4>
                    <button id="closeChat" style="background:none; border:none; color:white; cursor:pointer; font-size:1.2rem;">&times;</button>
                </div>
                <div class="chat-messages" id="chatMessages"></div>
                <div class="chat-options" id="chatOptions"></div>
                <div class="chat-disclaimer">
                    <span data-i18n="chat_disclaimer"></span>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatHtml);

    const windowEl = document.getElementById('chatWindow');
    const messagesEl = document.getElementById('chatMessages');
    const optionsEl = document.getElementById('chatOptions');

    document.getElementById('toggleChat').onclick = () => {
        windowEl.style.display = windowEl.style.display === 'flex' ? 'none' : 'flex';
        if (messagesEl.children.length === 0) loadChatHistory();
    };
    document.getElementById('closeChat').onclick = () => windowEl.style.display = 'none';

    function getChatResponses() {
        return { // Dynamic responses based on current language
            [translations[currentLang].chat_option_mountains]: translations[currentLang].chat_response_mountains,
            [translations[currentLang].chat_option_sea]: translations[currentLang].chat_response_sea,
            [translations[currentLang].chat_option_city]: translations[currentLang].chat_response_city,
            [translations[currentLang].chat_option_culture]: translations[currentLang].chat_response_culture,
            [translations[currentLang].chat_option_activity]: translations[currentLang].chat_response_activity
        };
    }

    function addMessage(text, sender) {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble bubble-${sender}`;
        bubble.innerText = text;
        messagesEl.appendChild(bubble);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        saveChatHistory();
    }

    function renderOptions(type = 'main') {
        optionsEl.innerHTML = '';
        const items = type === 'main'
            ? [translations[currentLang].chat_option_mountains, translations[currentLang].chat_option_sea, translations[currentLang].chat_option_city, translations[currentLang].chat_option_culture, translations[currentLang].chat_option_activity]
            : [translations[currentLang].chat_option_show_more, translations[currentLang].chat_option_reset]; // Use translated options
        
        items.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-opt-btn';
            btn.innerText = opt;
            btn.onclick = () => handleOption(opt);
            optionsEl.appendChild(btn);
        });
    }

    function handleOption(opt) {
        const resetLabel = translations[currentLang].chat_option_reset;
        const showMoreLabel = translations[currentLang].chat_option_show_more;

        if (opt === resetLabel) {
            messagesEl.innerHTML = '';
            localStorage.removeItem('chatHistory');
            addMessage(translations[currentLang].chat_initial_message, "ai");
            renderOptions('main'); return;
        }
        if (opt === showMoreLabel) {
            renderOptions('main'); return;
        }

        addMessage(opt, "user");
        
        // Имитация задержки AI
        setTimeout(() => {
            const response = getChatResponses()[opt] || translations[currentLang].chat_response_default; // Get response based on current language
            addMessage(response, "ai");
            renderOptions('secondary');
        }, 1500);
    }

    function saveChatHistory() {
        const history = Array.from(messagesEl.children).map(m => ({
            text: m.innerText,
            sender: m.classList.contains('bubble-user') ? 'user' : 'ai'
        }));
        localStorage.setItem('chatHistory', JSON.stringify(history));
    }

    function loadChatHistory() {
        const saved = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        if (saved.length > 0) {
            saved.forEach((m, idx) => {
                const bubble = document.createElement('div');
                bubble.className = `chat-bubble bubble-${m.sender}`;
                // Переводим приветствие, если оно первое в истории
                // ИЛИ если это сообщение ИИ и оно совпадает с начальным сообщением на другом языке
                if (idx === 0 && m.sender === 'ai' && m.text !== translations[currentLang].chat_initial_message) {
                    bubble.innerText = translations[currentLang].chat_initial_message;
                } else if (m.sender === 'ai' && Object.values(translations['ru']).includes(m.text) && m.text !== translations[currentLang].chat_initial_message) {
                    // Если это один из стандартных ответов ИИ, пытаемся его перевести
                    const originalKey = Object.keys(translations['ru']).find(key => translations['ru'][key] === m.text);
                    bubble.innerText = translations[currentLang][originalKey] || m.text;
                } else if (idx === 0 && m.sender === 'ai') { // Если это первое сообщение ИИ, но уже на нужном языке
                    bubble.innerText = translations[currentLang].chat_initial_message;
                } else {
                    bubble.innerText = m.text;
                }
                messagesEl.appendChild(bubble);
            });
            messagesEl.scrollTop = messagesEl.scrollHeight;
            renderOptions('main');
        } else {
            addMessage(translations[currentLang].chat_initial_message, "ai");
            renderOptions('main');
        }
    }
}

function initApp() {
    // Перехват кликов по всем ссылкам
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#') || link.getAttribute('target')) return;

            e.preventDefault();

            if (href === 'register.html' || href === 'login.html') {
                // Навигация будет после принятия политики
                injectPolicy();
                setTimeout(() => navigateWithTransition(href), 100); // Небольшая задержка для анимации
            } else {
                navigateWithTransition(href);
            }
        });
    });

    // Регистрация
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const u = document.getElementById('regUsername').value;
            const p = document.getElementById('regPassword').value;

            try {
                const response = await fetch('/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: u, password: p })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token); // Сохраняем токен сразу!
                    localStorage.setItem('currentUser', data.username);
                    navigateWithTransition('form.html');
                } else {
                    const errorDiv = document.getElementById('regError');
                    if (errorDiv) {
                        errorDiv.innerText = "Ошибка регистрации: пользователь существует или неверные данные";
                        errorDiv.style.display = 'block'; // This text should also be translated
                    }
                }
            } catch (error) {
                console.error("Ошибка сервера:", error);
                alert(translations[currentLang].server_error_alert);
            }
        });
    }

    // Форма пользователя
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userData = {
                age: parseInt(document.getElementById('age').value),
            };
            if (userData.age < 18) {
                alert(translations[currentLang].age_restriction_alert);
                return; // Прерываем выполнение функции
            }
            Object.assign(userData, { // Используем Object.assign для добавления остальных полей
                fullName: document.getElementById('fullName').value,
                // age уже есть
                budget: document.getElementById('budget').value,
                tripType: document.getElementById('tripType').value,
                answers: {}
            });
            // Сохраняем данные анкеты в localStorage, чтобы они не пропадали при перезагрузке
            localStorage.setItem('survey_' + localStorage.getItem('currentUser'), JSON.stringify(userData));
            sessionStorage.setItem('tempSurveyData', JSON.stringify(userData));
            navigateWithTransition('swipe.html');
        });
    }

    // Свайп логика
    const swipeCard = document.getElementById('swipeCard');
    if (swipeCard) {
        renderSwipe();
        
        // Добавляем поддержку жестов для телефонов
        let touchStartX = 0;
        let touchEndX = 0;

        swipeCard.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        swipeCard.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleGesture();
        }, false);

        function handleGesture() {
            const threshold = 50; // Минимальная дистанция для свайпа
            if (touchEndX < touchStartX - threshold) {
                // Свайп влево (Нет)
                handleSwipe(false);
            } else if (touchEndX > touchStartX + threshold) {
                // Свайп вправо (Да)
                handleSwipe(true);
            }
        }
    }

    // Результаты
    if (document.getElementById('resultsList')) {
        showResults();
    }

    // Логин
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;
            const loginError = document.getElementById('loginError');
            
            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: u, password: p })
                });

                if (response.ok) {
                    const data = await response.json();
                    
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('currentUser', u);

                    if (data.isAdmin) {
                        localStorage.setItem('isAdmin', 'true');
                        navigateWithTransition('admin.html');
                    } else {
                        localStorage.setItem('isAdmin', 'false');
                        const hasSurvey = localStorage.getItem('survey_' + u);
                        navigateWithTransition(hasSurvey ? 'result.html' : 'form.html');
                    }
                } else {
                    loginError.innerText = 'Неверный логин или пароль';
                    loginError.style.display = 'block'; // This text should also be translated
                }
            } catch (error) {
                console.error("Ошибка сервера:", error);
                alert(translations[currentLang].server_error_alert);
            }
        });
    }

    // Админка
    if (document.getElementById('adminTableBody')) {
        const token = localStorage.getItem('token');
        fetch('/admin/verify', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(res => {
            if (!res.ok) {
                localStorage.removeItem('isAdmin');
                navigateWithTransition('login.html');
            } else {
                // Добавляем небольшую задержку для гарантии отрисовки после очистки стилей
                setTimeout(() => renderAdminTable(), 100); // Ensure renderAdminTable is called after auth
            }
        })
        .catch(() => navigateWithTransition('login.html'));

        // Слушатель для поиска
        document.getElementById('adminSearch')?.addEventListener('input', (e) => {
            renderAdminTable(e.target.value);
        });
    }

    // Логика кнопки "Пройти заново"
    const retakeBtn = document.getElementById('retakeBtn');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            const currentUsername = localStorage.getItem('currentUser');
            // Очищаем локальные данные опроса для этого пользователя
            localStorage.removeItem('survey_' + currentUsername);
            sessionStorage.removeItem('tempSurveyData'); // Очищаем временные данные сессии
            navigateWithTransition('form.html');
        });
    }
}

// --- Функции для свайпов ---
let currentStep = 0;
function renderSwipe() {
    if (currentStep >= questions.length) {
            saveAndFinish(); // This will navigate away, so no need to update text here
            return;
    }
    const q = questions[currentStep]; // Use translated titles/descriptions
    document.getElementById('questionTitle').innerText = currentLang === 'kz' ? q.title_kz : q.title_ru;
    document.getElementById('questionDesc').innerText = currentLang === 'kz' ? q.desc_kz : q.desc_ru;
    document.getElementById('progress').style.width = ((currentStep + 1) / questions.length) * 100 + '%';
}

function handleSwipe(answer) {
    let surveyData = JSON.parse(sessionStorage.getItem('tempSurveyData'));
    surveyData.answers[questions[currentStep].id] = answer;
    sessionStorage.setItem('tempSurveyData', JSON.stringify(surveyData));
    currentStep++;
    renderSwipe();
}

async function saveAndFinish() {
    let surveyData = JSON.parse(sessionStorage.getItem('tempSurveyData'));
    let currentUsername = localStorage.getItem('currentUser');

    // Сохраняем данные локально с привязкой к имени пользователя
    localStorage.setItem('survey_' + currentUsername, JSON.stringify(surveyData));

    // Отправляем на сервер для аналитики и популярности
    const recommended = getRecommendedCities(surveyData);
    surveyData.recommendedCities = recommended.map(c => c.n);

    await fetch('/user/survey', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(surveyData)
    });

    navigateWithTransition('result.html');
}

// Вспомогательная функция для расчета рекомендаций
function getRecommendedCities(survey) {
    if (!allCities || allCities.length === 0) return [];
    
    const userAnswers = survey.answers;
    // Проверяем, что userAnswers существует и является объектом
    if (!userAnswers || typeof userAnswers !== 'object') return [];
    const userBudget = survey.budget || 'medium'; // Бюджет из анкеты

    const answersArr = Object.values(userAnswers);
    const allYes = answersArr.length === 10 && answersArr.every(v => v === true);
    const allNo = answersArr.length === 10 && answersArr.every(v => v === false);

    // Спец-случай: Все "Да" (Алматы и Боровое подходят для любого бюджета)
    if (allYes) {
        return allCities.filter(c => c.n === 'Алматы' || c.n === 'Боровое');
    }

    // Спец-случай: Все "Нет" (Промышленные города)
    if (allNo) {
        return allCities.filter(c => c.n === 'Экибастуз' || c.n === 'Рудный');
    }

    // 1. ФИЛЬТРАЦИЯ ПО БЮДЖЕТУ (АНКЕТА)
    const budgetFilteredCities = allCities.filter(city => city.budget_suitability[userBudget]);

    // 2. ОЦЕНКА ПО ИНТЕРЕСАМ (ОПРОС)
    let scoredCities = budgetFilteredCities.map(city => {
        let matches = 0;
        for (const key in userAnswers) {
            if (userAnswers[key] === true && city.tags[key] === true) {
                matches++;
            }
        }
        return { city, matches };
    });

    scoredCities.sort((a, b) => b.matches - a.matches);
    let recommendedCities = scoredCities.filter(item => item.matches >= 4).map(item => item.city);

    // Гарантируем 2 рекомендации, добавляя универсальные варианты подходящего бюджета
    if (recommendedCities.length < 2) {
        const backups = allCities.filter(c => (c.n === 'Боровое' || c.n === 'Алматы' || c.n === 'Астана') && c.budget_suitability[userBudget]);
        backups.forEach(city => {
            if (recommendedCities.length < 2 && !recommendedCities.some(rc => rc.n === city.n)) {
                recommendedCities.push(city);
            }
        });
    }

    return recommendedCities.slice(0, 2);
}

// --- Логика рекомендаций ---
async function showResults() {
    const currentUsername = localStorage.getItem('currentUser');
    const surveyData = JSON.parse(localStorage.getItem('survey_' + currentUsername));

    if (!surveyData) {
        navigateWithTransition('index.html');
        return;
    }
    const resDiv = document.getElementById('resultsList');
    const recommendedCities = getRecommendedCities(surveyData);

    resDiv.innerHTML = ''; // Очистка перед рендером
    if (recommendedCities.length === 0) {
        resDiv.innerHTML = `<p>${translations[currentLang].results_no_match}</p>`;
        const borovoe = allCities.find(c => c.n === 'Боровое');
        if (borovoe) {
            renderCityCard(borovoe, resDiv);
        }
    } else {
        recommendedCities.forEach(c => renderCityCard(c, resDiv));
    }

    // Загрузка популярных городов
    const popDiv = document.getElementById('popularList');
    if (popDiv) {
        try {
            const response = await fetch('/api/popular-cities', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            const popularNames = await response.json();
            
            popDiv.innerHTML = '';
            popularNames.forEach(name => {
                const cityObj = allCities.find(city => city.n === name);
                if (cityObj) {
                    // Отрисовываем карточку (без пометки "выбрано для вас", так как это общая статистика)
                    renderCityCard(cityObj, popDiv, false); 
                }
            });
        } catch (err) {
            console.error("Ошибка загрузки популярных городов:", err);
            popDiv.innerHTML = `<p>${translations[currentLang].data_refining}</p>`;
        }
    }

    // Логика для кнопки "Показать все города"
    const showAllCitiesBtn = document.getElementById('showAllCitiesBtn');
    const allCitiesContainer = document.getElementById('allCitiesContainer');
    const allCitiesList = document.getElementById('allCitiesList');
    
    let allCitiesRendered = false;

    if (showAllCitiesBtn && allCitiesContainer) {
        showAllCitiesBtn.addEventListener('click', () => {
            const isHidden = window.getComputedStyle(allCitiesContainer).display === 'none'; // Correctly check visibility
            allCitiesContainer.style.display = isHidden ? 'block' : 'none'; // This needs to be updated by setLanguage
            showAllCitiesBtn.innerText = isHidden ? translations[currentLang].hide_all_cities : translations[currentLang].show_all_cities;

            if (isHidden && !allCitiesRendered && allCitiesList) {
                renderAllCities(allCitiesList, recommendedCities);
                allCitiesRendered = true;
            }
        });
    }
}

function renderCityCard(c, container, isIdeal = true) {
    const currentUsername = localStorage.getItem('currentUser');
    const surveyData = JSON.parse(localStorage.getItem('survey_' + currentUsername) || '{}');
    const budget = surveyData.budget || 'medium';
    const tripType = surveyData.tripType || 'solo';

    let displayedHotels = [];
    let displayedRestaurants = [];

    const cityDescription = currentLang === 'kz' ? c.d_kz : c.d;
    const bestTimeDescription = currentLang === 'kz' ? c.bestTime_kz : c.bestTime;

    // Логика подбора контента
    if (tripType === 'family' || budget === 'medium') {
        // Смешанный вариант для семей или среднего бюджета
        const bHotels = (c.hotels_budget || []).slice(0, 1).map(h => ({ ...h, label: '<span style="color:var(--success); font-weight:bold;">(Эконом)</span> ' }));
        const eHotels = (c.hotels_expensive || []).slice(0, 1).map(h => ({ ...h, label: '<span style="color:var(--primary); font-weight:bold;">(Премиум)</span> ' }));
        displayedHotels = [...bHotels, ...eHotels];

        const bRest = (c.restaurants_budget || []).slice(0, 2).map(r => ({ ...r, label: '<span style="color:var(--success); font-weight:bold;">(Эконом)</span> ' }));
        const eRest = (c.restaurants_expensive || []).slice(0, 1).map(r => ({ ...r, label: '<span style="color:var(--primary); font-weight:bold;">(Премиум)</span> ' }));
        displayedRestaurants = [...bRest, ...eRest];
    } else if (budget === 'low') {
        // Бюджетный вариант: только бюджетные места без пометок
        displayedHotels = (c.hotels_budget || []).map(h => ({ ...h, label: '' }));
        displayedRestaurants = (c.restaurants_budget || []).map(r => ({ ...r, label: '' }));
    } else if (budget === 'high') {
        // Премиум вариант: только дорогие места без пометок
        displayedHotels = (c.hotels_expensive || []).map(h => ({ ...h, label: '' }));
        displayedRestaurants = (c.restaurants_expensive || []).map(r => ({ ...r, label: '' }));
    } else {
        // Дефолт (на случай, если данные не подгрузились)
        displayedHotels = (c.hotels_budget || []).concat(c.hotels_expensive || []).slice(0, 2).map(h => ({ ...h, label: '' }));
        displayedRestaurants = (c.restaurants_budget || []).concat(c.restaurants_expensive || []).slice(0, 2).map(r => ({ ...r, label: '' }));
    }

    const card = document.createElement('div');
    card.className = 'res-card';
    const isKz = currentLang === 'kz';
    const cityName = isKz && c.n_kz ? c.n_kz : c.n;
    const locations = c.locations || [];

    card.innerHTML = `
        <h3>${cityName}</h3>
        <p>${cityDescription}</p>
        <div class="city-details" style="display: none;">
            <div class="hotels-list">
                <p><strong>🏨 ${translations[currentLang].city_details_hotels}</strong></p>
                ${displayedHotels.map(h => `
                    <div class="hotel-item">
                        📍 ${h.label}${isKz && h.name_kz ? h.name_kz : h.name}<br>
                        <small>${isKz && h.address_kz ? h.address_kz : h.address}</small>
                    </div>
                `).join('')}
            </div>
            <div class="locations-list">
                <p><strong>🗺️ ${translations[currentLang].city_details_locations}</strong></p>
                ${locations.length > 0 ? locations.map(l => `<div class="hotel-item">📸 <strong>${isKz && l.n_kz ? l.n_kz : l.n}</strong> — <small>${isKz && l.t_kz ? l.t_kz : l.t}</small></div>`).join('') : `<small>${translations[currentLang].data_refining}</small>`}
            </div>
            <div class="restaurants-list">
                <p><strong>🍽️ Где поесть:</strong></p>
                ${displayedRestaurants.length > 0 ? displayedRestaurants.map(r => `
                    <div class="hotel-item">
                        🍴 ${r.label}${isKz && r.name_kz ? r.name_kz : r.name}<br> <!-- Translated restaurant name -->
                        <small>${isKz && r.address_kz ? r.address_kz : r.address}</small> <!-- Translated restaurant address -->
                    </div>
                `).join('') : '<small>Данные уточняются</small>'}
            </div>
            <div class="best-time-section" style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed rgba(128, 128, 128, 0.3); font-size: 0.85rem;">
                <p><strong>📅 ${translations[currentLang].city_details_best_time}</strong></p>
                <p style="color: var(--text); opacity: 0.9;">${bestTimeDescription || translations[currentLang].data_refining}</p>
            </div>
        </div>
        <button class="btn btn-outline full-width toggle-details-btn" style="margin-top:15px; font-size: 0.7rem; padding: 8px;">${translations[currentLang].details_button}</button>
    `;

    const details = card.querySelector('.city-details');
    const btn = card.querySelector('.toggle-details-btn');
    
    const toggle = (e) => {
        e.stopPropagation();
        const isHidden = details.style.display === 'none';
        details.style.display = isHidden ? 'block' : 'none';
        btn.innerText = isHidden ? translations[currentLang].collapse_button : translations[currentLang].details_button;
        if (isHidden) card.classList.add('active'); else card.classList.remove('active');
    };

    btn.addEventListener('click', toggle);
    card.addEventListener('click', toggle);
    
    container.appendChild(card);
}

function renderAllCities(containerElement, idealCities) {
    containerElement.innerHTML = ''; // Очищаем предыдущее содержимое

    allCities.forEach(city => {
        const listItem = document.createElement('li');
        listItem.className = 'all-city-item';
        
        let cityText = currentLang === 'kz' && city.n_kz ? city.n_kz : city.n; // Translated city name
        // Проверяем, является ли этот город одним из идеальных
        const isIdeal = idealCities.some(idealCity => idealCity.n === city.n);
        if (isIdeal) { // City names are not translated here
            cityText += ` <span class="ideal-city-note">${translations[currentLang].all_cities_note}</span>`;
        }
        listItem.innerHTML = cityText;
        containerElement.appendChild(listItem);
    });
}

// --- Функции админки ---
async function renderAdminTable(searchTerm = '') {
    const body = document.getElementById('adminTableBody');
    if (!body) return;

    const filter = searchTerm.toLowerCase();

    // Словари для перевода данных на русский
    const typeTranslations_ru = { // These are already defined in translations object, can be simplified
        'solo': 'Один',
        'family': 'Семья',
        'friends': 'Друзья'
    };
    const typeTranslations_kz = {
        'solo': 'Жалғыз', 'family': 'Отбасы', 'friends': 'Достар'
    };

    const interestTranslations_ru = { // These are already defined in translations object, can be simplified
        'mountains': 'Горы', 'sea': 'Море', 'city': 'Города',
        'activity': 'Активность', 'culture': 'Культура', 'gastronomy': 'Гастрономия',
        'seclusion': 'Уединение', 'shopping': 'Шоппинг',
        'family_fun': 'Семья', 'eco_tourism': 'Эко'
    };
    const interestTranslations_kz = {
        'mountains': 'Таулар', 'sea': 'Теңіз', 'city': 'Қалалар',
        'activity': 'Белсенділік', 'culture': 'Мәдениет', 'gastronomy': 'Гастрономия',
        'seclusion': 'Оқшаулану', 'shopping': 'Шопинг',
        'family_fun': 'Отбасы', 'eco_tourism': 'Эко'
    };

    try {
        const response = await fetch('/admin/analytics', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        if (!response.ok) {
            const msg = response.status === 403 ? "Доступ запрещен" : "Ошибка сервера (500)";
            body.innerHTML = `
                <tr><td colspan="6" style="text-align:center; color:var(--danger); padding:40px;" data-i18n="admin_table_error_msg">
                    ⚠️ ${msg}<br>
                    <button onclick="renderAdminTable()" class="btn btn-outline" style="margin-top:15px; font-size:0.7rem;">Перезагрузить данные</button>
                </td></tr>`;
            return;
        }

        const data = await response.json();
        const users = data.usersList || [];
        
        if (users.length === 0) {
            body.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:40px;">${translations[currentLang].admin_table_no_users}</td></tr>`;
            return;
        }

        // Фильтруем пользователей по логину или по ФИО
        const filteredUsers = users.filter(u => {
            const nameMatch = u.fullName && typeof u.fullName === 'string' ? u.fullName.toLowerCase().includes(filter) : false; // Full name is not translated
            const loginMatch = u.username && typeof u.username === 'string' ? u.username.toLowerCase().includes(filter) : false; // Username is not translated
            return nameMatch || loginMatch;
        });

        body.innerHTML = filteredUsers.map(u => {
            // Перевод типа поездки
            const typeDisplay = (currentLang === 'kz' ? typeTranslations_kz[u.tripType] : typeTranslations_ru[u.tripType]) || u.tripType || '-';
            
            // Перевод интересов
            const interestsDisplay = (u.answers && typeof u.answers === 'object') 
                ? Object.keys(u.answers)
                    .filter(k => u.answers[k])
                    .map(k => (currentLang === 'kz' ? interestTranslations_kz[k] : interestTranslations_ru[k]) || k)
                    .join(', ') 
                : '-';

            return `
            <tr>
                <td data-label="ФИО (Логин)">${u.fullName || '<i>Анкета не заполнена</i>'} (${u.username})</td>
                <td data-label="Возраст">${u.age || '-'}</td>
                <td data-label="Бюджет">${u.budget === 'low' ? translations[currentLang].admin_table_budget_low_short : u.budget === 'medium' ? translations[currentLang].admin_table_budget_medium_short : u.budget === 'high' ? translations[currentLang].admin_table_budget_high_short : '-'}</td>
                <td data-label="Тип">${typeDisplay}</td>
                <td data-label="Интересы">${interestsDisplay}</td>
                <td data-label="Действия">
                    ${(typeof u.fullName === 'string' && Array.isArray(u.recommendedCities) && u.recommendedCities.length > 0) ? 
                        `<button onclick="viewUserResults('${u.username}', 
                            '${u.fullName.replace(/'/g, "&apos;")}', 
                            '${u.recommendedCities.join(', ').replace(/'/g, "&apos;")}'
                        )" class="btn btn-outline" style="padding: 8px 16px; font-size: 0.7rem; text-transform: none; margin-right: 12px;">${translations[currentLang].admin_table_results_button}</button>` 
                        : ''
                    }
                    <button onclick="confirmDeleteUser('${u.username}')" class="btn btn-no" style="padding: 8px 16px; font-size: 0.7rem; text-transform: none;">${translations[currentLang].admin_table_delete_button}</button>
                </td>
            </tr>
        `}).join('');
    } catch (err) {
        console.error("Ошибка загрузки таблицы админа:", err);
    }
}

/**
 * Функция для просмотра рекомендаций админом
 */
window.viewUserResults = function(username, fullName, cities) {
    if (cities && cities.length > 0) { // City names are not translated here
        alert(translations[currentLang].admin_table_recommendations_for.replace('{fullName}', fullName || username).replace('{cities}', cities));
    } else {
        alert(translations[currentLang].admin_table_no_survey_filled);
    }
};

/**
 * Функция удаления пользователя с проверкой пароля админа
 */
window.confirmDeleteUser = async function(username) {
    const password = prompt(translations[currentLang].admin_delete_confirm_prompt);
    
    if (password === 'Orvex2026') {
        try {
            const res = await fetch(`/admin/user/${username}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            if (res.ok) {
                renderAdminTable(document.getElementById('adminSearch')?.value || '');
                alert(translations[currentLang].admin_delete_success.replace('{username}', username));
            }
        } catch (err) {
            alert(translations[currentLang].admin_delete_error_server);
        }
    } else if (password !== null) {
        alert(translations[currentLang].admin_delete_wrong_password);
    }
};

// Глобальные функции для работы кнопок в HTML
window.clearSystemData = async function() {
    const pwd = prompt(translations[currentLang].admin_clear_all_prompt);
    if (pwd === 'Orvex2026') {
        const res = await fetch('/admin/clear-all', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        if (res.ok) {
            localStorage.clear();
            alert("Система полностью очищена.");
            window.location.href = 'index.html';
        }
    } else if (pwd !== null) {
        alert("Неверный пароль.");
    }
};

window.logout = function() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('currentUser');
    navigateWithTransition('index.html');
};
