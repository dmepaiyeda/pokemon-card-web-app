
import React, { useState } from 'react';
import {Alert, Button} from 'react-bootstrap';

/**
 * This component creates the functionality for the 'Create Backup' button 
 * by fetching data and storing it to local storage.
 */

const BackupButton = () => { 
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");

  const persist = () => {
    Promise.all([
        fetch(
            "https://api.pokemontcg.io/v1/cards"
        ),
    ])
    .then((responses) => 
            Promise.all(responses.map((response) => response.json()))
        )
    .then((data) => {
        window.localStorage.setItem("cardData", JSON.stringify(data[0].cards));
        setAlert(true);
        setVariant("success");
        setMessage("Successful backup");
    })
    .catch((error) => {
      setAlert(true);
      setVariant("danger");
      setMessage(error.message);
    })
  };

  return (
    <div>
      <Button size="lg" className="home-pg-btn"  onClick={(event) => persist()}> Create Backup </Button>
      <Alert variant={variant} show={alert} defaultShow={false} onClose={() => setAlert(false)} dismissible>
        {message}
      </Alert>
    </div>
    
  )
}

export default BackupButton;
