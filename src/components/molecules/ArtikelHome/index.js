import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Artikel from "../../atoms/Artikel";

const ArtikelHome = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const styles = useSpring({
		from: { x: scrollPosition > 4000 ? -100000 : 0 },
		to: { x: 0 },
	});

	const styles2 = useSpring({
		from: { x: scrollPosition > 4000 ? 100000 : 0 },
		to: { x: 0 },
	});

	return (
		<div className="mt-7 md:mt-44 mb-20 font-inter text-[#1B3E66]">
			<p className="text-center font-bold text-5xl font-playfair">Artikel</p>

			<animated.div
				style={{
					display: scrollPosition > 4000 ? "" : "none",
					...styles,
				}}
			>
				<Artikel />
			</animated.div>
			<animated.div
				style={{
					display: scrollPosition > 4000 ? "" : "none",
					...styles2,
				}}
			>
				<Artikel />
			</animated.div>
			<animated.div
				style={{
					display: scrollPosition > 4000 ? "" : "none",
					...styles,
				}}
			>
				<Artikel />
			</animated.div>

			<a
				href="/artikel"
				className="flex justify-center mt-[50px] md:mt-[150px] "
			>
				<span className="font-normal text-[#24324F] border border-[#24324F] p-5 px-16 rounded-[50px] hover:bg-[#1B3E66] hover:text-white">
					Lihat Artikel Lainnya
				</span>
			</a>
		</div>
	);
};

export default ArtikelHome;
