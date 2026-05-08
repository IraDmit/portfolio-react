import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import './mobileMenu.scss';

interface Props {
	onClose: () => void;
}

export default function Menu({ onClose }: Props) {
	const { t } = useTranslation();

	const locales = ['ru', 'en'] as const;

	const links = ['about', 'projects', 'contacts'];

	const scrollToEl = (id: string) => {
		onClose();
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
			<aside>
				<ul className="mobile-menu">
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
				<div className="aside-action" onClick={() => onClose()}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="6"
							y1="6"
							x2="18"
							y2="18"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<line
							x1="18"
							y1="6"
							x2="6"
							y2="18"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
			</aside>
		</>
	);
}
