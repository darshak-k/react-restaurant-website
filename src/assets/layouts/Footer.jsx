import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import footerlogo from "../images/footer-logo.png"

const Footer = () => {
  return (
    <section className="">
      <div className="w-[90%] m-auto py-11">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/4 px-2 w-[100%]">

          <div className="flex lg:justify-start  justify-center">
             <img src={footerlogo} className="lg:w-[80%] md:w-[30%] md:h-[30%] w-[40%] h-[40%] lg:h-[80%] object-cover" alt="" />
          </div> 

          </div>
          <div className="lg:w-1/4 px-2 w-[100%]">
            <h3 className=" py-3  font-lora md:w-[60%] w-[50%]  text-[20px] md:text-[25px] ">
            Les petits
            appetits
            </h3>
            <p className=" py-3 font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
              est un service de traiteur haut de gamme, exclusivement dédié à la
              fourniture de repas gastronomiques faits maison, frais et sains
              pour les écoles, les garderies,{" "}
            </p>
          </div>
          <div className="lg:w-1/4 px-2 w-[100%] ">
            <div className="lg:mx-3">
              <h3 className=" py-3  font-bold  w-[100%] font-WorkSansReg text-[12px] md:text-[16px] uppercase">
                nous sommes a <br></br>Montreal
              </h3>
              <p className=" py-3  font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
                2963 Rue de Miniac<br></br>
                St-Laurent, H4S 1L8 Quebéc
              </p>
              <p className="   font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
                P: (514) 400-4545
              </p>
              <p className="  font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
                E: Contact
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 px-2 w-[100%] ">
            <div className="">
              <h3 className=" py-3  font-bold md:w-[100%] font-WorkSansReg text-[12px] md:text-[16px] uppercase">
                heures d ‘ouvertures
              </h3>

              <p className="   font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
                Lundi – Vendredi
              </p>
              <p className="  font-light  font-WorkSansReg text-[12px] md:text-[16px] ">
                Open: 6AM – 6PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[95%] py-3">
        <div className="flex">
          <a className="ps-2 text-[14px] md:text-[18px]" href="https://www.instagram.com/">
            <FiInstagram />
          </a>
          <a className="ps-2 text-[14px] md:text-[18px]" href="https://facebook.com/">
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
