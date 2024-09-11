import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";

const Menulist = () => {

  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState ("en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div className="bg-warning">
      <div className="bg-menu-header bg-cover bg-center  w-full min-h-[280px] ">
        <div className="py-[40px] flex justify-between">
          <div className="w-[90%] text-center">
            <h3 className="text-center  font-BreeSerif text-white text-[35px] ">
              {t('menu_header')}
            </h3>
          </div>
          <div className="w-[10%] flex flex-col justify-center">
            <div className="flex justify-center">
              <a
                className="text-white  mx-1 cursor-pointer"
                onMouseEnter={() => changeLanguage("en") }
                onMouseLeave={() => changeLanguage(currentLanguage)}
                onClick={() => changeLanguage("en")}
              >
                EN
              </a>
              <span>|</span>
              <a
                className=" text-white mx-2 cursor-pointer"
                onMouseEnter={() => changeLanguage("fs")}
                onMouseLeave={() => changeLanguage(currentLanguage)}
                onClick={() => changeLanguage("fs")}
              >
                FR
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[-100px]  w-[100%]">
        <div className="w-[95%] m-auto   flex flex-wrap">
          {/* cards */}
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div> <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div> <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div> <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-[100%] xl:p-2 p-4">
            <div className="p-4 bg-[#13A4A2] font-BreeSerif  h-[70px] flex flex-col justify-center">
              <h2 className="text-[25px] text-white">{t("menu_title")} </h2>
            </div>
            <div className="w-[100%]  p-4 bg-white min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_one')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_two')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_three')}
                </p>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_four')}
                </h3>
                <p className="font-semibold text-[16px] text-menudesc">
                  {t('title_seven')}
                </p>
              </div>

              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                 {t('title_five')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                 {t('title_six')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eight')}
                </h3>
              </div>
              <div>
                <h2 className="text-black uppercase font-bold py-2 text-[18px]">
                  {t('title_nine')}
                </h2>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_ten')}
                </h3>
                <h3 className="font-semibold text-[16px] text-menutitle">
                  {t('title_eleven')}
                </h3>
              </div>
            </div>
          </div>
    
        </div>
      </div>
      <div className="lg:py-[80px] py-[40px]">
        <h3 className="text-center font-BreeSerif text-[#F99292] text-[35px] ">
          {t('ENJOY')}
        </h3>
      </div>
    </div>
  );
};

export default Menulist;
