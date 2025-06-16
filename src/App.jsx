import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Progress from "./components/Progress";
import Time from "./components/Time";
import Data from "./components/Data";
import Glass from "./assets/glass.png";

const App = () => {
  const [alert, setAlert] = useState(false);
  const [time, setTime] = useState(new Date());
  const [history, setHistory] = useState(() => {
    const savedDate = localStorage.getItem("lastDate");
    const savedHistory = localStorage.getItem("waterHistory");
    const currentDate = new Date().toDateString();

    if (savedDate && savedDate !== currentDate) {
      localStorage.removeItem("waterHistory");
      localStorage.removeItem("lastDate");
      return [];
    }

    if(savedHistory) {
      const parsedHistory = JSON.parse(savedHistory);
      return parsedHistory.map((entry) => ({
        ...entry,
        time: new Date(entry.time),
      }));
    }
    return [];
  });

  const [progress, setProgress] = useState(() => {
    const savedHistory = localStorage.getItem("waterHistory");
    const parsedHistory = savedHistory ? JSON.parse(savedHistory) : [];
    return parsedHistory.length;
  });

  useEffect(() => {
    setProgress(history.length);
  }, [history]);

  useEffect(() => {
    const currentDate = new Date().toDateString();
    localStorage.setItem("lastDate", currentDate);
    localStorage.setItem("waterHistory", JSON.stringify(history));
  }, [history]);

  return (
    <div className=" justify-center items-center w-screen h-screen">
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-y-5 mt-10 mb-10">
        <Progress progress={progress} />
        <Alert show={alert} setAlert={setAlert} progress={progress} />
        <div className=" flex mr-10 ml-10 gap-28 mt-10 mb-10">
          <img src={Glass} className=" w-72 h-96" />
          <div className="flex flex-col gap-5">
            <Time time={time} setTime={setTime} />
            <Data progress={progress} time={time} history={history} />
          </div>
        </div>
        <Button
          progress={progress}
          setProgress={setProgress}
          setTime={setTime}
          setHistory={setHistory}
        />
      </div>
    </div>
  );
};

export default App;
