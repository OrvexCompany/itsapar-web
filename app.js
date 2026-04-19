// --- Данные вопросов ---
const questions = [
    { id: 'mountains', title: 'Горы?', desc: 'Любите ли вы походы и свежий горный воздух?' },
    { id: 'sea', title: 'Море/Вода?', desc: 'Предпочитаете пляжный отдых или озера?' },
    { id: 'city', title: 'Города?', desc: 'Вам нравится шум мегаполиса и архитектура?' },
    { id: 'activity', title: 'Активность?', desc: 'Готовы ли вы к экстриму и долгим прогулкам?' },
    { id: 'culture', title: 'Культура?', desc: 'Интересуетесь ли вы историей и музеями?' }
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
            { name: 'Basilic', address: 'ул. Шевченко, 127' },
            { name: 'Тагам', address: 'мкр. Орбита-3, 1' }
        ],
        restaurants_expensive: [
            { name: 'Seven Bar & Restaurant', address: 'пр. Аль-Фараби, 77/7' },
            { name: 'Villa Dei Fiori', address: 'пр. Аль-Фараби, 140а' },
            { name: 'Manana', address: 'пр. Достык, 535' }
        ],
        locations: [
            { n: 'Шымбулак', a: 'ул. Керей-Жанибек хандар, 640' },
            { n: 'Кок-Тобе', a: 'пр. Достык, 104б' }
        ],
        tags: { mountains: true, activity: true, city: true, culture: true, lively: true, nature: true, modern: true, quiet: false, history: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: false, high: true }
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
            { n: 'Байтерек', a: 'ул. Водяная, 1' },
            { n: 'Мечеть Хазрет Султан', a: 'пр. Тауелсиздик, 48' }
        ],
        tags: { city: true, culture: true, modern: true, lively: true, quiet: false, mountains: false, activity: false, nature: false, history: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: false, high: true }
    },
    {
        n: 'Актау',
        d: 'Единственный город на берегу моря с уникальными Каспийскими закатами.',
        img: 'https://images.unsplash.com/photo-1623589414995-2d6ec4c389be?q=80&w=600',
        hotels_budget: [
            { name: 'Tarlan Hotel', address: '29-й мкр, 226' },
            { name: 'Гостиница Рауан', address: '28-й мкр, 48/1' }
        ],
        hotels_expensive: [
            { name: 'Caspian Riviera Grand Palace', address: '4-й мкр, 39' },
            { name: 'Rixos Water World Aktau', address: 'Варшавская ул., 1' }
        ],
        restaurants_budget: [
            { name: 'Столовая Тагам', address: '28-й мкр, 23' },
            { name: 'Fusion Food', address: '29-й мкр, 51' },
            { name: 'Асхана Асқабақ', address: '3-й мкр, 65' }
        ],
        restaurants_expensive: [
            { name: 'Barashka', address: '21-й мкр, 4' },
            { name: 'Aidana Plaza Restaurant', address: '14-й мкр, 59' },
            { name: 'Fregat', address: '4-й мкр, набережная' }
        ],
        locations: [
            { n: 'Скальная тропа', a: '4-й мкр' },
            { n: 'Маяк на крыше дома', a: '4-й мкр, дом 9' }
        ],
        tags: { sea: true, city: true, nature: true, quiet: true, beach: true, lively: false, mountains: false, activity: false, culture: false, history: false, modern: false, industrial: false },
        budget_suitability: { low: false, medium: true, high: true }
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
            { n: 'Мавзолей Х.А. Яссауи', a: 'пр. Бекзата Саттарханова' },
            { n: 'Керуен-сарай', a: 'ул. Жолбарыс Хана' }
        ],
        tags: { culture: true, history: true, quiet: true, city: true, lively: false, mountains: false, activity: false, nature: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Поляна Абылай хана', a: 'нацпарк Бурабай' },
            { n: 'Скала Жумбактас', a: 'озеро Боровое' }
        ],
        tags: { nature: true, mountains: true, activity: true, quiet: true, city: false, culture: false, history: false, lively: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: false, high: true }
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
            { n: 'Цитадель', a: 'Старый город' },
            { n: 'парк «Жайлауколь»', a: 'мкр. Туран' }
        ],
        tags: { city: true, culture: true, history: true, lively: true, quiet: false, mountains: false, activity: false, nature: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Музей Карлага', a: 'п. Долинка, ул. Школьная, 39' },
            { n: 'Центральный парк', a: 'ул. Чкалова' }
        ],
        tags: { city: true, culture: true, history: true, quiet: true, industrial: true, lively: false, mountains: false, activity: false, nature: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Планетарий', a: 'ул. Жанкожа батыра, 50' },
            { n: 'Мечеть Нур Гасыр', a: 'пр. Абилкайыр хана, 92' }
        ],
        tags: { city: true, quiet: true, industrial: true, nature: true, lively: false, mountains: false, activity: false, culture: false, history: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Мавзолей Айша-Биби', a: 'с. Айша биби' },
            { n: 'Комплекс «Древний Тараз»', a: 'ул. Толе би' }
        ],
        tags: { city: true, culture: true, history: true, quiet: true, lively: false, mountains: false, activity: false, nature: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Центральная Набережная', a: 'Павлодар' },
            { n: 'Мечеть Машхура Жусупа', a: 'ул. Каирбаева, 1' }
        ],
        tags: { city: true, nature: true, quiet: true, industrial: true, lively: false, mountains: false, activity: false, culture: false, history: false, modern: false, beach: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Усть-Каменогорск',
        d: 'Восточно-Казахстанский город, окруженный горами и реками, индустриальный.',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
        hotels: [
            { name: 'Shiny River Hotel', address: 'ул. Казахстан 77' },
            { name: 'Dedeman Oskemen Tavros', address: 'ул. Кабанбай Батыра 160' }
        ],
        locations: [
            { n: 'Левобережный комплекс', a: 'ул. Сатпаева' },
            { n: 'Гора Казахстан', a: 'Усть-Каменогорск' }
        ],
        restaurants: [
            { n: 'Serebro', a: 'пр. Шакарима, 1/1' },
            { n: 'Две Реки', a: 'ул. Пермитина, 11' },
            { n: 'Пицца Блюз', a: 'ул. Казахстан, 64' }
        ],
        tags: { city: true, mountains: true, nature: true, quiet: true, industrial: true, lively: false, activity: false, culture: false, history: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
    },
    {
        n: 'Семей',
        d: 'Исторический город на Иртыше, связанный с Абаем Кунанбаевым и Достоевским.',
        img: 'https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=600',
        hotels: [
            { name: 'Semey Hotel', address: 'ул. Абая 100' },
            { name: 'Grand Hotel Semey', address: 'ул. Кабанбай Батыра 27' }
        ],
        locations: [
            { n: 'Музей Достоевского', a: 'ул. Достоевского, 118' },
            { n: 'Подвесной мост', a: 'Семей' }
        ],
        restaurants: [
            { n: 'Zhibek Zholy', a: 'ул. Мухамедханова, 42' },
            { n: 'Provance', a: 'ул. Мухамедханова, 8' },
            { n: 'Kish-Mish', a: 'ул. Интернациональная, 25' }
        ],
        tags: { city: true, culture: true, history: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Атырау',
        d: 'Нефтяная столица Казахстана, расположен на реке Урал, близость к Каспийскому морю.',
        img: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=600',
        hotels: [
            { name: 'Renaissance Atyrau Hotel', address: 'ул. Сатпаева 15Б' },
            { name: 'Marriott Executive Apartments Atyrau', address: 'ул. Абая 12' }
        ],
        locations: [
            { n: 'Пешеходный мост «10 лет Независимости»', a: 'Атырау' },
            { n: 'Мечеть Имангали', a: 'ул. Сатпаева' }
        ],
        restaurants: [
            { n: 'Sarayshyq', a: 'мкр. Мунайшы, 1Б' },
            { n: 'Bavarius', a: 'мкр. Авангард, 4, дом 12А' },
            { n: 'Cinque Sensi', a: 'ул. Айтеке би, 55' }
        ],
        tags: { city: true, industrial: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, culture: false, history: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
    },
    {
        n: 'Костанай',
        d: 'Аграрный регион, спокойный город с парками и скверами, озера неподалеку.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels: [
            { name: 'Medeu Hotel', address: 'ул. Аль-Фараби 118' },
            { name: 'Palace Hotel Kostanay', address: 'ул. Баймагамбетова 162' }
        ],
        locations: [
            { n: 'Памятник Чарли Чаплину', a: 'ул. Гоголя' },
            { n: 'Парк 25-летия Независимости', a: 'Костанай' }
        ],
        restaurants: [
            { n: 'Медведь', a: 'ул. Гоголя, 62' },
            { n: 'Toscana', a: 'ул. Тәуелсіздік, 81' },
            { n: 'Гости', a: 'ул. Пушкина, 43' }
        ],
        tags: { city: true, nature: true, quiet: true, lively: false, mountains: false, activity: false, culture: false, history: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: true, high: false }
    },
    {
        n: 'Кызылорда',
        d: 'Исторический город, расположенный в пустынной местности, связан с космодромом Байконур.',
        img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600',
        hotels: [
            { name: 'Aray Hotel', address: 'ул. Коркыт Ата 1' },
            { name: 'Sultan Plaza Hotel', address: 'ул. Абая 10' }
        ],
        locations: [
            { n: 'Мемориал Коркыт Ата', a: 'трасса Самара-Шымкент' },
            { n: 'Мечеть Айтбая', a: 'ул. Жалантос Бахадура' }
        ],
        restaurants: [
            { n: 'Monaco', a: 'ул. Жалантос Бахадура, 19' },
            { n: 'Qobyz', a: 'ул. Коркыт Ата, 12' },
            { n: 'Veranda', a: 'пр. Абая, 37А' }
        ],
        tags: { city: true, history: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, culture: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Уральск',
        d: 'Старинный город на реке Урал, богатая история, архитектура 19 века.',
        img: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=600',
        hotels: [
            { name: 'Chagala Hotel Uralsk', address: 'ул. Достык 186' },
            { name: 'Pushkin Hotel', address: 'ул. Пушкина 65' }
        ],
        locations: [
            { n: 'Храм Христа Спасителя', a: 'пр. Нурсултана Назарбаева, 202' },
            { n: 'Музей Пушкина', a: 'ул. Н. Назарбаева, 168' }
        ],
        restaurants: [
            { n: 'Pivovaroff', a: 'ул. Хамида Чурина, 116' },
            { n: 'Venezia', a: 'пр. Нурсултана Назарбаева, 179' },
            { n: 'Zolotaya Orda', a: 'пр. Абая, 63' }
        ],
        tags: { city: true, history: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, culture: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Петропавловск',
        d: 'Северный город Казахстана, исторический центр, озера и леса вокруг.',
        img: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=600',
        hotels: [
            { name: 'Kyzylzhar Hotel', address: 'ул. Конституции Казахстана 23' },
            { name: 'Green Which Hotel', address: 'ул. Интернациональная 50' }
        ],
        locations: [
            { n: 'Резиденция Абылай хана', a: 'ул. Карима Сутюшева, 1Б' },
            { n: 'Парк Культуры', a: 'ул. Конституции Казахстана' }
        ],
        restaurants: [
            { n: 'Трактир на Парковой', a: 'ул. Парковая, 141' },
            { n: 'Semiramis', a: 'ул. Конституции Казахстана, 54' },
            { n: 'Sahar', a: 'ул. Конституции Казахстана, 13' }
        ],
        tags: { city: true, history: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, culture: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Кокшетау',
        d: 'Уютный город у подножия сопок, ворота в край озер и живописной природы.',
        img: 'https://images.unsplash.com/photo-1549416805-0e7740e2136e?q=80&w=600',
        hotels: [
            { name: 'Достык', address: 'ул. Абая, 105' },
            { name: 'Кокшетау', address: 'ул. Кенесары, 47' }
        ],
        locations: [
            { n: 'Сопка Букпа', a: 'ул. Кенесары' },
            { n: 'Музей Акана Серэ', a: 'ул. Ауэзова, 163' }
        ],
        restaurants: [
            { n: 'Мясо', a: 'ул. Ауэзова, 161' },
            { n: 'Бульвар', a: 'ул. Абая, 114' },
            { n: 'Зодиак', a: 'ул. Сатпаева, 15' }
        ],
        tags: { mountains: true, activity: true, nature: true, quiet: true, city: true, lively: false, culture: false, history: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Талдыкорган',
        d: 'Зеленый город с богатой культурой и множеством возможностей для активного отдыха.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels: [
            { name: 'Sunrise Hotel', address: 'ул. Балапанова, 23' },
            { name: 'Green Villa', address: 'ул. Гаухар Ана, 116А' }
        ],
        locations: [
            { n: 'Памятник Кабанбай батыру', a: 'ул. Тауелсиздик' },
            { n: 'Центральный парк', a: 'ул. Кабанбай батыра' }
        ],
        restaurants: [
            { n: 'АйСер', a: 'ул. Тауелсиздик, 89' },
            { n: 'Viva', a: 'ул. Жансугурова, 114' },
            { n: 'Бахчисарай', a: 'ул. Гаухар Ана, 116' }
        ],
        tags: { culture: true, activity: true, city: true, quiet: true, history: true, mountains: false, nature: false, lively: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Балхаш',
        d: 'Город на берегу уникального озера, идеален для водных активностей и отдыха на пляже.',
        img: 'https://images.unsplash.com/photo-1506929662133-570c13a5c32d?q=80&w=600',
        hotels: [
            { name: 'Альпина', address: 'ул. Сейфуллина, 40' },
            { name: 'Жемчужина', address: 'ул. Ленина, 1' }
        ],
        locations: [
            { n: 'Набережная озера Балхаш', a: 'ул. Желтоксан' },
            { n: 'Монумент Самолет МиГ-21', a: 'ул. Абая' }
        ],
        restaurants: [
            { n: 'Беркут', a: 'ул. Желтоксан, 9' },
            { n: 'У Озера', a: 'мкр. Сатпаева' },
            { n: 'Пивовар', a: 'ул. Мира, 4' }
        ],
        tags: { sea: true, activity: true, beach: true, nature: true, quiet: true, city: false, culture: false, history: false, modern: false, mountains: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Экибастуз',
        d: 'Индустриальный гигант с масштабными разрезами и интересными культурными объектами.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels: [
            { name: 'Альянс', address: 'ул. М. Жусупа, 101' },
            { name: 'Шахтер', address: 'ул. Строительная, 50' }
        ],
        locations: [
            { n: 'Мечеть им. Машхура Жусупа', a: 'ул. М. Жусупа' },
            { n: 'Разрез Богатырь', a: 'смотровая площадка на окраине' }
        ],
        restaurants: [
            { n: 'Пивовар', a: 'ул. Ауэзова, 47' },
            { n: 'Эмираты', a: 'ул. Кьюиши Исатая, 3' },
            { n: 'Донер Хаус', a: 'ул. М. Жусупа, 94' }
        ],
        tags: { city: true, culture: true, industrial: true, lively: true, history: true, mountains: false, activity: false, nature: false, modern: false, beach: false, sea: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Рудный',
        d: 'Город горняков с оживленной атмосферой и разнообразными парками.',
        img: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=600',
        hotels: [
            { name: 'Рудный', address: 'ул. Ленина, 107' },
            { name: 'Виктория', address: 'ул. Корчагина, 116' }
        ],
        locations: [
            { n: 'Рудненский музей', a: 'ул. Ленина, 40' },
            { n: 'Парк культуры', a: 'пр. Комсомольский' }
        ],
        restaurants: [
            { n: 'Золотой Телец', a: 'ул. Ленина, 70' },
            { n: 'Мята', a: 'ул. 50 лет Октября, 42' },
            { n: 'Горняк', a: 'пр. Комсомольский, 33' }
        ],
        tags: { city: true, activity: true, industrial: true, lively: true, mountains: false, nature: false, culture: false, history: false, modern: false, beach: false, sea: false },
        budget_suitability: { low: true, medium: false, high: false }
    },
    {
        n: 'Конаев',
        d: 'Морской курорт близ Алматы, центр развлечений и пляжного отдыха.',
        img: 'https://images.unsplash.com/photo-1544984243-75a800232997?q=80&w=600',
        hotels: [
            { name: 'MoreLux', address: 'Северное побережье' },
            { name: 'Riviera', address: 'Юго-западное побережье' }
        ],
        locations: [
            { n: 'Казино Astoria', a: 'трасса Алматы-Конаев' },
            { n: 'Городской пляж', a: 'береговая линия' }
        ],
        restaurants: [
            { n: 'More', a: 'Северное побережье' },
            { n: 'Breeze', a: 'ул. Индустриальная' },
            { n: 'Марина', a: 'мкр. 18' }
        ],
        tags: { sea: true, activity: true, beach: true, lively: true, modern: true, city: true, mountains: false, nature: false, culture: false, history: false, industrial: false },
        budget_suitability: { low: false, medium: true, high: false }
    },
    {
        n: 'Басши (Алтын-Эмель)',
        d: 'Уникальный природный заповедник с поющими барханами и марсианскими пейзажами.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels: [
            { name: 'Гостевой дом Алтын-Эмель', address: 'ул. Центральная' },
            { name: 'Altyn-Emel Hotel', address: 'центр поселка' }
        ],
        locations: [
            { n: 'Поющий бархан', a: 'ГНПП Алтын-Эмель' },
            { n: 'Горы Актау', a: 'ГНПП Алтын-Эмель' }
        ],
        restaurants: [
            { n: 'Кафе Айжан', a: 'трасса А-3' },
            { n: 'Столовая Алтын-Эмель', a: 'ул. Центральная' },
            { n: 'Кафе Арман', a: 'ул. Центральная' }
        ],
        tags: { mountains: true, activity: true, nature: true, quiet: true, history: true, culture: false, city: false, lively: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: true, high: false }
    },
    {
        n: 'Жанаозен',
        d: 'Город в сердце Мангистау, отправная точка для путешествий по пустыням и каньонам.',
        img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
        hotels: [
            { name: 'Рахат', address: 'мкр. Рахат-3' },
            { name: 'Navoi', address: 'ул. Навои' }
        ],
        locations: [
            { n: 'Памятник Первопроходцам', a: 'центр' },
            { n: 'Мечеть Абиш-Ата', a: 'мкр. Шугыла' }
        ],
        restaurants: [
            { n: 'Шафран', a: 'мкр. Рахат' },
            { n: 'Kuanysh', a: 'ул. Сатпаева' },
            { n: 'Дастархан', a: 'мкр. Мунайлы' }
        ],
        tags: { activity: true, culture: true, industrial: true, quiet: true, history: true, city: true, mountains: false, nature: false, lively: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
    },
    {
        n: 'Риддер',
        d: 'Горный край на востоке с альпийскими лугами и сибирской тайгой.',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
        hotels: [
            { name: 'Алтай', address: 'пр. Независимости, 10' },
            { name: 'Риддер Резорт', address: 'район горнолыжной базы' }
        ],
        locations: [
            { n: 'Гора Три брата', a: 'окрестности' },
            { n: 'Западно-Алтайский заповедник', a: 'ул. Семеновой' }
        ],
        restaurants: [
            { n: 'Эдельвейс', a: 'ул. Семеновой, 14' },
            { n: 'Лесная сказка', a: 'база отдыха' },
            { n: 'Алтай', a: 'пр. Независимости' }
        ],
        tags: { mountains: true, activity: true, nature: true, quiet: true, snow: true, city: false, culture: false, history: false, lively: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
    },
    {
        n: 'Степногорск',
        d: 'Индустриальный город с интересной архитектурой и активной жизнью.',
        img: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600',
        hotels: [
            { name: 'Степногорск', address: 'мкр. 4' },
            { name: 'Ак Отау', address: 'мкр. 2' }
        ],
        locations: [
            { n: 'Историко-краеведческий музей', a: 'мкр. 3' },
            { n: 'Центральная площадь', a: 'ул. Ленина' }
        ],
        restaurants: [
            { n: 'Олимп', a: 'мкр. 4' },
            { n: 'Азия', a: 'мкр. 3' },
            { n: 'Корона', a: 'мкр. 6' }
        ],
        tags: { city: true, activity: true, industrial: true, quiet: true, modern: true, culture: false, history: false, mountains: false, nature: false, lively: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
    },
    {
        n: 'Байконур',
        d: 'Уникальный город-космодром, место старта легендарных космических миссий.',
        img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600',
        hotels: [
            { name: 'Центральная', address: 'ул. Гагарина, 13' },
            { name: 'Семь ветров', address: 'ул. Абая, 1' }
        ],
        locations: [
            { n: 'Гагаринский старт', a: 'площадка №1' },
            { n: 'Музей космодрома', a: 'площадка №2' }
        ],
        restaurants: [
            { n: 'Звездное небо', a: 'ул. Янгеля' },
            { n: 'Центральный', a: 'ул. Гагарина' },
            { n: 'Байконур', a: 'пр. Королева' }
        ],
        tags: { culture: true, activity: true, history: true, city: true, modern: true, quiet: false, mountains: false, nature: false, lively: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: false, high: true }
    },
    {
        n: 'Щучинск',
        d: 'Курортный город среди сосновых лесов и гор, центр зимних видов спорта.',
        img: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=600',
        hotels: [
            { name: 'Swissôtel Wellness Resort', address: 'берег оз. Щучье' },
            { name: 'Wyndham Garden', address: 'ул. Кенесары' }
        ],
        locations: [
            { n: 'Лыжный трамплин', a: 'ул. Промышленная' },
            { n: 'Озеро Щучье', a: 'Щучинск' }
        ],
        restaurants: [
            { n: 'Park House', a: 'берег оз. Щучье' },
            { n: 'Challet', a: 'трасса на Бурабай' },
            { n: 'Aura', a: 'ул. Набережная' }
        ],
        tags: { activity: true, mountains: true, nature: true, quiet: true, history: false, city: false, culture: false, lively: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: false, high: true }
    }
];
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
        initTheme(); // Инициализация темы
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
                <h2>Соглашение и защита данных</h2>
                <div class="policy-text">
                    <p>Добро пожаловать в ITSapar. Используя сервис, вы подтверждаете:</p>
                    <p>Настоящим подтверждается согласие пользователя с условиями эксплуатации сервиса ITSapar:</p>
                    <ul>
                        <li>Вам исполнилось <strong>18 лет</strong>.</li>
                        <li>Данные используются только для подбора маршрута.</li>
                        <li>Вся информация хранится локально в вашем браузере.</li>
                        <li>Вы обязуетесь не копировать контент (Закон РК «Об авторском праве»).</li>
                        <li><strong>Возрастной ценз:</strong> Доступ к функционалу сервиса разрешен исключительно лицам, достигшим 18-летнего возраста.</li>
                        <li><strong>Конфиденциальность данных:</strong> Информация обрабатывается только для формирования рекомендаций и хранится локально (LocalStorage).</li>
                        <li><strong>Кибербезопасность:</strong> Категорически запрещены любые формы несанкционированного доступа, попытки взлома, декомпиляции кода или нарушения целостности системы.</li>
                        <li><strong>Авторское право:</strong> Весь контент защищен законодательством РК «Об авторском праве и смежных правах». Копирование запрещено.</li>
                        <li><strong>Юридическая ответственность:</strong> Незаконные действия в отношении ресурса влекут ответственность согласно Уголовному кодексу РК.</li>
                        <li><strong>Отказ от ответственности:</strong> Сервис носит справочный характер; окончательный выбор маршрута остается за пользователем.</li>
                    </ul>
                </div>
                <div class="policy-check">
                    <input type="checkbox" id="policyCheckbox">
                    <label for="policyCheckbox">Я ознакомлен с условиями Соглашения и подтверждаю возраст 18+</label>
                </div>
                <button id="acceptPolicy" class="btn btn-primary full-width" disabled>Принять и продолжить</button>
            </div>
        </div>
    `;

    const btn = document.getElementById('acceptPolicy');
    const chk = document.getElementById('policyCheckbox');
    
    chk.addEventListener('change', (e) => btn.disabled = !e.target.checked);
    btn.addEventListener('click', () => {
        document.getElementById('policyModal').style.display = 'none';
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
                    AI помощник работает на основе заранее заданных сценариев. 
                    Он не подключён к интернету. Рекомендуется проверять важную информацию.
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

    const chatResponses = {
        "Горы": "Рекомендую Алматы — отличное место для горного отдыха и походов на Шымбулак.",
        "Море": "Актау — лучший вариант для отдыха у моря в Казахстане на Каспийском побережье.",
        "Город": "Астана — современный мегаполис с уникальной архитектурой и множеством музеев.",
        "Культура": "Туркестан подойдёт для глубокого культурного и исторического путешествия.",
        "Активный отдых": "Алматы или Шымкент — отличные варианты для тех, кто не любит сидеть на месте."
    };

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
            ? ["Горы", "Море", "Город", "Культура", "Активный отдых"]
            : ["Показать ещё", "Сбросить выбор"];
        
        items.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-opt-btn';
            btn.innerText = opt;
            btn.onclick = () => handleOption(opt);
            optionsEl.appendChild(btn);
        });
    }

    function handleOption(opt) {
        if (opt === "Показать ещё" || opt === "Сбросить выбор") {
            if (opt === "Сбросить выбор") {
                messagesEl.innerHTML = '';
                localStorage.removeItem('chatHistory');
                addMessage("Привет! Я помогу выбрать город. Что вас интересует?", "ai");
            }
            renderOptions('main');
            return;
        }

        addMessage(opt, "user");
        
        // Имитация задержки AI
        setTimeout(() => {
            const response = chatResponses[opt] || "Интересный выбор! Хотите узнать больше?";
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
            saved.forEach(m => {
                const bubble = document.createElement('div');
                bubble.className = `chat-bubble bubble-${m.sender}`;
                bubble.innerText = m.text;
                messagesEl.appendChild(bubble);
            });
            messagesEl.scrollTop = messagesEl.scrollHeight;
            renderOptions('main');
        } else {
            addMessage("Привет! Я помогу выбрать город. Что вас интересует?", "ai");
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
                injectPolicy(href);
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
                        errorDiv.style.display = 'block';
                    }
                }
            } catch (error) {
                console.error("Ошибка сервера:", error);
                alert("Сервер не запущен. Запустите 'node server.js'");
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
                alert('Вы должны быть старше 18 лет, чтобы планировать межгородские путешествия.');
                return; // Прерываем выполнение функции
            }

            Object.assign(userData, { // Используем Object.assign для добавления остальных полей
                fullName: document.getElementById('fullName').value,
                // age уже есть
                budget: document.getElementById('budget').value,
                tripType: document.getElementById('tripType').value,
                answers: {}
            });
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
                    loginError.style.display = 'block';
                }
            } catch (error) {
                console.error("Ошибка сервера:", error);
                alert("Сервер не запущен. Запустите 'node server.js'");
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
                renderAdminTable();
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
        saveAndFinish();
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
    const userAnswers = survey.answers;
    // Проверяем, что userAnswers существует и является объектом
    if (!userAnswers || typeof userAnswers !== 'object') return [];
    const userTripType = survey.tripType;
    const userBudget = survey.budget;
    
    // 1. ЖЕСТКАЯ ФИЛЬТРАЦИЯ ПО БЮДЖЕТУ
    // Предлагаем только те города, которые соответствуют категории пользователя
    const budgetMatchedCities = allCities.filter(city => city.budget_suitability[userBudget]);

    let scoredCities = budgetMatchedCities.map(city => {
        let score = 0;

        // 1. Оценка по ответам на свайп-опрос
        for (const key in userAnswers) {
            if (userAnswers[key] && city.tags[key]) {
                score += 2; // Добавляем очки за совпадение интересов
            } else if (!userAnswers[key] && city.tags[key]) {
                score -= 1; // Вычитаем очки, если пользователь не хочет, а в городе это есть
            }
        }

        // 2. Оценка по типу поездки
        if (userTripType === 'family') {
            if (city.tags.quiet || city.tags.nature || city.tags.history || city.tags.culture) score += 3;
            if (city.tags.lively) score -= 2;
        } else if (userTripType === 'friends') {
            if (city.tags.activity || city.tags.lively || city.tags.city) score += 3;
            if (city.tags.quiet) score -= 1;
        } else if (userTripType === 'solo') {
            // Для одиночных поездок более гибкие предпочтения
            if (city.tags.activity || city.tags.culture || city.tags.nature) score += 1;
        }

        return { city, score };
    });

    // Сортируем города по убыванию очков
    scoredCities.sort((a, b) => b.score - a.score);

    // Фильтруем города с отрицательным счетом (если они совсем не подходят)
    let recommendedCities = scoredCities.filter(item => item.score > 0).map(item => item.city);

    // Если рекомендаций мало, добавляем Боровое как универсальный вариант
    if (recommendedCities.length < 2) {
        const borovoe = allCities.find(c => c.n === 'Боровое');
        if (borovoe && !recommendedCities.some(c => c.n === 'Боровое')) {
            recommendedCities.push(borovoe);
        }
    }

    if (recommendedCities.length < 2) {
        const almaty = allCities.find(c => c.n === 'Алматы');
        if (almaty && !recommendedCities.some(c => c.n === 'Алматы')) recommendedCities.push(almaty);
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
        resDiv.innerHTML = '<p>К сожалению, мы не смогли подобрать идеальный город по вашим критериям. Попробуйте изменить ответы в опросе.</p>';
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
            popDiv.innerHTML = '<p>Не удалось загрузить популярные города</p>';
        }
    }

    // Логика для кнопки "Показать все города"
    const showAllCitiesBtn = document.getElementById('showAllCitiesBtn');
    const allCitiesContainer = document.getElementById('allCitiesContainer');
    const allCitiesList = document.getElementById('allCitiesList');

    let allCitiesRendered = false; // Флаг, чтобы рендерить список всех городов только один раз

    if (showAllCitiesBtn && allCitiesContainer && allCitiesList) {
        showAllCitiesBtn.addEventListener('click', () => {
            const isHidden = allCitiesContainer.style.display === 'none';
            allCitiesContainer.style.display = isHidden ? 'block' : 'none';
            showAllCitiesBtn.innerText = isHidden ? '🔼 Скрыть список городов' : '🔽 Показать все города';

            if (isHidden && !allCitiesRendered) {
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
    let showLabels = false;

    // Логика подбора контента
    if (budget === 'low') {
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
    } else if (budget === 'medium' || tripType === 'family') {
        // Смешанный вариант: указываем тип (бюджетный/дорогой)
        showLabels = true;
        const bHotels = (c.hotels_budget || []).slice(0, 1).map(h => ({ ...h, label: '<span style="color:var(--success)">(Эконом)</span> ' }));
        const eHotels = (c.hotels_expensive || []).slice(0, 1).map(h => ({ ...h, label: '<span style="color:var(--primary)">(Премиум)</span> ' }));
        displayedHotels = [...bHotels, ...eHotels];

        const bRest = (c.restaurants_budget || []).slice(0, 2).map(r => ({ ...r, label: '<span style="color:var(--success)">(Эконом)</span> ' }));
        const eRest = (c.restaurants_expensive || []).slice(0, 1).map(r => ({ ...r, label: '<span style="color:var(--primary)">(Премиум)</span> ' }));
        displayedRestaurants = [...bRest, ...eRest];
    } else {
        // Дефолт (на случай, если данные не подгрузились)
        displayedHotels = (c.hotels_budget || []).concat(c.hotels_expensive || []).slice(0, 2).map(h => ({ ...h, label: '' }));
        displayedRestaurants = (c.restaurants_budget || []).concat(c.restaurants_expensive || []).slice(0, 2).map(r => ({ ...r, label: '' }));
    }

    const card = document.createElement('div');
    card.className = 'res-card';
    card.innerHTML = `
        <h3>${c.n}</h3>
        <p>${c.d}</p>
        <div class="city-details" style="display: none;">
            <div class="hotels-list">
                <p><strong>🏨 Рекомендуемые отели:</strong></p>
                ${displayedHotels.map(h => `
                    <div class="hotel-item">
                        📍 ${h.label}${h.name}<br>
                        <small>${h.address}</small>
                    </div>
                `).join('')}
            </div>
            <div class="locations-list">
                <p><strong>🗺️ Места для посещения:</strong></p>
                ${c.locations ? c.locations.map(l => `<div class="hotel-item">📸 ${l.n}<br><small>${l.a}</small></div>`).join('') : '<small>Данные уточняются</small>'}
            </div>
            <div class="restaurants-list">
                <p><strong>🍽️ Где поесть:</strong></p>
                ${c.restaurants ? c.restaurants.map(r => `<div class="hotel-item">🍴 ${r.n}<br><small>${r.a}</small></div>`).join('') : '<small>Данные уточняются</small>'}
                ${displayedRestaurants.length > 0 ? displayedRestaurants.map(r => `
                    <div class="hotel-item">
                        🍴 ${r.label}${r.name}<br>
                        <small>${r.address}</small>
                    </div>
                `).join('') : '<small>Данные уточняются</small>'}
            </div>
        </div>
        <button class="btn btn-outline full-width toggle-details-btn" style="margin-top:15px; font-size: 0.7rem; padding: 8px;">Подробнее</button>
    `;

    const details = card.querySelector('.city-details');
    const btn = card.querySelector('.toggle-details-btn');
    
    const toggle = (e) => {
        e.stopPropagation();
        const isHidden = details.style.display === 'none';
        details.style.display = isHidden ? 'block' : 'none';
        btn.innerText = isHidden ? '🔼 Свернуть' : '🔽 Подробнее';
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
        
        let cityText = city.n;
        // Проверяем, является ли этот город одним из идеальных
        const isIdeal = idealCities.some(idealCity => idealCity.n === city.n);
        if (isIdeal) {
            cityText += ' <span class="ideal-city-note">(сайт выбрал этот город как идеальный для вас)</span>';
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

    try {
        const response = await fetch('/admin/analytics', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        if (!response.ok) {
            const msg = response.status === 403 ? "Доступ запрещен" : "Ошибка сервера (500)";
            body.innerHTML = `
                <tr><td colspan="6" style="text-align:center; color:var(--danger); padding:40px;">
                    ⚠️ ${msg}<br>
                    <button onclick="renderAdminTable()" class="btn btn-outline" style="margin-top:15px; font-size:0.7rem;">Перезагрузить данные</button>
                </td></tr>`;
            return;
        }

        const data = await response.json();
        const users = data.usersList || [];
        
        if (users.length === 0) {
            body.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:40px;">Пользователей пока нет</td></tr>`;
            return;
        }

        // Фильтруем пользователей по логину или по ФИО
        const filteredUsers = users.filter(u => {
            const nameMatch = u.fullName && typeof u.fullName === 'string' ? u.fullName.toLowerCase().includes(filter) : false;
            const loginMatch = u.username && typeof u.username === 'string' ? u.username.toLowerCase().includes(filter) : false;
            return nameMatch || loginMatch;
        });

        body.innerHTML = filteredUsers.map(u => `
            <tr>
                <td data-label="ФИО (Логин)">${u.fullName || '<i>Анкета не заполнена</i>'} (${u.username})</td>
                <td data-label="Возраст">${u.age || '-'}</td>
                <td data-label="Бюджет">${u.budget === 'low' ? 'до 50к' : u.budget === 'medium' ? '50к-200к' : u.budget === 'high' ? 'от 200к' : '-'}</td>
                <td data-label="Тип">${u.tripType || '-'}</td>
                <td data-label="Интересы">${(u.answers && typeof u.answers === 'object') ? Object.keys(u.answers).filter(k => u.answers[k]).join(', ') : '-'}</td>
                <td data-label="Действия">
                    ${(typeof u.fullName === 'string' && Array.isArray(u.recommendedCities) && u.recommendedCities.length > 0) ? 
                        `<button onclick="viewUserResults('${u.username}', 
                            '${u.fullName.replace(/'/g, "&apos;")}', 
                            '${u.recommendedCities.join(', ').replace(/'/g, "&apos;")}'
                        )" class="btn btn-outline" style="padding: 8px 16px; font-size: 0.7rem; text-transform: none; margin-right: 12px;">Результаты</button>` 
                        : ''
                    }
                    <button onclick="confirmDeleteUser('${u.username}')" class="btn btn-no" style="padding: 8px 16px; font-size: 0.7rem; text-transform: none;">Удалить</button>
                </td>
            </tr>
        `).join('');
    } catch (err) {
        console.error("Ошибка загрузки таблицы админа:", err);
    }
}

/**
 * Функция для просмотра рекомендаций админом
 */
window.viewUserResults = function(username, fullName, cities) {
    if (cities && cities.length > 0) {
        alert(`Для пользователя ${fullName || username} идеально подходят: ${cities}`);
    } else {
        alert("Пользователь еще не заполнил анкету или не прошел свайп-опрос.");
    }
};

/**
 * Функция удаления пользователя с проверкой пароля админа
 */
window.confirmDeleteUser = async function(username) {
    const password = prompt("Внимание! Вы пытаетесь удалить пользователя. Для подтверждения операции введите пароль администратора:");
    
    if (password === 'Orvex2026') {
        try {
            const res = await fetch(`/admin/user/${username}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            if (res.ok) {
                renderAdminTable(document.getElementById('adminSearch')?.value || '');
                alert(`Пользователь ${username} успешно удален из базы данных.`);
            }
        } catch (err) {
            alert("Ошибка при связи с сервером.");
        }
    } else if (password !== null) {
        alert("Ошибка! Неверный пароль администратора. Операция отменена.");
    }
};

// Глобальные функции для работы кнопок в HTML
window.clearSystemData = async function() {
    const pwd = prompt("Введите пароль администратора для ПОЛНОЙ очистки:");
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
