import React from "react";

const Button = ({ label, onClick, customClass }) => {
  return (
    <div>
      <button
        className={
          customClass
            ? customClass
            : `bg-btn-secondary-blue mb-5 text-[20px] font-bold text-white py-[20px] px-[32px] rounded-full`
        }
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
