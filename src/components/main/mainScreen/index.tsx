import { useEffect, useRef } from 'react';
import gsap from 'gsap';
//styles
import './mainScreen.scss';

export default function MainScreen() {
	const marquee = useRef<HTMLDivElement | null>(null);
	const marqueeContent = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (window.innerWidth < 600) return;

		const marqueeEl = marquee.current;
		const contentEl = marqueeContent.current;

		if (!marqueeEl || !contentEl) return;

		const clone = contentEl.cloneNode(true);
		marqueeEl.append(clone);

		const width = parseInt(
			getComputedStyle(contentEl).getPropertyValue('width'),
			10,
		);

		const gap = parseInt(
			getComputedStyle(contentEl).getPropertyValue('column-gap'),
			10,
		);

		const distanceTranslate = -(gap + width);

		gsap.fromTo(
			marqueeEl.children,
			{ x: 0 },
			{
				x: distanceTranslate,
				duration: 15,
				repeat: -1,
				ease: 'none',
			},
		);
	}, []);
    
	return (
		<>
			<div className="main-screen container">
				<div className="glitch">
					<img
						src="https://d2kq0urxkarztv.cloudfront.net/58e4b332c0367b005e8ff54d/1039748/upload-a2514e75-7916-46a6-a22f-9d17ea642d5f.png?w=788"
						alt=""
					/>
					<div className="glitch__layers">
						<div className="glitch__layer"></div>
						<div className="glitch__layer"></div>
						<div className="glitch__layer"></div>
					</div>
				</div>

				<div className="marquee" ref={marquee}>
					<div className="marquee-content" ref={marqueeContent}>
						<p className="marque-part">Developer</p>
						<p className="marque-part">Front-End Developer</p>
						<p className="marque-part">Front-End</p>
					</div>
				</div>

				<div className="bottom">
					<div className="txt" v-html="$t('avaliable')"></div>
					<div className="txt" v-html="$t('city')"></div>
				</div>
			</div>
		</>
	);
}
