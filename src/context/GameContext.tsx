import React, { ReactNode, createContext, useReducer, useState } from 'react';
import { IBeneficios, IEvents } from '../interfaces/IData';

interface IAction {
    value: number,
    type: string
  }
  
  interface INicialState {
    felicidade: number,
    coin: number,
    vida: number
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
      return { ...state, coin: state.coin + action.value };
    case "vida":
      return { ...state, vida: state.vida + action.value };
    default:
      return state;
  }
};


const GameContext =  createContext<{
    pontos: INicialState;
    events: IEvents[];
    setEvents: React.Dispatch<React.SetStateAction<IEvents[]>>;
    currentEvent: number;
    setCurrentEvent: React.Dispatch<React.SetStateAction<number>>;
    dispatch: React.Dispatch<IAction>;
    beneficios: IBeneficios[];
    setBeneficios: React.Dispatch<React.SetStateAction<IBeneficios[]>>;
  }>({
    pontos: initialState,
    events: [], // Inicialmente, o array de eventos está vazio
    beneficios: [],
    currentEvent: 0, // Inicialmente, o índice do evento atual é 0
    setEvents: () => undefined,
    setCurrentEvent: () => undefined,
    setBeneficios: () => undefined,
    dispatch: () => undefined,
  });

const GameProvider = ({ children }: ComponentProps) => {
  const [pontos, dispatch] = useReducer(reducer, initialState);
  const [events, setEvents] = useState([]  as IEvents[])
  const [currentEvent, setCurrentEvent] = useState(0)
  const [beneficios, setBeneficios] = useState([] as IBeneficios[])

  return (
    <GameContext.Provider value={{ pontos, dispatch, 
    events, setEvents, currentEvent, setCurrentEvent, beneficios, setBeneficios }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
