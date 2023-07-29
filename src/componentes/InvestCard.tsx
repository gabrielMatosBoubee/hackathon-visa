import React, { useContext, useReducer } from 'react';
import styles from '../styles/Investiments.module.css';
import benefitImg from '../icons/benefit.png'
import lostImg from '../icons/lost.png'
import { GameContext } from '../context/GameContext';

interface IComponentsProps {
  name: string;
  image: string;
  descricao: string;
  caracteristicas: Array<{ type: string; text: string }>;
}

interface IAction {
    value: number,
    type: string | number
  }

  interface INicialState {
    value: number,
    investedValue: number,
    actualValue: number,
    timeInvested: string
  }

  const initialState = {
    value: 0,
    investedValue: 0,
    actualValue: 0,
    timeInvested: "0"
  };

function InvestCard({ name, image, descricao, caracteristicas = [] }: IComponentsProps) {
    const {dispatch: dispatchGlobal} = useContext(GameContext)
    const reducer =  (state: INicialState, action: IAction) => {
        switch (action.type) {
          case "value":
            return { ...state, value: state.value + action.value };
          case "investedValue":
            return { ...state, investedValue: state.investedValue + action.value };
          case "actualValue":
            return { ...state, actualValue: state.actualValue + action.value };
          case "timeInvested":
            return { ...state, timeInvested: state.timeInvested + action.value };
          default:
            return state;
        }
      };

    const [pontos, dispatch] = useReducer(reducer, initialState);
    
  return (
    <div className={styles.investmentContainer}>
      <main className={styles.investmentCard}>
        <div className={styles.investmentCardTop}>
          <h1 className={styles.title}>{name}</h1>
        </div>
        <div
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: "100%"
          }}
          className={styles.investmentImageContainer}
        ></div>
        <p className={styles.investmentDescription}>{descricao}</p>
        <div className={styles.caracteristicasInvestment}>
          {caracteristicas.map(({ type, text }) => (
            <div key={text} className={styles.caracteristicas}>
              <img src={type === 'benefit' ? benefitImg : lostImg} />
              <p>{text}</p>
            </div>
          ))}
        <section>
            <p>quantidade investida: R$ {pontos.investedValue}</p>
            <p>tempo investido: {pontos.timeInvested} dias</p>
            <p>valor atual: R$ {pontos.actualValue}</p>
            <button className={styles.button} onClick={() => dispatchGlobal({type: "coin", value: pontos.actualValue})}>Retire seu investimento</button>
            <label htmlFor="">
                <p>quantidade a ser investida:</p>
                <input type="number" onChange={({target: {value}}) => dispatch({type: "value", value: Number(value)})}/>
            </label>
            <button className={styles.button}>Invista aqui</button>
        </section>
        </div>
      </main>
    </div>
  );
}

export default InvestCard;
