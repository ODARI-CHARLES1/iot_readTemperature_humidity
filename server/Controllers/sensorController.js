import SensorData from "../models/sensorData.js";
import { saveSensorReading } from "../services/sensorService.js"

export async function receiveSensorData(req, res) {
  const { temperature, humidity } = req.body;

  if (temperature === undefined || humidity === undefined) {
    return res.status(400).json({ message: 'Temperature and humidity are required' });
  }
  
  try {
    const result = await saveSensorReading(temperature, humidity);
    res.status(201).json({ status: 'success', data: result });
  } catch (err) {
    console.error('Error saving sensor data:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
}


export const sendSensorReading=async(req,res)=>{
  try {
    const result=await SensorData.find();
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({status:'error',message:err.message})
  }
    
}