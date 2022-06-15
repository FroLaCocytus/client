import React, {useContext, useEffect, useState} from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryScatter, VictoryAxis } from "victory";
import {fetchHumidity} from "../../http/deviceAPI";
import { Context } from "../../index";

import { observer } from 'mobx-react-lite';

const HumidityGraph = observer(() => {
  const {device} = useContext(Context)
  const [visible, setVisible] = useState(false)
  const [dataArr, setDataArr] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    console.log("useEffect")
    const current = new Date()
    fetchHumidity(1,current).then(data => {
      if(data) {
        device.setHumidity(data)
        console.log("hum", device.humidity)
        for (let i = 0; i < device.humidity.length; i++) {
          dataArr[i] = { x: i, y: device.humidity[i].humidity};
        }

        for (let i = 0; i < device.humidity.length; i++) {
          const dateObj = new Date(device.humidity[i].time)
          const minute = (dateObj.getMinutes()<10?'0':'') + dateObj.getMinutes() 
          const hour = (dateObj.getHours()<10?'0':'') + dateObj.getHours() 
          categories[i] = `${hour}:${minute}`;
        }
      }
      setVisible(true)

    })
  }, [])
  console.log(device.humidityXY)
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
          data: { stroke: "blue" },
          parent: { border: "1px solid #ccc"}
        }}

        data={dataArr}
      />
      <VictoryScatter 
        style={{data: {fill: 'blue'},  cursor: "click"}}
        size={5} 
        data={dataArr} 
      />
      </VictoryChart>
    }
    </div>
  );
});

export default HumidityGraph;
