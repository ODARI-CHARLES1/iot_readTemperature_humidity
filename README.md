# 🌡️ IoT Sensor Data Dashboard

A full-stack IoT project for reading temperature and humidity from a sensor using **ESP32**, sending the data to a **Node.js server**, and visualizing it using a **React (Vite) client**.

---

## ⚙️ Project Overview

- 📡 **ESP32**: Reads sensor data (DHT11/DHT22)
- 🌐 **Node.js/Express Server**: Receives data via HTTP POST and provides API for frontend
- 💻 **React (Vite)**: Displays temperature and humidity in a beautiful dashboard
- 📈 **Charting**: Data visualization using libraries like `recharts`

---

## 📦 Tech Stack

| Layer      | Tech                         |
|------------|------------------------------|
| Device     | ESP32, DHT11/DHT22           |
| Backend    | Node.js, Express, MongoDB    |
| Frontend   | React (Vite), Axios, Sass, Recharts |
| Protocol   | HTTP/REST                    |

---

## 🔄 Project Flow

1. ESP32 reads sensor data
2. Sends data to Express server using `HTTP POST`
3. Server saves data (optionally in MongoDB)
4. React frontend fetches data from API and displays it

---

## 📁 Project Structure

