import React from 'react';
import InvestCard from "../componentes/InvestCard";
import { investiments } from "../data";
import styles from '../styles/Investiments.module.css';
import Layout from '../componentes/Layout';

function Investments() {
  return (
    <Layout>
      <div className={styles.investmentsCardsContainer} id='investmentsCardsContainer'>
        {investiments.map(({ name, image, descricao, caracteristicas }) => (
          <InvestCard
            key={name}
            name={name}
            image={image}
            descricao={descricao}
            caracteristicas={caracteristicas}
          />
        ))}
        <button
          type="button"
          className={styles.NextButton}
          onClick={() => {
            const scrollAmountInPixels = window.innerWidth;
            const container = document.getElementById('investmentsCardsContainer');
            container?.scrollBy({
                top: 0,
                left: scrollAmountInPixels,
              behavior: "smooth"
          });
          }}
        >
          {'>'}
        </button>
        <button
          type="button"
          className={styles.PrevButton}
          onClick={() => {
            const scrollAmountInPixels = -window.innerWidth;
            const container = document.getElementById('investmentsCardsContainer');
            container?.scrollBy({
                top: 0,
                left: scrollAmountInPixels,
                behavior: "smooth"
            });
          }}
        >
          {'<'}
        </button>
      </div>
    </Layout>
  );
}

export default Investments;
