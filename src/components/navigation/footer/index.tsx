import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './footer.scss';

export default function Footer() {
	const { t } = useTranslation();
	const [time, setTime] = useState<string | null>(null);

	const editMinutes = (minutes: number) => {
		return minutes < 10 ? '0' + minutes : minutes;
	};

	useEffect(() => {
		const updateTime = () => {
			const date = new Date();
			const hours = date.getHours();
			const minutes = editMinutes(date.getMinutes());

			setTime(`${hours}:${minutes}`);
		};

		updateTime();

		const interval = setInterval(updateTime, 60000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<footer className="container">
				<div className="footer-wrp">
					<div className="time">{t('now') + ' ' + time}</div>
					<ul className="contacts">
						<li className="contact">
							<a href="https://github.com/IraDmit">GitHub</a>
						</li>
						<li className="contact">
							<a href="https://t.me/nfllex">Telegram</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
