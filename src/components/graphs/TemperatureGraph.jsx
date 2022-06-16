import React, {useContext, useEffect, useState} from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryScatter, VictoryAxis } from "victory";
import { Context } from "../../index";
import {fetchTemperature} from "../../http/deviceAPI";
import { observer } from 'mobx-react-lite';


const TemperatureGraph = observer(() => {
  const {device} = useContext(Context)
  const [visible, setVisible] = useState(false)
  const [dataArr, setDataArr] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    console.log("useEffect")
    const current = new Date()
    fetchTemperature(1,current).then(data => {
      if(data) {
        device.setTemperature(data)
        for (let i = 0; i < device.temperature.length; i++) {
          dataArr[i] = { x: i, y: device.temperature[i].temperature};
        }



        for (let i = 0; i < device.temperature.length; i++) {
          const dateObj = new Date(device.temperature[i].time)
          const minute = (dateObj.getMinutes()<10?'0':'') + dateObj.getMinutes() 
          const hour = (dateObj.getHours()<10?'0':'') + dateObj.getHours() 
          categories[i] = `${hour}:${minute}`;
        }
        setVisible(true)
      }
    })
  }, [])


  return (
    <div>
      {visible &&
      <VictoryChart
        theme={VictoryTheme.material}
        width={1200}
        height={500}

      >
      <VictoryAxis dependentAxis />
      <VictoryAxis
        tickValues={dataArr.map((element) => element.x)}
        tickFormat={(t) => categories[t]}
      />
      <VictoryLine
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}

        data={dataArr}
      />
      <VictoryScatter 
        style={{data: {fill: 'red'},  cursor: "click"}}
        size={5} 

        data={dataArr} 
      />
      </VictoryChart>
    }
    </div>
  );
});

export default TemperatureGraph;
