import { useContext } from 'react';
import style from '../styles/Main.module.css'
import { GameContext } from '../context/GameContext';
import ProgressBar from './ProgressBar';
import wallet from "../icons/wallet-removebg.png"
import { useNavigate } from 'react-router-dom';
import Chronometer from '../pages/Chronometer';
// import PopUp from './PopUp';

function Header() {
    const { pontos } = useContext(GameContext);
    const navigate = useNavigate();

    
    // if(pontos.coin <= 0 || pontos.vida <= 0 || pontos.felicidade <= 0) {
    //   return (<PopUp>
    //     game
    //   </PopUp>)
    // }
    return (
        <header className={style.header}>
              <ProgressBar percentage={pontos.vida > 100 ? 100 : pontos.vida} color='#ff0000' name="SAÚDE" />
              <ProgressBar percentage={pontos.felicidade > 100 ? 100 : pontos.felicidade} color="#ff5555" name="Felicidade" />
              <span className={style.iconsContainer}>
                <span className={style.iconContainer}>
                  <img 
                    src={wallet} 
                    alt="carteira" 
                    className={style.icon} 
                    onClick={() => navigate("/wallet")}
                  />
                  <p>R$: {pontos.coin}</p>
                  <Chronometer/>
                </span>
              </span>
        </header>
    );
}

export default Header;