import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './projects.scss';
import Modal from '../../common/modal';

gsap.registerPlugin(ScrollTrigger);

interface Project {
	title: string;
	link: string;
	text: TrustedHTML;
	image: string;
}

export default function Projects() {
	const { t } = useTranslation();

	const main = useRef<HTMLElement | null>(null);
	const wrp = useRef<HTMLDivElement | null>(null);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedProject, setSelectedProjects] = useState<Project | null>(
		null,
	);

	const framesList = useMemo(
		() => [
			{
				title: 'Компас ПРО',
				link: 'https://compas-pro.com/',
				text: `
				<p>Рефакторинг legacy-кода и улучшение качества существующей архитектуры проекта.</p>
				<ul>
					<li>Улучшение структуры и читаемости кодовой базы</li>
					<li>Оптимизация поддержки и масштабируемости проекта</li>
					<li>Снижение технического долга</li>
				</ul>
			`,
				image: './images/compas-pro.webp',
			},
			{
				title: 'Сити Боулинг',
				link: 'https://city-bowling.ru/',
				text: `
				<p>Полная разработка фронтенд-части сложного веб-приложения.</p>
				<ul>
					<li>Интеграция REST API и WebSocket для realtime-данных</li>
					<li>Реализация PWA (offline-ready приложение)</li>
					<li>Система онлайн-бронирования</li>
					<li>Личный кабинет пользователя</li>
					<li>Административная панель с аналитикой и управлением бронированиями</li>
				</ul>
			`,
				image: './images/bowling.webp',
			},
			{
				title: 'Компас Гуру',
				link: 'https://compas-goo.ru/',
				text: `
				<p>Редизайн и улучшение архитектуры проекта.</p>
				<ul>
					<li>Рефакторинг legacy-кода</li>
					<li>Повышение читаемости и поддерживаемости кода</li>
					<li>Оптимизация структуры проекта</li>
				</ul>
			`,
				image: './images/compas-goo.webp',
			},
			{
				title: 'Адвокаты СССР',
				link: 'https://xn----7sbahj1b1atiaai.xn--p1ai/',
				text: `
				<p>Работа с legacy-проектом и улучшение качества разработки.</p>
				<ul>
					<li>Рефакторинг существующего кода</li>
					<li>Code review junior-разработчика</li>
					<li>Улучшение структуры и читаемости проекта</li>
				</ul>
			`,
				image: './images/lawyer.webp',
			},
			{
				title: 'Уха',
				link: 'https://uha-vlg.ru/',
				text: `
				<p>Разработка проекта на Nuxt 3 с нуля.</p>
				<ul>
					<li>Backend через API routes и middleware</li>
					<li>Файловая система хранения данных</li>
					<li>Оптимизация производительности</li>
					<li>Lighthouse score: 95 (desktop)</li>
				</ul>
			`,
				image: './images/uha.webp',
			},
			{
				title: 'СРО',
				link: 'https://svr-sro.ru/',
				text: `
				<p>Поддержка и развитие legacy-проекта.</p>
				<ul>
					<li>Рефакторинг кода и архитектуры</li>
					<li>Code review junior-разработчика</li>
					<li>Внедрение переиспользуемых компонентов</li>
					<li>Повышение качества и поддерживаемости системы</li>
				</ul>
			`,
				image: './images/sro.webp',
			},
			{
				title: '3D Parallax',
				link: 'https://iradmit.github.io/3D-paralax/',
				text: `
				<p>Разработка интерактивной 3D parallax-анимации.</p>
				<ul>
					<li>Работа с глубиной сцены</li>
					<li>Создание сложных визуальных эффектов</li>
					<li>Интерактивная анимация на скролле</li>
				</ul>
			`,
				image: './images/parallax.png',
			},
			{
				title: 'Hogwarts',
				link: 'https://iradmit.github.io/hogwarts/',
				text: `
				<p>Frontend-приложение с анимациями и API-интеграцией.</p>
				<ul>
					<li>Анимации интерфейса</li>
					<li>Работа с асинхронными запросами</li>
					<li>Интерактивная логика приложения</li>
				</ul>
			`,
				image: 'https://v1.popcornnews.ru/k2/news/1200/upload/AbQWau.jpg',
			},
			{
				title: 'HomeState',
				link: 'https://iradmit.github.io/bprunsk56/',
				text: `
				<p>Верстка и базовая frontend-разработка.</p>
				<ul>
					<li>HTML / CSS / JavaScript</li>
					<li>Адаптивная верстка</li>
					<li>Базовая клиентская логика</li>
				</ul>
			`,
				image: 'https://budgetrf.ru/wp-content/uploads/2023/05/agenstvo-nedvizhimosti.jpeg',
			},
		],
		[],
	);

	const getSizes = () => {
		let gap = 100;
		let boxWidth = 800;

		if (window.innerWidth < 880) boxWidth = 500;

		return { gap, boxWidth };
	};

	const openModal = (project: Project) => {
		setSelectedProjects(project);
		setIsOpen(true);
		console.log(project);
		console.log(isOpen);
	};

	const { gap, boxWidth } = getSizes();

	useLayoutEffect(() => {
		if (window.innerWidth < 768) return;
		if (!main.current || !wrp.current) return;
		const ctx = gsap.context(() => {
			const boxesCount =
				wrp.current?.querySelectorAll('.box').length || 0;

			const fullWidth = boxesCount * boxWidth + gap * (boxesCount - 1);

			const scrollDistance = fullWidth - window.innerWidth + 100;

			gsap.to(wrp.current, {
				x: -scrollDistance,
				ease: 'none',
				scrollTrigger: {
					trigger: main.current,
					start: 'top top',
					end: `+=${scrollDistance}`,
					scrub: true,
					pin: true,
					invalidateOnRefresh: true,
				},
			});
		}, main);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<section className="box-section container" ref={main} id="projects">
				<div
					className="box-wrp"
					ref={wrp}
					style={{ '--gap': `${gap}px` } as React.CSSProperties}
				>
					{framesList.map((frame, idx) => (
						<div
							className="box hover-text-one"
							style={
								{
									'--boxWidth': boxWidth + 'px',
								} as React.CSSProperties
							}
							key={'frame' + idx}
							onClick={() => {
								if (window.innerWidth < 768) {
									openModal(frame);
								}
							}}
						>
							<figure className="effect-text-four">
								<img src={frame.image} alt={frame.title} />
								<figcaption>
									<h3 className="title">{frame.title}</h3>
									<div
										dangerouslySetInnerHTML={{
											__html: frame.text,
										}}
									></div>
									<a href={frame.link}>
										{t('studyCase')} &#8594;
									</a>
								</figcaption>
							</figure>
						</div>
					))}
					{isOpen && selectedProject && (
						<Modal
							onClose={() => setIsOpen(false)}
							title={selectedProject.title}
							text={selectedProject.text}
							link={selectedProject.link}
						/>
					)}
				</div>
			</section>
		</>
	);
}
