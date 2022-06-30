import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { TRUCK_ROUTE } from "../utils/consts";
import imageTruck from '../img/promt.png';


const TruckItem = ({truck, setSelectedItem}) => {
  const navigate = useNavigate()


  return (
    <Col md={4}  style={{marginBottom: "40px"}}>
        <Card style ={{
          padding: "0",
          width: "15.6vw",
          height: "32vh",
          cursor: "pointer",
          backgroundColor: "#E9F1FB",
          borderRadius: "8px",
          fontFamily: "'Montserrat', sans-serif"
        }} border={"light"} onClick={() => setSelectedItem(truck)}>
            <Image style={{ width:"13vw", height:"25.7vh", margin: "20px auto 10px", display: "block" }} src={imageTruck}/>
            <div style={{marginLeft: "1vw", fontWeight: "600", fontSize: "1.1vmax", height: "auto" }}>{truck.number}</div>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", }}>
              <Button style={{ 
                backgroundColor: "#E9F1FB",
                color: "rgba(0, 0, 0, .5)",
                borderColor: "rgba(0, 0, 0, .5)",
                borderRadius: "8px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                fontSize: "0.7vmax",
                width: "5.72vw",
                height: "3.9vh"
              }} variant="primary">Описание</Button>
              <Button style={{ 
                backgroundColor: "#6C92D7",
                borderColor: "#6C92D7",
                borderRadius: "8px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                fontSize: "0.7vmax",
                width: "5.72vw",
                height: "3.9vh"
              }} 
              variant="primary"
              onClick={() => navigate(TRUCK_ROUTE + '/' + truck.id)}>Перейти</Button>
            </div>
        </Card>
    </Col>
  );
};

export default TruckItem;

