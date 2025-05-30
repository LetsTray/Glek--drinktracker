import React from "react";
import brand from "../assets/brand.png";
import bgwave from "../assets/bgwave.svg";


const navbar = () => {
  return (
    <div class="bg-[#29a3e4]">
      <header class="flex items-center gap-2 p-2">
        <img src={brand} alt="Logo" class="w-14 h-14" />
        <div class="text-white">
          <h1 class="text-6xl font-righteous font-bold">Glek!</h1>
          <p class="font-montserrat text-base">
            karena tubuhmu butuh lebih dari sekadar kopi
          </p>
        </div>
      </header>
    </div>
  );
};

export default navbar;
