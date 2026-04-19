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
            { n: 'Левобережный комплекс', a: 'ул. Сатпаева' },
            { n: 'Гора Казахстан', a: 'Усть-Каменогорск' }
        ],
        tags: { city: true, mountains: true, nature: true, quiet: true, industrial: true, lively: false, activity: false, culture: false, history: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Музей Достоевского', a: 'ул. Достоевского, 118' },
            { n: 'Подвесной мост', a: 'Семей' }
        ],
        tags: { city: true, culture: true, history: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Пешеходный мост «10 лет Независимости»', a: 'Атырау' },
            { n: 'Мечеть Имангали', a: 'ул. Сатпаева' }
        ],
        tags: { city: true, industrial: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, culture: false, history: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Памятник Чарли Чаплину', a: 'ул. Гоголя' },
            { n: 'Парк 25-летия Независимости', a: 'Костанай' }
        ],
        tags: { city: true, nature: true, quiet: true, lively: false, mountains: false, activity: false, culture: false, history: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Мемориал Коркыт Ата', a: 'трасса Самара-Шымкент' },
            { n: 'Мечеть Айтбая', a: 'ул. Жалантос Бахадура' }
        ],
        tags: { city: true, history: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, culture: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Храм Христа Спасителя', a: 'пр. Нурсултана Назарбаева, 202' },
            { n: 'Музей Пушкина', a: 'ул. Н. Назарбаева, 168' }
        ],
        tags: { city: true, history: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, culture: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Резиденция Абылай хана', a: 'ул. Карима Сутюшева, 1Б' },
            { n: 'Парк Культуры', a: 'ул. Конституции Казахстана' }
        ],
        tags: { city: true, history: true, quiet: true, nature: true, lively: false, mountains: false, activity: false, culture: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Сопка Букпа', a: 'ул. Кенесары' },
            { n: 'Музей Акана Серэ', a: 'ул. Ауэзова, 163' }
        ],
        tags: { mountains: true, activity: true, nature: true, quiet: true, city: true, lively: false, culture: false, history: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Памятник Кабанбай батыру', a: 'ул. Тауелсиздик' },
            { n: 'Центральный парк', a: 'ул. Кабанбай батыра' }
        ],
        tags: { culture: true, activity: true, city: true, quiet: true, history: true, mountains: false, nature: false, lively: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Набережная озера Балхаш', a: 'ул. Желтоксан' },
            { n: 'Монумент Самолет МиГ-21', a: 'ул. Абая' }
        ],
        tags: { sea: true, activity: true, beach: true, nature: true, quiet: true, city: false, culture: false, history: false, modern: false, mountains: false, industrial: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Мечеть им. Машхура Жусупа', a: 'ул. М. Жусупа' },
            { n: 'Разрез Богатырь', a: 'смотровая площадка на окраине' }
        ],
        tags: { city: true, culture: true, industrial: true, lively: true, history: true, mountains: false, activity: false, nature: false, modern: false, beach: false, sea: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Рудненский музей', a: 'ул. Ленина, 40' },
            { n: 'Парк культуры', a: 'пр. Комсомольский' }
        ],
        tags: { city: true, activity: true, industrial: true, lively: true, mountains: false, nature: false, culture: false, history: false, modern: false, beach: false, sea: false },
        budget_suitability: { low: true, medium: false, high: false }
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
            { n: 'Казино Astoria', a: 'трасса Алматы-Конаев' },
            { n: 'Городской пляж', a: 'береговая линия' }
        ],
        tags: { sea: true, activity: true, beach: true, lively: true, modern: true, city: true, mountains: false, nature: false, culture: false, history: false, industrial: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Поющий бархан', a: 'ГНПП Алтын-Эмель' },
            { n: 'Горы Актау', a: 'ГНПП Алтын-Эмель' }
        ],
        tags: { mountains: true, activity: true, nature: true, quiet: true, history: true, culture: false, city: false, lively: false, modern: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Памятник Первопроходцам', a: 'центр' },
            { n: 'Мечеть Абиш-Ата', a: 'мкр. Шугыла' }
        ],
        tags: { activity: true, culture: true, industrial: true, quiet: true, history: true, city: true, mountains: false, nature: false, lively: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Гора Три брата', a: 'окрестности' },
            { n: 'Западно-Алтайский заповедник', a: 'ул. Семеновой' }
        ],
        tags: { mountains: true, activity: true, nature: true, quiet: true, snow: true, city: false, culture: false, history: false, lively: false, modern: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Историко-краеведческий музей', a: 'мкр. 3' },
            { n: 'Центральная площадь', a: 'ул. Ленина' }
        ],
        tags: { city: true, activity: true, industrial: true, quiet: true, modern: true, culture: false, history: false, mountains: false, nature: false, lively: false, beach: false },
        budget_suitability: { low: false, medium: true, high: false }
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
            { n: 'Гагаринский старт', a: 'площадка №1' },
            { n: 'Музей космодрома', a: 'площадка №2' }
        ],
        tags: { culture: true, activity: true, history: true, city: true, modern: true, quiet: false, mountains: false, nature: false, lively: false, beach: false, industrial: false },
        budget_suitability: { low: false, medium: false, high: true }
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
            { n: 'Лыжный трамплин', a: 'ул. Промышленная' },
            { n: 'Озеро Щучье', a: 'Щучинск' }
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
