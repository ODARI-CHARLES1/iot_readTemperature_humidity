//reading temperature from dht11
#include<DHT.h>
#include<WiFi.h>
#include <HTTPClient.h>

const char *ssid="dekut";
const char *password="dekut@ict2023";
const char *serverURL="http://172.16.120.97:5000/api/sensor";
DHT dht(4,DHT11);

void setup(){
  dht.begin();
  Serial.begin(115200);
  WiFi.begin(ssid,password);
  Serial.println("Connecting to wifi.");
  while(WiFi.status()!=WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
  Serial.print("connected succesfully....");
}

void loop(){
  float temp=dht.readTemperature();
  float hum=dht.readHumidity();

  if(WiFi.status()==WL_CONNECTED){
    Serial.println("connected..");
  }
  if(isnan(temp)||isnan(hum)){
    Serial.println("failed to read from dht11");
  }
  else {
    if(WiFi.status()==WL_CONNECTED){
      HTTPClient http;
      http.begin(serverURL);
      String payload = "{\"temperature\":" + String(temp, 1) + ",\"humidity\":" + String(hum, 1) + "}";
      http.addHeader("content-type","application/json");
      int resCode=http.POST(payload);
      Serial.println(resCode);
      if(resCode>0){
          String response = http.getString();
          Serial.println("Server Response:");
          Serial.println(response );
    }
    http.end();
  }
  delay(10000);
}
}