import { useContext, useEffect, useReducer } from 'react';
import styles from '../styles/Investiments.module.css';
import benefitImg from '../icons/benefit.png'
import lostImg from '../icons/lost.png'
import { GameContext } from '../context/GameContext';
import { investCalc } from '../uteis/investCalc';

interface IComponentsProps {
  name: string;
  image: string;
  descricao: string;
  caracteristicas: Array<{ type: string; text: string }>;
  benefit: Array<{ percent: number, interval: string}>;
  loss: Array<{ percent: number, interval: string}>;
}

interface IAction {
    value: number,
    type: string | number
  }

  interface INicialState {
    value: number,
    investedValue: number,
    actualValue: number,
    timeInvested: number
  }

  const initialState = {
    value: 0,
    investedValue: 0,
    actualValue: 0,
    timeInvested: 0
  };

function InvestCard({ name, image, descricao, caracteristicas = [], benefit, loss }: IComponentsProps) {
    const {dispatch: dispatchGlobal, pontos: { coin }, day} = useContext(GameContext);

    const reducer =  (state: INicialState, action: IAction) => {
        switch (action.type) {
          case "value":
            return { ...state, value: action.value };
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

      useEffect(() => {
        const invest = localStorage.getItem(`investimentos-${name}`);
        if (invest !== null) {
          const {percent, interval: type} =  benefit[0]
          const { startDay, actualValue} = JSON.parse(invest)
          const days = day - startDay || 0
          const totalValue = investCalc({percent, type, valor: actualValue, days}) || 0
          dispatch({type: "actualValue", value: totalValue})
          dispatch({type: "timeInvested", value: days})
          const newInvest = {
            actualValue: totalValue,
            investedValue: pontos.investedValue,
            timeInvested: days, 
            startDay: day}
          localStorage.setItem(`investimentos-${name}`, JSON.stringify(newInvest))
        }
      }, [])

      const [pontos, dispatch] = useReducer(reducer, initialState);

      const invista = () => {
        if (pontos.value < coin && pontos.value > 0) {
          dispatchGlobal({type: "coin", value: -pontos.value})
          dispatch({type: "actualValue", value: pontos.value})
          dispatch({type: "investedValue", value: pontos.value})
          dispatch({type: "timeInvested", value: 0})
          console.log(pontos.actualValue + pontos.value)
          const invest = {
            actualValue: pontos.actualValue + pontos.value,
            investedValue: pontos.investedValue + pontos.value,
            timeInvested: pontos.timeInvested + pontos.value, 
            startDay: day}
          localStorage.setItem(`investimentos-${name}`, JSON.stringify(invest))
        } else alert("Dinheiro insufienciente!")
      }

      const retireSeuInvestimento = () => {
        if (pontos.actualValue > 0) {
          dispatchGlobal({type: "coin", value: pontos.actualValue})
          dispatch({type: "actualValue", value: -pontos.actualValue})
          dispatch({type: "investedValue", value: -pontos.investedValue})
          dispatch({type: "timeInvested", value: -pontos.timeInvested})
          localStorage.removeItem(`investimentos-${name}`)
        }
      }
    
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
            <button className={styles.button} onClick={retireSeuInvestimento}>Retire seu investimento</button>
            <label htmlFor="">
                <p>quantidade a ser investida:</p>
                <input type="number" onChange={({target: {value}}) => dispatch({type: "value", value: Number(value)})}/>
            </label>
            <button className={styles.button} onClick={invista}>Invista aqui</button>
        </section>
        </div>
      </main>
    </div>
  );
}

export default InvestCard;
