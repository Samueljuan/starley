import React from "react";
import ProductExamp from "../../../assets/prod-examp.png";

const ProductHome = () => {
	const data = [
		{
			id: 1,
		},
		{
			id: 2,
		},
		{
			id: 3,
		},
		{
			id: 4,
		},
		{
			id: 5,
		},
		{
			id: 6,
		},
	];

	return (
		<div className="mt-32 font-inter">
			<div className="mx-5 md:mx-0 flex items-center justify-between ">
				<h1 className="font-bold text-2xl md:text-5xl font-playfair text-[#10253D]">
					Produk Kami
				</h1>
				<a href="/product" className="underline text-base md:text-2xl">
					Lihat Semua
				</a>
			</div>
			<div className="px-5 pb-2  mb:px-0 mt-3 md:mt-16 columns-1 md:columns-3">
				{data.map((x) => {
					return (
						<div
							onClick={() => (window.location.href = "/product/1")}
							key={x.id}
							className={`mb-2 md:mb-0 max-w-sm max-h-[530px] rounded-lg overflow-hidden shadow-lg cursor-pointer  ${
								x.id % 2 === 0 && "md:mt-4"
							}`}
						>
							<img
								className="w-full"
								src={ProductExamp}
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4 bg-[#96AFB2] hover:bg-[#1B3E66] ">
								<div className="text-2xl font-semibold text-white">
									Azarine Acne Spot Serum 20ml
								</div>
								<p className="font-black text-white text-2xl">Rp.50.000</p>
								<span className="text-2xl text-white text-base">Terjual 6</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductHome;
