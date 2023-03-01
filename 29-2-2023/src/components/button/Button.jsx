import "./index.css";

const Button = ({ testo, btnFunc, isDisabled }) => {
  return (
    // la classe DINAMICA Button si applica a tutti i pulsanti ma si stabilisce anche una condizione:
    // se il pulsante é disattivato (da App.jsx) applicami la classe "disabled", altrimenti resta attiva la classe dinamica di default
    <button
      className={`Button  ${isDisabled ? "disabled" : null}  `}
      onClick={btnFunc}
    >
      {" "}
      {testo}
    </button>
  );
};

export default Button;
