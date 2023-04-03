import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CounterContext, initialState } from "./store";

import { useReducer } from "react";
import { counterReducer } from "./store/reducers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    const [state, dispatch] = useReducer(counterReducer, initialState);
    <CounterContext.Provider value={state}>
      <App />
    </CounterContext.Provider>
  </React.StrictMode>
);
