import React, { useState } from 'react';
import './App.css';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Grid } from '@material-ui/core'

function App() {
  const [key, setKey] = useState('Not Found');

  return (
    <div className="App">
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setKey(result.toString())
        }}
      />

      <Grid>
        {(key === 'Default') && (
          <>

          </>
        )}

        {(key === 'LargeText') && (
          <>

          </>
        )}

        {(key === 'HighContrast') && (
          <>

          </>
        )}
      </Grid>

    </div>
  );
}

export default App;
