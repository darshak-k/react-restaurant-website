import React from "react";
import foodBoy from "../images/food-boy.jpg";
import { useTranslation } from "react-i18next";

const Offrons = () => {
  const { t } = useTranslation();
  return (
    <section className="lg:my-11">
      <div>
        <h1 className=" py-2  text-center text-green-food font-WorkSansBold text-[16px] md:text-[24px] lg:text-[34px] ">
          {t('layfourone')}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col-reverse lg:w-[90%] w-[95%] py-8 m-auto">
        <div className="lg:w-[45%] w-[100%] lg:min-h-[390px] my-4 lg:my-0 flex flex-col justify-center">
          <h4 className=" py-2  text-center text-hot-pink font-WorkSansBold text-[14px] md:text-[18px] uppercase">
          {t('layfourtwo')}
          </h4>
          <h4 className=" py-2  text-center text-green-food font-WorkSansBold text-[14px] md:text-[18px] uppercase">
          {t('layfourthree')}
          </h4>
        </div>
        <div className="lg:w-[55%] w-[100%] flex flex-col lg:min-h-[400px] justify-center items-center">
          <div className=" rounded-full lg:ms-16 md:h-[390px] sm:h-[320px] h-[280px] w-[280px] sm:w-[320px] md:w-[390px] bg-hot-pink overflow-hidden">
            <img
              className="h-[100%] object-cover w-[100%]"
              src={foodBoy}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offrons;
