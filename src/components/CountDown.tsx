"use client";
import React, { useEffect, useState } from "react";

const CountDown: React.FC = () => {
  const targetDate = new Date(new Date().getFullYear(), 11, 24);

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold font-sans">🎄Christmas Countdown🎄</h1>
      <div className="flex gap-4">
        <div className="w-20  h-20  bg-gray-100 bg-opacity-15 rounded-md flex flex-col justify-center items-center">
          <div className="font-extrabold text-4xl font-sans">{timeLeft.days}</div>
          <div>days</div>
        </div>
        <div className="w-20  h-20  bg-gray-100 bg-opacity-15 rounded-md flex flex-col justify-center items-center">
          <div className="font-extrabold text-4xl font-sans"> {timeLeft.hours}</div>
          hours
          <div></div>
        </div>
        <div className="w-20  h-20  bg-gray-100 bg-opacity-15 rounded-md flex flex-col justify-center items-center">
            <div className="font-extrabold text-4xl font-sans">{timeLeft.minutes}</div>
            <div>min</div>


        </div>
        <div className="w-20  h-20  bg-gray-100 bg-opacity-15 rounded-md flex flex-col justify-center items-center">
            <div className="font-extrabold text-4xl font-sans">{timeLeft.seconds}</div>
            <div>sec</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
