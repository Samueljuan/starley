import React from "react";

import ImageAboutMe from "../../../assets/img-aboutme.svg";

export default function AboutMe() {
	return (
		<div className="text-center md:flex justify-between items-center mt-[5rem] md:mt-[68rem] font-inter">
			<div className="md:w-1/2 flex justify-end md:pr-16 ">
				<div className="">
					<img src={ImageAboutMe} alt="ImageAboutMe" />
				</div>
			</div>
			<div className="mt-5 md:w-1/2">
				<h1 className="text-5xl text-textDefault mb-6 font-bold font-playfair">
					Tentang Kami
				</h1>
				<p className="text-xl text-textDefault font-normal mb-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
					Erat velit, sed orci, aliquam blandit pellentesque enim. <br />
					Eu in pretium nulla nec nisl cursus massa. <br />
					Neque, nullam in a sit non turpis si
				</p>
				<a href="/tentang-kami" className="underline text-2xl font-noemal">
					Learn more
				</a>
			</div>
		</div>
	);
}
