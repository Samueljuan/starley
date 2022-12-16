import React, { useState } from "react";

import Logo from "assets/logo-footer.svg";
import Maps from "assets/icons/maps.svg";
import Sms from "assets/icons/sms.svg";
import Call from "assets/icons/call.svg";
import Ig from "assets/icons/ig.svg";
import IgH from "assets/icons/ighover.svg";
import Fb from "assets/icons/fb.svg";
import FbH from "assets/icons/fbhover.svg";
import Linkedin from "assets/icons/linkedin.svg";
import LinkedinH from "assets/icons/linkedinhover.svg";

export default function Footer() {
  const [isShownFb, setIsShownFb] = useState(false);
  const [isShownIg, setIsShownIg] = useState(false);
  const [isShownLinkedin, setIsShownLinkedin] = useState(false);

  return (
    <footer className="container mx-auto">
      <div className="hidden md:flex justify-between">
        <div className="w-1/2">
          <img src={Logo} />
          <div className="flex items-start pt-8">
            <img src={Maps} />
            <p className="text-white ml-4">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. Tortor.
            </p>
          </div>
        </div>
        <div className="w-1/5 px-10">
          <ul className="">
            <li className="text-white text-xl font-medium">About</li>
            <li className="mt-4">
              <a
                href="/assesment"
                className="text-white hover:underline cursor-pointer"
              >
                Assessment
              </a>
            </li>
            <li className="mt-4">
              <a
                href="/product"
                className="text-white hover:underline cursor-pointer"
              >
                Our Product
              </a>
            </li>
            <li className="mt-4">
              <a
                href="/artikel"
                className="text-white hover:underline cursor-pointer"
              >
                Article
              </a>
            </li>
            <li className="mt-4">
              <a
                href="/faq"
                className="text-white hover:underline cursor-pointer"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/3 px-10">
          <ul className="">
            <li className="text-white text-xl font-medium">Customer Support</li>
            <li className="mt-4">
              <div className="flex items-start">
                <img src={Sms} />
                <a className="text-white hover:underline ml-4 cursor-pointer">
                  Lorem Ipsum{" "}
                </a>
              </div>
            </li>
            <li className="mt-4">
              <div className="flex items-start">
                <img src={Call} />
                <a className="text-white hover:underline  ml-4 cursor-pointer">
                  Lorem Ipsum
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <p className="text-white text-xl font-medium">Sosial Media</p>
          <div className="flex pt-4">
            <a
              href="http://facebook.com"
              target="_blank"
              onMouseEnter={() => setIsShownFb(true)}
              onMouseLeave={() => setIsShownFb(false)}
            >
              {isShownFb ? (
                <img alt="FB Hover" src={FbH} className="pr-4 cursor-pointer" />
              ) : (
                <img alt="FB" src={Fb} className="pr-4 cursor-pointer" />
              )}
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              onMouseEnter={() => setIsShownIg(true)}
              onMouseLeave={() => setIsShownIg(false)}
            >
              {isShownIg ? (
                <img alt="IG Hover" src={IgH} className="pr-4 cursor-pointer" />
              ) : (
                <img alt="IG" src={Ig} className="pr-4 cursor-pointer" />
              )}
            </a>
            <a
              href="http://linkedin.com"
              target="_blank"
              onMouseEnter={() => setIsShownLinkedin(true)}
              onMouseLeave={() => setIsShownLinkedin(false)}
            >
              {isShownLinkedin ? (
                <img
                  alt="linkedin"
                  src={LinkedinH}
                  className="cursor-pointer"
                />
              ) : (
                <img alt="linkedin" src={Linkedin} className="cursor-pointer" />
              )}
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden justify-between">
        <div className="flex">
          <div className="w-1/2">
            <img src={Logo} />
            <div className="flex items-start pt-8">
              <img src={Maps} />
              <p className="text-white ml-4">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Tortor.
              </p>
            </div>
          </div>
          <div className="w-1/2 px-10">
            <ul className="">
              <li className="text-white text-xl font-medium">About</li>
              <li className="mt-4">
                <a className="text-white hover:underline cursor-pointer">
                  Assessment
                </a>
              </li>
              <li className="mt-4">
                <a className="text-white hover:underline cursor-pointer">
                  Our Product
                </a>
              </li>
              <li className="mt-4">
                <a className="text-white hover:underline cursor-pointer">
                  Article
                </a>
              </li>
              <li className="mt-4">
                <a className="text-white hover:underline cursor-pointer">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="w-1/2 px-10">
            <ul className="">
              <li className="text-white text-xl font-medium">
                Customer Support
              </li>
              <li className="mt-4">
                <div className="flex items-start">
                  <img src={Sms} />
                  <a className="text-white hover:underline ml-4 cursor-pointer">
                    Lorem Ipsum{" "}
                  </a>
                </div>
              </li>
              <li className="mt-4">
                <div className="flex items-start">
                  <img src={Call} />
                  <a className="text-white hover:underline  ml-4 cursor-pointer">
                    Lorem Ipsum
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <p className="text-white text-xl font-medium">Sosial Media</p>
            <div className="flex pt-4">
              <a
                href="http://facebook.com"
                target="_blank"
                onMouseEnter={() => setIsShownFb(true)}
                onMouseLeave={() => setIsShownFb(false)}
              >
                {isShownFb ? (
                  <img
                    alt="FB Hover"
                    src={FbH}
                    className="pr-4 cursor-pointer"
                  />
                ) : (
                  <img alt="FB" src={Fb} className="pr-4 cursor-pointer" />
                )}
              </a>
              <a
                href="http://instagram.com"
                target="_blank"
                onMouseEnter={() => setIsShownIg(true)}
                onMouseLeave={() => setIsShownIg(false)}
              >
                {isShownIg ? (
                  <img
                    alt="IG Hover"
                    src={IgH}
                    className="pr-4 cursor-pointer"
                  />
                ) : (
                  <img alt="IG" src={Ig} className="pr-4 cursor-pointer" />
                )}
              </a>
              <a
                href="http://linkedin.com"
                target="_blank"
                onMouseEnter={() => setIsShownLinkedin(true)}
                onMouseLeave={() => setIsShownLinkedin(false)}
              >
                {isShownLinkedin ? (
                  <img
                    alt="linkedin"
                    src={LinkedinH}
                    className="cursor-pointer"
                  />
                ) : (
                  <img
                    alt="linkedin"
                    src={Linkedin}
                    className="cursor-pointer"
                  />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-24">
        <p className="text-white font-normal text-base ">
          &#169; Copyright 2022 Starley
        </p>
      </div>
    </footer>
  );
}
