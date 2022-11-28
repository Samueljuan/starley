import React from "react";
import { QuestionLabel } from "components/atoms";

const QuestionCheckbox = ({
	questionNumber,
	question,
	options,
	descDisabled,
	onClick
}) => {
	return (
		<div className="font-inter">
			<QuestionLabel
				questionNumber={questionNumber}
				question={question}
				descDisabled={descDisabled || false}
			/>
			<div className="form-check mb-3 mt-[18px]">
				{options?.map((el, indx) => (
					<div className="flex items-center mb-4" key={indx}>
						<input
							id="default-checkbox"
							type="checkbox"
							value={el?.value}
							className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							onClick={onClick}
						/>
						<label
							htmlFor="default-checkbox"
							className="ml-2 text-sm font-medium text-gray-900"
						>
							{el?.name}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionCheckbox;
