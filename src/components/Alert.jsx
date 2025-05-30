import React, { useEffect } from "react";

const alert = ({ show, setAlert, progress }) => {
  useEffect(() => {
    if (progress >= 8) {
      setAlert(true);
    }
  }, [progress]);

  const closeAlert = () => {
    setAlert(false);
  };

  if (!show) return null;

  return (
    <div className=" font-montserrat fixed top-10 pt-5 pb-5 pr-2 pl-2 rounded-2xl left-1/2 transform -translate-x-1/2 items-center justify-evenly gap-6  bg-[#1a4c86] w-[600px] flex">
      <p class="text-lg text-white items-center justify-center flex">
        Selamat! Anda telah mencapai 2000 mL = 8 Gelas
      </p>
      <button
        className=" font-semibold top-2 right-2 flex text-xl items-center justify-center bg-white rounded-4xl w-10 h-10 text-[#1a4c86] text-center"
        onClick={closeAlert}
      >
        x
      </button>
    </div>
  );
};

export default alert;
