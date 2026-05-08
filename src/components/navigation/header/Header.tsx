import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './header.scss';
import MobileMenu from '../mobileMenu';
import { useState } from 'react';

export default function Header() {
	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState(false);

	const locales = ['ru', 'en'] as const;

	const links = ['about', 'projects', 'contacts'];

	const scrollToEl = (id: string) => {
		const elem = document.querySelector(id);
		if (elem) {
			window.scrollTo({
				top: window.scrollY + elem.getBoundingClientRect().y,
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			<header className="container">
				<div className="header-wrp">
					<a href="#" className="logo">
						Ira Dmitrieva
					</a>
					<ul className="header-menu">
						{links.map((link) => (
							<li key={link} className="links">
								<a
									href={'#' + link}
									onClick={() => scrollToEl('#' + link)}
								>
									{t(link)}
								</a>
							</li>
						))}
						<li className="links locales">
							{locales.map((locale) => (
								<span
									key={locale}
									className={
										i18n.language === locale
											? 'active locale'
											: 'locale'
									}
									onClick={() => i18n.changeLanguage(locale)}
								>
									{locale.toLocaleUpperCase()}
								</span>
							))}
						</li>
					</ul>
					<div
						className="header-burger"
						onClick={() => {
							setIsOpen(true);
						}}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="3"
								y1="6"
								x2="21"
								y2="6"
								stroke="#d72323"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<line
								x1="3"
								y1="12"
								x2="21"
								y2="12"
								stroke="#d72323"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<line
								x1="3"
								y1="18"
								x2="21"
								y2="18"
								stroke="#d72323"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</div>
				</div>
			</header>
			{isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
		</>
	);
}
