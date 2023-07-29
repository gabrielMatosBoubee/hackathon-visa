import { useContext } from 'react';
import player from "../icons/player.png"
import { GameContext } from '../context/GameContext';
import style from '../styles/Budget.module.css';


function Budget() {
  const { setBudget, budget } = useContext(GameContext)

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setBudget((values) => ({...values, [name]: value}))
  }

    return (
      <main className={ style.mainBudget}>
        <h3 className={ style.budgetTitle }> Orçamento </h3>
        <div>
        <label> Casa
          <input
            type="number" 
            name="casa" 
            value={budget.casa || ""} 
            onChange={handleChange} />
        </label>
        <label> Comida
          <input
            type="number" 
            name="comida" 
            value={budget.comida || ""} 
            onChange={handleChange} />
        </label>
        <label> Vestuário
          <input
            type="number" 
            name="vestuario" 
            value={budget.vestuario || ""} 
            onChange={handleChange} />
        </label>
        <label> Investimento
          <input
            type="number" 
            name="investimento" 
            value={budget.investimento || ""} 
            onChange={handleChange} />
        </label>
        <label> Lazer
          <input
            type="number" 
            name="lazer" 
            value={budget.lazer || ""} 
            onChange={handleChange} />
        </label>
        <button> Salvar orçamento </button>
        </div>
        <div className={ style.infoBudget }>
          <p style={{ color: 'white'}}> Com o orçamento é possível fazer comparações entre o previsto e o realizado</p>
          <img src={ player } className={ style.player } alt='player masculino de cabelos pretos e terno'/>
        </div>
      </main>
    );
}

export default Budget;