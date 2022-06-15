import React, { useContext, useEffect, useState } from "react";
import Shell from "../components/Shell/Shell";
import { Button } from "react-bootstrap";
import TruckList from "../components/TruckList";
import TruckPaggination from "../components/TruckPaggination";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTrucks } from "../http/truckAPI";
import CreateTruck from "../components/modals/CreateTruck";
import TruckSearch from "../components/TruckSearch";



const Autopark = observer(() => {
  const {truck} = useContext(Context)
  const {user} = useContext(Context)
  const [truckVisible, setTruckVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState('none')  

  useEffect(() => {
    fetchTrucks(truck.page, 6, user.company).then(data => {
        truck.setTrucks(data.rows)
        truck.setTotalCount(data.count)
        if (truck.trucks.length > 0) setSelectedItem(truck.trucks[0])
    })
  }, [truck.page])





  return (
    <div style={{height: "auto"}}>
      <Shell setSelectedItem={setSelectedItem} selectedItem={selectedItem}>
          <TruckSearch/>
          <Button style={{
            height: "50px",
            position: "absolute",
            top: "0",
            right: "0",
            marginRight: "30px",
            marginTop: "30px",
            backgroundColor: "#6C92D7",
            border: "none",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "500",
            borderRadius: "10px"
          }} onClick = {()=>setTruckVisible(true)}>Добавить транспортное средство</Button>
          <TruckPaggination/>
          <TruckList setSelectedItem={setSelectedItem} />
        <CreateTruck setSelectedItem={setSelectedItem} show={truckVisible} onHide={()=> setTruckVisible(false)}/>
      </Shell>
    </div>
  );
});

export default Autopark;
