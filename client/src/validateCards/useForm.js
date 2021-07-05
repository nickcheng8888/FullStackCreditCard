import { useState } from 'react'
import validateInfo from './validateInfo';
import 'firebase/firestore';
import auth from '../utils/firebase';
import firebase from '../utils/firebase';


const useForm = () => {
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardExpiration: '',
        cardSecurityCode: '',
        focus: '',
        salt: '',
        userid: ''
    })

    
    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

        
    }

    const handleChangeNumbers = e => {
        const { name, value } = e.target
        if (!/[0-9\b]+$/.test(value)) {
            e.preventDefault();
            
        } else {
            setValues({
                ...values,
                [name]: value
            })
        }

        if(!value){
            setValues({
                ...values,
                [name]: value
            })
        }
        
    }

     const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const uid = await firebase.auth().currentUser.uid;
            if(uid)
            {
                await setValues({
                    ...values,
                    userid: uid
                })

            }
            else {
            console.log('Wait for it');
           }
        } catch(e){
            console.log(e)
        }
        if(values.userid){
            setErrors(validateInfo(values, setValues))   
        }
    };

    

    
    return { handleChange, handleChangeNumbers, handleFocus, handleSubmit, values, errors };
};

export default useForm; 