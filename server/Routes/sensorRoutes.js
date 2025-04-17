import express from 'express';
import { receiveSensorData,sendSensorReading} from '../Controllers/sensorController.js';
const router = express.Router();

router.post('/', receiveSensorData); 
router.get('/',sendSensorReading)

export default router;
