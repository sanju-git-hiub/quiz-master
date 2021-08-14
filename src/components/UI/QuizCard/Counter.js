import React, { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
let ticker = null;
function converToMins(s) {
  var mins = Math.floor(s / 60);
  var seconds = s % 60;
  return {
    min: mins.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
    sec: seconds.toLocaleString("en-us", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
  };
}

const Counter = ({ totalTime, onCountStops, isQuizFinshed }) => {
  const [countDown, setCountDown] = useState({ minute: "", seconds: "" });
  const [timeOver, setTimeOver] = useState(0);
  useEffect(() => {
    ticker = setInterval(() => {
      if (totalTime > 0 && !isQuizFinshed) {
        totalTime--;
        const { min, sec } = converToMins(totalTime);
        setCountDown({ minute: min, seconds: sec });
        if (totalTime <= 30) {
          setTimeOver(1);
        }
      } else {
        if (!isQuizFinshed) {
          onCountStops();
        }
        clearInterval(ticker);
      }
    }, 1000);

    return () => {
      clearInterval(ticker);
    };
  }, [totalTime, isQuizFinshed]);

  return (
    <Snackbar
      className={`counter-time ${timeOver ? "counter-end" : "counter-safe"}`}
      open={!isQuizFinshed}
      message={` Time Remaining ${countDown.minute} : ${countDown.seconds}`}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    />
  );
};

export default Counter;
