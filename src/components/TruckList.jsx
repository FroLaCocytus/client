import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../index";
import TruckItem from "./TruckItem";

const TruckList = observer(() => {
const {truck} = useContext(Context)
  return (
    <Row className="d-flex">
        {truck.trucks.map(truck => {
           return <TruckItem key={truck.id} truck={truck} />
        })}
    </Row>
  );
});

export default TruckList;
