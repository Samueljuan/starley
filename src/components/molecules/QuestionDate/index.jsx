import React from "react";
import { QuestionLabel } from "components/atoms";

const QuestionBirthday = ({ questionNumber, question, onChange, descDisabled, handleCLick }) => {
  const handleBirthday = (val) => {
    onChange(val);
  };

  console.log(handleBirthday);

  return (
    <div className="font-inter">
      <QuestionLabel questionNumber={questionNumber} question={question} descDisabled={descDisabled || false} />
      <div className="flex items-center space-x-2 mt-[18px]">
        <input
          className="py-3 text-sm max-w-[60px] px-4 border border-[#D5D5D5] focus:ring-0 focus:outline-none active:ring-0"
          type="text"
          name="day"
          placeholder="DD"
          onClick={handleCLick}
        />
        <span className="text-2xl">-</span>
        <input
          className="py-3 text-sm max-w-[60px] px-4 border border-[#D5D5D5] focus:ring-0 focus:outline-none active:ring-0"
          type="text"
          name="month"
          placeholder="MM"
          onClick={handleCLick}
        />
        <span className="text-2xl">-</span>
        <input
          className="py-3 text-sm max-w-[74px] px-4 border border-[#D5D5D5] focus:ring-0 focus:outline-none active:ring-0"
          type="text"
          name="year"
          placeholder="YYYY"
          onClick={handleCLick}
        />
      </div>
    </div>
  );
};

export default QuestionBirthday;
