import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './header.scss';

export default function Header() {
	const { t } = useTranslation();

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
								onClick={() => scrollToEl('#about')}
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
			</div>
		</header>
	);
}
