import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';
// var ciphertext = CryptoAES.encrypt('my message', 'secret key 123');
// var _ciphertext = CryptoAES.decrypt(ciphertext.toString(), 'secret key 123');
// console.log(_ciphertext.toString(CryptoENC));

//generate hash
function generateCipher(cardDetails, password) {
    console.log(JSON.stringify(cardDetails))
    const hash = CryptoAES.encrypt(JSON.stringify(cardDetails), 'secret key 123');
    console.log(hash.toString());
    const value = JSON.parse(CryptoENC.stringify(CryptoAES.decrypt(hash,  'secret key 123')));
    console.log(value);
  return hash;
}

export default generateCipher;

