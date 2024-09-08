import React from "react";
import dots from "../images/dots.png";

const Childprofile = () => {
  return (
    <section className="">
      <section className="bg-[#f99292] ">
        <div className="w-[80%] py-12 flex flex-col justify-between  h-[100vh] m-auto">
          <div>
            <h1 className="text-white text-3xl font-WorkSansBoldItalic">
              CHILD PROFILE
            </h1>
          </div>
          <div>
            <div className="flex flex-wrap">
              <div className="w-[50%] ">
                <div className="pe-5">
                  <div className="flex my-8">
                    <div className="w-[50%] h-[30px] flex flex-col justify-center">
                      <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                        First name*
                      </h1>
                    </div>
                    <div className="w-[50%]">
                      <input
                        type="text"
                        className="w-[100%] h-[30px] outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="pe-5">
                  <div className="flex my-8">
                    <div className="w-[50%] h-[30px] flex flex-col justify-center">
                      <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                        Last name*
                      </h1>
                    </div>
                    <div className="w-[50%]">
                      <input
                        type="text"
                        className="w-[100%] h-[30px] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] ">
                <div className="pe-5">
                  <div className="flex my-8">
                    <div className="w-[50%] h-[30px] flex flex-col justify-center">
                      <h1 className="font-bold text-center font-WorkSansBoldItalic text-white text-[20px]">
                        School name*
                      </h1>
                    </div>
                    <div className="w-[50%]">
                      <input
                        type="text"
                        className="w-[100%] h-[30px] outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="pe-5">
                  <div className="flex my-8">
                    <div className="w-[50%] h-[30px] flex flex-col justify-center">
                      <h1 className="font-bold font-WorkSansBoldItalic text-center text-white text-[20px]">
                        Group
                      </h1>
                    </div>
                    <div className="w-[50%]">
                      <input
                        type="text"
                        className="w-[100%] h-[30px] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div>
                <h2 className="font-WorkSansBold text-white text-2xl">
                  ALLERGIES :
                </h2>
              </div>
              <div className="mx-4">
                <div className="flex ">
                  <div className="flex flex-col justify-center">
                    <img src={dots} className="h-[20px]" alt="" />
                  </div>
                  <div className="flex flex-col justify-center"> 
                    <h3 className="text-white text-[21px] font-WorkSansReg italic">
                      Peanuts/ Nuts
                    </h3>
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex flex-col justify-center">
                    <img src={dots} className="h-[20px]" alt="" />
                  </div>
                  <div className="flex flex-col justify-center"> 
                    <h3 className="text-white text-[21px] font-WorkSansReg italic">
                      eggs
                    </h3>
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex flex-col justify-center">
                    <img src={dots} className="h-[20px]" alt="" />
                  </div>
                  <div className="flex flex-col justify-center"> 
                    <h3 className="text-white text-[21px] font-WorkSansReg italic">
                      Soya
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mx-4">
                <div className="flex ">
                  <div className="flex flex-col justify-center">
                    <img src={dots} className="h-[20px]" alt="" />
                  </div>
                  <div className="flex flex-col justify-center"> 
                    <h3 className="text-white text-[21px] font-WorkSansReg italic">
                     Sea Food
                    </h3>
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex flex-col justify-center">
                    <img src={dots} className="h-[20px]" alt="" />
                  </div>
                  <div className="flex flex-col justify-center"> 
                    <h3 className="text-white text-[21px] font-WorkSansReg italic">
                      Sesame
                    </h3>
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex flex-col justify-center">
                    <img src={dots} className="h-[20px]" alt="" />
                  </div>
                  <div className="flex flex-col justify-center"> 
                    <h3 className="text-white text-[21px] font-WorkSansReg italic">
                      Lactose
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-8 w-[100%]">
              <button className="bg-[#fc221c] px-8 rounded-full font-bold   text-white p-2">SUBMIT</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Childprofile;
