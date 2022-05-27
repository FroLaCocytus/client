import React, { useContext, useEffect, useState } from "react";
import Shell from "../components/Shell/Shell";
import { Button } from "react-bootstrap";
import TruckList from "../components/TruckList";
import TruckPaggination from "../components/TruckPaggination";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTrucks } from "../http/truckAPI";
import CreateTruck from "../components/modals/CreateTruck";


const Autopark = observer(() => {
  const {truck} = useContext(Context)
  const [truckVisible, setTruckVisible] = useState(false)


  useEffect(() => {
    fetchTrucks().then(data => truck.setTrucks(data.rows))
  }, [])



  return (
    <div style={{height: "auto"}}>
      <Shell>
          <TruckPaggination/>
          <TruckList/>
          <Button className="mt-4 p-2" onClick = {()=>setTruckVisible(true)}>Добавить транспортное средство</Button>
          <CreateTruck show={truckVisible} onHide={()=> setTruckVisible(false)}/>
      </Shell>
    </div>
  );
});

export default Autopark;
