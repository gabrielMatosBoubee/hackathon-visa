import { useContext, useEffect, useState } from 'react';
import style from '../styles/Header.module.css'
import { GameContext } from '../context/GameContext';
import ProgressBar from './ProgressBar';
import wallet from "../icons/wallet-removebg.png"
import { useNavigate } from 'react-router-dom';
import PopUp from './PopUp';
import player from "../icons/player.png"
import Chronometer from '../pages/Chronometer';
import { events } from "../data"

interface IEvent {
  [key: string]: {
    value?: number,
    type?: string
  }, 
}

function Header() {
    const { pontos: {coin, felicidade, vida}, day, setDay, dispatch, currentEvent, setCurrentEvent } = useContext(GameContext);
    const [showPopUp, setShowPopUp] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const isEndGame = coin <= 0 || vida <= 0 || felicidade <= 0;
  
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


    const tempoAleatorio = (max:number, min:number) => {
      return Math.floor(Math.random() * max) + min; // Valor aleatório entre 1 e 60 segundos (1000ms = 1 segundo)
    }

    useEffect(() => {
      console.log(isEndGame)
        const exibirPopupsInterval = () => {
          if (coin > 0 || vida > 0 || felicidade > 0){
            const tempo1 = tempoAleatorio(60000, 1000);
            const tempo2 = tempoAleatorio(60000, 1000);
            const tempo3 = tempoAleatorio(60000, 1000);
            setTimeout(() => {
              const i = tempoAleatorio(events.length, 0)
              events[i];
              if (coin > 0 || vida > 0 || felicidade > 0) setIsOpen(true)
              else setIsOpen(false)
            }, tempo1);
            setTimeout(() => {
              const i = tempoAleatorio(events.length, 0)
              events[i];
              if (coin > 0 || vida > 0 || felicidade > 0) setIsOpen(true)
              else setIsOpen(false)
            }, tempo2);
            setTimeout(() => {
              const i = tempoAleatorio(events.length, 0)
              events[i];
              if (coin > 0 || vida > 0 || felicidade > 0) setIsOpen(true)
              else setIsOpen(false)
            }, tempo3);
          } else null
        }
    
        // Exibir popups inicialmente
        exibirPopupsInterval();
    
        // Repetir a exibição dos popups a cada 60 segundos
        const intervalId = setInterval(exibirPopupsInterval, 60000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPopUp(0);
    }, 5000);
      return () => clearTimeout(timer);
    }, [showPopUp]);
  
    useEffect(() => {
      if(day === 1) {
        setShowPopUp(1);
      }
      if(day === 30) {
        setShowPopUp(2);
      }
    }, [day]);

    const resetGame = () => {
      setDay(1);
      if (coin < 0) {
        dispatch({type: "coin", value: -(coin) })
      }
      dispatch({type: "coin", value: 0 });
      dispatch({type: "coin", value: 1320 });
      navigate("/");
    }
    
  return (
    <header className={style.header}>
      <div>
        <Chronometer/>
        <p>
          <span> cargo</span>
          <span> Estagiário </span>
        </p>
        <div className={style.money}>
          <p>{coin}</p>
          <img 
            src={wallet} 
            alt="carteira" 
            className={style.headerIcon} 
            onClick={() => navigate("/wallet")}
          />
        </div>
      </div>
      <ProgressBar percentage={vida > 100 ? 100 : vida} color='#138A0F' name="SAÚDE" />
      <ProgressBar percentage={felicidade > 100 ? 100 : felicidade} color="#1A73E8" name="Felicidade" />
      <span className={style.iconsContainer}>
      </span>
           { isEndGame && <PopUp>
                <p>Você perdeu!</p>
                <button 
                    className={style.button} 
                    style={{background: "#2DD46C", color: "white"}}
                    onClick={ resetGame }    
                >
                    Jogar de novo
                </button>
              </PopUp>

              }
      { showPopUp !== 0 ?
        <div className={ style.budgetPopUp }>
          <p> {showPopUp === 1
          ? "Chegou dia primeiro! Está na hora de se planejar para o mês que está chegando!"
          : "Chegou o último dia do mês, vamos ver se seguimos o orçamento!"  }
          </p>
          <img src={ player } alt='personagem de terno'/>
        </div> : null }
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
        </header>
    );
}

export default Header;