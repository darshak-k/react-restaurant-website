import React from "react";
import sandwich from "../images/section-1.png";
import foodLogo from "../images/food-logo.png";

const Home = () => {
  return (
    <section className="bg-warning">
      {/* navbar */}
      <div className="w-[80%] md:w-[38%] m-auto">
        <ul className="flex justify-between font-custom w-100 py-2 list-unstyled font-WorkSansReg">
          <li className=" mx-1 ">
            <a
              className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
              href="#"
            >
              ACCUEIL
            </a>
          </li>
          <li className=" mx-1">
            <a
              className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
              href="#"
            >
              ECOLES
            </a>
          </li>
          <li className=" mx-1">
            <a
              className="py-2 uppercase text-list-black text-[14px] md:text-[18px] "
              href="#"
            >
              GARDERIE
            </a>
          </li>
          <li className=" mx-1">
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
                      Catering for Your Daycare or School
                    </h2>
                    <a href="#" className="flex justify-center">
                      <button className="bg-btn-danger my-10 py-1 px-lg-20 px-5 rounded-full text-white font-WorkSansBoldItalic  text-[20px]">
                        Get a Quote
                      </button>
                    </a>
                  </div>
                </div>
                <div className="lg:w-[38%] md:w-[34%] w-[100%] md:h-[400px] my-2 md:my-0 flex  items-center">
                  <div className="flex flex-col">
                    <h2 className="lg:text-[25px] md:text-[20px]  text-[19px] uppercase leading-normal font-bold text-center text-hot-pink">
                      Les Petits Appétits offers hot and nutritious meals, a
                      variety of snacks, and a selection of beverages, all
                      tailored to the needs of your institution.
                    </h2>
                    <a href="#" className="flex justify-center">
                      <button className="bg-btn-danger my-10 py-1 px-lg-20 px-5 rounded-full text-white font-WorkSansBoldItalic  text-[20px]">
                        View the Menu
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
                        <button className="bg-btn-danger py-1 px-lg-10 px-5 rounded-full text-white font-WorkSansBoldItalic  lg:text-[20px] md:text-[16px] text-[14px]">
                          Crerate your account
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
