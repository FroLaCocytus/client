import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import Circle from "./Circle";
import { useNavigate } from 'react-router-dom'
import { TRUCK_ROUTE } from "../utils/consts";

const TruckItem = ({truck}) => {
  const navigate = useNavigate()
  
  return (
    <Col md={3} className={"mt-3"} onClick={() => navigate(TRUCK_ROUTE + '/' + truck.id)}>
        <Card style ={{width: 150, cursor: 'pointer'}} border={"light"}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + truck.img}/>
            <div className="d-flex justify-content-between align-items-center">
                <div>{truck.model}</div>
                <Circle truck={truck}/>
            </div>
            <div>
                {truck.number}
            </div>

        </Card>
    </Col>
  );
};

export default TruckItem;
