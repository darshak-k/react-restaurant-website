import React from "react";
import sandwich from "../images/section-1.png";

const Home = () => {
  return (
    <section className="bg-warning">
      {/* navbar */}
      <div className="w-[80%] md:w-[38%] m-auto">
        <ul className="flex justify-between font-custom w-100 py-2 list-unstyled font-WorkSansReg">
          <li className=" mx-1 ">
            <a className="py-2 uppercase text-list-black text-[14px] md:text-[18px] " href="#">
              ACCUEIL
            </a>
          </li>
          <li className=" mx-1">
            <a className="py-2 uppercase text-list-black text-[14px] md:text-[18px] " href="#">
              ECOLES
            </a>
          </li>
          <li className=" mx-1">
            <a className="py-2 uppercase text-list-black text-[14px] md:text-[18px] " href="#">
              GARDERIE
            </a>
          </li>
          <li className=" mx-1">
            <a className="py-2 uppercase text-list-black text-[14px] md:text-[18px] " href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* layout display */}
      <div className="relative">
        <div className="flex justify-center">
          <img
            src={sandwich}
            alt=""
            className="md:h-[calc(100vh-45px)] h-[calc(70vh-45px)] object-cover bg-center img md:min-h-[650px]"
          />
        </div>
        <div className=" md:absolute w-[100%] md:h-[calc(100vh-45px)]  md:min-h-[650px] top-0">
          {/* layer on image */}
          <section>
            <h1 className="font-WorkSansBold my-16  text-center lg:text-[70px] md:text-[55px] text-[35px] uppercase text-hot-pink">
              La meilleur maman
            </h1>
            <div className="w-[95%] m-auto">
              <div className="flex md:flex-row flex-col md:justify-between">
                <div className="lg:w-[40%] md:w-[38%] w-100 md:h-[400px] my-2 md:my-0 flex  items-center">
                  <h2 className="lg:text-[53px] md:text-[40px] text-[30px] uppercase leading-tight font-bold text-hot-pink">
                    Traiteur pour votre Garderie ou votre ecole
                  </h2>
                </div>
                <div className="lg:w-[38%] md:w-[34%] w-[100%] md:h-[400px] my-2 md:my-0 flex  items-center">
                  <h2 className="lg:text-[25px] md:text-[20px]  text-[19px] uppercase leading-normal font-bold text-hot-pink">
                    La Meilleur Maman vous propose des repas chauds et
                    nutritifs, des collations variées et un choix de boissons,
                    tous adaptés aux besoins de votre établissement.
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
