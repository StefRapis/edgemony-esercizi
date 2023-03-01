// importo il button da inserire dentro questo Div

import { prodottiLista } from "../../mocks/listaProdotti";
import Button from "../button";

import "./index.css";

const ButtonControl = ({ listDataLength }) => {
  const getQuantity = () =>
    alert(`Il numero di prodotti disponibili é ${listDataLength}`);
  //   const openPic = () => console.log(3);

  return (
    <div className="ButtonControl">
      <Button
        testo={"Verifica quantitá"}
        btnFunc={getQuantity}
        isDisabled={false}
      />
      {/* <Button testo={"altra funzione"} btnFunc={openPic} isDisabled={false} /> */}
    </div>
  );
};

export default ButtonControl;
