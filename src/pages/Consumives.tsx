import { useContext, useState } from 'react';
import { consumiveis } from '../data';
import Layout from '../componentes/Layout';
import { GameContext } from '../context/GameContext';
import style from '../styles/Consumiveis.module.css'

type TConsumiveis = {
	name: string;
	value: number;
	benefit: { type: string; value: number; }[];
	lost: { type: string; value: number; }[];
	type: string;
}

type TFiltros = 'comida' | 'vestuario' | 'medicamento' | 'entretenimento' | 'todos'

type TLostBenefit = {
	benefit: { type: string; value: number; }[];
	lost: { type: string; value: number; }[];
	value: number;
}

function Consumives() {
	const [filtered, setFiltered] = useState(consumiveis);
	const { dispatch } = useContext(GameContext);
	const filters = ['comida', 'vestuario', 'medicamento', 'entretenimento']

	const filterConsumiveis = (filter: TFiltros) => {
		console.log(filter)
		const filteredItens = filter === 'todos' ? consumiveis : consumiveis.filter((product) => {
			return product.type === filter
		});
		setFiltered(filteredItens);
	}

	const handleAction = ({ benefit, lost, value }: TLostBenefit) => {
		benefit.forEach((b) => dispatch(b))
		lost.forEach((l) => dispatch(l))
		dispatch({type: 'coin', value})
	}

	return (
		<Layout>
			<div className={style.consumiveisFilter}> 
				{filters.map((f) => <button key={ f } onClick={() => filterConsumiveis(f as TFiltros)}> { f } </button>)}
				<button onClick={() => filterConsumiveis('todos')}> Todos os produtos</button>
			</div>
			<div className={ style.consumiveisItens }>
			{ filtered.map((product: TConsumiveis) => (
				<button 
				key={ product.name }
				onClick={ () => handleAction({ benefit: product.benefit, lost: product.lost, value: product.value }) }>
					<p> { product.name } </p>
					<p> R$: { Math.abs(product.value) } </p>
				</button>
			))
			}	
			</div>
		</Layout>
	);
}

export default Consumives;