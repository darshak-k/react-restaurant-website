import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";

const Header = () => {
  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div>
      <div className="bg-warning">
        <div className="lg:w-[50%] w-[80%] m-auto">
          <ul className="flex justify-between flex-wrap font-custom w-100 py-2 list-unstyled font-WorkSansReg">
            <li className="md:mx-2 mx-1 ">
              <a
                className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
                href="#"
              >
                 {t("navitemone")}
              </a>
            </li>
            <li className="md:mx-2 mx-1">
              <a
                className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
                href="#"
              >
              {t("navitemtwo")}
              </a>
            </li>
            <li className="md:mx-2 mx-1">
              <a
                className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
                href="#"
              >
                  {t("navitemthree")}
              </a>
            </li>
            <li className="md:mx-2 mx-1">
              <a
                className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
                href="#"
              >
                {t("navitemtfoure")}
              </a>
            </li>
            <li className="md:mx-2 mx-1">
              <div className="d-flex">
                <a
                  className=" main-menu ln mx-1 cursor-pointer"
                  onMouseEnter={() => changeLanguage("en")}
                  onMouseLeave={() => changeLanguage(currentLanguage)}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </a>
                <span>|</span>
                <a
                  className=" main-menu  ln mx-2 cursor-pointer"
                  onMouseEnter={() => changeLanguage("fs")}
                  onMouseLeave={() => changeLanguage(currentLanguage)}
                  onClick={() => changeLanguage("fs")}
                >
                  FR
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
