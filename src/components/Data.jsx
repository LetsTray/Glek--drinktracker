import React from "react";

const Data = ({ time, progress, history }) => {
  return (
    <div class=" font-montserrat justify-center items-center flex">
      <div class=" border-black border-solid border-2 p-6 rounded-3xl w-4xl h-auto">
        <div class=" flex flex-col gap-4">
          <div class="flex justify-around items-center pb-2 font-semibold border-b-2">
            <h6>Hari</h6>
            <h6>Tanggal</h6>
            <h6>Waktu</h6>
            <h6>Jumlah</h6>
          </div>

          {history.length === 0 ? (
            <p class=" font-medium text-gray-300 items-center flex justify-center">
              No added drinks today
            </p>
          ) : (
            history.map((entry, index) => {
              const dayName = entry.time.toLocaleDateString("id-ID", {
                weekday: "long",
              });
              const date = entry.time.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              const formattedTime = entry.time.toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });
              return (
                <div
                  key={index}
                  className="justify-around items-center font-medium flex"
                >
                  <p>{dayName}</p>
                  <p>{date}</p>
                  <p>{formattedTime}</p>
                  <p>{entry.amount} mL</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Data;
