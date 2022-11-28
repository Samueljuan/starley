import React from "react";

const QuestionLabel = ({ questionNumber, question, descDisabled }) => {
  return (
    <div>
      <p className="text-sm font-medium text-black">
        {questionNumber}. {question}
      </p>
      {!descDisabled && <p className="text-xs mt-1 text-[#ADADAD] ml-[13px]">Deskripsi</p>}
    </div>
  );
};

export default QuestionLabel;
