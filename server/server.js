import dotenv from 'dotenv';
import express from 'express';
import router from './Routes/sensorRoutes.js';
import connectDB from './config/mongodb.js';
import SensorData from './models/sensorData.js';
import cors from 'cors'

dotenv.config();


const app = express();

app.use(express.json()); 
//middleware..
app.use(cors())
connectDB();

app.use('/api/sensor', router)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

  console.log(`🌐 Server running at http://localhost:${PORT}`);
});


