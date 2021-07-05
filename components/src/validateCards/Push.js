import firebase from '../utils/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export default function Push(values) {
    console.log(values.toString());
    const dataRef = firestore.collection('creditCard').doc()
    dataRef.set({
      // number: values.cardNumber,
      // name: values.cardName,
      // expiration: values.cardExpiration,
      // userID: values.userid
      encryptedCreditCard: values.toString()
      });

}