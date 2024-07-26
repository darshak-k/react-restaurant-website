import React from "react";
import lunchBoy from "../images/lunch-boy.jpg";

const Menu = () => {
  return (
    <section className="bg-warning mt-1 lg:py-11  md:py-8 py-4">
      <div className="flex lg:flex-row flex-col-reverse   w-[95%] m-auto">
        <div className="lg:h-[390px] sm:h-[300px] md:h-[350px] h-[250px] lg:w-[50%] w-[100%] flex justify-center">
          <div className="lg:w-[100%] md:w-[80%] w-[100%]  rounded-full overflow-hidden">
            <img
              src={lunchBoy}
              className=" h-[100%] object-cover w-[100%]  "
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <div className="flex flex-col h-[100%] w-[85%] m-auto  justify-center ">
            <h4 className=" py-2  text-center text-menu-green font-WorkSansBold text-[14px] md:text-[18px] uppercase">
              Menu frais et saisonnier, conçu pour offrir variété et diversité
            </h4>
            <h4 className=" py-2 text-center text-hot-pink font-WorkSansBold text-[14px] md:text-[18px] uppercase">
              Notre menu évolue au rythme des saisons pour garantir une
              représentation de la diversité culinaire locale et internationale.{" "}
            </h4>
            <h4 className=" py-2  text-center text-menu-green font-WorkSansBold text-[14px] md:text-[18px] uppercase">
              Poivrons rouges en juillet, carottes et navets en février ! Chaque
              mois, nous offrons une large sélection de plats inspirés de
              cuisines du monde, permettant ainsi aux amateurs de bonne cuisine
              de découvrir de nouveaux horizons !
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
