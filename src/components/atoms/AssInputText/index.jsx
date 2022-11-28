import React from "react";

const AssInputText = ({ inputLable, onChange, handleClick }) => {
  return (
    <div>
      <input
        className="w-full rounded-full py-3 px-4 mt-[18px] border border-[#D5D5D5] focus:ring-0 focus:outline-none active:ring-0"
        type="text"
        placeholder={inputLable}
        onChange={onChange}
        onClick={handleClick}
      />
    </div>
  );
};

export default AssInputText;
