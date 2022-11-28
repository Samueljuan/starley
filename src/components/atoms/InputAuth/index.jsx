import React, { useState, useRef } from "react";
import EyeIcon from "assets/icons/eye-fill.svg";
import EyeIconOn from "assets/icons/eye-off-fill.svg";

const Input = ({ type, icon, placeholder, classIcon }) => {
	const [showPw, setShowPw] = useState(false);
	const ref = useRef();

	return (
		<div>
			<div className="mb-6 relative">
				<img
					src={icon}
					alt="key icon"
					className={`${classIcon} absolute mt-5 ml-6`}
				/>
				{type === "password" && (
					<img
						src={showPw ? EyeIconOn : EyeIcon}
						alt="eye icon"
						className="absolute mt-5 mr-6 right-0 cursor-pointer"
						onClick={() => setShowPw(!showPw)}
					/>
				)}
				{type === "date" ? (
					<input
						type="text"
						ref={ref}
						className="form-control block w-full px-[30px] pl-[60px] py-[22px] font-medium text-gray-700 bg-clip-padding border-none transition ease-in-out m-0 focus:text-gray-700 focus:border-none focus:outline-none bg-[#F8F8F8] rounded-full"
						placeholder={placeholder}
						onFocus={() => (ref.current.type = "date")}
						onBlur={() => (ref.current.type = "date")}
					/>
				) : (
					<input
						type={type === "password" ? (showPw ? "text" : "password") : "text"}
						className="form-control block w-full px-[30px] pl-[60px] py-[22px] font-medium text-gray-700 bg-clip-padding border-none transition ease-in-out m-0 focus:text-gray-700 focus:border-none focus:outline-none bg-[#F8F8F8] rounded-full"
						placeholder={placeholder}
						data-date-format="DD MMMM YYYY"
					/>
				)}
			</div>
		</div>
	);
};

export default Input;
