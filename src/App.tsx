import { useEffect } from 'react';
import About from './components/main/about/index.tsx';
import Contacts from './components/main/contacts/index.tsx';
import MainScreen from './components/main/mainScreen/index.tsx';
import Projects from './components/main/projects/index.tsx';
import Header from './components/navigation/header/Header.tsx';
import Footer from './components/navigation/footer/index.tsx';
import Lenis from 'lenis';

function App() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});

		// lenis.on("scroll", (e) => {
		// console.log(e);
		// });

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		console.log(lenis);
		requestAnimationFrame(raf);
	});
	return (
		<>
			<Header />
			<MainScreen />
			<About />
			<Projects />
			<Contacts />
			<Footer />
		</>
	);
}

export default App;
