import React from "react";

const button = ({ progress, setProgress }) => {
  const handleButtonClick = () => {
    if (progress < 8) {
      setProgress(progress + 1);
    }
  };

  return (
    <div class=" justify-center items-end flex">
      <button
        class=" bg-[#29a3e4] p-2 text-5xl text-center font-semibold text-white text-center justify-center font-montserrat w-20 h-20 rounded-3xl"
        onClick={handleButtonClick}
      >
        +
      </button>
    </div>
  );
};

export default button;
