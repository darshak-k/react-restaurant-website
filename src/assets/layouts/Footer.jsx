import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import footerlogo from "../images/footer-logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="">
      <div className="w-[90%] m-auto py-11">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/4 px-2 w-[100%]">
            <div className="flex lg:justify-start  justify-center">
              <img
                src={footerlogo}
                className="lg:w-[80%] md:w-[30%] md:h-[30%] w-[40%] h-[40%] lg:h-[80%] object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-1/4 px-2 w-[100%]">
            <h3 className=" py-3  font-lora md:w-[60%] w-[50%]  text-[20px] md:text-[25px] ">
              {t("footerone")}
            </h3>
            <p className=" py-3 font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
              {t("footertwo")}
            </p>
          </div>
          <div className="lg:w-1/4 px-2 w-[100%] ">
            <div className="lg:mx-3">
              <h3 className=" py-3  font-bold  xl:w-[50%] lg:w-[80%] font-WorkSansReg text-[12px] md:text-[16px] uppercase">
                {t("footerthree")}
              </h3>
              <p className="  py-3  font-light w-[70%]  font-WorkSansReg text-[12px] md:text-[16px] ">
                {t("footerfour")}
              </p>
              <p className="   font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
                {t("footerfive")}
              </p>
              <p className="  font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
                {t("footersix")}
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 px-2 w-[100%] ">
            <div className="">
              <h3 className="py-3  font-bold md:w-[100%] font-WorkSansReg text-[12px] md:text-[16px] uppercase">
                {t("footerseven")}
              </h3>

              <p className="   font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
                {t('footereight')}
              </p>
              <p className="  font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
              {t('footernine')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[95%] py-3">
        <div className="flex">
          <a
            className="ps-2 text-[14px] md:text-[18px]"
            href="https://www.instagram.com/"
          >
            <FiInstagram />
          </a>
          <a
            className="ps-2 text-[14px] md:text-[18px]"
            href="https://facebook.com/"
          >
            <FaFacebookF />
          </a>
          <a className="ps-2 text-[14px] md:text-[18px]" href="https://x.com/">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
