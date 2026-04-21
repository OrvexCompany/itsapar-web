// --- Данные вопросов ---
const questions = [
    { id: 'mountains', title: 'Горы?', desc: 'Любите ли вы походы и свежий горный воздух?' },
    { id: 'sea', title: 'Море/Вода?', desc: 'Предпочитаете пляжный отдых или озера?' },
    { id: 'city', title: 'Города?', desc: 'Вам нравится шум мегаполиса и архитектура?' },
    { id: 'activity', title: 'Активность?', desc: 'Готовы ли вы к экстриму и долгим прогулкам?' },
    { id: 'culture', title: 'Культура?', desc: 'Интересуетесь ли вы историей и музеями?' },
    { id: 'gastronomy', title: 'Гастрономия', desc: 'Важно ли для вас пробовать уникальные национальные блюда?' },
    { id: 'seclusion', title: 'Уединение', desc: 'Ищете ли вы тишину и отдых вдали от толп?' },
    { id: 'shopping', title: 'Шоппинг', desc: 'Любите ли вы прогулки по ТЦ и местным рынкам?' },
    { id: 'family_fun', title: 'Семейный отдых', desc: 'Нужны ли вам развлечения, подходящие для детей?' },
    { id: 'eco_tourism', title: 'Эко-туризм', desc: 'Вас привлекают заповедники и дикая природа?' }
];

