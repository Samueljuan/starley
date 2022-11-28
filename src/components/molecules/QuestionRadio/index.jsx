import React from "react";
import { QuestionLabel, RadioInput } from "components/atoms";

const QuestionRadio = ({ questionNumber, question, options, descDisabled, handleChange, name }) => {
  return (
    <div className="font-inter">
      <QuestionLabel questionNumber={questionNumber} question={question} descDisabled={descDisabled || false} />
      <RadioInput questionNumber={questionNumber} options={options} handleChange={handleChange} name={name} />
    </div>
  );
};

export default QuestionRadio;
