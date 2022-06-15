import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Context } from "../index";

const TruckSearch = observer(() => {
    const {truck} = useContext(Context)
  return (
    <div style={{height: "auto", width: "100%"}}>
        <Form.Control
            placeholder={'Введите номер автомобиля'} 
            style={{
                marginLeft: "30px",
                marginTop: "30px",
                width: "500px",
                height: "50px",
                backgroundColor: "#E9F1FB",
                display: "inline-block",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                borderRadius: "10px"
            }}
        />
    </div>
  );
});

export default TruckSearch;

