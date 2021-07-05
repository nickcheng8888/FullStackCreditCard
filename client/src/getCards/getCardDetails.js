import Cards from "react-credit-cards";
import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import 'react-credit-cards/es/styles-compiled.css'
import decipher from "./decrypt";

function SnapshotFirebase(){

  const [details, setDetails] = useState({
      cardName: '',
      cardNumber: '',
      cardExpiry: '',
      cardSecurityCode: '',
  });

  const [counter, setCounter] = useState(0);
  const handleClick = async (e) => {
    fetch("http://localhost:8080/api/getCards").then(async response => {
          try {
           let data = await response.json();
           const hashedNumber = data[counter].encryptedCreditCard;
          console.log(hashedNumber);
          const unhashed = decipher(hashedNumber);
          const values = JSON.parse(unhashed);

            console.log(values.cardNumber);
            console.log(values.cardExpiration);
            console.log(values.cardName);

           setDetails({ 
              ...details,
              cardName: values.cardName,
              cardExpiration: values.cardExpiration,
              cardNumber: values.cardNumber
          })
          setCounter(counter + 1);
           console.log('response data?', data)
         } catch(error) {
           console.log('Error happened here!')
           console.error(error)
         }
        })

  }

  return (
    <div className="container">
      <div className="creditCard">
        <Cards
          expiry={details.cardExpiration}
          name={details.cardName}
          number={details.cardNumber}
        />
        <button className="btn btn-primary w-100 mt-3" onClick={handleClick}>Next Card</button>
        <Link to="/addCard" className="btn btn-primary w-100 mt-3">
            Add Cards
          </Link>

        </div>
        
      </div>
      
  );
}

export default SnapshotFirebase;