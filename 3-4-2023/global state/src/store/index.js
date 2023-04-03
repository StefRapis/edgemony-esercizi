// 1. IMPORTO CREATECONTEXT
import { createContext } from "react";

// 2. lasciamo il createContest vuoto ed esportiamo e importiamo in Main.jsx e Counter.jsx
export const CounterContext = createContext();

// 3. valore di stato iniziale che passo al provider. esporto e importo in Main.jsx
export const initialState = {
  value: 0,
};
