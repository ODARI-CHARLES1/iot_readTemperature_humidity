import mongoose  from "mongoose";

const sensoDataSchema=mongoose.Schema({
    temperature:{
        type:Number,
        required:true
    },
    humidity:{
        type:Number,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    }
})

const SensorData=mongoose.model('sensorData',sensoDataSchema)

export default SensorData;

