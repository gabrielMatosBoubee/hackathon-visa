import { useContext, useEffect, useState } from 'react';
import style from "../styles/Main.module.css"
import player from "../icons/player.png"
import PopUp from '../componentes/PopUp';
import data from "../data"
import shuffleArray from '../uteis/SufleArray';
import { GameContext } from '../context/GameContext';
import Header from '../componentes/Header';

interface IEvent {
  [key: string]: {
    value?: number,
    type?: string
  }, 
}

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const {dispatch, setEvents, events, currentEvent, setCurrentEvent, day } = useContext(GameContext)
  const [showPopUp, setShowPopUp] = useState(false);

  const showPopupHandler = () => setShowPopUp(true);


  useEffect(() => {
    const timer = setTimeout(() => {
    setShowPopUp(false);
  }, 5000);
    return () => clearTimeout(timer);
  }, [showPopUp]);

  useEffect(() => {
    if(day === 1) {
      showPopupHandler();
    }
  }, [day]);

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
      <>
      <Header />
      <main className={style.main} >
        { showPopUp ?
        <div> <p> Chegou dia primeiro! Está na hora de se planejar para o mês que está chegando! </p></div>  : null }
          <img src={player} alt="Seu personagem" />
          {isOpen && <PopUp>
            <p style={{fontSize: "1.5rem", textAlign: "start"}}>{events[currentEvent].text}</p>
            <br />
            <span className={style.buttonsContainer}>
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
            </span>
            </PopUp>}
      </main>
      </>
    );
}

export default Main;