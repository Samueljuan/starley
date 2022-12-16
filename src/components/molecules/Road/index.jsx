import React from "react";
import { TimelineHome } from "components/molecules";
import { dataHome } from "constans";

const Road = () => {
  return (
    <div>
      <div
        className="mt-7 md:mt-48 font-inter"
        style={{
          background:
            "linear-gradient(79.93deg, rgba(171, 191, 193, 0.9) 29.86%, rgba(183, 202, 204, 0.81) 53.07%, rgba(197, 216, 219, 0.9) 79.23%, rgba(238, 253, 255, 0.9) 93.74%)",
        }}
      >
        <div className="container mx-auto pt-14 pb-20 text-center">
          <h1 className="font-semibold text-4xl text-textDefault font-playfair">
            The road to healthy skin is finally clear.
          </h1>
          <p className="mt-6 font-normal text-xl text-[#10253D] opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat velit,
            sed orci, aliquam blandit <br /> pellentesque enim. Eu in pretium
            nulla nec nisl cursus massa. Neque, nullam in a sit non turpis sit{" "}
            <br />
            interdum arcu.{" "}
          </p>
        </div>
      </div>
      <div className="mt-24">
        <TimelineHome listData={dataHome} timelineActive={1} />
      </div>
      <div className="text-center mt-40">
        <a
          href="/"
          className="mt-32 text-white bg-[#1B3E66] py-5 px-8 rounded-full "
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Road;
