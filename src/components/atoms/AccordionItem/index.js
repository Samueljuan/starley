import React, { useState, useRef, useEffect } from "react";

import Plus from "../../../assets/icons/plus.svg";
import Minus from "../../../assets/icons/minus.svg";

const AccordionItem = (p) => {
	const [active, setActive] = useState(false);
	const contentEl = useRef();

	useEffect(() => {
		setActive(p.active);
	}, [p.active]);

	const toggle = () => {
		if (!p.onToggle) {
			setActive(!active);
		} else {
			p.onToggle();
		}
	};

	return (
		<li className={`mb-[16px]  ${active ? "active" : ""}`} key={p.key}>
			<button
				className={"w-full flex  items-center" + (active ? " bottom-none" : "")}
				onClick={() => toggle()}
			>
				<div className="mr-[57px]">
					{active ? (
						<img src={Minus} alt="Icon Minus" />
					) : (
						<img src={Plus} alt="Icon Plus" />
					)}
				</div>
				<p className="font-bold text-2xl ">{p.title}</p>
			</button>
			<div
				ref={contentEl}
				className="overflow-hidden flex w-full"
				style={
					active
						? { height: contentEl.current?.scrollHeight || "auto" }
						: { height: 0 }
				}
			>
				<div className="mr-[72px]"></div>
				<div className="mr-[33px] border border-[#96AFB2] mt-[24px]"></div>
				<div>{p.content}</div>
			</div>
		</li>
	);
};

export default AccordionItem;
