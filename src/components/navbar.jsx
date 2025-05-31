import React from "react";
import brand from "../assets/brand.png";

const navbar = () => {
  return (
    <div className="bg-[#29a3e4]">
      <header className="flex items-center gap-2 p-2">
        <img src={brand} alt="Logo" class="w-14 h-14" />
        <div className="text-white">
          <h1 className="text-6xl font-righteous font-bold">Glek!</h1>
          <p className="font-montserrat text-base">
            karena tubuhmu butuh lebih dari sekadar kopi
          </p>
        </div>
      </header>
    </div>
  );
};

export default navbar;
