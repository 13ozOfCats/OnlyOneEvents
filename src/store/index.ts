import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		shortcut: 'http://ooe.borodadigital.com/video/showreel.mp4',
		showreel: 'http://ooe.borodadigital.com/video/showreel2.mp4',
		posts: [
			{
				id: 1,
				slug: 'rr-cullinan',
				menuTitle: 'ROLLS-ROYCE CULLINAN<br/>BLACK BADGE<br/>LAUNCH IN RUSSIA',
				color: '#1F0101',
				client: 'Rolls-Royce Motor Cars<br/>АВИЛОН',
				data: ['15 Января 2020'],
				title: 'ROLLS-ROYCE<br/>CULLINAN BB',
				subtitle: 'Российская премьера<br/>Rolls-Royce Cullinan<br/>Black Badge',
				text:
					'<p>Идеология автомобиля Cullinan Black Badge позволила трансформировать классическую презентацию Rolls-Royce в настоящий музыкальный ивент для избранных ценителей марки в Москве на площадке Loft Hall 2.</p><p>Автомобиль лично представил глава британской компании Rolls-Royce Motor Cars - Торстен Мюллер-Отвос. Специальными хедлайнерами премьеры стали современные звезды мировой EDM - Swanky Tunes и легенда российской клубной сцены Dj Грув, сеты которых подчеркнули динамичный характер модели и её статус "King of the night".Ведущим вечера стал VJ Арчи.</p><p>Специальное лазерное и световое шоу, а также эффектные декорации были разработаны для презентации автомобиля.</p><p>200 гостям мероприятия были предложены изысканные закуски и авторские напитки от Simple Wine и авторского бара «Онегин».</p>',
				mainImg: 'http://ooe.borodadigital.com/img/rr-cullinan_main.jpg',
				video: 'https://player.vimeo.com/video/420241411',
				gallery: [
					'http://ooe.borodadigital.com/img/rr-cullinan_1.jpg',
					'http://ooe.borodadigital.com/img/rr-cullinan_2.jpg',
					'http://ooe.borodadigital.com/img/rr-cullinan_3.jpg',
					'http://ooe.borodadigital.com/img/rr-cullinan_4.jpg',
					'http://ooe.borodadigital.com/img/rr-cullinan_5.jpg',
				],
			},
			{
				id: 2,
				slug: 'aston-martin-dbx',
				menuTitle: 'ASTON MARTIN DBX<br/>LAUNCH IN RUSSIA',
				color: '#040924',
				client: 'ASTON MARTIN<br>MOSCOW',
				data: ['1 этап - 27.09.2019-07.10.2019', '2 этап - 30-31 Января 2020'],
				title: 'Aston Martin<br>DBX',
				subtitle: 'Российская премьера<br/>Aston Martin DBX',
				text:
					'<p>Организация премьеры в России первого SUV от бренда Aston Martin - DBX.  Тизинговая кампания проекта была реализована в рамках F1 VTB GRAND-PRIX 2019 в Сочи, а также на протяжении 5 дней в Москве, где агентством были организованы выставочные павильоны для индивидуальных показов макета автомобиля.</p><p>Официальная презентация модели состоялась в Москве в январе 2020 года. В рамках двухдневного события автомобиль был представлен  вице-президентом и креативным директором Aston Martin Lagonda Мареком Райхманом ведущим СМИ, блогерам, а также клиентам Aston Martin Moscow для которых было организовано событие на площадке Grand Ballroom.</p><p>Агентством разработана и воплощена концепция мероприятия в стилистике британского рекламного видео DBX. В частности, для презентации был поставлен танцевальный шоу момент по мотивам оригинального ролика, поддержанный лазерным шоу.</p><p>Более 600 человек стали свидетелями события в основной день.</p><p>Помимо организации мерорприятия под ключ, привлечение партнеров для поддержки мероприятия также вошло в перечень задач агентства.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/aston_main.jpg',
				video: 'https://player.vimeo.com/video/396790480',
				gallery: [
					'http://ooe.borodadigital.com/img/aston_1.jpg',
					'http://ooe.borodadigital.com/img/aston_2.jpg',
					'http://ooe.borodadigital.com/img/aston_3.jpg',
					'http://ooe.borodadigital.com/img/aston_4.jpg',
					'http://ooe.borodadigital.com/img/aston_5.jpg',
					'http://ooe.borodadigital.com/img/aston_6.jpg',
					'http://ooe.borodadigital.com/img/aston_7.jpg',
					'http://ooe.borodadigital.com/img/aston_8.jpg',
				],
			},
			{
				id: 3,
				slug: 'rr-ghost',
				menuTitle: 'ROLLS-ROYCE GHOST<br/>PREMIERE IN RUSSIA',
				color: '#234922',
				client: 'Rolls-Royce Motor Cars<br/>АВИЛОН',
				data: ['13-18 Октября 2020'],
				title: 'ROLLS-ROYCE<br/>GHOST',
				subtitle: 'Презентация в России<br/>Rolls-Royce Ghost',
				text:
					'<p>Премьерная презентация автомобиля Rolls-Royce GHOST в России прошла на протяжении 6 дней в 3 разных форматах: мероприятие для прессы, торжественный ивент для клиентов дилера, индивидуальные показы. Каждая часть проекта реализована в своей стилистике с определенной программой, набором активностей, декораций, прямыми включениями из UK штаб-квартиры бренда.</p><p>Дух технологичной таинственности Ghost затронул все элементы мероприятия. Для основного дня была разработана LED инсталляция с генеративным контентом.Эффектное шоу срежиссировано художниками LED Group.</p><p>60 журналистов и 200 гостей торжественного мероприятия стали первыми, кому довелось увидеть новый Ghost в России.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/rr-ghost_main.jpg',
				video: 'https://player.vimeo.com/video/488154632',
				gallery: [
					'http://ooe.borodadigital.com/img/rr-ghost_1.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_2.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_3.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_4.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_5.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_6.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_7.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_8.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_9.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_10.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_11.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_12.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_13.jpg',
					'http://ooe.borodadigital.com/img/rr-ghost_14.jpg',
				],
			},
			{
				id: 4,
				slug: 'curtis',
				menuTitle: 'CURTIS TEA<br/>VK FEST 5',
				color: '#e1b133',
				client: ' Агентство ICON<br/>МАЙ-FOODS',
				data: ['20-21 Июля 2019'],
				title: 'CURTIS<br>VKFEST 5',
				subtitle: 'Интеграция CURTIS<br/>VK Fest 5',
				text:
					'<p>Организация  представленности чайного спонсора CURTIS на фестивале «VK FEST 2019» на территории “Парка 300-летия Санкт-Петербурга”.</p><p>Зона застройки составила 100 кв.м. и включила в себя семь активностей: барная зона для дегустации и гримерная зона разместились под архитектурным навесом оригинального дизайна, тату-мастерская, интерактивная зона «баскетчай», лаундж зона и зона выдачи сувениров были организованы под открытым небом. На территории фестиваля работали 55 промоутеров и аниматоров бренда, проведен семплинг 60 000 упаковок продукта.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/curtis_main.jpg',
				video: 'https://player.vimeo.com/video/353870390',
				gallery: [
					'http://ooe.borodadigital.com/img/curtis_1.jpg',
					'http://ooe.borodadigital.com/img/curtis_2.jpg',
					'http://ooe.borodadigital.com/img/curtis_3.jpg',
					'http://ooe.borodadigital.com/img/curtis_4.jpg',
					'http://ooe.borodadigital.com/img/curtis_5.jpg',
					'http://ooe.borodadigital.com/img/curtis_6.jpg',
					'http://ooe.borodadigital.com/img/curtis_7.jpg',
					'http://ooe.borodadigital.com/img/curtis_8.jpg',
					'http://ooe.borodadigital.com/img/curtis_9.jpg',
					'http://ooe.borodadigital.com/img/curtis_10.jpg',
				],
			},
			{
				id: 5,
				slug: 'mailru',
				menuTitle: 'MAIL.RU GROUP<br/>VK FEST 4',
				color: '#2d58b7',
				client: 'Mail.ru Group',
				data: ['28 - 29 Июля 2018'],
				title: 'MAIL.RU<br>VKFEST 4',
				subtitle: 'Бренд - зона Mail.ru Group<br>VK Fest 4',
				text:
					'<p>Организация спонсорской представленности двух брендов Mail.ru Group: сервиса Почта.Mail.ru и проекта Добро.Mail.ru на фестивале VK FEST в Санкт-Петербурге в 2018 году.</p><p>Общая площадь застройки составила 350 кв.м. Агентством была предложена и реализована концепция оформления двух стендов, адаптивная под задачи проектов: развлекательная тематика на стенде Почта.Mail.ru и возможность пройти медицинское обследование по 4 направлениям на стенде Добро.Mail.ru.</p><p>В реализации проекта был использован ряд собственных арендных решений из каталога a1rent.ru: архитектурный навес Hypar, геосфера D=10м, а также комплект световых решений и мебели для обеих зон.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/mail_main.jpg',
				video: 'https://player.vimeo.com/video/286353243',
				gallery: [
					'http://ooe.borodadigital.com/img/mail_1.jpg',
					'http://ooe.borodadigital.com/img/mail_2.jpg',
					'http://ooe.borodadigital.com/img/mail_3.jpg',
					'http://ooe.borodadigital.com/img/mail_4.jpg',
					'http://ooe.borodadigital.com/img/mail_5.jpg',
					'http://ooe.borodadigital.com/img/mail_6.jpg',
					'http://ooe.borodadigital.com/img/mail_7.jpg',
					'http://ooe.borodadigital.com/img/mail_8.jpg',
					'http://ooe.borodadigital.com/img/mail_9.jpg',
					'http://ooe.borodadigital.com/img/mail_10.jpg',
					'http://ooe.borodadigital.com/img/mail_11.jpg',
					'http://ooe.borodadigital.com/img/mail_12.jpg',
					'http://ooe.borodadigital.com/img/mail_13.jpg',
				],
			},
			{
				id: 6,
				slug: 'ppf2017',
				menuTitle: 'MARLBORO<br/>PPF 2017',
				color: '#442a74',
				client: 'Агентство Red Communication Group<br/>Philip Morris Sales and Marketing',
				data: ['28-30 Июля 2017'],
				title: 'MARLBORO<br/>PPF 2017',
				subtitle: 'Интеграция Marlboro<br/>Double Mix<br/>Present Perfect Festival 2017',
				text:
					'<p>В рамках проекта разработана креативная концепция и дизайн зоны Neuland от Marlboro на фестивале Present Perfect Festival 2017 в г. Санкт-Петербург. Агентством выполнено оформление пространства в 500 кв.м. (под зону адаптирована территория проведения фестиваля).</p><p>Для взаимодействия с гостями разработана модель Сonsumer Engagement c применением интерактивного доступа в зону и участия в механиках по NFC-браслетам. Механика использовалась промо-персоналом для привлечения и регистрации гостей фестиваля.</p><p>Среди основных задач агентства: технический продакшн и декорационное оформление 5 зон с использованием LED-mapping, видеопроекции 360°, управления световыми приборами во взаимодействии с датчиками движения и реакцией на звук.</p><p>Также для проекта был изготовлен медиаконтент: персонализированные сообщения на экране при входе со взаимодействием с NFC-браслетами, видеоконтент для зеркального пресс-вола и проекционной колонны с подгрузкой фото из соц сетей.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/marlboro-ppf_main.jpg',
				video: 'https://player.vimeo.com/video/234284565',
				gallery: [
					'http://ooe.borodadigital.com/img/marlboro-ppf_1.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_2.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_3.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_4.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_5.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_6.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_7.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_8.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_9.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_10.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_11.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_12.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_13.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_14.jpg',
					'http://ooe.borodadigital.com/img/marlboro-ppf_15.jpg',
				],
			},
			{
				id: 7,
				slug: 'tikkurila',
				menuTitle: 'TIKKURILA<br/>PARTNERS CONFERENCE<br/>IN FINLAND',
				color: '#046726',
				client: 'ТИККУРИЛА',
				data: ['25-28 Марта 2019'],
				title: 'TIKKURILA<br/>FINLAND',
				subtitle: 'Конференция партнеров<br/>ТИККУРИЛА<br/>в Финляндии',
				text:
					'<p>Мероприятие для ключевых дилеров компании Tikkurila по России и Средней Азии, а также топ-менеджемента во главе с президентом концерна, которое состоялось за полярным кругом на горнолыжном курорте в г. Леви в Финляндии.  На протяжении 4 дней участники мероприятия были погружены в атмосферу креативной концепции “Игры контрастов”.</p><p>Агентством была организована логистическая сетка для 145 человек из городов России и Казахстана, а также проживание гостей на время проведения мероприятия. Бизнес-часть проекта была представлена двумя конференц-днями. В поддержку выступлений спикеров были разработаны видеопрезентации и анимационный контент.  Для демонстрации новых продуктов компании было оформлено выставочное пространство с голографическим контентом, а новый дизайн шоу-румов Tikkurila был презентован гостям в VR формате.</p><p>Развлекательная программа включила в себе уникальные экскурсии и активности, характерные для зимней Лапландии, включая welcome-ужин в ледяной деревне, посещение аутентичных локаций. Программа Gala-ужина прошла при участии артистов из России и Финляндии.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/tik_main.jpg',
				video: 'https://player.vimeo.com/video/407277407',
				gallery: [
					'http://ooe.borodadigital.com/img/tik_1.jpg',
					'http://ooe.borodadigital.com/img/tik_2.jpg',
					'http://ooe.borodadigital.com/img/tik_3.jpg',
					'http://ooe.borodadigital.com/img/tik_4.jpg',
					'http://ooe.borodadigital.com/img/tik_5.jpg',
					'http://ooe.borodadigital.com/img/tik_6.jpg',
					'http://ooe.borodadigital.com/img/tik_7.jpg',
					'http://ooe.borodadigital.com/img/tik_8.jpg',
				],
			},
			{
				id: 8,
				slug: 'pepsico',
				menuTitle: 'PEPSICO<br/>ANNUAL STRATEGIC<br/>CONFERENCE',
				color: '#022976',
				client: 'Агентство Citymetria Group<br/>Компания PepsiCo',
				data: ['24 Января 2020'],
				title: 'PEPSICO<br>CONFERENCE',
				subtitle: 'Ежегодная стратегическая<br/>конференция PepsiCo',
				text:
					'<p>Корпоративное мероприятие “1Billion Challenge” для российского топ-менеджмента компании PepsiCo, проходившее в Санкт-Петербурге 24 января 2019 года.</p><p>Бизнес-часть мероприятия проходила в отеле Four Seasons Lion Palace, гала-ужин состоялся в одном из залов музея современного искусства Эрарта.</p><p>Агентство обеспечило технический и декорационный продакшен всех блоков мероприятия, обеспечило подбор и контроль работы персонала, а также интерактивных и мультимедиа зон на проекте.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/pepsico_main.jpg',
				gallery: [
					'http://ooe.borodadigital.com/img/pepsico_1.jpg',
					'http://ooe.borodadigital.com/img/pepsico_2.jpg',
					'http://ooe.borodadigital.com/img/pepsico_3.jpg',
					'http://ooe.borodadigital.com/img/pepsico_4.jpg',
					'http://ooe.borodadigital.com/img/pepsico_5.jpg',
					'http://ooe.borodadigital.com/img/pepsico_6.jpg',
				],
			},
			{
				id: 9,
				slug: 'imperial-tobacco',
				menuTitle: 'IMPERIAL TOBACCO<br/>NATIONAL CONFERENCE',
				color: '#982d3d',
				client: 'Агентство Red Communication Group<br>Imperial Tobacco Sales & Marketing',
				data: ['11-15  Октября 2015'],
				title: 'ITG<br/>CONFERENCE',
				subtitle: 'Национальная<br/>конференция ITG',
				text:
					'<p>Национальная конференция “Курс на успех”  для 1000 сотрудников Imperial Tobacco со всей России, проходившая в Санкт-Петербурге с обширной пятидневной программой, включающей в себя футбольный турнир, бизнес-часть, гала-ужин, тим-билдинг и завершающей вечеринкой с фейерверком.</p><p>Среди задач агентства: разработка концепции оформления мероприятия, сценарный план, креативный сценический продакшен и техническое обеспечение мероприятия на трех площадках на протяжении всех дней мероприятия, а также видео- и аудиопродакшен для оформления мероприятия и бизнес-части, декорационное оформления пространств.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/itg_main.jpg',
				video: 'https://player.vimeo.com/video/311662956',
				gallery: [
					'http://ooe.borodadigital.com/img/itg_1.jpg',
					'http://ooe.borodadigital.com/img/itg_2.jpg',
					'http://ooe.borodadigital.com/img/itg_3.jpg',
					'http://ooe.borodadigital.com/img/itg_4.jpg',
					'http://ooe.borodadigital.com/img/itg_5.jpg',
					'http://ooe.borodadigital.com/img/itg_6.jpg',
				],
			},
			{
				id: 10,
				slug: 'marlboro-events',
				menuTitle: 'MARLBORO<br/>SPONSORED EVENTS',
				color: '#ac3018',
				client: 'Агентство Red Communication Group<br/>Philip Morris Sales and Marketing',
				data: ['2016-2018'],
				title: 'marlboro<br/>events',
				subtitle: 'Интеграция бренда Marlboro<br/>серия ивентов  в Петербурге',
				text:
					'<p>Интеграция брендов компании PMI (Marlboro Red, Marlboro Double Mix, IQOS) в городские события и пространства в период с 2016 по 2018 год.</p><p>Для каждого мероприятия разрабатывалась уникальная инсталляция, оформление зоны и набор активностей с учетом особенностей события и площадки.</p><p>В общей сложности было реализовано свыше 50 проектов в различных локациях, а также была спроектирована и построена стационарная lounge-зона RED площадью 250 кв.м. для активаций на концертной площадке А2 Green Concert.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/marlboro-events_main.jpg',
				video: 'https://player.vimeo.com/video/234485953',
				gallery: [
					'http://ooe.borodadigital.com/img/marlboro-events_1.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_2.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_3.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_4.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_5.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_6.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_7.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_8.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_9.jpg',
					'http://ooe.borodadigital.com/img/marlboro-events_10.jpg',
					'http://ooe.borodadigital.com/img/marlboro-pmef_1.jpg',
					'http://ooe.borodadigital.com/img/marlboro-pmef_2.jpg',
					'http://ooe.borodadigital.com/img/marlboro-pmef_3.jpg',
					'http://ooe.borodadigital.com/img/marlboro-pmef_4.jpg',
					'http://ooe.borodadigital.com/img/marlboro-pmef_5.jpg',
				],
			},
			{
				id: 11,
				slug: 'ula-vk-fest',
				menuTitle: 'ЮЛА<br/>VK FEST 4',
				color: '#d46f4a',
				client: 'Mail.ru Group',
				data: ['28 - 29 Июля 2018'],
				title: ' ЮЛА<br/>VKFEST 4',
				subtitle: 'Бренд - Зона ЮЛА<br>VK Fest 4',
				text:
					'<p>Организация спонсорской представленности бренда Юла на фестивале VK FEST 4 в Санкт-Петербурге. Агентство разработало и воплотило креативную концепцию оформления партнерской зоны на фестивале.</p><p>Идея «Дом Юла» — 4 стилизованных пространства под гостиную, детскую, ванную и игровую комнату на площади 165 кв.м. Большая часть элементов для декорирования пространств была приобретена через сервис Юла.</p><p>Агентство выполнило визуализацию стенда в 3D, продакшен декораций и наполнения всех тематических зон. Также был разработан дизайн и производство части сувенирной продукции.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/ula_main.jpg',
				video: 'https://player.vimeo.com/video/292093907',
				gallery: [
					'http://ooe.borodadigital.com/img/ula_1.jpg',
					'http://ooe.borodadigital.com/img/ula_2.jpg',
					'http://ooe.borodadigital.com/img/ula_3.jpg',
					'http://ooe.borodadigital.com/img/ula_4.jpg',
					'http://ooe.borodadigital.com/img/ula_5.jpg',
					'http://ooe.borodadigital.com/img/ula_6.jpg',
					'http://ooe.borodadigital.com/img/ula_7.jpg',
					'http://ooe.borodadigital.com/img/ula_8.jpg',
				],
			},
			{
				id: 12,
				slug: 'legal-forum-2019',
				menuTitle: 'PANEL SESSION<br/>LEGAL FORUM 2019',
				color: '#898989',
				client: 'Аффилированные<br/>компании ФМИ в России',
				data: ['14 - 18 Мая 2020'],
				title: 'LEGAL<br/>FORUM 2019',
				subtitle: 'Панельная сессия<br/>Юридический Форум 2019',
				text:
					'<p>В рамках ПМЭФ-2019 прошла встреча с известными деятелями искусства с темой дискуссии «История инноваций и (правовых) противоречий в искусстве». В ней приняли участие директор Эрмитажа Михаил Пиотровский, директор музея-заповедника «Петергоф» Елена Кальницкая, редакционный директор российского издания журнала Forbes Николай Усков, главный редактор журнала «Собака.ru» Яна Милорадовская и спикеры компании PMI.</p><p>Проект был инициирован организаторами Юридического форума и представителями компании PMI. Агентство разработало сценарий проведения мероприятия, визуальный стиль сессии, видеоконтент и печатные материалы для анонса, а также контент для самого события.</p>',
				mainImg: 'http://ooe.borodadigital.com/img/legal_main.jpg',
				video: 'https://player.vimeo.com/video/234485953',
				gallery: [
					'http://ooe.borodadigital.com/img/legal_2.jpg',
					'http://ooe.borodadigital.com/img/legal_3.jpg',
					'http://ooe.borodadigital.com/img/legal_4.jpg',
					'http://ooe.borodadigital.com/img/legal_5.jpg',
					'http://ooe.borodadigital.com/img/legal_6.jpg',
					'http://ooe.borodadigital.com/img/legal_7.jpg',
					'http://ooe.borodadigital.com/img/legal_8.jpg',
					'http://ooe.borodadigital.com/img/legal_9.jpg',
					'http://ooe.borodadigital.com/img/legal_10.jpg',
				],
			},
		],
	},
	mutations: {},
	actions: {},
	modules: {},
	getters: {
		shortcut: function(state) {
			return state.shortcut;
		},
		showreel: function(state) {
			return state.showreel;
		},
		posts: function(state) {
			return state.posts;
		},
	},
});
