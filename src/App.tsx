import React, { useState } from 'react';
import './App.css';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { TransitionsModal } from './components'

function App() {
  const [key, setKey] = useState('Not Found');
  console.log('Scanned key: ', key)

  const demoStyle = {
    margin: '4em auto',
    padding: '2em',
    borderRadius: '4px',
    border: '1px solid grey'
  }

  const styles = makeStyles({
    Default: {
      backgroundColor: 'rgb(185, 221, 175)',
      color: 'rgb(0, 97, 21)'
    },
    LargeText: {
      backgroundColor: 'rgb(185, 221, 175)',
      color: 'rgb(0, 97, 21)',
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    HighContrast: {
      backgroundColor: 'white',
      color: 'black'
    },
  })

  const classes = styles()

  const styleDictionary: { [k: string]: string } = {
    Default: classes.Default,
    LargeText: classes.LargeText,
    HighContrast: classes.HighContrast,
  }

  const handleScan = (err?: any, result?: any) => {
    if (result) setKey(result.toString())
  }

  return (
    <Grid container justify='center' className="App" >
      <Grid container justify='flex-start' direction='column'>
        <Typography style={{ paddingLeft: '3em' }}>Scan your Accessibility Passport here:</Typography>
        <BarcodeScannerComponent
          width={500}
          height={300}
          onUpdate={(err, result) => handleScan(err, result)}
        />
      </Grid>

      <Grid className={styleDictionary[key]} style={demoStyle} justify='center' container direction='column'>
        <Typography variant='h2'>Title</Typography>
        <Typography variant='h6'>Subtitle</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
      </Grid>

    </Grid>
  );
}

export default App;
