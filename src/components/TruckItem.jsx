import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { TRUCK_ROUTE } from "../utils/consts";
import imageTruck from '../img/promt.png';


const TruckItem = ({truck, setSelectedItem}) => {
  const navigate = useNavigate()


  return (
    <Col md={4}  style={{marginBottom: "25px"}}>
        <Card style ={{
          padding: "0",
          width: "280px",
          height: "285px",
          cursor: "pointer",
          backgroundColor: "#E9F1FB",
          borderRadius: "8px",
          fontFamily: "'Montserrat', sans-serif"
        }} border={"light"} onClick={() => setSelectedItem(truck)}>
            <Image width={250} height={250} style={{margin: "20px auto 10px", display: "block" }} src={imageTruck}/>
            <div style={{marginLeft: "20px", fontWeight: "600", fontSize: "20px", height: "auto" }}>{truck.number}</div>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", }}>
              <Button style={{ 
                backgroundColor: "#E9F1FB",
                color: "rgba(0, 0, 0, .5)",
                borderColor: "rgba(0, 0, 0, .5)",
                borderRadius: "8px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                fontSize: "15px",
                width: "110px"
              }} variant="primary">Описание</Button>
              <Button style={{ 
                backgroundColor: "#6C92D7",
                borderColor: "#6C92D7",
                borderRadius: "8px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                fontSize: "15px",
                width: "110px"
              }} 
              variant="primary"
              onClick={() => navigate(TRUCK_ROUTE + '/' + truck.id)}>Перейти</Button>
            </div>
        </Card>
    </Col>
  );
};

export default TruckItem;

/*            

  <div>{truck.model}</div>
  <Circle truck={truck}/>

*/