import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
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
      <Sidebar>
        <TruckPaggination/>
        <TruckList/>
        <Button className="mt-4 p-2" onClick = {()=>setTruckVisible(true)}>Добавить транспортное средство</Button>
        <CreateTruck show={truckVisible} onHide={()=> setTruckVisible(false)}/>
      </Sidebar>

  );
});

export default Autopark;
