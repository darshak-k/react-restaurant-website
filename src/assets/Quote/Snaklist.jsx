import React from "react";
import spoonicon from "../images/cross-spoon.png";
import { Link } from "react-router-dom";
import snacks from "../images/snacks.png";
import choclate from "../images/choclate.png";
import desart from "../images/desart.png";
import none from "../images/null.png";
import { useTranslation } from "react-i18next";

const Snaklist = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#53d587]">
      <div className="flex flex-col justify-between min-h-[100vh]">
        <div>
          <div className="flex justify-center my-10">
            <Link to="/Quotes">
              <div className="rounded-full mx-5 bg-[#fea700] opacity-40 hover:opacity-100 md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
                <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                  <div className=" flex flex-col justify-center items-center h-[100%]">
                    <h3 className="font-itim text-white md:text-[45px] text-[25px]">
                      1
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/Quotstwostep">
              <div className="rounded-full mx-5 bg-[#57b464]  md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
                <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                  <div className=" flex flex-col justify-center items-center h-[100%]">
                    <h3 className="font-itim text-white md:text-[45px] text-[25px]">
                      2
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/Quotsthreestep">
              <div className="rounded-full mx-5 bg-[#fe4331] hover:opacity-100 opacity-40 md:w-[100px] w-[80px]  md:h-[100px] h-[80px] p-2 ">
                <div className="rounded-full h-[100%] w-[100%] border-white border-[2px] ">
                  <div className=" flex flex-col justify-center items-center h-[100%]">
                    <h3 className="font-itim text-white md:text-[45px] text-[25px]">
                      3
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="py-6">
            <div className=" flex justify-center">
              <h1 className="font-WorkSansBoldItalic  w-[80%] md:text-[28px] text-[18px] text-center">
                {t("snaklistone")}
              </h1>
            </div>
            <div className="flex justify-center w-[100%] my-10 ">
              <div className="relative md:w-[40%] w-[60%] ">
                <div className="w-[100%] border-white border-[2px] border-solid"></div>
                <div className=" absolute lg:-top-7 md:-top-5 -top-4 flex justify-center w-[100%]">
                  <div className="bg-[#53d587]">
                    <img
                      src={spoonicon}
                      className="bg-inherit bg-[#53d587]  lg:h-[55px] md:h-[35px] h-[28px] w-[28px] md:w-[35px] lg:w-[55px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-[70%] m-auto">
              <div className="flex flex-col lg:w-[25%] md:w-[50%] w-[100%]  ">
                <div className="flex justify-center">
                  <div className="border-[1px]  border-white h-[70px] w-[70px] rounded-full border-solid">
                    <div className="flex justify-center  flex-col h-[100%] items-center">
                      <img
                        src={snacks}
                        className="lg:h-[35px] h-[28px] w-[28px] lg:w-[35px] object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="min-h[100px] flex justify-center">
                  <h2 className="w-[50%] text-center lg:text-[24px] md:text-[18] text-[14] font-WorkSansBoldItalic  py-4">
                    {t("Morning_Snack")}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col lg:w-[25%] md:w-[50%] w-[100%]">
                <div className="flex justify-center">
                  <div className="border-[1px] mx-3 border-white h-[70px] w-[70px] rounded-full border-solid">
                    <div className="flex justify-center flex-col h-[100%] items-center">
                      <img
                        src={choclate}
                        className="lg:h-[35px] h-[28px] w-[28px] lg:w-[35px] object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex min-h[100px] justify-center">
                  <h2 className="w-[50%] text-center lg:text-[24px] md:text-[18] text-[14] font-WorkSansBoldItalic  py-4">
                    {t("Afternoon_Snack")}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col lg:w-[25%] md:w-[50%] w-[100%]">
                <div className="flex justify-center">
                  <div className="border-[1px]  border-white h-[70px] w-[70px] rounded-full border-solid">
                    <div className="flex justify-center flex-col h-[100%] items-center">
                      <img
                        src={desart}
                        className="lg:h-[35px] h-[28px] w-[28px] lg:w-[35px] object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex min-h[100px]  justify-center">
                  <h2 className="w-[50%] text-center lg:text-[24px] md:text-[18] text-[14] font-WorkSansBoldItalic  py-4">
                    {t("Desserts")}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col lg:w-[25%] md:w-[50%] w-[100%]">
                <div className="flex justify-center">
                  <div className="border-[1px] mx-3 border-white h-[70px] w-[70px] rounded-full border-solid">
                    <div className="flex justify-center flex-col h-[100%] items-center">
                      <img
                        src={none}
                        className="lg:h-[35px] h-[28px] w-[28px] lg:w-[35px] object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex min-h[100px] justify-center">
                  <h2 className="w-[50%] text-center lg:text-[24px] md:text-[18] text-[14] font-WorkSansBoldItalic  py-4">
                    {t("none")}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between md:my-4 my-9 mx-4">
          <Link to="/Quotes">
            <button className="px-7 font-WorkSansBoldItalic py-1 bg-white font-[24px]">
              {t("back")}
            </button>
          </Link>
          <Link to="/Quotsthreestep">
            <button className="px-7 font-WorkSansBoldItalic py-1 bg-white font-[24px]">
              {t("next")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Snaklist;
