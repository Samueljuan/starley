import React, { useState } from "react";
import KeyIcon from "assets/icons/key-fill.svg";
import MailIcon from "assets/icons/mail-fill.svg";
import AppleIcon from "assets/icons/apple-icon.svg";
import AppleIconH from "assets/icons/applehover-icon.svg";
import FbIcon from "assets/icons/fb-icon.svg";
import FbIconH from "assets/icons/fbhover-icon.svg";
import GoogleIcon from "assets/icons/google-icon.svg";
import GoogleIconH from "assets/icons/googlehover-icon.svg";
import { InputAuth } from "components/atoms";

const Login = () => {
  const [isShownApple, setIsShownApple] = useState(false);
  const [isShownGoogle, setIsShownGoogle] = useState(false);
  const [isShownFb, setIsShownFb] = useState(false);
  return (
    <div className="bg-[#A3B7B3] __woman-bg-auth-page py-[154px] flex justify-center w-full text-textDefault">
      <div className="w-[590px] px-[59px] pt-[112px] bg-white rounded-lg h-[720px]">
        <p className="text-[48px] font-playfair font-bold">Masuk</p>
        <div className="mt-6">
          <InputAuth icon={MailIcon} placeholder="Email" />
          <InputAuth type="password" icon={KeyIcon} placeholder="Kata Sandi" />
        </div>
        <div className="border-b border-[#24324F] border-opacity-[0.4] flex justify-center">
          <p className="-mb-[10px] bg-white px-5">Atau masuk dengan</p>
        </div>
        <div className="flex justify-center items-center mt-8 space-x-3 mb-[52px]">
          <div
            className="w-[42px] h-[42px] rounded-full border-2 border-[#354440] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsShownFb(true)}
            onMouseLeave={() => setIsShownFb(false)}
          >
            {isShownFb ? (
              <img src={FbIconH} alt="fbhover-icon" />
            ) : (
              <img src={FbIcon} alt="fb-icon" />
            )}
          </div>
          <div
            className="w-[42px] h-[42px] rounded-full border-2 border-[#354440] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsShownGoogle(true)}
            onMouseLeave={() => setIsShownGoogle(false)}
          >
            {isShownGoogle ? (
              <img src={GoogleIconH} alt="googlehover-icon" />
            ) : (
              <img src={GoogleIcon} alt="google-icon" />
            )}
          </div>
          <div
            className="w-[42px] h-[42px] rounded-full border-2 border-[#354440] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsShownApple(true)}
            onMouseLeave={() => setIsShownApple(false)}
          >
            {isShownApple ? (
              <img src={AppleIconH} alt="applehover-icon" />
            ) : (
              <img src={AppleIcon} alt="apple-icon" />
            )}
          </div>
        </div>
        <button className="font-bold py-5 rounded-full w-full text-white bg-[#1B3E66] text-[18px] mt-[20px]">
          Masuk
        </button>
        <p className="mt-[20px] text-center">
          Belum punya akun?{" "}
          <a href="/auth/register">
            <span className="font-semibold hover:text-[#1B3E66] cursor-pointer">
              Daftar akun
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