// --- Данные городов с характеристиками и отелями ---
const allCities = [
    {
        n: 'Алматы',
        d: 'Идеально для любителей гор и активного отдыха, культурный центр.',
        img: 'https://images.unsplash.com/photo-1589112953018-0248f39589d8?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Q7 Almaty', address: 'ул. Сарсена Аманжолова, 42а' },
            { name: 'Evergreen Hostel', address: 'ул. Метростроевская, 32' }
        ],
        hotels_expensive: [
            { name: 'The Ritz-Carlton, Almaty', address: 'пр. Аль-Фараби, 77/7' },
            { name: 'Rixos Almaty', address: 'пр. Сейфуллина, 506/99' }
        ],
        restaurants_budget: [
            { name: 'Qaganat (Столовая)', address: 'пр. Абая, 48в' },
            { name: 'Basilic', address: 'ул. Шевченко, 127' }
        ],
        restaurants_expensive: [
            { name: 'Seven Bar & Restaurant', address: 'пр. Аль-Фараби, 77/7' },
            { name: 'Villa Dei Fiori', address: 'пр. Аль-Фараби, 140а' }
        ],
        locations: [
            { n: 'Шымбулак', t: 'Горы, Активность' },
            { n: 'Медеу', t: 'Активность, Семья' },
            { n: 'Зеленый базар', t: 'Гастрономия, Шоппинг' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Май и Сентябрь. В мае город утопает в зелени, а сентябрь дарит идеальную «бархатную» осень.',
    },
    {
        n: 'Астана',
        d: 'Сердце страны с футуристичной архитектурой и множеством музеев.',
        img: 'https://images.unsplash.com/photo-1628172776332-959952044322?q=80&w=600',
        hotels_budget: [
            { name: 'Hostel 13/77', address: 'ул. Ташенова, 13/2' },
            { name: 'Caps Lock Future Hotel', address: 'ул. Кунаева, 29' }
        ],
        hotels_expensive: [
            { name: 'The St. Regis Astana', address: 'пр. Кабанбай Батыра, 1' },
            { name: 'Sheraton Astana Hotel', address: 'ул. Сыганак, 60/1' }
        ],
        restaurants_budget: [
            { name: 'У Апашки (Столовая)', address: 'ул. Куйши Дина, 9' },
            { name: 'Избушка', address: 'пр. Абая, 17' },
            { name: 'Центр Плова', address: 'ул. Кенесары, 52' }
        ],
        restaurants_expensive: [
            { name: 'Selfie Astana', address: 'ул. Достык, 16' },
            { name: 'Qazaq Gourmet', address: 'пр. Мангилик Ел, 29' },
            { name: 'Tiflis', address: 'ул. Иманова, 11' }
        ],
        locations: [
            { n: 'Байтерек', t: 'Города, Культура' },
            { n: 'Хан Шатыр', t: 'Шоппинг, Семья' },
            { n: 'Набережная реки Есиль', t: 'Море/Вода, Активность' },
            { n: 'Национальный музей', t: 'Культура, Города' },
            { n: 'Tiflis (ресторан)', t: 'Гастрономия' }
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
        d: 'Древняя колыбель культуры, идеальна для спокойного изучения истории.',
        img: 'https://images.unsplash.com/photo-1605553641243-7f15951ca857?q=80&w=600',
        hotels_budget: [
            { name: 'Hostel Turkistan', address: 'ул. Толе Би, 1' },
            { name: 'Гостевой дом Сауран', address: 'ул. Ерубаева, 15' }
        ],
        hotels_expensive: [
            { name: 'Rixos Khadisha Turkestan', address: 'ул. Б. Саттарханова, 25' },
            { name: 'Karavansaray Turkistan', address: 'ул. Б. Саттарханова, 25/5' }
        ],
        restaurants_budget: [
            { name: 'Эдем (Столовая)', address: 'ул. Байбурт, 5' },
            { name: 'Туркестан Лагман', address: 'ул. Кожанова, б/н' },
            { name: 'Dastarkhan', address: 'пр. Тауке Хана, 10' }
        ],
        restaurants_expensive: [
            { name: 'Karavansaray Restaurant', address: 'комплекс Караван-сарай' },
            { name: 'Sandyk', address: 'ул. Б. Саттарханова, 25' },
            { name: 'Al-Farabi', address: 'пр. Тауке Хана, 150' }
        ],
        locations: [
            { n: 'Мавзолей Ясави', t: 'Культура, Уединение' },
            { n: 'Керуен-сарай', t: 'Шоппинг, Города' },
            { n: 'Летающий театр', t: 'Семья, Активность' },
            { n: 'Ресторан Sandyk', t: 'Гастрономия' },
            { n: 'Заповедник Каратау', t: 'Эко-туризм, Горы' }
        ],
        tags: { mountains: true, sea: false, city: true, activity: false, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: false, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель или Октябрь. Весной и осенью температура идеальна для осмотра мавзолеев.',
        d_kz: 'Ежелгі мәдениет бесігі, тарихты тыныш зерттеу үшін тамаша.',
        bestTime_kz: 'Сәуір немесе Қазан. Көктемде және күзде мавзолейлерді аралау үшін температура өте қолайлы.'
    },
    {
        n: 'Боровое',
        d: 'Казахстанская Швейцария - подойдет абсолютно всем, природа и свежий воздух.',
        img: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=600',
        hotels_budget: [
            { name: 'Гостевой дом Алтын-Кун', address: 'ул. Советская, 20' },
            { name: 'Отель Архидом', address: 'ул. Кокшетау, 16' }
        ],
        hotels_expensive: [
            { name: 'Rixos Borovoe', address: 'Северный берег оз. Щучье' },
            { name: 'Wyndham Garden Burabay', address: 'ул. Кенесары, 1' }
        ],
        restaurants_budget: [
            { name: 'Столовая у Мамы', address: 'ул. Кенесары, 25' },
            { name: 'Kishlak', address: 'ул. Кенесары, 30' },
            { name: 'Асхана на Берегу', address: 'ул. Набережная, 12' }
        ],
        restaurants_expensive: [
            { name: 'L\'Olivo', address: 'отель Rixos Borovoe' },
            { name: 'Chalet', address: 'ул. Кенесары, 1 (в Wyndham)' },
            { name: 'Кон-Тики', address: 'набережная оз. Бурабай' }
        ],
        locations: [
            { n: 'Поляна Абылай-хана', t: 'Культура, Эко-туризм' },
            { n: 'Гора Болектау', t: 'Горы, Активность' },
            { n: 'Озеро Щучье', t: 'Море/Вода, Уединение' },
            { n: 'Казахстанская Лапландия', t: 'Семья, Активность' },
            { n: 'Центральный рынок', t: 'Шоппинг, Гастрономия' }
        ],
        tags: { mountains: true, sea: true, city: false, activity: true, culture: false, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Пик купального сезона и время работы всей развлекательной инфраструктуры.',
        d_kz: 'Қазақстандық Швейцария – барлығына жарайды, табиғат және таза ауа.',
        bestTime_kz: 'Маусым – Тамыз. Шомылу маусымының шыңы және барлық ойын-сауық инфрақұрылымының жұмыс істейтін уақыты.'
    },
    {
        n: 'Шымкент',
        d: 'Один из старейших городов Казахстана, южный колорит, оживленный базар, исторические места.',
        img: 'https://images.unsplash.com/photo-1634718841452-9577742d4805?q=80&w=600',
        hotels_budget: [
            { name: 'Shymkent Hostel', address: 'ул. Туркестанская, 4' },
            { name: 'Отель Орда', address: 'пр. Республики, 21' }
        ],
        hotels_expensive: [
            { name: 'Rixos Khadisha Shymkent', address: 'ул. Желтоксан, 17' },
            { name: 'Aidana Plaza Hotel', address: 'ул. Бейбитшилик, 13' }
        ],
        restaurants_budget: [
            { name: 'Кок-Сарай (Шашлычная)', address: 'ул. Адырбекова, 80' },
            { name: 'Кафе Керемет', address: 'ул. Байтурсынова, 12' },
            { name: 'Лагманхана №1', address: 'ул. Рыскулова, 45' }
        ],
        restaurants_expensive: [
            { name: 'Cinzzano', address: 'ул. Желтоксан, 17' },
            { name: 'Mozzarella', address: 'пр. Тауке хана, 13' },
            { name: 'Bar Villa', address: 'ул. Казыбек Би, 29' }
        ],
        locations: [
            { n: 'Дендропарк', t: 'Эко-туризм, Семья' },
            { n: 'Цитадель', t: 'Культура, Города' },
            { n: 'Зоопарк', t: 'Семья, Активность' },
            { n: 'Shymkent Plaza', t: 'Шоппинг, Города' },
            { n: 'Кафе Кок-Сарай', t: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: false, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель – Май. Настоящая южная весна. Летом здесь экстремально жарко (выше 40°C).',
        d_kz: 'Қазақстанның ең көне қалаларының бірі, оңтүстік колориті, жанды базар, тарихи орындар.',
        bestTime_kz: 'Сәуір – Мамыр. Бұл уақытта мұнда нағыз көктем, бәрі гүлдейді. Жазда Шымкентте өте ыстық (40°C-тан жоғары).'
    },
    {
        n: 'Караганда',
        d: 'Крупный индустриальный и культурный центр, шахтерская история, музеи и театры.',
        img: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Comfort', address: 'ул. Ермекова, 52' },
            { name: 'Гостиница Турист', address: 'б-р Мира, 32' }
        ],
        hotels_expensive: [
            { name: 'Cosmonaut', address: 'ул. Кривогуза, 162а' },
            { name: 'Senator Hotel', address: 'ул. Ерубаева, 32' }
        ],
        restaurants_budget: [
            { name: 'Магнит (Столовая)', address: 'пр. Бухар Жырау, 52' },
            { name: 'Тагам', address: 'пр. Н. Абдирова, 12' },
            { name: 'Донерофф', address: 'пр. Бухар Жырау, 41' }
        ],
        restaurants_expensive: [
            { name: 'Sadre', address: 'ул. Ерубаева, 71/1' },
            { name: 'Grill Bar', address: 'ул. Кривогуза, 162а' },
            { name: 'Line Brew', address: 'пр. Н. Абдирова, 20' }
        ],
        locations: [
            { n: 'Музей Карлага', t: 'Культура, Уединение' },
            { n: 'Центральный парк', t: 'Семья, Море/Вода' },
            { n: 'ТРЦ City Mall', t: 'Шоппинг, Города' },
            { n: 'Этнопарк', t: 'Города, Эко-туризм' },
            { n: 'Спортивный комплекс им. Абдирова', t: 'Активность' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: true, culture: true, gastronomy: false, seclusion: false, shopping: true, family_fun: false, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: false }, // City names (n) are not translated here
        bestTime: 'Май – Июнь. Степь цветет, а жара еще не стала изнуряющей.',
        d_kz: 'Ірі индустриалды және мәдени орталық, шахтерлер тарихы, мұражайлар мен театрлар.',
        bestTime_kz: 'Мамыр – Маусым. Дала гүлдейді, ал ыстық әлі қатты емес.'
    },
    {
        n: 'Актобе',
        d: 'Индустриальный город на западе Казахстана, спокойный, степные пейзажи.',
        img: 'https://images.unsplash.com/photo-1596435804368-69279761f005?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Актобе', address: 'пр. Абилкайыр хана, 83' },
            { name: 'Отель Илек', address: 'ул. Шайкенова, 11' }
        ],
        hotels_expensive: [
            { name: 'Sheraton Celebration', address: 'пр. Абилкайыр хана, 92' },
            { name: 'Amsterdam Hotel', address: 'ул. Богенбай батыра, 12а' }
        ],
        restaurants_budget: [
            { name: 'Столовая "Ас-Ас"', address: 'ул. Маресьева, 81' },
            { name: 'Кухня №1', address: 'ул. Есет батыра, 105' },
            { name: 'Бургер Клаб', address: 'пр. Алии Молдагуловой, 46' }
        ],
        restaurants_expensive: [
            { name: 'Venezia', address: 'пр. Абилкайыр хана, 67' },
            { name: 'Zina', address: 'пр. Санкибай батыра, 14л' },
            { name: 'Kishlak', address: 'пр. Абилкайыр хана, 44' }
        ],
        locations: [
            { n: 'Мечеть Нур Гасыр', t: 'Культура, Города' },
            { n: 'Парк Первого Президента', t: 'Семья, Активность' },
            { n: 'ТРЦ Keruen City', t: 'Шоппинг, Семья' },
            { n: 'Актюбинское море', t: 'Море/Вода, Активность' },
            { n: 'Кафе Zina', t: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: true, culture: false, gastronomy: false, seclusion: false, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: false }, // City names (n) are not translated here
        bestTime: 'Май или Сентябрь. Оптимально, чтобы избежать степных ветров и пыльных бурь.',
        d_kz: 'Қазақстанның батысындағы индустриалды қала, тыныш, далалық пейзаждар.',
        bestTime_kz: 'Мамыр немесе Қыркүйек. Дала желі мен шаңды дауылдан аулақ болу үшін оңтайлы.'
    },
    {
        n: 'Тараз',
        d: 'Древний город с богатой историей, Шелковый путь, мавзолеи и археологические памятники.',
        img: 'https://images.unsplash.com/photo-1544984243-75a800232997?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Тараз', address: 'ул. Сулейменова, 2' },
            { name: 'Отель Жамбыл', address: 'ул. Толе Би, 42' }
        ],
        hotels_expensive: [
            { name: 'Arai Plaza Hotel', address: 'мкр. Арай, ул. Домалак Ана, 1' },
            { name: 'Grand Hotel Talas', address: 'ул. Пушкина, 61' }
        ],
        restaurants_budget: [
            { name: 'Столовая Бауырсақ', address: 'ул. Казыбек Би, 110' },
            { name: 'Пиросмани (бюджетное)', address: 'ул. Койгельды, 158' },
            { name: 'Отырар', address: 'пр. Толе Би, 60' }
        ],
        restaurants_expensive: [
            { name: 'Marrakesh', address: 'ул. Сулейменова, 1' },
            { name: 'Prime Garden', address: 'Парк Первого Президента' },
            { name: 'Arbat', address: 'пр. Жамбыла, 160' }
        ],
        locations: [
            { n: 'Мавзолей Айша-Биби', t: 'Культура, Уединение' },
            { n: 'Арбат Тараз', t: 'Города, Шоппинг' },
            { n: 'Озеро Зербулак', t: 'Море/Вода, Семья' },
            { n: 'Эко-парк «Женис»', t: 'Эко-туризм, Семья' },
            { n: 'Ресторан Marrakesh', t: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: false, activity: false, culture: true, gastronomy: true, seclusion: true, shopping: false, family_fun: false, eco_tourism: false },
        budget_suitability: { low: true, medium: false, high: false }, // City names (n) are not translated here
        bestTime: 'Апрель – Май. Время активного цветения и комфортных прогулок по городищам.',
        d_kz: 'Бай тарихы бар ежелгі қала, Жібек жолы, мавзолейлер және археологиялық ескерткіштер.',
        bestTime_kz: 'Сәуір – Мамыр. Гүлденудің белсенді уақыты және тарихи қалашықтарды аралау үшін ыңғайлы.'
    },
    {
        n: 'Павлодар',
        d: 'Город на реке Иртыш, индустриальный центр, набережная, музеи.',
        img: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел Вегас', address: 'ул. Торайгырова, 1/3' },
            { name: 'Гостиница Сары-Арка', address: 'ул. Торайгырова, 1' }
        ],
        hotels_expensive: [
            { name: 'River Court', address: 'ул. Ак. Сатпаева, 156' },
            { name: 'Irtysh Hotel', address: 'ул. Ак. Сатпаева, 158' }
        ],
        restaurants_budget: [
            { name: 'Мария (Столовая)', address: 'ул. Естая, 40' },
            { name: 'Колобок', address: 'ул. Кривенко, 25' },
            { name: 'Славянка', address: 'ул. Лермонтова, 91' }
        ],
        restaurants_expensive: [
            { name: 'Каспий', address: 'ул. Ак. Сатпаева, 156' },
            { name: 'Blackwood', address: 'ул. Бухар Жырау, 2' },
            { name: 'Marmaris', address: 'ул. Толстого, 143/1' }
        ],
        locations: [
            { n: 'Набережная Иртыша', t: 'Море/Вода, Активность' },
            { n: 'Мечеть Машхура Жусупа', t: 'Культура, Города' },
            { n: 'Batyr Mall', t: 'Шоппинг, Семья' },
            { n: 'Музей «Шафер»', t: 'Культура, Уединение' },
            { n: 'Гусиный перелет', t: 'Эко-туризм, Города' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: false, culture: false, gastronomy: false, seclusion: false, shopping: false, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: false }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Лучшее время для прогулок по набережной Иртыша.',
        d_kz: 'Ертіс өзені бойындағы қала, индустриалды орталық, жағалау, мұражайлар.',
        bestTime_kz: 'Маусым – Тамыз. Ертіс жағалауында серуендеу үшін ең жақсы уақыт.'
    },
    {
        n: 'Усть-Каменогорск',
        d: 'Восточно-Казахстанский город, окруженный горами и реками, индустриальный.',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
        hotels_budget: [
            { name: 'Хостел «Сити»', address: 'ул. Казахстан, 64' },
            { name: 'Гостиница «Турист»', address: 'ул. Ади Шарипова, 92' }
        ],
        hotels_expensive: [
            { name: 'Dedeman Oskemen', address: 'ул. Пермитина, 11/1' },
            { name: 'Shiny River', address: 'ул. Астана, 8/1' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Сели-Поели»', address: 'ул. Горького, 50' },
            { name: 'Донерная «Master Food»', address: 'ул. Виноградова, 17' },
            { name: 'Асхана «Береке»', address: 'пр. Назарбаева, 5/3' }
        ],
        restaurants_expensive: [
            { name: 'Barhat', address: 'ул. Казахстан, 64' },
            { name: 'Two Rivers', address: 'ул. Пермитина, 11/1 (в Dedeman)' },
            { name: 'Пицца Блюз (Премиум зал)', address: 'ул. Максима Горького, 56' }
        ],
        locations: [
            { n: 'Левобережный комплекс', t: 'Культура, Семья' },
            { n: 'Гора Казахстан', t: 'Горы, Активность' },
            { n: 'Бухтарминское водохранилище', t: 'Море/Вода, Уединение' },
            { n: 'Emporium', t: 'Шоппинг, Города' },
            { n: 'Парк Жастар', t: 'Эко-туризм, Семья' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Идеально для походов в горы и отдыха на водохранилищах.',
        d_kz: 'Шығыс Қазақстан қаласы, таулар мен өзендермен қоршалған, индустриалды.',
        bestTime_kz: 'Маусым – Тамыз. Тауға шығу және су қоймаларында демалу үшін тамаша уақыт.'
    },
    {
        n: 'Семей',
        d: 'Исторический город на Иртыше, связанный с Абаем Кунанбаевым и Достоевским.',
        img: 'https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Спартак»', address: 'ул. Бозтаева, 4' },
            { name: 'Хостел «Nomad»', address: 'ул. Кабанбай Батыра, 42' }
        ],
        hotels_expensive: [
            { name: 'Semey Hotel', address: 'ул. Абая, 94' },
            { name: 'Nomad Hotel', address: 'ул. Ленина, 9' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Центральная»', address: 'ул. Чокана Валиханова, 137' },
            { name: 'Кафе «Береке»', address: 'ул. Жамакаева, 98' },
            { name: 'Донерная «King Food»', address: 'пр. Шакерима, 12' }
        ],
        restaurants_expensive: [
            { name: 'Turandot', address: 'ул. Абая, 94' },
            { name: 'Zodiak', address: 'ул. Уранхаева, 21' },
            { name: 'Pekin', address: 'ул. Герцена, 32' }
        ],
        locations: [
            { n: 'Музей Абая', t: 'Культура, Города' },
            { n: 'Подвесной мост', t: 'Города, Активность' },
            { n: 'Остров Полковничий', t: 'Море/Вода, Семья' },
            { n: 'Сосновый бор', t: 'Эко-туризм, Уединение' },
            { n: 'Пиццерия «Додо»', t: 'Гастрономия, Семья' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: false, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Сентябрь. Комфортный период для посещения соснового бора и музеев.',
        d_kz: 'Абай Құнанбаев және Достоевскиймен байланысты Ертіс бойындағы тарихи қала.',
        bestTime_kz: 'Маусым – Қыркүйек. Қарағайлы орманды және мұражайларды аралау үшін ыңғайлы кезең.'
    },
    {
        n: 'Атырау',
        d: 'Нефтяная столица Казахстана, расположен на реке Урал, близость к Каспийскому морю.',
        img: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Ак Жайык»', address: 'ул. Абая, 15а' },
            { name: 'Hostel 24', address: 'мкр. Авангард-3, 34' }
        ],
        hotels_expensive: [
            { name: 'Renaissance Atyrau Hotel', address: 'ул. Сатпаева, 15б' },
            { name: 'River Palace', address: 'ул. Айтеке Би, 55' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Тагам»', address: 'ул. Кулманова, 113' },
            { name: 'Базилик', address: 'ул. Сатпаева, 19' },
            { name: 'Донерная «The Best»', address: 'ул. Махамбета, 116' }
        ],
        restaurants_expensive: [
            { name: 'Cinzzano', address: 'ул. Сатпаева, 15б' },
            { name: 'Caravella', address: 'ул. Айтеке Би, 55' },
            { name: 'O\'Hara Irish Pub', address: 'ул. Канцева, 7' }
        ],
        locations: [
            { n: 'Мост Европа-Азия', t: 'Города, Активность' },
            { n: 'Река Урал (прогулки)', t: 'Море/Вода, Эко-туризм' },
            { n: 'Baizaar ТРЦ', t: 'Шоппинг, Семья' },
            { n: 'Городище Сарайшык', t: 'Культура, Уединение' },
            { n: 'Рыбный рынок', t: 'Гастрономия, Шоппинг' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Май или Сентябрь. В это время меньше комаров и нет удушающей жары.',
        d_kz: 'Қазақстанның мұнай астанасы, Жайық өзені бойында орналасқан, Каспий теңізіне жақын.',
        bestTime_kz: 'Мамыр немесе Қыркүйек. Бұл уақытта маса аз және Каспий маңы ойпатының қайнаған ыстығы жоқ.'
    },
    {
        n: 'Костанай',
        d: 'Аграрный регион, спокойный город с парками и скверами, озера неподалеку.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Турист»', address: 'ул. Байтурсынова, 95' },
            { name: 'Hostel Kostanay', address: 'ул. Гоголя, 144' }
        ],
        hotels_expensive: [
            { name: 'Medeu Hotel', address: 'ул. Байтурсынова, 82' },
            { name: 'Tobol Hotel', address: 'ул. 5 Декабря, 100' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Любимая»', address: 'пр. Абая, 162' },
            { name: 'Пловная №1', address: 'ул. Аль-Фараби, 88' },
            { name: 'Пиццерия «Додо»', address: 'ул. Пушкина, 65' }
        ],
        restaurants_expensive: [
            { name: 'Marrakesh', address: 'ул. Гоголя, 62' },
            { name: 'Гарри Поттер', address: 'ул. Тауелсиздик, 116' },
            { name: 'The Ch樓', address: 'пр. Абая, 151/1' }
        ],
        locations: [
            { n: 'Парк культуры', t: 'Семья, Активность' },
            { n: 'Kostanay Plaza', t: 'Шоппинг, Семья' },
            { n: 'Французский квартал', t: 'Города, Культура' },
            { n: 'Набережная «Шагала»', t: 'Море/Вода, Активность' },
            { n: 'Кондитерская фабрика (магазин)', t: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Июль. Время для загородного отдыха и прогулок по лесопаркам.',
        d_kz: 'Аграрлық аймақ, саябақтары мен скверлері бар тыныш қала, жақын маңда көлдер бар.',
        bestTime_kz: 'Маусым – Шілде. Қала сыртында демалу және орман-саябақтарда серуендеу уақыты.'
    },
    {
        n: 'Кызылорда',
        d: 'Исторический город, расположенный в пустынной местности, связан с космодромом Байконур.',
        img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Кызылорда»', address: 'ул. Журбы, 1' },
            { name: 'Хостел «Орда»', address: 'ул. Абая, 55' }
        ],
        hotels_expensive: [
            { name: 'Sultan Plaza', address: 'пр. Астана, 44' },
            { name: 'Grand Hotel Nomads', address: 'ул. Коркыт Ата, 123' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Ас-Мар»', address: 'ул. Токмагамбетова, 15' },
            { name: 'Лагманхана «Тулпар»', address: 'ул. Байтурсынова, 40' },
            { name: 'Кафе «Береке»', address: 'пр. Абая, 22' }
        ],
        restaurants_expensive: [
            { name: 'Arbat', address: 'ул. Айтеке Би, 11' },
            { name: 'Zhibek Zholy', address: 'пр. Султана Бейбарыса, 4' },
            { name: 'Vivaldi', address: 'ул. Желтоксан, 1' }
        ],
        locations: [
            { n: 'Мемориал Коркыт Ата', t: 'Культура, Уединение' },
            { n: 'Набережная Сырдарьи', t: 'Море/Вода, Семья' },
            { n: 'ТРЦ Aray', t: 'Шоппинг, Города' },
            { n: 'Площадь Тагзым', t: 'Культура, Города' },
            { n: 'Лагманхана «Тулпар»', t: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: false, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Сентябрь – Октябрь. Время знаменитых дынь и арбузов, когда жара спадает.',
        d_kz: 'Шөлді жерде орналасқан тарихи қала, Байқоңыр ғарыш айлағымен байланысты.',
        bestTime_kz: 'Қыркүйек – Қазан. Ыстық қайтқан кездегі атақты қызылордалық қауын-қарбыз уақыты.'
    },
    {
        n: 'Уральск',
        d: 'Старинный город на реке Урал, богатая история, архитектура 19 века.',
        img: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Урал»', address: 'пр. Назарбаева, 184' },
            { name: 'Хостел «Дом»', address: 'ул. Курмангазы, 150' }
        ],
        hotels_expensive: [
            { name: 'Park Hotel', address: 'ул. Сарайшык, 28/2' },
            { name: 'Pushkin Hotel', address: 'пр. Назарбаева, 148' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Как дома»', address: 'ул. Дины Нурпеисовой, 15' },
            { name: 'Бургерная «Black Star» (акции)', address: 'пр. Назарбаева, 191' },
            { name: 'Асхана «Дастархан»', address: 'ул. Мухита, 78' }
        ],
        restaurants_expensive: [
            { name: 'Venezia', address: 'пр. Назарбаева, 162/1' },
            { name: 'Zina', address: 'ул. Сарайшык, 28' },
            { name: 'Pivovaroff', address: 'ул. Карева, 47' }
        ],
        locations: [
            { n: 'Музей Пушкина', t: 'Культура, Города' },
            { n: 'Парк им. Кирова', t: 'Семья, Активность' },
            { n: 'Озеро Шалкар', t: 'Море/Вода, Эко-туризм' },
            { n: 'City Center', t: 'Шоппинг, Семья' },
            { n: 'Старая мечеть', t: 'Культура, Уединение' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Май – Июнь. Самое красивое время, когда берега реки Урал максимально зеленые.',
        d_kz: 'Жайық өзені бойындағы көне қала, бай тарихы, 19 ғасыр архитектурасы.',
        bestTime_kz: 'Мамыр – Маусым. Жайық өзенінің жағалаулары ең жасыл болған ең әдемі уақыт.'
    },
    {
        n: 'Петропавловск',
        d: 'Северный город Казахстана, исторический центр, озера и леса вокруг.',
        img: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Восход»', address: 'ул. Конституции Казахстана, 52' },
            { name: 'Хостел «Север»', address: 'ул. Мира, 215' }
        ],
        hotels_expensive: [
            { name: 'Park Hotel North', address: 'ул. Кеншинбаева, 22' },
            { name: 'Skif Hotel', address: 'ул. Партизанская, 118' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Сарбай»', address: 'ул. Интернациональная, 59' },
            { name: 'Кафе «Блинчик»', address: 'ул. Конституции Казахстана, 13' },
            { name: 'Донерная «Best»', address: 'ул. Жамбыла, 150' }
        ],
        restaurants_expensive: [
            { name: 'Kishlak', address: 'ул. Конституции Казахстана, 31' },
            { name: 'Friends', address: 'ул. Интернациональная, 21' },
            { name: 'Emerald', address: 'ул. Мира, 122' }
        ],
        locations: [
            { n: 'Резиденция Абылай-хана', t: 'Культура, Города' },
            { n: 'Улица Конституции', t: 'Города, Шоппинг' },
            { n: 'Озеро Пестрое', t: 'Море/Вода, Активность' },
            { n: 'Аквапарк «Нептун»', t: 'Семья, Активность' },
            { n: 'Мещерский лес', t: 'Эко-туризм, Уединение' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: false, gastronomy: false, seclusion: true, shopping: false, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Самый теплый период в самом северном городе страны.',
        d_kz: 'Қазақстанның солтүстік қаласы, тарихи орталық, айналасында көлдер мен ормандар.',
        bestTime_kz: 'Маусым – Тамыз. Елдің ең солтүстік қаласындағы ең жылы кезең.'
    },
    {
        n: 'Кокшетау',
        d: 'Уютный город у подножия сопок, ворота в край озер и живописной природы.',
        img: 'https://images.unsplash.com/photo-1549416805-0e7740e2136e?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Достык»', address: 'ул. Ауэзова, 183' },
            { name: 'Хостел «Кокше»', address: 'ул. Горького, 19' }
        ],
        hotels_expensive: [
            { name: 'Green Which Hotel', address: 'ул. Ауэзова, 157' },
            { name: 'Plaza Hotel', address: 'ул. Абая, 114' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Арзан»', address: 'ул. Сатпаева, 10' },
            { name: 'Кафе «Шафран»', address: 'ул. Горького, 31' },
            { name: 'Бистро «Fast Food»', address: 'ул. Ауэзова, 190' }
        ],
        restaurants_expensive: [
            { name: 'GQ Restaurant', address: 'ул. Абая, 114' },
            { name: 'Tiflis', address: 'ул. Ауэзова, 157' },
            { name: 'Zhibek Zholy', address: 'пр. Назарбаева, 15' }
        ],
        locations: [
            { n: 'Сопка Букпа', t: 'Горы, Активность' },
            { n: 'Озеро Копа', t: 'Море/Вода, Семья' },
            { n: 'ТЦ Рио', t: 'Шоппинг, Города' },
            { n: 'Музей истории', t: 'Культура, Города' },
            { n: 'Сквер «Мангилик Ел»', t: 'Уединение, Города' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Август. Приятная погода для отдыха у озера Копа.',
        d_kz: 'Төбелердің етегіндегі жайлы қала, көлдер мен әдемі табиғат аймағына қақпа.',
        bestTime_kz: 'Маусым – Тамыз. Қопа көлінде демалу үшін жағымды ауа райы.'
    },
    {
        n: 'Талдыкорган',
        d: 'Зеленый город с богатой культурой и множеством возможностей для активного отдыха.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Талдыкорган»', address: 'ул. Тауелсиздик, 67' },
            { name: 'Гостевой дом «Алтын»', address: 'ул. Кабанбай Батыра, 34' }
        ],
        hotels_expensive: [
            { name: 'Grand Hotel Zhetysu', address: 'ул. Кабанбай батыра, 40' },
            { name: 'Alatau Hotel', address: 'ул. Жансугурова, 112' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Береке»', address: 'ул. Биржан Сал, 45' },
            { name: 'Кафе «Улытау»', address: 'ул. Балапанова, 23' },
            { name: 'Донер «Master»', address: 'ул. Тауелсиздик, 100' }
        ],
        restaurants_expensive: [
            { name: 'Arbat', address: 'ул. Гаухар Ана, 110' },
            { name: 'Senator', address: 'ул. Жансугурова, 187' },
            { name: 'Zhetysu Restaurant', address: 'ул. Кабанбай батыра, 40' }
        ],
        locations: [
            { n: 'Парк «Жастар»', t: 'Семья, Активность' },
            { n: 'Набережная Каратала', t: 'Море/Вода, Эко-туризм' },
            { n: 'City Center', t: 'Шоппинг, Города' },
            { n: 'Арка Талдыкоргана', t: 'Города, Культура' },
            { n: 'Ресторан Arbat', t: 'Гастрономия' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: false, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Май – Июнь. Пик красоты предгорий Джунгарского Алатау.',
        d_kz: 'Жасыл қала, бай мәдениеті және белсенді демалыс үшін көптеген мүмкіндіктер.',
        bestTime_kz: 'Мамыр – Маусым. Жетісу Алатауының етегіндегі табиғаттың ең әдемі кезеңі.'
    },
    {
        n: 'Балхаш',
        d: 'Город на берегу уникального озера, идеален для водных активностей и отдыха на пляже.',
        img: 'https://images.unsplash.com/photo-1506929662133-570c13a5c32d?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Центральная»', address: 'ул. Желтоксан, 11' },
            { name: 'База отдыха «Голубая Лагуна»', address: 'набережная, б/н' }
        ],
        hotels_expensive: [
            { name: 'Pearl Hotel', address: 'ул. Желтоксан, 15' },
            { name: 'Riviera', address: 'пос. Чубар-Тюбек, береговая зона' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Рыбацкая»', address: 'ул. Ленина, 34' },
            { name: 'Кафе «Ак Жайык»', address: 'ул. Мира, 12' },
            { name: 'Донерная «Центр»', address: 'ул. Желтоксан, 5' }
        ],
        restaurants_expensive: [
            { name: 'Balkhash Gold', address: 'ул. Караменде Би, 15' },
            { name: 'Empire', address: 'ул. Ленина, 45' },
            { name: 'Aura', address: 'ул. Желтоксан, 15' }
        ],
        locations: [
            { n: 'Городской пляж', t: 'Море/Вода, Семья' },
            { n: 'Бектау-Ата', t: 'Горы, Эко-туризм' },
            { n: 'Краеведческий музей', t: 'Культура, Города' },
            { n: 'Набережная', t: 'Активность, Города' },
            { n: 'Рыбный рынок', t: 'Гастрономия, Шоппинг' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июль – Август. Озеро прогревается хорошо, это лучшие месяцы для пляжа.',
        d_kz: 'Бірегей көлдің жағасындағы қала, су белсенділігі және жағажай демалысы үшін тамаша.',
        bestTime_kz: 'Шілде – Тамыз. Көл жақсы жылынады, бұл жағажай демалысы үшін ең жақсы айлар.'
    },
    {
        n: 'Экибастуз',
        d: 'Индустриальный гигант с масштабными разрезами и интересными культурными объектами.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Дружба»', address: 'ул. Машхур Жусупа, 46' },
            { name: 'Хостел «Энергетик»', address: 'ул. Строительная, 21' }
        ],
        hotels_expensive: [
            { name: 'Green Hotel', address: 'ул. Ауэзова, 147' },
            { name: 'Rixos (местный)', address: 'ул. Кунаева, 12' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Ас-Мар»', address: 'ул. М. Жусупа, 50' },
            { name: 'Кафе «Пиросмани» (бюджет)', address: 'ул. Абая, 92' },
            { name: 'Бургер Кинг (ТЦ)', address: 'ул. Кунаева, 2' }
        ],
        restaurants_expensive: [
            { name: 'Old Castle', address: 'ул. Строительная, 88' },
            { name: 'Versailles', address: 'ул. Энергетиков, 91' },
            { name: 'Assorti', address: 'ул. М. Жусупа, 115' }
        ],
        locations: [
            { n: 'Разрез «Богатырь»', t: 'Города, Эко-туризм' },
            { n: 'Парк «Шахтер»', t: 'Семья, Активность' },
            { n: 'ГРЭС-2 (труба)', t: 'Города, Культура' },
            { n: 'ТЦ Maxell', t: 'Шоппинг, Семья' },
            { n: 'Кафе «Ас-Мар»', t: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: false, culture: true, gastronomy: true, seclusion: false, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Сентябрь. Жары уже нет, а карьеры лучше осматривать в сухую погоду.',
        d_kz: 'Масштабты карьерлері және қызықты мәдени нысандары бар индустриалды алып.',
        bestTime_kz: 'Қыркүйек. Ыстық жоқ, ал атақты карьерлерді құрғақ ауа райында қараған дұрыс.'
    },
    {
        n: 'Рудный',
        d: 'Город горняков с оживленной атмосферой и разнообразными парками.',
        img: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Уют»', address: 'ул. Ленина, 101' },
            { name: 'Гостевой дом «Металлург»', address: 'ул. 50 лет Октября, 42' }
        ],
        hotels_expensive: [
            { name: 'Victoria Hotel', address: 'ул. Ленина, 187' },
            { name: 'Gorniak Hotel', address: 'ул. Космонавтов, 10' }
        ],
        restaurants_budget: [
            { name: 'Столовая №1', address: 'ул. Горняков, 74' },
            { name: 'Кафе «Чебурек»', address: 'ул. Ленина, 50' },
            { name: 'Пиццерия «Дока»', address: 'ул. 40 лет Октября, 15' }
        ],
        restaurants_expensive: [
            { name: 'Saray', address: 'ул. Парковая, 2' },
            { name: 'Prestige', address: 'ул. Ленина, 107' },
            { name: 'Graf', address: 'ул. Качарская, 12' }
        ],
        locations: [
            { n: 'Парк культуры', t: 'Семья, Активность' },
            { n: 'Река Тобол', t: 'Море/Вода, Уединение' },
            { n: 'Скульптура «Горняк»', t: 'Культура, Города' },
            { n: 'ТЦ на ул. Ленина', t: 'Шоппинг, Города' },
            { n: 'Ледовый дворец', t: 'Активность, Семья' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Сентябрь. Время золотой осени, когда город выглядит наиболее уютно.',
        d_kz: 'Жанды атмосферасы және әртүрлі саябақтары бар кеншілер қаласы.',
        bestTime_kz: 'Қыркүйек. Қала ең жайлы көрінетін алтын күз уақыты.'
    },
    {
        n: 'Конаев',
        d: 'Морской курорт близ Алматы, центр развлечений и пляжного отдыха.',
        img: 'https://images.unsplash.com/photo-1544984243-75a800232997?q=80&w=600',
        hotels_budget: [
            { name: 'База отдыха «Алтын Эмель»', address: 'Северное побережье' },
            { name: 'Гостиница «Море»', address: '1-й мкр, 15' }
        ],
        hotels_expensive: [
            { name: 'Royal Tulip Almaty (Casinos)', address: 'зона отдыха Гранд Капшагай' },
            { name: 'Bellagio', address: 'ул. Кунаева, 10' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Рыбачка»', address: 'трасса Алматы-Конаев' },
            { name: 'Кафе «Айша»', address: 'ул. Сейфуллина, 22' },
            { name: 'Донерная «Fresh»', address: '3-й мкр, 5' }
        ],
        restaurants_expensive: [
            { name: 'Casino Bombay (ресторан)', address: 'Индустриальная ул., 9' },
            { name: 'Riviera', address: 'ул. Кунаева, 1' },
            { name: 'Macao', address: 'Игорная зона' }
        ],
        locations: [
            { n: 'Пляжи Капшагая', t: 'Море/Вода, Семья' },
            { n: 'Казино (игорная зона)', t: 'Активность, Города' },
            { n: 'Аквапарк', t: 'Семья, Активность' },
            { n: 'Набережная Кунаева', t: 'Города, Активность' },
            { n: 'Ресторан Riviera', t: 'Гастрономия, Море/Вода' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: false, gastronomy: true, seclusion: false, shopping: false, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Июнь – Сентябрь. Длинный купальный сезон благодаря мелководью Капшагая.',
        d_kz: 'Алматыға жақын теңіз курорты, ойын-сауық және жағажай демалысы орталығы.',
        bestTime_kz: 'Маусым – Қыркүйек. Қапшағай су қоймасының таяздығы арқасында ұзақ шомылу маусымы.'
    },
    {
        n: 'Басши (Алтын-Эмель)',
        d: 'Уникальный природный заповедник с поющими барханами и марсианскими пейзажами.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels_budget: [
            { name: 'Гостевой дом «Айман»', address: 'ул. Центральная, 12' },
            { name: 'Кемпинг парка', address: 'Территория ГНПП' }
        ],
        hotels_expensive: [
            { name: 'Altyn Emel Hotel (VIP)', address: 'ул. Школьная, 5' },
            { name: 'Oshaktas Guest House (Люкс)', address: 'ул. Ленина, 20' }
        ],
        restaurants_budget: [
            { name: 'Столовая в визит-центре', address: 'въезд в парк' },
            { name: 'Кафе «Жулдыз»', address: 'трасса рядом с поселком' },
            { name: 'Домашняя кухня «У Сауле»', address: 'ул. Центральная, 5' }
        ],
        restaurants_expensive: [
            { name: 'Ресторан Altyn Emel', address: 'ул. Школьная, 5' },
            { name: 'Юрточный лагерь (VIP)', address: 'территория парка' },
            { name: 'Банкетный зал «Басши»', address: 'ул. Абая, 1' }
        ],
        locations: [
            { n: 'Поющий бархан', t: 'Горы, Эко-туризм' },
            { n: 'Горы Актау', t: 'Горы, Эко-туризм' },
            { n: 'Горы Катутау', t: 'Горы, Уединение' },
            { n: '700-летняя Ива', t: 'Эко-туризм, Культура' },
            { n: 'Визит-центр', t: 'Культура, Семья' }
        ],
        tags: { mountains: true, sea: false, city: false, activity: false, culture: true, gastronomy: false, seclusion: true, shopping: false, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель – Май. В пустыне еще не жарко, комфортно для подъема на барханы.',
        d_kz: 'Әнші бархандары және марстық пейзаждары бар бірегей табиғи қорық.',
        bestTime_kz: 'Сәуір – Мамыр. Шөлде әлі ыстық емес, бархандарға көтерілу үшін ыңғайлы.'
    },
    {
        n: 'Жанаозен',
        d: 'Город в сердце Мангистау, отправная точка для путешествий по пустыням и каньонам.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Аруана»', address: 'мкр. Самал, 44' },
            { name: 'Хостел «Мунайши»', address: 'мкр. Коктем, 1' }
        ],
        hotels_expensive: [
            { name: 'Kendirli (Resort)', address: '70 км от города' },
            { name: 'Hotel Nauryz', address: 'мкр. Оркен, 55' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Ас-Ман»', address: 'мкр. Шанырак, 12' },
            { name: 'Кафе «Шугла»', address: 'мкр. Мунайши, 5' },
            { name: 'Донерная «Baiterek»', address: 'пр. Сатпаева, 10' }
        ],
        restaurants_expensive: [
            { name: 'Altyn Adam', address: 'мкр. Шугыла, 25' },
            { name: 'Kendirli Restaurant', address: 'зона отдыха Кендирли' },
            { name: 'Tandyr', address: 'мкр. Самал, 15' }
        ],
        locations: [
            { n: 'Каньоны Кызылкуп', t: 'Эко-туризм, Горы' },
            { n: 'Плато Устюрт', t: 'Эко-туризм, Уединение' },
            { n: 'ТЦ Nauryz', t: 'Шоппинг, Города' },
            { n: 'Мечеть Бекет-Ата', t: 'Культура, Уединение' },
            { n: 'Зона отдыха Кендирли', t: 'Море/Вода, Семья' }
        ],
        tags: { mountains: true, sea: true, city: true, activity: false, culture: true, gastronomy: false, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель – Май. Идеально для каньонов Устюрта, пока солнце не выжгло пустыню.',
        d_kz: 'Маңғыстаудың жүрегіндегі қала, шөлдер мен каньондарға саяхаттар үшін бастау нүктесі.',
        bestTime_kz: 'Сәуір – Мамыр. Күн шөлді күйдіріп жібермей тұрғанда Үстірт каньондарына саяхат жасау үшін тамаша.'
    },
    {
        n: 'Риддер',
        d: 'Горный край на востоке с альпийскими лугами и сибирской тайгой.',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Алтай»', address: 'пр. Независимости, 10' },
            { name: 'Турбаза «Светлячок»', address: 'окраина города' }
        ],
        hotels_expensive: [
            { name: 'Лесная Сказка (Риддер Гул)', address: 'ул. Семипалатинская, 150' },
            { name: 'Black Rock', address: 'район горнолыжного спуска' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Кедр»', address: 'ул. Ауэзова, 12' },
            { name: 'Кафе «У фонтана»', address: 'Центральная площадь' },
            { name: 'Пиццерия «Smile»', address: 'пр. Независимости, 15' }
        ],
        restaurants_expensive: [
            { name: 'Edelweiss', address: 'ул. Горная, 1' },
            { name: 'Медвежий угол', address: 'лесная зона' },
            { name: 'Versailles', address: 'ул. Гоголя, 45' }
        ],
        locations: [
            { n: 'Гора Три Брата', t: 'Горы, Активность' },
            { n: 'Западно-Алтайский заповедник', t: 'Эко-туризм, Уединение' },
            { n: 'Горнолыжный спуск', t: 'Активность, Горы' },
            { n: 'Краеведческий музей', t: 'Культура, Города' },
            { n: 'База отдыха «Светлячок»', t: 'Семья, Эко-туризм' }
        ],
        tags: { mountains: true, sea: false, city: false, activity: true, culture: true, gastronomy: false, seclusion: true, shopping: false, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Зима (лыжи) или Июль (походы). Здесь выпадает аномальное количество снега.',
        d_kz: 'Шығыстағы таулы аймақ, альпілік шалғындар және сібірлік тайга.',
        bestTime_kz: 'Қыс (шаңғы) немесе Шілде (жаяу серуендеу). Мұнда қар өте көп жауады, бұл оны фрирайд үшін жұмаққа айналдырады.'
    },
    {
        n: 'Степногорск',
        d: 'Индустриальный город с интересной архитектурой и активной жизнью.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Степногорск»', address: '4-й мкр, 45' },
            { name: 'Хостел «Мир»', address: '6-й мкр, 12' }
        ],
        hotels_expensive: [
            { name: 'Serebryany Bor', address: 'лесная зона за городом' },
            { name: 'Central Hotel', address: '3-й мкр, 20' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Трапеза»', address: '7-й мкр, 5' },
            { name: 'Кафе «Удача»', address: '5-й мкр, 10' },
            { name: 'Донер-центр', address: 'пр. Лунного света, 2' }
        ],
        restaurants_expensive: [
            { name: 'Astoria', address: '9-й мкр, 1' },
            { name: 'Zodiac', address: '4-й мкр, 22' },
            { name: 'Palace', address: 'пр. Ленина, 15' }
        ],
        locations: [
            { n: 'Городской парк', t: 'Семья, Активность' },
            { n: 'ДК «Горняк»', t: 'Культура, Города' },
            { n: 'Зона отдыха «Серебряный бор»', t: 'Уединение, Эко-туризм' },
            { n: 'Центральный ТЦ', t: 'Шоппинг, Города' },
            { n: 'Кафе «Трапеза»', t: 'Гастрономия' }
        ],
        tags: { mountains: false, sea: false, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: true, family_fun: true, eco_tourism: true },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Мамыр немесе Қыркүйек. Солтүстік далаға тән экстремалды температурасыз кезең.',
        d_kz: 'Қызықты архитектурасы және белсенді өмірі бар индустриалды қала.',
        bestTime_kz: 'Мамыр немесе Қыркүйек. Солтүстік далаға тән экстремалды температурасыз кезең.'
    },
    {
        n: 'Байконур',
        d: 'Уникальный город-космодром, место старта легендарных космических миссий.',
        img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Центральная»', address: 'ул. Королева, 11' },
            { name: 'Отель «Поехали»', address: 'ул. Гагарина, 5' }
        ],
        hotels_expensive: [
            { name: 'Sputnik Hotel', address: 'ул. Сейфуллина, 7' },
            { name: 'Cosmonaut Hotel', address: 'ул. Гагарина, 12' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Звездное небо»', address: 'ул. Янгеля, 5' },
            { name: 'Кафе «Восток»', address: 'пр. Королева, 15' },
            { name: 'Донер «Союз»', address: 'ул. Гагарина, 10' }
        ],
        restaurants_expensive: [
            { name: 'Zvezdny', address: 'ул. Королева, 11' },
            { name: 'Gagarin', address: 'ул. Сейфуллина, 7' },
            { name: 'Soyuz-Apollo', address: 'пр. Мира, 20' }
        ],
        locations: [
            { n: 'Музей истории космодрома', t: 'Культура, Города' },
            { n: 'Аллея Космонавтов', t: 'Уединение, Культура' },
            { n: 'Макет ракеты «Союз»', t: 'Города, Семья' },
            { n: 'Набережная Сырдарьи', t: 'Море/Вода, Активность' },
            { n: 'Ресторан «Звездное небо»', t: 'Гастрономия, Культура' }
        ],
        tags: { mountains: false, sea: true, city: true, activity: true, culture: true, gastronomy: true, seclusion: true, shopping: false, family_fun: true, eco_tourism: false },
        budget_suitability: { low: true, medium: true, high: true }, // City names (n) are not translated here
        bestTime: 'Апрель – Май или Сентябрь – Октябрь. Самые мягкие месяцы по погоде.',
        d_kz: 'Бірегей қала-ғарыш айлағы, аты аңызға айналған ғарыш миссияларының бастау орны.',
        bestTime_kz: 'Сәуір – Мамыр немесе Қыркүйек – Қазан. Ауа райы бойынша ең жұмсақ айлар.'
    },
    {
        n: 'Щучинск',
        d: 'Курортный город среди сосновых лесов и гор, центр зимних видов спорта.',
        img: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=600',
        hotels_budget: [
            { name: 'Гостиница «Щучинск»', address: 'ул. Едомского, 22' },
            { name: 'Хостел «Бурабай»', address: 'ул. Сейфуллина, 80' }
        ],
        hotels_expensive: [
            { name: 'Rixos Borovoe', address: 'берег оз. Щучье' },
            { name: 'Park House', address: 'юго-западный берег оз. Щучье' }
        ],
        restaurants_budget: [
            { name: 'Столовая «Вкусный мир»', address: 'ул. Абылай Хана, 45' },
            { name: 'Кафе «Домашнее»', address: 'ул. Ауэзова, 12' },
            { name: 'Донер «Street Food»', address: 'ул. Ленина, 2' }
        ],
        restaurants_expensive: [
            { name: 'L’Olivo', address: 'отель Rixos Borovoe' },
            { name: 'Challet', address: 'ул. Набережная, 1' },
            { name: 'Sultan', address: 'пр. Абая, 100' }
        ],
        locations: [
            { n: 'Озеро Щучье', t: 'Море/Вода, Уединение' },
            { n: 'Лыжный трамплин', t: 'Активность, Горы' },
            { n: 'Дендропарк', t: 'Эко-туризм, Семья' },
            { n: 'ТЦ «Grand Plaza»', t: 'Шоппинг, Города' },
            { n: 'Ресторан Sultan', t: 'Гастрономия' }
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

    // ИСПРАВЛЕНО: Теперь текст кнопки обновляется корректно без перезагрузки страницы
    const showAllCitiesBtn = document.getElementById('showAllCitiesBtn');
    if (showAllCitiesBtn) {
        const allCitiesContainer = document.getElementById('allCitiesContainer');
        // Используем вычисленные стили, чтобы видеть реальное состояние display
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
    // ИСПРАВЛЕНО: Упрощенная навигация. Анимация выхода запускается,
    // но не блокирует переход, чтобы избежать проблем с навигацией.
    document.body?.classList.add('page-exit'); 
    // Небольшая задержка, чтобы анимация успела начаться, но не блокировала переход
    setTimeout(() => { window.location.href = url; }, 100); 
}

// --- Инициализация ---
// Мы убираем opacity: 0 из CSS и используем JS для управления видимостью
document.addEventListener('DOMContentLoaded', () => {
    console.log("Приложение инициализируется...");
    // Гарантируем видимость
    document.body?.classList.add('page-loaded');

    try {
        initTheme();
        injectChat(); 
        initApp();
        checkAndInjectPolicy();
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

function checkAndInjectPolicy(targetUrl = null) { // targetUrl теперь может быть null
    const path = window.location.pathname;
    const isAuthPage = path.endsWith('index.html') || path.endsWith('login.html') || path.endsWith('register.html') || path === '/' || path === '';
    
    if (isAuthPage && !localStorage.getItem('policyAccepted')) { // Если на странице авторизации и политика не принята
        injectPolicy(targetUrl);
    }
}

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
    if (!wrapper) return;

    wrapper.style.display = 'block';
    wrapper.innerHTML = ''; 

    wrapper.innerHTML = `
        <div id="policyModal" class="modal-overlay" style="display: flex;">
            <div class="card modal-card">
                <h2>Соглашение и защита данных</h2>
                <div class="policy-text">
                    <p>Добро пожаловать в ITSapar. Используя сервис, вы подтверждаете:</p>
                    <ul>
                        <li>Вам исполнилось 18 лет.</li>
                        <li>Данные используются только для подбора маршрута.</li>
                        <li>Вы обязуетесь не копировать контент.</li>
                    </ul>
                </div>
                <div class="policy-check">
                    <input type="checkbox" id="policyCheckbox">
                    <label for="policyCheckbox">Я ознакомлен с условиями и подтверждаю возраст 18+</label>
                </div>
                <button id="acceptPolicy" class="btn btn-primary full-width" disabled>Принять и продолжить</button>
            </div>
        </div>
    `;

    const btn = document.getElementById('acceptPolicy');
    const chk = document.getElementById('policyCheckbox');
    
    chk.addEventListener('change', (e) => btn.disabled = !e.target.checked);
    
    btn.addEventListener('click', () => {
        localStorage.setItem('policyAccepted', 'true'); 
        wrapper.style.display = 'none';
        if (targetUrl) {
            navigateWithTransition(targetUrl);
        }
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
        return {
            'Горы': 'Рекомендую Алматы — отличное место для горного отдыха.',
            'Море': 'Актау — лучший вариант для отдыха у моря в Казахстане.',
            'Город': 'Астана — современный мегаполис с уникальной архитектурой.',
            'Культура': 'Туркестан подойдёт для исторического путешествия.',
            'Активный отдых': 'Алматы или Шымкент — отличные варианты.'
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
        const items = type === 'main' ?
            ['Горы', 'Море', 'Город', 'Культура', 'Активный отдых'] :
            ['Показать ещё', 'Сбросить выбор'];
        items.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-opt-btn';
            btn.innerText = opt;
            optionsEl.appendChild(btn);
        });
    }

    function handleOption(opt) {
}

function initApp() {
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
                    navigateWithTransition('form.html'); // ИСПРАВЛЕНО: Переход после успешной регистрации
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
            sessionStorage.setItem('tempSurveyData', JSON.stringify(userData)); // ИСПРАВЛЕНО: Сохраняем в sessionStorage
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
                    window.location.href = data.isAdmin ? 'admin.html' : 'form.html';
                } else {
                    loginError.style.display = 'block';
                }
            } catch (error) {
                console.error("Ошибка сервера:", error);
            }
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
    const q = questions[currentStep];
    document.getElementById('questionTitle').innerText = q.title;
    document.getElementById('questionDesc').innerText = q.desc;
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

    checkAndInjectPolicy(); // Проверяем политику на странице результатов
    // ИСПРАВЛЕНО: Если данных анкеты нет, перенаправляем на форму
    if (!surveyData) {
        navigateWithTransition('index.html');
        return;
    }
    const resDiv = document.getElementById('resultsList');
    const recommendedCities = getRecommendedCities(surveyData);

    currentRecommendedCities = recommendedCities; // Обновляем глобальную переменную

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
    const allCitiesList = document.getElementById('allCitiesList'); // Добавлено объявление

    // ИСПРАВЛЕНО: Переносим инициализацию слушателя в initApp, чтобы он не дублировался
    // и был доступен сразу после загрузки DOM.
    // Здесь только обновляем текст кнопки, если она уже есть.
    if (showAllCitiesBtn && allCitiesContainer) {
        const isHidden = window.getComputedStyle(allCitiesContainer).display === 'none';
        showAllCitiesBtn.innerText = isHidden ? translations[currentLang].show_all_cities : translations[currentLang].hide_all_cities;

        // Если контейнер был открыт, перерисовываем его содержимое при смене языка
        if (!isHidden && allCitiesList) {
            // currentRecommendedCities должна быть глобальной и обновляться в showResults
            // или передаваться сюда, если showResults уже отработал.
            renderAllCities(allCitiesList, currentRecommendedCities);
        }
    }

    // ИСПРАВЛЕНО: Если данных анкеты нет, перенаправляем на форму
    if (!surveyData) {
        navigateWithTransition('index.html');
        return;
    }

    // ... остальной код showResults ...
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
            }
        };
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
