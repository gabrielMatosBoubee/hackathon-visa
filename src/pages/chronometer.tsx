import React, { useState, useEffect } from 'react';

function Chronometer() {
  const [time, setTime] = useState(0);
  const [day, setDay] = useState(1);
  const dayDuration = 10;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if(time >= dayDuration) {
      setTime(0)
      setDay((prevDay) => prevDay + 1)
    }
  }, [time]);

  return (
    <div className="Chronometer">
      <h1>Dia: {day} </h1>
      <h2>Timer: {time} segundos</h2>
    </div>
  );
}

export default Chronometer;