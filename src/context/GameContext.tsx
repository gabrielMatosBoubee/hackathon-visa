import React, { ReactNode, createContext, useReducer, useState } from 'react';
import { IBeneficios } from '../interfaces/IData';

interface IAction {
    value: number,
    type: string
  }
  
  interface INicialState {
    felicidade: number,
    coin: number,
    vida: number
  }

  interface IBudget {
    casa: number,
    comida: number,
    vestuario: number,
    lazer: number,
    investimento: number,
  }

  interface ComponentProps {
    children: ReactNode;
  } 
// GameContext.js

const initialState = {
  felicidade: 100,
  coin: 1320,
  vida: 100
};

const reducer = (state: INicialState, action: IAction) => {
  switch (action.type) {
    case "felicidade":
      return { ...state, felicidade: state.felicidade + action.value };
    case "coin":
      return { ...state, coin: state.coin + action.value  };
    case "vida":
      return { ...state, vida: state.vida + action.value };
    default:
      return state;
  }
};


const GameContext =  createContext<{
    pontos: INicialState;

    currentEvent: number;
    setCurrentEvent: React.Dispatch<React.SetStateAction<number>>;
    dispatch: React.Dispatch<IAction>;
    beneficios: IBeneficios[];
    setBeneficios: React.Dispatch<React.SetStateAction<IBeneficios[]>>;
    day: number;
    setDay: React.Dispatch<React.SetStateAction<number>>;
    budget: IBudget;
    setBudget: React.Dispatch<React.SetStateAction<IBudget>>;
  }>({
    pontos: initialState,
    beneficios: [],
    currentEvent: 0, // Inicialmente, o índice do evento atual é 0
    setCurrentEvent: () => undefined,
    setBeneficios: () => undefined,
    dispatch: () => undefined,
    day: 1,
    setDay: () => undefined,
    budget: { casa: 0, comida: 0, vestuario: 0, lazer: 0, investimento: 0 },
    setBudget: () => undefined,
  });

const GameProvider = ({ children }: ComponentProps) => {
  const [pontos, dispatch] = useReducer(reducer, initialState);
  const [currentEvent, setCurrentEvent] = useState(0)
  const [beneficios, setBeneficios] = useState([] as IBeneficios[])
  const [day, setDay] = useState(1);
  const [budget, setBudget] = useState({ casa: 0, comida: 0, vestuario: 0, lazer: 0, investimento: 0 });
       
  return (
    <GameContext.Provider value={{ budget, setBudget, day, setDay, pontos, dispatch, 
    currentEvent, setCurrentEvent, beneficios, setBeneficios }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
