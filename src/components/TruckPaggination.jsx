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
      marginTop: "5.15vh",
      marginLeft: "1.56vw",
      fontFamily: "'Montserrat', sans-serif",
      display:" flex",
      justifyContent: "space-between"
    }}>
      <div style={{display: "block"}}>
        <div style={{
          fontWeight: "600",
          fontSize: "1.40vmax"
        }}>Ваш автопарк</div>
        <div style={{
          marginTop: "2.06vh",
          marginBottom: "2.06vh",
          fontWeight: "500",
          fontSize: "1.05vmax"
        }}>{truck.totalCount + " "} {carEnding(truck.totalCount, ["машина", "машины", "машин"])}</div>
      </div>
      <div style={{
        marginTop: "2.06vh",
        marginRight: "4.1vw",
        fontWeight: "600",
        fontSize: "2vmax",
        display: "flex",
        alignItems: "center",
      }}>
        <AiOutlineLeft style={{cursor: "pointer"}} onClick = {()=> {if (truck.page!=1) truck.setPage(truck.page-1) }}/>
        <div style={{fontSize: "1.5vmax", marginLeft: "0.5vw", marginRight: "0.5vw", width: "1vw", textAlign: "center",  }}>{truck.page}</div>
        <AiOutlineRight style={{cursor: "pointer"}} onClick = {()=>{if (truck.page<pages.length) truck.setPage(truck.page+1) }}/>
      </div>
    </div>
  );
});

export default TruckPaggination;
