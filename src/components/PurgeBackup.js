import React, { useState } from 'react';
import {Alert, Button} from 'react-bootstrap';

/**
 * This component creates the functionality for the 'Purge Backup' button 
 * by removing data from the local storage.
 */

const PurgeButton = () => { 
    
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("success");


  const purge = () => {
    try{
        window.localStorage.removeItem("cardData");
        setAlert(true);
        setVariant("success");
        setMessage("Successful backup deletion");

    } catch(error){
        setAlert(true);
        setVariant("danger");
        setMessage(error.message);
    }
  };

  return (
      <div>
        <Button size="lg" className="home-pg-btn" onClick={(event) => purge()}> Purge Backup </Button>
        <Alert variant={variant} show={alert} defaultShow={false} onClose={() => setAlert(false)} dismissible>
            {message}
        </Alert>
      </div>
  )
}

export default PurgeButton;
