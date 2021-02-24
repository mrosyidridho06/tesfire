#include <SoftwareSerial.h>
#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <FS.h>
#include <ESPAsyncWiFiManager.h>         //https://github.com/tzapu/WiFiManager
#include "FirebaseESP8266.h"

FirebaseData firebaseData;
FirebaseData firebaseData1;

//DynamicJsonDocument doc(256);

AsyncWebServer server(80);
DNSServer dns;
AsyncWiFiManager wifiManager(&server,&dns);

bool autenticated = false;
bool tampilkan = false;

// Set to true to define Relay as Normally Open (NO)
#define RELAY_NO    true

// Set number of relays
#define NUM_RELAYS  8

String prefix="users/nJEROKWmNOUXOKrgyyIeVE2uqA62/";
// Assign each GPIO to a relay
int relayGPIOs[NUM_RELAYS] = {D0, D1, D2, D3, D4, D5, D6, D7};

int indeks = 0;
int ii = 0;
int i = 0;
bool logedin = false;

float data[30][9] = {};

String admin_username[] = {"admin","admin","admin","admin","admin","admin","admin","admin","admin","admin"};
String admin_password[] = {"admin","admin","admin","admin","admin","admin","admin","admin","admin","admin"};

const char* http_username = "username";
const char* http_password = "password";

const char* http_date = "Date";

String inputUsername;
String inputPassword;

String inputDate;

const char* PARAM_FLOAT = "inputFloat";

const char* PARAM_INPUT_1 = "relay";  
const char* PARAM_INPUT_2 = "state";

String dataIn;
String dt[10];
int iii;
boolean parsing=false;

float tegangan;
float arus;
float cospi;
float dayaS;
float dayaP;
float pemakaian;
float pemakaiann;
float biaya;
float harga;
float Tahun;
float Bulan;
float Hari;

float S;
float P;
float V;
float I;
float Cp;
float K;
float B;

float thn;
float tgl;
float bln;

String readFile(fs::FS &fs, const char * path){
//  Serial.printf("Reading file: %s\r\n", path);
  File file = fs.open(path, "r");
  if(!file || file.isDirectory()){
//    Serial.println("- empty file or failed to open file");
    return String();
  }
//  Serial.println("- read from file:");
  String fileContent;
  while(file.available()){
    fileContent+=String((char)file.read());
  }
//  Serial.println(fileContent);
  return fileContent;
}

void writeFile(fs::FS &fs, const char * path, const char * message){
//  Serial.printf("Writing file: %s\r\n", path);
  File file = fs.open(path, "w");
  if(!file){
//    Serial.println("- failed to open file for writing");
    return;
  }
  if(file.print(message)){
//    Serial.println("- file written");
  } else {
//    Serial.println("- write failed");
  }
}

void setup(){
  //Start the software serial for communication with the Arduino UNO component
  Serial.begin(9600);

  // Set all relays to off when the program starts - if set to Normally Open (NO), the relay is off when you set the relay to HIGH
  for(int i=1; i<=NUM_RELAYS; i++){
    pinMode(relayGPIOs[i-1], OUTPUT);
    if(RELAY_NO){
      digitalWrite(relayGPIOs[i-1], HIGH);
    }
    else{
      digitalWrite(relayGPIOs[i-1], LOW);
    }
  }

  //WiFiManager
  wifiManager.autoConnect("Odading");
  Firebase.begin("firetes-6f8b9-default-rtdb.firebaseio.com", "RQ3DbX5iu38StxmRGrX1eDYfRBC8BnaSKuArGNww");
 
}
 
