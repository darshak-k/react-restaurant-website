import React from "react";
import spoonicon from "../images/spoon-ico.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Aboutform = () => {
  const { t } = useTranslation();
  return (
    <section className="py-6 lg:py-10 relative">
      <div className="py-4">
        <div className="flex justify-center relative">
          {/* chooes text */}
          <div className="border-sky-line p-4 border-solid  border-[3px] ">
            <h1 className="xl:text-[30px] lg:text-[26px] text-[18px] font-['itim']">
            {t('about_you')}
            </h1>
          </div>
          <div className="absolute bottom-[-13px]">
            <img
              src={spoonicon}
              className="md:px-15 px-5 w-[90%] object-cover bg-white"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" md:w-[50%] w-[100%] m-auto my-5">
        <div className="flex py-2 flex-col">
          <label htmlFor="first_name">
            <h4 className="mx-2 py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
              {t("laysixtwo")} (requis)
            </h4>
          </label>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                    {t("laysixfname")}
                  </h4>
                </label>
                <input
                  type="text"
                  className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-2 border-muted"
                />
              </div>
            </div>

            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                    {t("laysixlname")}
                  </h4>
                </label>
                <input
                  type="text"
                  className="px-2 w-[100%] rounded border-[1px] py-2 outline-green-food border-muted"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                    {t("laysixemail")}(requis)
                  </h4>
                </label>
                <input
                  type="email"
                  className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-2 border-muted"
                />
              </div>
            </div>

            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                    {t("laysixcall")} (requis)
                  </h4>
                </label>
                <input
                  type="numbar"
                  className="px-2 w-[100%] rounded border-[1px] py-2 outline-green-food border-muted"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="mx-2">
            <label htmlFor="first_name">
              <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                {t("laysixmessage")} (requis)
              </h4>
            </label>
            <textarea
              className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-1 border-muted"
              name=""
              rows="5"
              id=""
            ></textarea>
          </div>
        </div>

        <a href="#" className="flex justify-center">
          <button className="bg-btn-danger my-5 py-1 lg:px-16 px-5 rounded-full text-white font-WorkSansBoldItalic   lg:text-[20px] md:text-[18px] text-[16px] ">
            {t('get_qoute')}
          </button>
        </a>
      </div>
      <div className="flex justify-start md:my-4 my-9 mx-4">
          <Link to="/">
            <button className="px-7 font-WorkSansBoldItalic py-1 bg-[#F99292]  font-[24px]">
              {t('back')}
            </button>
          </Link>
        </div>
    </section>
  );
};

export default Aboutform;
