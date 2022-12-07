import React from "react";

const RadioInput = ({ options, handleChange, name, questionNumber }) => {
  return (
    <form name={name} onChange={handleChange}>
      {options?.map((el, indx) => (
        <div className="flex items-center mr-4 mb-4 mt-4" key={indx}>
          <input
            id={`flexRadioDefault${indx}${el?.value}${questionNumber}`}
            type="radio"
            name="radio"
            className="hidden"
          />
          <label
            htmlFor={`flexRadioDefault${indx}${el?.value}${questionNumber}`}
            className="flex items-center cursor-pointer"
          >
            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
            <div className="ml-2">{el?.name}</div>
          </label>
        </div>
      ))}
    </form>
  );
};

export default RadioInput;
