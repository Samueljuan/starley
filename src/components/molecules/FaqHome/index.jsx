import React, { useState } from "react";
import Accordion from "../../atoms/Accordion";
import AccordionItem from "../../atoms/AccordionItem";

const FaqHome = () => {
	const [select, setSelect] = useState(1);
	let allData = [];
	const dataName = ["General", "Treatment", "Order", "Acne"];
	const data = [
		{
			id: 1,
			value: "General",
		},
		{
			id: 2,
			value: "Treatment",
		},
		{
			id: 3,
			value: "Order",
		},
		{
			id: 4,
			value: "Acne",
		},
	];

	const dataGeneral = [
		{
			id: 1,
			title: "Pertanyaan General",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 2,
			title: "Pertanyaan 2",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 3,
			title: "Pertanyaan 3",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 4,
			title: "Pertanyaan 4",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
	];

	const dataTreatment = [
		{
			id: 1,
			title: "Pertanyaan Treatment",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 2,
			title: "Pertanyaan 2",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 3,
			title: "Pertanyaan 3",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 4,
			title: "Pertanyaan 4",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
	];

	const dataAcne = [
		{
			id: 1,
			title: "Pertanyaan Acne",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 2,
			title: "Pertanyaan 2",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 3,
			title: "Pertanyaan 3",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 4,
			title: "Pertanyaan 4",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
	];

	const dataOrder = [
		{
			id: 1,
			title: "Pertanyaan Order",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 2,
			title: "Pertanyaan 2",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 3,
			title: "Pertanyaan 3",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
		{
			id: 4,
			title: "Pertanyaan 4",
			des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit facilisi tincidunt pretium nec tortor in mi suscipit felis. Lectus adipiscing duis sagittis, diam cursus turpis ultricies nulla pellentesque. Id fames ipsum dolor mi. Dui faucibus enim sed praesent. Velit risus gravida ultrices mi suscipit arcu convallis. Nunc hendrerit nibh at odio fringilla nunc et. Dolor semper id.",
		},
	];

	switch (select) {
		case 1:
			allData = dataGeneral;
			break;
		case 2:
			allData = dataTreatment;
			break;
		case 3:
			allData = dataAcne;
			break;
		case 4:
			allData = dataOrder;
			break;
		default:
			allData = allData = dataGeneral;
			break;
	}

	console.log();

	return (
		<div>
			<p className="text-center font-bold text-5xl">FAQ&apos;s</p>

			<div className="relative flex flex-1 flex-row overflow-x-scroll overflow-y-hidden md:justify-between text-[32px] text-white mt-[96px] font-playfair">
				{data.map((x, y) => {
					return (
						<div
							key={x.id}
							className={`px-10 py-10 mr-2 md:mr-0 md:w-[285px] md:h-[285px] hover:bg-[#1B3E6680] rounded-lg flex justify-center items-center cursor-pointer ${
								select === x.id ? "bg-[#1B3E6680]" : "bg-[#A3B7B380]"
							}`}
							onClick={() => setSelect(y + 1)}
						>
							{x.value}
						</div>
					);
				})}
			</div>
			<div className="mt-[47px] font-playfair">
				<p className="font-bold text-[32px]">{dataName[select - 1]}</p>
				<div className="w-full border-b-2 border-[#1B3E66]"></div>
			</div>

			<Accordion>
				{(allData || []).map((x) => {
					return (
						<AccordionItem
							title={x.title}
							content={<div className={"text-lg mt-[24px]"}>{x.des}</div>}
							key={x.id}
						/>
					);
				})}
			</Accordion>
		</div>
	);
};

export default FaqHome;
