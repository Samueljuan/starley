import React from "react";

const Timeline = ({ listData, timelineActive }) => {
	const percentageColor = () => {
		return timelineActive > 1 ? timelineActive - 0.4 : timelineActive - 1;
	};

	return (
		<div>
			<div className="relative" style={{ left: "50%" }}>
				<div
					className="w-[2px] min-h-[815px]  md:min-h-[625px] bg-opacity-[0.3]"
					style={{
						background: `linear-gradient(to bottom, #1B3E66 ${
							(100 / listData?.length) * percentageColor()
						}%, #5B7A9C 0%)`,
					}}
				></div>
				<div className="absolute -left-[27px] top-[-20px] md:top-[-3px]">
					{listData?.map((el, indx) =>
						indx % 2 !== 0 ? (
							<div
								className="relative -left-[153px]  md:-left-[400px] flex items-center mb-24"
								key={indx}
							>
								<div className="mr-3 flex flex-col items-end text-center md:text-left w-[40%] md:w-full	">
									<p
										className={
											"text-textDefault text-base md:text-2xl font-inter font-semibold"
										}
									>
										{el?.title}
									</p>
									<span
										className={`text-sm md:text-xl font-inter font-normal text-btn-secondary-blue`}
									>
										{el?.desc}
									</span>
								</div>
								<div
									className={`bg-[#96AFB2] mr-3 w-14 h-14 p-[20px]  rounded-full text-white font-bold font-inter text-2xl flex items-center justify-center`}
								>
									{el?.value}
								</div>
							</div>
						) : (
							<div className="flex items-center mb-24" key={indx}>
								<div
									className={`mg-[4px] p-[20px] bg-[#96AFB2] mr-3 w-14 h-14 rounded-full text-white font-bold font-inter text-2xl flex items-center justify-center`}
								>
									{el?.value}
								</div>
								<div className="text-center md:text-left w-[40%] md:w-full">
									<p
										className={
											"text-textDefault text-base md:text-2xl font-inter font-semibold"
										}
									>
										{el?.title}
									</p>
									<span
										className={`text-sm md:text-xl font-inter font-normal text-btn-secondary-blue`}
									>
										{el?.desc}
									</span>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Timeline;
