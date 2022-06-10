import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const TruckPaggination = observer(() => {
    const {truck} = useContext(Context)
    const pageCount = Math.ceil(truck.totalCount / truck.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
      pages.push(i + 1)
    }

    const carEnding = (value, words) => {
      value = Math.abs(value) % 100; 
      var num = value % 10;
      if(value > 10 && value < 20) return words[2]; 
      if(num > 1 && num < 5) return words[1];
      if(num === 1) return words[0]; 
      return words[2];
    }


  return (
    <div style={{
      height: "auto",
      marginTop: "50px",
      marginLeft: "30px",
      fontFamily: "'Montserrat', sans-serif",
      display:" flex",
      justifyContent: "space-between"
    }}>
      <div style={{display: "block"}}>
        <div style={{
          fontWeight: "600",
          fontSize: "25px"
        }}>Ваш автопарк</div>
        <div style={{
          marginTop: "20px",
          marginBottom: "20px",
          fontWeight: "500",
          fontSize: "20px"
        }}>{truck.totalCount + " "} {carEnding(truck.totalCount, ["машина", "машины", "машин"])}</div>
      </div>
      <div style={{
        marginTop: "20px",
        marginRight: "80px",
        fontWeight: "600",
        fontSize: "40px",
        display: "flex",
        alignItems: "center",
      }}>
        <AiOutlineLeft style={{cursor: "pointer"}} onClick = {()=> {if (truck.page!=1) truck.setPage(truck.page-1) }}/>
        <div style={{fontSize: "30px", marginLeft: "10px", marginRight: "10px", width: "20px", textAlign: "center",  }}>{truck.page}</div>
        <AiOutlineRight style={{cursor: "pointer"}} onClick = {()=>{if (truck.page<pages.length) truck.setPage(truck.page+1) }}/>
      </div>
    </div>
  );
});

export default TruckPaggination;
