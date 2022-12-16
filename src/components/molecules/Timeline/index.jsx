import React from "react";

const Timeline = ({ listData, timelineActive }) => {
  const percentageColor = () => {
    return timelineActive > 1 ? timelineActive - 0.4 : timelineActive - 1;
  };

  return (
    <div>
      <div className="relative">
        <div
          className="w-[2px] min-h-[416px] bg-opacity-[0.3]"
          style={{
            background: `linear-gradient(to bottom, #1B3E66 ${
              (100 / listData?.length) * percentageColor()
            }%, #5B7A9C 0%)`,
          }}
        ></div>
        <div className="absolute -left-4 top-0">
          {listData?.map((el, indx) => (
            <div className="flex items-center mb-8" key={indx}>
              <div
                className={`${
                  timelineActive < el?.value ? "bg-[#5B7A9C]" : "bg-[#1B3E66]"
                } mr-3 w-8 h-8 rounded-full text-white font-bold font-inter text-sm flex items-center justify-center`}
              >
                {el?.value}
              </div>
              <p
                className={`${
                  timelineActive < el?.value
                    ? "text-[#5B7A9C]"
                    : "text-textDefault"
                } text-sm font-inter font-semibold`}
              >
                {el?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
