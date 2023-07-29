import { useContext, useEffect, useState } from "react";
import creditCard from "../icons/cartaoStandard.png"
import { GameContext } from "../context/GameContext";
import { benefits } from "../data";
import Layout from "../componentes/Layout";
import styles from "../styles/CreditCard.module.css"

function CreditCard() {
  const { dispatch, pontos: {coin} } = useContext(GameContext)
  const { beneficios, setBeneficios } = useContext(GameContext)
  const [credit, setCredit] = useState(0)
  const [value, setValue] = useState(0)
  const [debito, setDebito] = useState(0)

    useEffect(() => {
        setBeneficios(benefits)
        setCredit(benefits[2].value)
    }, [])

    const getCredit = () => {
        if (credit >= value && value > 0) {
            dispatch({type: "coin", value})
            setCredit((prevValue) => prevValue - value)
            setDebito((prevValue) => prevValue + value + Math.floor(prevValue + value)/100)
            setValue(0)
        } else alert("Você não tem isso de credito ainda.")
    }

    const payFacture = () => {
        if(coin > debito) {
            const maxCredit = beneficios[2].value;
            dispatch({type: "coin", value: -debito})
            setCredit((prevValue) => (prevValue + debito) > maxCredit ? maxCredit : prevValue + debito)
            setDebito(0)
        } else alert("Você não dinheiro suficiente para isso")
    }

    return (
      <Layout>
        <main className={styles.main}>
           <img src={creditCard} alt="cartão de credito" width={250}/>
           <section>
              <p>credito disponivel: R$ <strong style={{color: "green"}}>{credit}</strong></p>
              {debito > 0 && <div className={styles.facture}>
              <p>sua fatura: R$ <strong style={{color: "red"}}>{debito.toFixed(2)}</strong></p>
              <button onClick={payFacture} className={styles.button}>pague sua fatura</button>
              </div>}
              <h3 style={{margin: "10px 0 10px 0"}}>Beneficios</h3>
              {beneficios.map(({type, value}, index) => (
                <>
                <p key={type}>
                  {index < 2 && `você ganha ${value} pontos de ${type} ao pagar`}
                  </p>
                  <br />
                </>
                  ))}
              <div>
                <label htmlFor="valor">
                    quanto de credito você vai pegar?
                    <input id="valor" type="number" onChange={({target: {value}}) => setValue(Number(value))} value={value}/>
                </label>
              </div>
              <button onClick={getCredit} className={styles.button}>Pegue seu credito</button>
            </section>
        </main>
      </Layout>
    );
}

export default CreditCard;