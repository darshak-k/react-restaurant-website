import React from "react";
import sandwich from "../images/section-1.png";
import foodLogo from "../images/food-logo.png";

const Home = () => {
  return (
    <section className="bg-warning">
      {/* navbar */}
      <div className="lg:w-[50%] w-[60%] m-auto">
        <ul className="flex justify-between font-custom w-100 py-2 list-unstyled font-WorkSansReg">
          <li className="md:mx-2 mx-1 ">
            <a
              className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
              href="#"
            >
              ACCUEIL
            </a>
          </li>
          <li className="md:mx-2 mx-1">
            <a
              className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
              href="#"
            >
              ECOLES
            </a>
          </li>
          <li className="md:mx-2 mx-1">
            <a
              className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
              href="#"
            >
              GARDERIE
            </a>
          </li>
          <li className="md:mx-2 mx-1">
            <a
              className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
              href="#"
            >
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
            <div className="  ">
              <h1 className="font-WorkSansBold py-16  text-center xl:text-[70px] lg:text-[55px] text-[35px] uppercase text-hot-pink">
                Les Petits Appétits
              </h1>
            </div>

            <div className="w-[95%] m-auto">
              <div className="flex md:flex-row flex-col md:justify-between">
                <div className="lg:w-[40%] md:w-[38%] w-100 md:h-[400px] my-2 md:my-0 flex   items-center">
                  <div className="flex flex-col">
                    <h2 className="xl:text-[53px] lg:text-[40px] text-[30px] uppercase leading-tight font-bold text-hot-pink">
                      Traiteur pour votre Garderie ou votre école
                    </h2>
                    <a
                      href="#"
                      className="flex ms-4 justify-center md:justify-start"
                    >
                      <button className="bg-btn-danger my-10 py-1 lg:px-10 px-5 rounded-full text-white font-WorkSansBoldItalic   lg:text-[20px] md:text-[18px] text-[16px]">
                        Obtenez une soumission
                      </button>
                    </a>
                  </div>
                </div>
                <div className="lg:w-[38%] md:w-[34%] w-[100%] md:h-[400px] my-2 md:my-0 flex  items-center">
                  <div className="flex flex-col">
                    <h2 className="lg:text-[25px] md:text-[20px]  text-[19px] uppercase leading-normal font-bold text-center text-hot-pink">
                      Les Petits Appétits vous propose des repas chauds et
                      nutritifs, des collations variées et un choix de boissons,
                      tous adaptés aux besoins de votre établissement.
                    </h2>
                    <a href="#" className="flex justify-center">
                      <button className="bg-btn-danger my-10 py-1 lg:px-10 px-5 rounded-full text-white font-WorkSansBoldItalic   lg:text-[20px] md:text-[18px] text-[16px] ">
                        Consulter Le Menu
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" absolute top-[0px]  w-[100%]  ">
          <div className="w-[94%] m-auto">
            <div className="flex justify-between ">
              <div>
                <img
                  src={foodLogo}
                  className="xl:h-[160px] lg:h-[140px] h-[120px] xl:w-[160px] lg:w-[140px] w-[120px] object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <a href="#">
                  <button className="bg-btn-danger py-1 lg:px-12 px-5 rounded-full text-white font-WorkSansBoldItalic  lg:text-[20px] md:text-[18px] text-[16px]">
                    Cree un Compte
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
