import React, { useState, useEffect } from "react";

const Time = ({ time, setTime }) => {
    useEffect (() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const dayName = time.toLocaleDateString("id-ID", { weekday: "long"});
    const date = time.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedTime = time.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });


  return (
    <div class="flex items-center w-4xl justify-between border-black border-solid border-2 p-6 rounded-3xl h-24 font-montserrat">
      <div class="flex items-end gap-3">
        <p class="text-5xl font-medium">{dayName}</p>
        <p class="text-2xl ">{date}</p>
      </div>
      <p class="text-5xl font-medium">{formattedTime}</p>
    </div>
  );
};

export default Time;
