import React, { useState } from 'react';
import './App.css';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Sample } from './pages'

function App() {
  const [key, setKey] = useState('Not Found');
  console.log('key from front end', key)
  return (
    <div className="App">
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setKey(result.toString())
        }}
      />
      <Sample key={key} />

    </div>
  );
}

export default App;
