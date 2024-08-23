import React from "react";
import foodApple from "../images/food-apple.jpeg";

const Goodness = () => {
  return (
    <section>
      <div className=" relative bg-danger-warn">
        <img
          src={foodApple}
          className="lg:h-[450px] md:h-[400px] h-[250px] w-[100%] object-cover"
          alt=""
        />
        <div className=" absolute top-0 w-[100%] h-[100%] flex items-center justify-center ">
          <h3 className=" py-0 text-center md:w-[70%] w-[80%] text-white font-WorkSansLight text-[36px] md:text-[55px] uppercase">
          Le Traiteur Qui Contribue au Succès des Enfants !
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Goodness;
