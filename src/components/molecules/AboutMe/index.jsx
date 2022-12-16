import React from "react";

import ImageAboutMe from "../../../assets/img-aboutme.svg";

export default function AboutMe() {
  return (
    <div className="text-justify md:flex justify-between items-center mt-[5rem] md:mt-[68rem] font-inter">
      <div className="md:w-1/2 flex justify-end md:pr-16 ">
        <div className="">
          <img src={ImageAboutMe} alt="ImageAboutMe" />
        </div>
      </div>
      <div className="mt-5 md:w-1/2">
        <h1 className="text-5xl text-textDefault mb-6 font-bold font-playfair">
          Tentang Kami
        </h1>
        <p className="text-justify text-xl text-textDefault font-normal mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem
          odio, tincidunt ut ligula gravida, hendrerit convallis augue. Morbi
          iaculis viverra nulla, nec fringilla sem viverra id. Pellentesque
          pellentesque sollicitudin sagittis. Proin venenatis justo at
          scelerisque laoreet. Etiam nulla felis, viverra sit amet auctor et,
          pellentesque sit amet libero. Ut consequat, orci eu sodales ultricies,
          sem magna tempus tortor, eget mollis quam eros bibendum augue. Sed ut
          feugiat nulla.
        </p>
        <a href="/tentang-kami" className="underline text-2xl font-noemal">
          Learn more
        </a>
      </div>
    </div>
  );
}