void loop(){
//  serializeJson(LED, kirim);
//  serializeJson(LED, Serial);

  if (Firebase.getString(firebaseData, "Home-Automation/Relay1")) { //misal database diberikan nama relay1
    if  (firebaseData.dataType() == "string") 
    {
      String FBStatus = firebaseData.stringData();
      if (FBStatus == "ON") {                                                         
//      Serial.println("Relay ON");                         
      digitalWrite(relayGPIOs[0], HIGH); }
        else if (FBStatus == "OFF") {                                                  
//          Serial.println("Relay OFF");
          digitalWrite(relayGPIOs[0], LOW);                                                
        }
//      else {Serial.println("Salah kode! isi dengan data ON/OFF");}
    }
  }

  if (Firebase.getString(firebaseData, "Home-Automation/Relay2")) { //misal database diberikan nama relay1
    if  (firebaseData.dataType() == "string") 
    {
      String FBStatus = firebaseData.stringData();
      if (FBStatus == "ON") {                                                         
//      Serial.println("Relay ON");                         
      digitalWrite(relayGPIOs[1], HIGH); }
        else if (FBStatus == "OFF") {                                                  
//          Serial.println("Relay OFF");
          digitalWrite(relayGPIOs[1], LOW);                                                
        }
//      else {Serial.println("Salah kode! isi dengan data ON/OFF");}
    }
  }

  if (Firebase.getString(firebaseData, "Home-Automation/Relay3")) { //misal database diberikan nama relay1
    if  (firebaseData.dataType() == "string") 
    {
      String FBStatus = firebaseData.stringData();
      if (FBStatus == "ON") {                                                         
//      Serial.println("Relay ON");                         
      digitalWrite(relayGPIOs[2], HIGH); }
        else if (FBStatus == "OFF") {                                                  
//          Serial.println("Relay OFF");
          digitalWrite(relayGPIOs[2], LOW);                                                
        }
//      else {Serial.println("Salah kode! isi dengan data ON/OFF");}
    }
  }

  if (Firebase.getString(firebaseData, "Home-Automation/Relay4")) { //misal database diberikan nama relay1
    if  (firebaseData.dataType() == "string") 
    {
      String FBStatus = firebaseData.stringData();
      if (FBStatus == "ON") {                                                         
//      Serial.println("Relay ON");                         
      digitalWrite(relayGPIOs[3], HIGH); }
        else if (FBStatus == "OFF") {                                                  
//          Serial.println("Relay OFF");
          digitalWrite(relayGPIOs[3], LOW);                                                
        }
//      else {Serial.println("Salah kode! isi dengan data ON/OFF");}
    }
  }

  if (Firebase.getString(firebaseData, "Home-Automation/Relay5")) { //misal database diberikan nama relay1
    if  (firebaseData.dataType() == "string") 
    {
      String FBStatus = firebaseData.stringData();
      if (FBStatus == "ON") {                                                         
//      Serial.println("Relay ON");                         
      digitalWrite(relayGPIOs[4], HIGH); }
        else if (FBStatus == "OFF") {                                                  
//          Serial.println("Relay OFF");
          digitalWrite(relayGPIOs[4], LOW);                                                
        }
//      else {Serial.println("Salah kode! isi dengan data ON/OFF");}
    }
  }

  if (Firebase.getString(firebaseData, "Home-Automation/Relay6")) { //misal database diberikan nama relay1
    if  (firebaseData.dataType() == "string") 
    {
      String FBStatus = firebaseData.stringData();
      if (FBStatus == "ON") {                                                         
//      Serial.println("Relay ON");                         
      digitalWrite(relayGPIOs[5], HIGH); }
        else if (FBStatus == "OFF") {                                                  
//          Serial.println("Relay OFF");
          digitalWrite(relayGPIOs[5], LOW);                                                
        }
//      else {Serial.println("Salah kode! isi dengan data ON/OFF");}
    }
  }

  if (Firebase.getString(firebaseData, "Home-Automation/Relay7")) { //misal database diberikan nama relay1
    if  (firebaseData.dataType() == "string") 
    {
      String FBStatus = firebaseData.stringData();
      if (FBStatus == "ON") {                                                         
//      Serial.println("Relay ON");                         
      digitalWrite(relayGPIOs[6], HIGH); }
        else if (FBStatus == "OFF") {                                                  
//          Serial.println("Relay OFF");
          digitalWrite(relayGPIOs[6], LOW);                                                
        }
//      else {Serial.println("Salah kode! isi dengan data ON/OFF");}
    }
  }

  if (Firebase.getString(firebaseData, "Home-Automation/Relay8")) { //misal database diberikan nama relay1
    if  (firebaseData.dataType() == "string") 
    {
      String FBStatus = firebaseData.stringData();
      if (FBStatus == "ON") {                                                         
//      Serial.println("Relay ON");                         
      digitalWrite(relayGPIOs[7], HIGH); }
        else if (FBStatus == "OFF") {                                                  
//          Serial.println("Relay OFF");
          digitalWrite(relayGPIOs[7], LOW);                                                
        }
//      else {Serial.println("Salah kode! isi dengan data ON/OFF");}
    }
  }
  
  String IncomingString="";
  boolean StringReady = false;
 
  if(Serial.available()){
    IncomingString=Serial.readString();
    if (IncomingString != "null") {
      StringReady= true;
    }
    
    if (StringReady){
      DynamicJsonDocument doc(256);
      deserializeJson(doc, IncomingString);
      serializeJson(doc, Serial);

      // data realtime
      tegangan = doc["Vrms"];
      arus = doc["Irms"];
      cospi = doc["cospi"];
      dayaS = doc["S"];
      dayaP = doc["P"];
      pemakaiann = doc["KWh"];
      pemakaian = pemakaiann * 1000;

      // data per menit
//      thn = doc["th"];
//      tgl = doc["t"];
//      bln = doc["b"];
//      float tegangan_menit = doc["Vrms m"];
//      float arus_menit = doc["Irms m"];
//      float cospi_menit = doc["cospi m"];
//      float dayaS_menit = doc["S m"];
//      float dayaP_menit = doc["P m"];
//      float pemakaiann_menit = doc["KWh m"];
      
//      String isi = readFile(SPIFFS, "/inputFloat.txt");c3

      Firebase.setFloat(firebaseData1, "/Home-Monitoring/Real-Time/Apparent-Power", dayaS);  
      Firebase.setFloat(firebaseData1, "/Home-Monitoring/Real-Time/Real-Power", dayaP); 
      Firebase.setFloat(firebaseData1, "/Home-Monitoring/Real-Time/Vrms", tegangan); 
      Firebase.setFloat(firebaseData1, "/Home-Monitoring/Real-Time/Irms", arus); 
      Firebase.setFloat(firebaseData1, "/Home-Monitoring/Real-Time/Power Factor", cospi); 
      Firebase.setFloat(firebaseData1, "/Home-Monitoring/Real-Time/Power Consumption", pemakaiann); 
      Firebase.setFloat(firebaseData1, "/Home-Monitoring/Real-Time/Cost", biaya);
      
//      if (Firebase.failed()) {
//        Serial.print("pushing /logs failed:");
//        Serial.println(Firebase.error()); 
//        return;
//      }

//      if (Firebase.getString(firebaseData, "/Relay1")) { //misal database diberikan nama relay1
//        if  (firebaseData.dataType() == "string") 
//        {
//          String FBStatus = firebaseData.stringData();
//          if (FBStatus == "ON") {                                                         
//          Serial.println("Relay ON");                         
////          digitalWrite(relay, HIGH); }
////            else if (FBStatus == "OFF") {                                                  
////            Serial.println("Relay OFF");
////            digitalWrite(relay, LOW);                                                
//              }
//          else {Serial.println("Salah kode! isi dengan data ON/OFF");}
//        }
//      }
  
//      
//      if(tegangan_menit != 0) {
//        Firebase.setFloat(firebaseData, "/Home-Monitoring/Minute/Apparent-Power", dayaS);  
//        Firebase.setFloat(firebaseData, "/Home-Monitoring/Minute/Real-Power", dayaP); 
//        Firebase.setFloat(firebaseData, "/Home-Monitoring/Minute/Vrms", tegangan); 
//        Firebase.setFloat(firebaseData, "/Home-Monitoring/Minute/Irms", arus); 
//        Firebase.setFloat(firebaseData, "/Home-Monitoring/Minute/Power Factor", cospi); 
//        Firebase.setFloat(firebaseData, "/Home-Monitoring/Minute/Power Consumption", pemakaiann); 
//        Firebase.setFloat(firebaseData, "/Home-Monitoring/Minute/Cost", biaya); 
//      }

//      S = 1;
//      P = 2;
//      V = 3;
//      I = 4;
//      Cp = 5;
//      K = 6;
//      B = 7;
//      float tahunnnn = data[ii-1][2];
      Serial.println("");
//      Serial.print("tahun: ");
//      Serial.println(tahunnnn);  
//      Serial.println(ii);

//      Serial.println(sizeof(data));
      doc.clear();
    }
  }
  
  
//  delay(500);
  
}
