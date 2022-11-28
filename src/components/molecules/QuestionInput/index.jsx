import React from "react";
import { QuestionLabel, AssInputText } from "components/atoms";

const QuestionInput = ({ questionNumber, question, inputLable, onChange, descDisabled, handleClick }) => {
  return (
    <div className="font-inter">
      <QuestionLabel questionNumber={questionNumber} question={question} descDisabled={descDisabled || false} />
      <AssInputText inputLable={inputLable} onChange={onChange} handleClick={handleClick} />
    </div>
  );
};

export default QuestionInput;
