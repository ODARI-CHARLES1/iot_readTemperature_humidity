import SensorData from '../models/sensorData.js';

export async function saveSensorReading(temp, hum) {
  const data = new SensorData({ temperature: temp, humidity: hum });
  return await data.save();
}
