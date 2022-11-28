import React from "react";

const Accordion = (p) => {
	return (
		<ul className="list-none mt-[47px] font-playfair">
			{React.Children.map(p.children, (child) => {
				return React.cloneElement(child);
			})}
		</ul>
	);
};

export default Accordion;
