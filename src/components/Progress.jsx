import React from "react";

const progress = ({ progress }) => {
  const getColor = () => {
    if (progress < 2) {
      return "#1a4c86";
    } else if (progress < 4) {
      return "#1464ab";
    } else if (progress < 6) {
      return "#1582c7";
    } else {
      return "#29a3e4";
    }
  };

  return (
    <div class=" justify-center items-center flex gap-5">
      <div class=" progress-bar bg-gray-200 w-[768px] h-[35px] rounded-2xl">
        <div
          class=" progress-fill h-full rounded-2xl"
          style={{
            width: `${progress}in`,
            backgroundColor: getColor(),
            transition: "width 0.5s ease-out",
          }}
        >
          {""}
        </div>
      </div>
      <p class=" text-xl text-[#000000] font-medium font-montserrat">
        {progress} Gelas
      </p>
    </div>
  );
};

export default progress;
