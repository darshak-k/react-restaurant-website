import React from "react";
import bgfoodimg from "../images/bg-hero.png";
import { useTranslation } from "react-i18next";

const FoodDish = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className=" relative">
        <img
          src={bgfoodimg}
          className="w-[100%] md:h-[670px] h-[600px] object-cover"
          alt=""
        />
        <div className=" absolute top-0 w-[100%] ">
          <h1 className="text-center my-2 xl:w-[40%] lg:w-[50%] md:w-[60%] w-[85%] m-auto  font-itim font-normal xl:text-[44px] lg:text-[40px] md:text-[35px] text-[30px] text-white">
            {t("layeightone")}
          </h1>
        </div>
        <div className=" absolute w-[100%]  top-[25%]">
          <div className="w-[80%] m-auto">
            <div className=" w-[100%] flex lg:justify-start justify-center">
              <div className=" md:w-[369px] w-[340px]  bg-white p-3 opacity-80">
                <div className="border-black flex flex-col justify-between border-solid border-[2px] p-3 md:h-[369px] h-[340px]">
                  <div>
                    <h2 className="font-itim text-[30px]">
                      {t("layeighttwo")}
                    </h2>
                    <p className="text-black font-normal w-[60%] lg:text-[20px] md:text-[18px] text-[16px]">
                      {t("layeightthree")}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-itim text-[30px]">
                      {" "}
                      {t("layeightfour")}
                    </h2>
                    <p className="text-black font-normal w-[70%] lg:text-[20px] md:text-[18px] text-[16px]">
                      {t("layeightfive")}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-itim text-[30px]">
                      {t("layeightsix")}
                    </h2>
                    <p className="text-black font-normal lg:text-[20px] md:text-[18px] text-[16px]">
                      {t("layeightseven")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDish;
