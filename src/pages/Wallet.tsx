import { wallet } from '../data';
import { useNavigate } from 'react-router-dom';
import style from "../styles/Wallet.module.css"
import Layout from '../componentes/Layout';

function Wallet() {

    const navigate = useNavigate()

    return (
        <Layout>
            { wallet.map(({image, link, name, id}) => (
            <main key={ id } className={style.main} onClick={() => navigate(link)}>
              <img src={image} alt={name} className={style.img}/>
              <h3>{name}</h3>
            </main>
            )
            )}
        </Layout>
    );
}

export default Wallet;