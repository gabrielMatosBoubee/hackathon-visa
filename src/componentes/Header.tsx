import { useContext } from 'react';
import style from '../styles/Main.module.css'
import { GameContext } from '../context/GameContext';
import ProgressBar from './ProgressBar';
import wallet from "../icons/wallet-removebg.png"
import { useNavigate } from 'react-router-dom';
import PopUp from './PopUp';
import Chronometer from '../pages/chronometer';

// import PopUp from './PopUp';

function Header() {
    const { pontos: {coin, felicidade, vida} } = useContext(GameContext);
    const navigate = useNavigate();

    const isEndGame = coin === 0 || vida === 0 || felicidade === 0;
    
    return (
        <header className={style.header}>
              <ProgressBar percentage={vida > 100 ? 100 : vida} color='#ff0000' name="SAÚDE" />
              <ProgressBar percentage={felicidade > 100 ? 100 : felicidade} color="#ff5555" name="Felicidade" />
              <span className={style.iconsContainer}>
                <span className={style.iconContainer}>
                  <img 
                    src={wallet} 
                    alt="carteira" 
                    className={style.icon} 
                    onClick={() => navigate("/wallet")}
                  />
                  <p>{coin}</p>
                  <Chronometer/>
                </span>
              </span>
              <Chronometer />
              { isEndGame && <PopUp>
                <p>Você perdeu!</p>
                <button 
                    className={style.button} 
                    style={{background: "#2DD46C", color: "white"}}>
                    Jogar de novo
                </button>
              </PopUp>

              }
        </header>
    );
}

export default Header;