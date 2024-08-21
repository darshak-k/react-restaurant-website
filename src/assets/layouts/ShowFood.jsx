import React from "react";
import viewone from "../images/boytwo.jpg";
import viewtwo from "../images/girlone.jpg";
import viewthree from "../images/boythree.jpg";

const ShowFood = () => {
  return (
    <section className="bg-warning py-5 lg:py-11">
      <div className="w-[95%] m-auto">
        <div className="flex justify-center">
          <h4 className="text-center py-4 text-danger font-WorkSansBold text-[16px] md:text-[22px] uppercase">
            Menu nutritif, nourrissant et succulent
          </h4>
        </div>
        <div className="flex flex-wrap my-7">
          {/* intro three view */}

          <div className="lg:w-[33.33%] md:w-[50%] w-[100%] flex  justify-center">
            <div className=" rounded-full xl:w-[400px] lg:w-[350px] md:w-[300px] md:h-[300px] w-[280px] h-[280px] mx-2 my-4 xl:h-[400px] lg:h-[350px] overflow-hidden ">
              <img
                className="h-[100%] object-cover w-[100%]"
                src={viewone}
                alt=""
              />
            </div>
          </div>

          <div className="lg:w-[33.33%] md:w-[50%] w-[100%] flex  justify-center">
            <div className=" rounded-full xl:w-[400px] lg:w-[350px] md:w-[300px] md:h-[300px] w-[280px] h-[280px] mx-2 my-4 xl:h-[400px] lg:h-[350px] overflow-hidden ">
              <img
                className="h-[100%] object-cover w-[100%]"
                src={viewtwo}
                alt=""
              />
            </div>
          </div>

          <div className="lg:w-[33.33%] md:w-[50%] w-[100%] flex  justify-center">
            <div className=" rounded-full xl:w-[400px] lg:w-[350px] md:w-[300px] md:h-[300px] w-[280px] h-[280px] mx-2 my-4 xl:h-[400px] lg:h-[350px] overflow-hidden ">
              <img
                className="h-[100%] object-cover w-[100%]"
                src={viewthree}
                alt=""
              />
            </div>
          </div>
        </div>

        <a href="#" className="flex justify-center lg:pt-8 lg:pb-5 py-4">
          <button className="bg-btn-danger py-1 lg:px-16  md:px-10 px-5 rounded-full text-white font-WorkSansBoldItalic  lg:text-[20px] md:text-[18px] text-[16px]">
          Consulter  Le  Menu
          </button>
        </a>
      </div>
    </section>
  );
};

export default ShowFood;
