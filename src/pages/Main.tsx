import style from "../styles/Main.module.css"
import Layout from '../componentes/Layout';
import logo from '../assets/logo.png';


function Main() {
  return (
    <Layout>
      <main className={style.main} >  
      <img src={logo}/>      
      </main>
    </Layout>
  );
}

export default Main;