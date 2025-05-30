import React, { useState } from "react";
import Navbar from "./components/navbar";
import Alert from "./components/alert";
import Button from "./components/button";
import Progress from "./components/progress";
import Time from "./components/Time";
import Glass from "./assets/glass.png";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [alert, setAlert] = useState(false);
  const [time, setTime] = useState(new Date());

  return (
    <div class="">
      <Navbar />
      <Progress progress={progress} />
      <div className=" justify-center items-center flex">
        <Alert show={alert} setAlert={setAlert} progress={progress} />
        <img src={Glass} class="" />
        <Time time={time} setTime={setTime} />
        {/*Data*/}
      </div>
      <Button progress={progress} setProgress={setProgress} />
    </div>
  );
};

export default App;
