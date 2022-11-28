import React from "react";

import Logo from "assets/logo-footer.svg";
import Maps from "assets/icons/maps.svg";
import Sms from "assets/icons/sms.svg";
import Call from "assets/icons/call.svg";
import Ig from "assets/icons/ig.svg";
import Fb from "assets/icons/fb.svg";
import Linkedin from "assets/icons/linkedin.svg";

export default function Footer() {
	return (
		<footer className="container mx-auto">
			<div className="hidden md:flex justify-between">
				<div className="w-1/2">
					<img src={Logo} />
					<div className="flex items-start pt-8">
						<img src={Maps} />
						<p className="text-white ml-4">
							Lorem ipsum dolor sit amet, <br />
							consectetur adipiscing elit. Tortor.
						</p>
					</div>
				</div>
				<div className="w-1/5 px-10">
					<ul className="">
						<li className="text-white text-xl font-medium">About</li>
						<li className="mt-4">
							<a className="text-white hover:underline cursor-pointer">
								Assessment
							</a>
						</li>
						<li className="mt-4">
							<a className="text-white hover:underline cursor-pointer">
								Our Product
							</a>
						</li>
						<li className="mt-4">
							<a className="text-white hover:underline cursor-pointer">
								Article
							</a>
						</li>
						<li className="mt-4">
							<a className="text-white hover:underline cursor-pointer">FAQ</a>
						</li>
					</ul>
				</div>
				<div className="w-1/3 px-10">
					<ul className="">
						<li className="text-white text-xl font-medium">Customer Support</li>
						<li className="mt-4">
							<div className="flex items-start">
								<img src={Sms} />
								<a className="text-white hover:underline ml-4 cursor-pointer">
									Lorem Ipsum{" "}
								</a>
							</div>
						</li>
						<li className="mt-4">
							<div className="flex items-start">
								<img src={Call} />
								<a className="text-white hover:underline  ml-4 cursor-pointer">
									Lorem Ipsum
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div className="w-1/3">
					<p className="text-white text-xl font-medium">Sosial Media</p>
					<div className="flex pt-4">
						<img src={Fb} className="pr-4 cursor-pointer" />
						<img src={Ig} className="pr-4 cursor-pointer" />
						<img src={Linkedin} className="cursor-pointer" />
					</div>
				</div>
			</div>

			<div className="md:hidden justify-between">
				<div className="flex">
					<div className="w-1/2">
						<img src={Logo} />
						<div className="flex items-start pt-8">
							<img src={Maps} />
							<p className="text-white ml-4">
								Lorem ipsum dolor sit amet, <br />
								consectetur adipiscing elit. Tortor.
							</p>
						</div>
					</div>
					<div className="w-1/2 px-10">
						<ul className="">
							<li className="text-white text-xl font-medium">About</li>
							<li className="mt-4">
								<a className="text-white hover:underline cursor-pointer">
									Assessment
								</a>
							</li>
							<li className="mt-4">
								<a className="text-white hover:underline cursor-pointer">
									Our Product
								</a>
							</li>
							<li className="mt-4">
								<a className="text-white hover:underline cursor-pointer">
									Article
								</a>
							</li>
							<li className="mt-4">
								<a className="text-white hover:underline cursor-pointer">FAQ</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex mt-10">
					<div className="w-1/2 px-10">
						<ul className="">
							<li className="text-white text-xl font-medium">
								Customer Support
							</li>
							<li className="mt-4">
								<div className="flex items-start">
									<img src={Sms} />
									<a className="text-white hover:underline ml-4 cursor-pointer">
										Lorem Ipsum{" "}
									</a>
								</div>
							</li>
							<li className="mt-4">
								<div className="flex items-start">
									<img src={Call} />
									<a className="text-white hover:underline  ml-4 cursor-pointer">
										Lorem Ipsum
									</a>
								</div>
							</li>
						</ul>
					</div>
					<div className="w-1/2">
						<p className="text-white text-xl font-medium">Sosial Media</p>
						<div className="flex pt-4">
							<img src={Fb} className="pr-4 cursor-pointer" />
							<img src={Ig} className="pr-4 cursor-pointer" />
							<img src={Linkedin} className="cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center pt-24">
				<p className="text-white font-normal text-base ">
					© Copyright 2022 Starley
				</p>
			</div>
		</footer>
	);
}
