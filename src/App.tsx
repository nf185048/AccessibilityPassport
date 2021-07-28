import React, { useState, useEffect } from 'react';
import './App.css';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Backdrop, createStyles, Fade, Grid, makeStyles, Modal, Theme, Typography } from '@material-ui/core'
import { ModalAnimation } from './assets'
import { HighContrast, LargeText, LTHC, Normal, Spanish, Welcome } from './screens'

function App() {
  const [key, setKey] = useState('Not Found');
  const [openModal, setOpenModal] = React.useState(false);

  console.log('Scanned key: ', key)

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setOpenModal(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, [key]);

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgba(60, 60, 67, 0.13)',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 4),
      },
      barcodeScanner: {
        border: '1px solid rgba(60, 60, 67, 0.13)',
        padding: theme.spacing(4, 0, 4),
        width: '500px',
        margin: '2em auto 0 auto',
        backgroundColor: 'white',
        opacity: '90%'
      }
    }),

  );

  const classes = styles()

  const handleScan = (err?: any, result?: any) => {
    if (result) {
      // setTimeout(async () => (setOpenModal(true)), 1000)
      setKey(result.toString())
    }
  }

  return (
    <Grid container justify='center' className="App" >

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        className={classes.modal}
      >
        <Fade in={openModal}>
          <Grid className={classes.paper}>
            <ModalAnimation />
          </Grid>
        </Fade>
      </Modal>

      <Grid item xs={4}>
        <Grid container alignContent='center' alignItems='center' direction='column'>
          <div className={classes.barcodeScanner}>
            <Typography style={{ paddingLeft: '3em' }}>Scan your Accessibility Passport here:</Typography>
            <BarcodeScannerComponent
              width={500}
              height={300}
              onUpdate={(err, result) => handleScan(err, result)}
            />
          </div>
        </Grid>
      </Grid>

      <Grid item xs={8}>
        {(key !== 'HighContrast' && key !== 'LargeText' && key !== 'LTHC' && key !== 'Normal' && key !== 'Spanish') && (<Welcome />)}
        {(key === 'HighContrast') && (<HighContrast />)}
        {(key === 'LargeText') && (<LargeText />)}
        {(key === 'LTHC') && (<LTHC />)}
        {(key === 'Normal') && (<Normal />)}
        {(key === 'Spanish') && (<Spanish />)}
      </Grid>

    </Grid>
  );
}

export default App;
