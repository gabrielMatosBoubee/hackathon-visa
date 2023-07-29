import { useContext, useEffect, useState } from 'react';
import style from '../styles/Spending.module.css';
import data from '../data';
import ProgressBar from '../componentes/ProgressBar';
import { IGastos } from '../interfaces/IData';
import { GameContext } from '../context/GameContext';
import Layout from '../componentes/Layout';
import percentCalc from '../uteis/percentCalc';

const Spending = () => {
  const [listaGastos, setListaGastos] = useState([]  as IGastos[]);
  const [filtro, setFiltro] = useState('monthly')
  const { pontos: { coin } } = useContext(GameContext)

  useEffect(() => {
    setListaGastos(data.gastos.estagiario as IGastos[])
  }, []);

  return (
    <Layout>
      <div className={style.filtersContainer}>
        <button 
          type="button"
          onClick={ () => setFiltro("daily") }
        >
          Diário
        </button>

        <button
          type='button'
          onClick={ () => setFiltro("monthly") }
        >
          Mensal
        </button>
      </div>

      {
        (
           listaGastos
            .filter((g) => g.purchaseInterval === filtro)
            .map(({name, valorEstipulado, valueSpending}) => (<div className={style.spendingContainer} key={name}>
            <h3>{name}</h3>
            <ProgressBar 
              percentage={percentCalc(coin, valueSpending)}
              color={valueSpending > valorEstipulado ? "#ff0043" : "#009799"} 
              name={percentCalc(coin, valueSpending) + "%"} 
              />
            <span className={style.spendingValuesContainer}>
                <p className={style.p}>Valor gasto: R$ {valueSpending}</p>
                <p className={style.p}>Valor estipulado: R$: {valorEstipulado}</p>
            </span>
          </div>
            ))
        )
      }
    </Layout>
  );
};

export default Spending;