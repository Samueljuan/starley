import React from "react";
import { QuestionLabel } from "components/atoms";
import { rangeChoosen } from "constans";

const QuestionChoose = ({ questionNumber, question, descDisabled, handleCLick }) => {
	return (
		<div className="font-inter">
			<QuestionLabel
				questionNumber={questionNumber}
				question={question}
				descDisabled={descDisabled || false}
			/>
			<div className="flex justify-between items-center mt-5">
				<p className="text-xs">Sangat Bahagia</p>
				{rangeChoosen?.map((el, indx) => (
					<input
						key={indx}
						className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
						type="radio"
						name="flexRadioDefault"
						id={`flexRangeChoosenDefault1${el?.value + indx}`}
						onClick={handleCLick}
					/>
				))}
				<p className="text-xs">Sangat Setres</p>
			</div>
		</div>
	);
};

export default QuestionChoose;
