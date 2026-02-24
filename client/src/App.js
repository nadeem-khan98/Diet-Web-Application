import React from "react";
import BarcodeScanner from "./components/BarcodeScanner";
import "./styles/main.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Diet Coach Barcode Scanner</h1>
      <BarcodeScanner />
    </div>
  );
}

export default App;
