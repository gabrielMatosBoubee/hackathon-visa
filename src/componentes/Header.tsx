import { useContext, useEffect, useState } from 'react';
import style from '../styles/Header.module.css'
import { GameContext } from '../context/GameContext';
import ProgressBar from './ProgressBar';
import wallet from "../icons/wallet-removebg.png"
import { useNavigate } from 'react-router-dom';
import PopUp from './PopUp';
import player from "../icons/player.png"
import Chronometer from '../pages/Chronometer';

function Header() {
    const { pontos: {coin, felicidade, vida}, day } = useContext(GameContext);
    const [showPopUp, setShowPopUp] = useState(0);

    const navigate = useNavigate();

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

    const isEndGame = coin === 0 || vida === 0 || felicidade === 0;

 
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
                    style={{background: "#2DD46C", color: "white"}}>
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
        </header>
    );
}

export default Header;