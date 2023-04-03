import "./index.css";
// importo useContext e il contesto creato con dentro il valore
import { useContext } from "react";
import { CounterContext } from "../../store";

const Counter = () => {
  const counter = useContext(CounterContext);

  return (
    <div className="Counter">
      <button className="increment">Incrementa</button>
      <h2>{counter.value}</h2>
      <button className="decrement">Decrementa</button>
    </div>
  );
};

export default Counter;
