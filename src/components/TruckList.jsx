import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Row } from "react-bootstrap";
import { Context } from "../index";
import TruckItem from "./TruckItem";

const TruckList = observer(({setSelectedItem}) => {
const {truck} = useContext(Context)

  return (
    <div style={{width: "100%", paddingLeft: "1.3vw", height: "34vh"}}>
      <Row style={{width: "100%", margin:"0"}} className="d-flex">
          {truck.trucks.map(truck => {
            return <TruckItem key={truck.id} truck={truck} setSelectedItem={setSelectedItem} />
          })}
      </Row>
    </div>
  );
});

export default TruckList;
