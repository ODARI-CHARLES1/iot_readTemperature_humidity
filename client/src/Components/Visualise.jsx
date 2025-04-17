import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

function SensorChart() {
  const [allData, setAllData] = useState([]); // full fetched data
  const [visibleData, setVisibleData] = useState([]); // data shown on chart

  useEffect(() => {
    // Step 1: Fetch the complete dataset once
    fetch("http://localhost:5000/api/sensor")
      .then((res) => res.json())
      .then((sensorData) => setAllData(sensorData))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    if (allData.length === 0) return;
  
    let index = 0;
  
    const interval = setInterval(() => {
      if (index < allData.length) {
        const point = {
          ...allData[index],
          time: new Date(allData[index].time).toLocaleTimeString(), // format here
        };
  
        setVisibleData((prev) => [...prev, point]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [allData]);
  

  return (
    <div className="h-screen w-full flex items-center justify-center gap-5 flex-col">
      <h2 className="text-2xl text-green-700 font-semibold mb-4">📈 Animated Sensor Data Plot</h2>
      {visibleData.length === 0 ? (
        <p>Loading chart...</p>
      ) : (
        <LineChart width={800} height={500} data={visibleData}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="temperature" stroke="#FF5733" name="Temperature (°C)" />
          <Line type="monotone" dataKey="humidity" stroke="#3498db" name="Humidity (%)" />
        </LineChart>
      )}
    </div>
  );
}

export default SensorChart;
