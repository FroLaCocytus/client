import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";

const TruckPaggination = observer(() => {
    const {truck} = useContext(Context)
  return (
    <div style={{height: "auto"}}>
        <div >Ваш автопарк</div>
        <div >{truck.trucks.length} машины</div>
    </div>
  );
});

export default TruckPaggination;
