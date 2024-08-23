import React from "react";
import spoonicon from "../images/spoon-ico.jpg";
import tree from "../images/tree.png";
import caret from "../images/caret.png";
import muli from "../images/muli.png"

const Contact = () => {
  return (
    <section className="py-6 lg:py-10 relative">
      <div className="py-4">
        <div className="flex justify-center relative">
          {/* chooes text */}
          <div className="border-sky-line p-4 border-solid  border-[3px] ">
            <h1 className="xl:text-[30px] lg:text-[26px] text-[18px] font-['itim']">
              Vous avez des questions?
            </h1>
          </div>
          <div className="absolute bottom-[-13px]">
            <img
              src={spoonicon}
              className="  md:px-15 px-10 lg:w-[100%] w-[90%] object-cover bg-white"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:w-[40%] md:w-[50%] w-[100%] m-auto my-5">
        <div className="flex py-2 flex-col">
          <label htmlFor="first_name">
            <h4 className="mx-2 py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
              Nom Complet (requis)
            </h4>
          </label>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                    Prenom
                  </h4>
                </label>
                <input
                  type="text"
                  className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-2 border-muted"
                />
              </div>
            </div>

            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                    Nom de Famile
                  </h4>
                </label>
                <input
                  type="text"
                  className="px-2 w-[100%] rounded border-[1px] py-2 outline-green-food border-muted"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                    Email (requis)
                  </h4>
                </label>
                <input
                  type="email"
                  className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-2 border-muted"
                />
              </div>
            </div>

            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                    Telephone (requis)
                  </h4>
                </label>
                <input
                  type="numbar"
                  className="px-2 w-[100%] rounded border-[1px] py-2 outline-green-food border-muted"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="mx-2">
            <label htmlFor="first_name">
              <h4 className=" py-1  text-danger  font-inter text-[14px] md:text-[16px] ">
                Message (requis)
              </h4>
            </label>
            <textarea
              className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-1 border-muted"
              name=""
              rows="5"
              id=""
            ></textarea>
          </div>
        </div>

        <div className="py-2">
          <div className="mx-2">
            <button className=" border rounded-full xl:w-[120px] w-[100px]   text-white font-inter  bg-danger py-3 xl:py-5">
              Envoyer
            </button>
          </div>
        </div>
      </div>
      <div className="  absolute top-0 w-[100%] h-[100%] md:flex hidden justify-center">
        <div className="w-[95%]   h-[100%]">
        <div className="flex w-[100%] justify-between h-[100%]">
            <div className="flex  flex-col h-[100%] justify-center">
                  <img src={tree} className="lg:w-[300px] w-[180px] h-[180px] lg:h-[300px] object-cover" alt="" />
            </div>
            <div className="flex  flex-col h-[100%] justify-around">
              <div className="">
                <img src={caret} className=" lg:w-[225px] w-[135px] h-[135px] lg:h-[225px] object-cover" alt="" />
              </div>
              <div className="lg:w-[210px] w-[126px] h-[188px] lg:h-[314px] -rotate-12 flex justify-center">
                <img src={muli} className="   h-[100%] w-[100%] object-cover" alt="" />
              </div>

                
            </div>
        </div>
        </div>
      
      </div>
    </section>
  );
};

export default Contact;
