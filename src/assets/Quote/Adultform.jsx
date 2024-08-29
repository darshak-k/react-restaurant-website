import React from "react";
import spoonicon from "../images/cross-spoon.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Adultform = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-warning">
      <div className="flex flex-col justify-between h-[calc(100vh-45px)]">
        <div>
          <div className="flex justify-center my-10">
            <div className="rounded-full mx-5 bg-[#fea700] md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
              <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                <div className=" flex flex-col justify-center items-center h-[100%]">
                  <h3 className="font-itim text-white md:text-[45px] text-[25px]">1</h3>
                </div>
              </div>
            </div>
            <div className="rounded-full mx-5 bg-[#57b464] opacity-40 md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
              <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                <div className=" flex flex-col justify-center items-center h-[100%]">
                  <h3 className="font-itim text-white md:text-[45px] text-[25px]">2</h3>
                </div>
              </div>
            </div>
            <div className="rounded-full mx-5 bg-[#fe4331] opacity-40 md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
              <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                <div className=" flex flex-col justify-center items-center h-[100%]">
                  <h3 className="font-itim text-white md:text-[45px] text-[25px]">3</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8">
            <h1 className="font-WorkSansBoldItalic md:text-[28px] text-[18px] text-center">
              {t('adultone')}
            </h1>
            <div className="flex justify-center w-[100%] my-10 ">
              <div className="relative md:w-[40%] w-[60%] ">
                <div className="w-[100%] border-white border-[2px] border-solid"></div>
                <div className=" absolute md:-top-7 -top-4 flex justify-center w-[100%]">
                  <img
                    src={spoonicon} 
                    className="bg-inherit bg-warning md:h-[55px] h-[35px] w-[35px] md:w-[55px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex my-2">
                <h2 className="font-WorkSansBoldItalic font-[34px] w-[80px] ">
                  {t('adulttwo')}
                </h2>
                <input type="text" className="mx-4" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex my-2">
                <h2 className="font-WorkSansBoldItalic font-[34px] w-[80px]">
                {t('adultthree')}
                </h2>
                <input type="text" className="mx-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end md:my-4 my-9 mx-4">
          <Link to="/">
            <button className="px-7 font-WorkSansBoldItalic py-1 bg-white font-[24px]">
              {t('next')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Adultform;
