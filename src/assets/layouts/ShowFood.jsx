import React from "react";
import viewone from "../images/boytwo.jpg";
import viewtwo from "../images/girlone.jpg";
import viewthree from "../images/boythree.jpg"


const ShowFood = () => {
  return (
    <section className="bg-warning py-5">
      <div className="w-[95%] m-auto">
        <div className="flex justify-center">
          <h4 className="text-center my-4 text-danger font-WorkSansBold text-[16px] md:text-[22px] uppercase">
            commandez maintenant!
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
      </div>
    </section>
  );
};

export default ShowFood;
