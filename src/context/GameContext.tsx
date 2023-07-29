import React, { ReactNode, createContext, useReducer, useState } from 'react';
import { IEvents } from '../interfaces/IData';

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
    day: number;
    setDay: React.Dispatch<React.SetStateAction<number>>;
  }>({
    pontos: initialState,
    events: [], // Inicialmente, o array de eventos está vazio
    setEvents: () => undefined,
    currentEvent: 0, // Inicialmente, o índice do evento atual é 0
    setCurrentEvent: () => undefined,
    dispatch: () => undefined,
    day: 1,
    setDay: () => undefined,
  });

const GameProvider = ({ children }: ComponentProps) => {
  const [pontos, dispatch] = useReducer(reducer, initialState);
  const [events, setEvents] = useState([]  as IEvents[]);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [day, setDay] = useState(1);

  return (
    <GameContext.Provider value={{ day, setDay, pontos, dispatch, events, setEvents, currentEvent, setCurrentEvent }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
