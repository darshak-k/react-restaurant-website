import React from "react";
import lunchBoy from "../images/lunch-boy.jpg";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-warning mt-1 lg:py-11  md:py-8 py-4">
      <div className="flex lg:flex-row flex-col-reverse   w-[95%] m-auto">
        <div className="lg:h-[390px] sm:h-[300px] md:h-[350px] h-[250px] lg:w-[50%] w-[100%] flex justify-center">
          <div className="lg:w-[100%] md:w-[80%] w-[100%]  rounded-full overflow-hidden">
            <img
              src={lunchBoy}
              className=" h-[100%] object-cover w-[100%]  "
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <div className="flex flex-col h-[100%] w-[85%] m-auto  justify-center ">
            <h4 className=" py-2  text-center text-menu-green font-WorkSansBold text-[14px] md:text-[18px] uppercase">
              {t("layoutThreeContectOne")}
            </h4>
            <h4 className=" py-2 text-center text-hot-pink font-WorkSansBold text-[14px] md:text-[18px] uppercase">
              {t("layoutThreeContectTwo")}
            </h4>
            <h4 className=" py-2  text-center text-menu-green font-WorkSansBold text-[14px] md:text-[18px] uppercase">
              {t("layoutThreeContectThree")}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
