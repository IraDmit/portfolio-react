import { useEffect, useRef } from 'react';
import './about.scss';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
	gsap.registerPlugin(ScrollTrigger);

	const { t } = useTranslation();

	const about = useRef(null);
	const experience = useRef(null);
	const skills = useRef(null);
	useEffect(() => {
		gsap.fromTo(
			skills,
			{
				xPercent: 100,
				opacity: 0,
			},
			{
				xPercent: 0,
				duration: 2.5,
				opacity: 1,
				scrollTrigger: {
					trigger: '.about-wrp',
					start: 'top bottom',
				},
			},
		);
		gsap.fromTo(
			experience,
			{
				xPercent: -100,
				opacity: 0,
			},
			{
				xPercent: 0,
				duration: 2.5,
				opacity: 1,
				scrollTrigger: {
					trigger: '.about-wrp',
					start: 'top bottom',
				},
			},
		);
		gsap.fromTo(
			about,
			{
				xPercent: 100,
				opacity: 0,
			},
			{
				xPercent: 0,
				duration: 2.5,
				opacity: 1,
				scrollTrigger: {
					trigger: '.about-wrp',
					start: 'top bottom',
				},
			},
		);
	});

	return (
		<>
			<div className="about-wrp container" id="about">
				<div className="first-row">
					<div className="about" ref={about}>
						{t('helloTxt')}
					</div>
					<p>{t('about').toUpperCase()}</p>
				</div>
				<div className="second-row">
					<div className="col" ref={experience}>
						<p>{t('experience').toUpperCase()}</p>
						<div className="txt">{t('expTxt')}</div>
					</div>
					<div className="col" ref={skills}>
						<p>{t('skills').toUpperCase()}</p>
						<div className="txt">{t('skillsTxt')}</div>
					</div>
				</div>
			</div>
		</>
	);
}
