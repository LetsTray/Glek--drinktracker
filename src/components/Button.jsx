import React from "react";

const Button = ({ progress, setProgress, setTime, setHistory }) => {
  const handleButtonClick = () => {
    if (progress < 8) {
      const newTime = new Date();
      setProgress(progress + 1);
      setTime(newTime);
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          time: newTime,
          amount: 250,
        },
      ]);
    }
  };

  return (
    <div className=" justify-center items-end flex">
      <button
        className=" bg-[#29a3e4] p-2 text-5xl text-center font-semibold text-white justify-center font-montserrat w-20 h-20 rounded-3xl"
        onClick={handleButtonClick}
      >
        +
      </button>
    </div>
  );
};

export default Button;
