import React, { useReducer, useState } from 'react';
import style from "../styles/Main.module.css"
import ProgressBar from '../componentes/ProgressBar';
import money from "../icons/—Pngtree—pixel art coin icon design_8529397.png"
import creditCard from "../icons/pixelArtCard-removebg.png"
import player from "../icons/player.png"
import PopUp from '../componentes/PopUp';

interface IAction {
  value: number,
  type: string
}

interface INicialState {
  felicidade: number,
  coin: number,
  vida: number
}

interface IEvent {
  [key: string]: {
    value?: number,
    type?: string
  }, 
}

function Main() {
  const [isOpen, setIsOpen] = useState(true)
  
  const inicialState = {
    felicidade: 100,
    coin: 1320,
    vida: 100
  }

    const reducer = (state: INicialState, action: IAction) => {
      switch (action.type) {
        case "felicidade": {
          return { ...state, felicidade: state.felicidade + action.value}
        }
        case "coin": {
          return { ...state, coin: state.coin + action.value}
        }
        case "vida": {
          return { ...state, vida: state.vida + action.value}
        }
        default: {
          return { ...state }
        }
      }
    }

    const [pontos, dispatch] = useReducer(reducer, inicialState)

    const array = [
      { text: "Você foi convidado para um happy hour com seus colegas de trabalho, porém eles pretendem sair para comer em um restaurante caro, você decide ir com eles, ou prefere ir direto para casa?",
        accept: { lost: {type: "coin", value: -150 }, benefit: { type: "felicidade", value: 30 } },
        denied: { lost: {type: "felicidade", value: -10 }, benefit: {} }
      }
    ]

    const awnserEvent = (obj: IEvent) => {
      for (const key in obj) {
        const { type, value } = obj[key];
        if (type !== undefined && value !== undefined) {
          dispatch({ type, value });
        }
      }
      setIsOpen(false)
    };
    

    return (
        <main className={style.main} >
            <header className={style.header}>
              <ProgressBar percentage={pontos.vida > 100 ? 100 : pontos.vida} color='#ff0000' name="Vida" />
              <ProgressBar percentage={pontos.felicidade > 100 ? 100 : pontos.felicidade} color="#ff5555" name="Felicidade" />
              <span className={style.iconsContainer}>
                <span className={style.iconContainer}>
                  <img src={creditCard} alt="cartão de credito" className={style.icon}/>
                  <p>R$: {pontos.coin}</p>
                </span>
                <span className={style.iconContainer}>
                  <img src={money} alt="moeda" className={style.icon}/>
                  <p>R$: {pontos.coin}</p>
                </span>
              </span>
            </header>
            <img src={player} alt="" />
            {isOpen && <PopUp>
              <p style={{fontSize: "1.5rem", textAlign: "start"}}>{array[0].text}</p>
              <br />
              <span className={style.buttonsContainer}>
                <button 
                  className={style.button} 
                  style={{background: "#2DD46C", color: "white"}} 
                  onClick={() => awnserEvent(array[0].accept)}>
                  sim
                </button>
                <button 
                  className={style.button} 
                  style={{background: "red", color: "white"}}
                  onClick={() => awnserEvent(array[0].denied)}>
                  não
                </button>
              </span>
              </PopUp>}
        </main>
    );
}

export default Main;