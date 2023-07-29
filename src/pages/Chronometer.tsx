import { useState, useEffect, useContext } from 'react';
import { GameContext } from '../context/GameContext';
import style from '../styles/Header.module.css'


function Chronometer() {
  const [time, setTime] = useState(0);
  const { day, setDay } = useContext(GameContext);
  const dayDuration = 60;
  const monthDuration = 30;

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
      if(day > monthDuration) {
        setDay(1)
      }
    }
  }, [time, day]);


  return (
    <div className={ style.chronometer }>
      <p><span>Dia:</span> { day } </p>
      <p>{ time }</p>
    </div>
  );
}

export default Chronometer;