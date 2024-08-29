import React from "react";

import spoonicon from "../images/cross-spoon.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f99292]">
      <div className="flex flex-col justify-between min-h-[100vh]">
        <div>
          <div className="flex justify-center my-10">
            <div className="rounded-full mx-5 bg-[#fea700] opacity-40 md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
              <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                <div className=" flex flex-col justify-center items-center h-[100%]">
                  <h3 className="font-itim text-white md:text-[45px] text-[25px]">
                    1
                  </h3>
                </div>
              </div>
            </div>
            <div className="rounded-full mx-5 bg-[#57b464]  opacity-40 md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
              <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                <div className=" flex flex-col justify-center items-center h-[100%]">
                  <h3 className="font-itim text-white md:text-[45px] text-[25px]">
                    2
                  </h3>
                </div>
              </div>
            </div>
            <div className="rounded-full mx-5 bg-[#fe4331]  md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
              <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                <div className=" flex flex-col justify-center items-center h-[100%]">
                  <h3 className="font-itim text-white md:text-[45px] text-[25px]">
                    3
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className=" flex justify-center">
              <h1 className="font-WorkSansBoldItalic  w-[80%] md:text-[28px] text-[18px] text-center">
                {t('loactionone')}
              </h1>
            </div>
            <div className="flex justify-center w-[100%] my-10 ">
              <div className="relative md:w-[40%] w-[60%] ">
                <div className="w-[100%] border-white border-[2px] border-solid"></div>
                <div className=" absolute lg:-top-7 md:-top-5 -top-4 flex justify-center w-[100%]">
                  <div className="bg-[#f99292]">
                    <img
                      src={spoonicon}
                      className="bg-inherit bg-[#f99292]  lg:h-[55px] md:h-[35px] h-[28px] w-[28px] md:w-[35px] lg:w-[55px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex md:flex-row flex-col my-2">
              <h2 className="font-WorkSansBoldItalic font-[34px] w-[180px] ">
                {t('postal_code')}
              </h2>
              <input type="text" className="md:mx-4 " />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex md:flex-row flex-col  my-2">
              <h2 className="font-WorkSansBoldItalic font-[34px] w-[180px] ">
              {t('school_name')}
              </h2>
              <input type="text" className="md:mx-4" />
            </div>
          </div>
         
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row my-2">
              <h2 className="font-WorkSansBoldItalic font-[34px] w-[180px] ">
              {t('school_adress')}
              </h2>
              <input type="text" className="md:mx-4" />
            </div>
          </div>
        </div>

        <div className="flex justify-between md:my-4 my-9 mx-4">
          <Link to="/">
            <button className="px-7 font-WorkSansBoldItalic py-1 bg-white font-[24px]">
              {t('back')}
            </button>
          </Link>
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

export default Location;
