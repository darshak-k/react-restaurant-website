import React from "react";
import spoonicon from "../images/spoon-ico.jpg";
import listOne from "../images/list-0.png";
import listTwo from "../images/list-1.png";
import listThree from "../images/list-2.png";
import listFour from "../images/list-3.png";
import listFive from "../images/list-4.png";

const ChooesTips = () => {
  return (
    <section className="py-10">
      <div className="w-[85%] m-auto">
        <div className="flex justify-center relative">
          {/* chooes text */}
          <div className="border-sky-line p-4 border-solid  border-[3px] ">
            <h1 className="xl:text-[30px] lg:text-[26px] text-[18px] font-['itim']">
              Pourquoi choisir Les Petits Appétits ?
            </h1>
          </div>
          <div className="absolute bottom-[-13px]">
            <img
              src={spoonicon}
              className=" lg:px-20 md:px-15 px-10 lg:w-[100%] w-[90%] object-cover bg-white"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-wrap lg:my-20 my-10 w-[100%]">
          <div className="xl:w-1/5 flex justify-center md:w-1/3 px-1 sm:w-1/2 w-[100%] ">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <div className=" p-2 rounded-full xl:w-[165px] xl:h-[165px] lg:w-[155px] md:w-[135px] md:h-[135px] w-[115px] h-[115px] lg:h-[155px] bg-listOne">
                  <div className="rounded-full h-[100%] w-[100%] border-[3px] border-solid border-white">
                    <div className="flex flex-col h-[100%] w-[100%] justify-center items-center">
                      <img
                        src={listOne}
                        alt=""
                        className=" md:w-[65px] w-[45px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center w-[80%] md:w-[100%]  m-auto my-4 ">
                <p className=" font-itim text-listOne lg:text-[22px] md:text-[20px] text-[16px] ">
                  Des ingrédients frais de qualité
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-1/5 flex justify-center md:w-1/3 px-1 sm:w-1/2 w-[100%] ">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <div className=" p-2 rounded-full xl:w-[165px] xl:h-[165px] lg:w-[155px] md:w-[135px] md:h-[135px] w-[115px] h-[115px] lg:h-[155px] bg-listTwo">
                  <div className="rounded-full h-[100%] w-[100%] border-[3px] border-solid border-white">
                    <div className="flex flex-col h-[100%] w-[100%] justify-center items-center">
                      <img
                        src={listTwo}
                        alt=""
                        className=" md:w-[65px] w-[45px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center w-[80%] md:w-[100%]  m-auto my-4 ">
                <p className=" font-itim text-listTwo lg:text-[22px] md:text-[20px] text-[16px] ">
                  Des menus variés approuvés par une nutritionniste
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-1/5 flex justify-center md:w-1/3 px-1 sm:w-1/2 w-[100%] ">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <div className=" p-2 rounded-full xl:w-[165px] xl:h-[165px] lg:w-[155px] md:w-[135px] md:h-[135px] w-[115px] h-[115px] lg:h-[155px] bg-listThree">
                  <div className="rounded-full h-[100%] w-[100%] border-[3px] border-solid border-white">
                    <div className="flex flex-col h-[100%] w-[100%] justify-center items-center">
                      <img
                        src={listThree}
                        alt=""
                        className=" w-[80%] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center w-[80%] md:w-[100%]  m-auto my-4 ">
                <p className=" font-itim text-listThree lg:text-[22px] md:text-[20px] text-[16px] ">
                  Des recettes appétissantes et nutritives
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-1/5 flex justify-center md:w-1/3 px-1 sm:w-1/2 w-[100%] ">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <div className=" p-2 rounded-full xl:w-[165px] xl:h-[165px] lg:w-[155px] md:w-[135px] md:h-[135px] w-[115px] h-[115px] lg:h-[155px] bg-listFour">
                  <div className="rounded-full h-[100%] w-[100%] border-[3px] border-solid border-white">
                    <div className="flex flex-col h-[100%] w-[100%] justify-center items-center">
                      <img
                        src={listFour}
                        alt=""
                        className=" md:w-[75px] w-[55px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center w-[80%] md:w-[100%]  m-auto my-4 ">
                <p className=" font-itim text-listFour lg:text-[22px] md:text-[20px] text-[16px] ">
                  Un service personnalisé et flexible
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-1/5 flex justify-center md:w-1/3 px-1 sm:w-1/2 w-[100%] ">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <div className=" p-2 rounded-full xl:w-[165px] xl:h-[165px] lg:w-[155px] md:w-[135px] md:h-[135px] w-[115px] h-[115px] lg:h-[155px] bg-listFive">
                  <div className="rounded-full h-[100%] w-[100%] border-[3px] border-solid border-white">
                    <div className="flex flex-col h-[100%] w-[100%] justify-center items-center">
                      <img
                        src={listFive}
                        alt=""
                        className=" md:w-[35px] w-[25px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center w-[80%] md:w-[100%]  m-auto my-4 ">
                <p className=" font-itim text-listFive lg:text-[22px] md:text-[20px] text-[16px] ">
                  Un excellent rapport qualité-prix
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex  justify-center">
          <a href="#">
            <button className="bg-btn-danger py-1 lg:px-12 px-6 rounded-full text-white font-WorkSansBoldItalic  lg:text-[20px] md:text-[18px] sm:text-[16px]">
            Obtenez une soumission
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChooesTips;