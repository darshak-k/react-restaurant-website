import React from "react";
import foodLunch from "../images/food-lunch.jpeg";
import { useTranslation } from "react-i18next";

const Nutri = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:my-11">
      <h4 className="text-center my-4 text-hot-pink font-WorkSansBold text-[14px] md:text-[18px] uppercase">
        {t("layouttwocontectone")}
      </h4>
      <section className="w-[95%] m-auto">
        <div className="flex lg:flex-row flex-col-reverse ">
          <div className="lg:w-[50%] w-[100%] flex  lg:justify-start justify-center">
            <div className="w-[80%]">
              <div className=" lg:min-h-[400px] flex-col flex justify-center">
                <h4 className=" py-3 text-green-food font-WorkSansBold text-[14px] md:text-[18px] uppercase">
                  {t("layouttwocontecttwo")}
                </h4>
                <p className="py-3 leading-snug text-hot-pink font-WorkSansBold text-[14px] md:text-[18px] uppercase">
                  {t("layouttwocontectthree")}
                </p>
                <p className="py-3 leading-snug text-hot-pink font-WorkSansBold text-[14px] md:text-[18px] uppercase">
                  {t("layouttwocontectfour")}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-[100%] flex  justify-center">
            <div className="lg:h-[400px] h-auto my-4 lg:my-0 overflow-hidden">
              <div className="flex justify-center">
                <div className="lg:h-[550px] lg:w-[550px]  lg:top-[-74px] sm:h-[400px] h-[300px] w-[300px] sm:w-[400px] overflow-hidden relative rounded-full ">
                  <img
                    src={foodLunch}
                    className="h-[100%] object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutri;
