import Cards from "react-credit-cards";
import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import 'react-credit-cards/es/styles-compiled.css'


function SnapshotFirebase(){

    const [details, setDetails] = useState({
        cardName: '',
        cardNumber: '',
        cardExpiry: '',
        cardSecurityCode: '',
    });

    
    useEffect(() => {
        fetch("http://localhost:8080/api/getCards").then(async response => {
            try {
             const data = await response.json()
             await setDetails(data);
             console.log('response data?', data)
           } catch(error) {
             console.log('Error happened here!')
             console.error(error)
           }
          })

    },[]);
    
    // console.log(details.cardNumber);
    // console.log(details.cardName);
    // console.log(details.cardExpiry);

    return (
        <div className="creditCard">
          <Cards
            expiry={details.cardExpiry}
            name={details.cardName}
            number={details.cardNumber}
          />
          </div>
        
    );
}




export default SnapshotFirebase;