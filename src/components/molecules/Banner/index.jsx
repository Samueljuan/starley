import React from "react";

import Hero from "../../../assets/hero.svg";

export default function Banner() {
	return (
		<>
			<img src={Hero} alt="Hero" className="w-full absolute top-0" />
			<div className="container mx-auto">
				<div className="flex relative md:absolute flex-col top-[35%] w-1/2  md:w-full pl-5 md:pl-7  ">
					<div className="md:w-7/12">
						<p className="text-white  text-base md:text-6xl font-bold font-playfair">
							Personalize Acne <br /> Treatment That Delivers.
						</p>
						<p className="mt-2.5 text-white font-normal text-xs md:text-base font-inter">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<button
							className="text-[8px] mt-3 py-2 px-2 md:text-base md:w-[27%] md:mt-16 text-white bg-[#1B3E66] md:py-5 md:px-8 rounded-full font-inter font-extrabold"
							onClick={() => (window.location.href = "/assesment")}
						>
							Mulai Assessment
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
