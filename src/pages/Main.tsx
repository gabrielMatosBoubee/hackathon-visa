import { useContext, useEffect, useState } from 'react';
import style from "../styles/Main.module.css"
import PopUp from '../componentes/PopUp';
import data from "../data"
import shuffleArray from '../uteis/SufleArray';
import { GameContext } from '../context/GameContext';
import Layout from '../componentes/Layout';

interface IEvent {
  [key: string]: {
    value?: number,
    type?: string
  }, 
}

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const {dispatch, setEvents, events, currentEvent, setCurrentEvent } = useContext(GameContext)

  useEffect(() => {
    if (events.length === 0) {
      const newEvents = shuffleArray(data.events)
      setEvents(newEvents)
      setIsOpen(true)
    }
  }, []);

    const awnserEvent = (obj: IEvent) => {
      for (const key in obj) {
        const { type, value } = obj[key];
        if (type !== undefined && value !== undefined) {
          dispatch({ type, value });
        }
      }
      if(currentEvent < events.length) {
        setCurrentEvent((prevValue) => prevValue + 1)
      }
      setIsOpen(false)
    };
    

  return (
    <Layout>
      <main className={style.main} >        
        {isOpen && <PopUp>
          <h3>{events[currentEvent].title}</h3>
          <p>{events[currentEvent].text}</p>
          <div className={style.buttonsContainer}>
            <button 
              className={style.button} 
              style={{background: "#2DD46C", color: "white"}} 
              onClick={() => awnserEvent(events[currentEvent].accept)}>
              sim
            </button>
            <button 
              className={style.button} 
              style={{background: "red", color: "white"}}
              onClick={() => awnserEvent(events[currentEvent].denied)}>
              não
            </button>
          </div>
        </PopUp>}
      </main>
    </Layout>
  );
}

export default Main;