import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
	en: {
		translation: {
			about: 'About',
			projects: 'Projects',
			contacts: 'Contacts',
			city: 'Live in <br />Togliatti, Russia',
			avaliable: 'Available for <br />freelance projects',
			experience: 'Experience',
			skills: 'Skills',
			helloTxt:
				"Hello! My name is Irina Dmitrieva, I'm a front-end developer from Togliatti, Russia. I like to create responsive and performant and visually pleasing websites.",
			expTxt: 'I have more than 3 years of commercial development experience. During this time, I worked on projects of various complexity both in teams and as a freelancer: developing new features, maintaining and improving existing products, integrating APIs, building responsive layouts, optimizing performance, and enhancing user experience. I also have experience working with legacy projects, code refactoring, and migrating applications from Nuxt 2 to Nuxt 3.',
			skillsTxt:
				'I have strong knowledge of HTML, CSS, SCSS, JavaScript, and TypeScript. I have solid experience with Vue.js (2,3) and Nuxt.js (2,3,4), as well as React knowledge and hands-on experience building projects with it. I have worked with Pinia and Vuex for state management. My experience includes developing and maintaining SPA, SSR, and PWA applications, REST API integration, legacy code refactoring, migration from Nuxt 2 to Nuxt 3, creating responsive interfaces, and performance optimization. I also have experience with unit testing, code reviews, and tools such as Git, Webpack, Vite, and Babel. I have a strong understanding of responsive UI/UX principles and modern frontend architecture.',
			studyCase: 'STUDY CASE',
			now: 'Now',
		},
	},
	ru: {
		translation: {
			about: 'Обо мне',
			projects: 'Проекты',
			contacts: 'Контакты',
			city: 'Живу в <br /> Тольятти, Россия',
			avaliable: 'Доступна для <br /> фриланс проектов',
			experience: 'ОПЫТ',
			skills: 'НАВЫКИ',
			helloTxt:
				'Привет! Меня зовут Ирина Дмитриева, я фронтенд-разработчик из Тольятти, Россия. Мне нравится создавать адаптивные, производительные и визуально привлекательные веб-приложения и сайты.',

			expTxt: 'Мой коммерческий опыт разработки более 3 лет. За это время работала над проектами различной сложности в командах и на фрилансе: занималась разработкой новых функций, поддержкой и развитием существующих продуктов, интеграцией API, адаптивной версткой, оптимизацией производительности и улучшением пользовательского опыта. Есть опыт работы с легаси-проектами, рефакторингом кода и миграцией приложений с Nuxt 2 на Nuxt 3.',

			skillsTxt:
				'Имею глубокие знания HTML, CSS, SCSS, JavaScript и TypeScript. Есть уверенный опыт работы с Vue.js (2,3) и Nuxt.js (2,3,4), а также знания React и опыт разработки проектов на нем. Есть опыт работы с Pinia и Vuex для управления состоянием приложений. Занималась разработкой и поддержкой SPA, SSR и PWA приложений, интеграцией REST API, рефакторингом легаси-кода, миграцией проектов с Nuxt 2 на Nuxt 3, созданием адаптивных интерфейсов и оптимизацией производительности. Есть опыт модульного тестирования, code review и работы с Git, Webpack, Vite и Babel. Хорошо понимаю принципы отзывчивого UI/UX и современной frontend-архитектуры.',
			studyCase: 'ПОДРОБНЕЕ',
			now: 'Сейчас',
		},
	},
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: 'ru',
		fallbackLng: 'ru',
		supportedLngs: ['ru', 'en'],
		load: 'currentOnly',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
