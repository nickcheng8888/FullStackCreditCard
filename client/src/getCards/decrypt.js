import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';
// var ciphertext = CryptoAES.encrypt('my message', 'secret key 123');
// var _ciphertext = CryptoAES.decrypt(ciphertext.toString(), 'secret key 123');
// console.log(_ciphertext.toString(CryptoENC));

//generate hash
function decipher(hash, password) {
    const value = CryptoENC.stringify(CryptoAES.decrypt(hash,  'secret key 123'));
  return value;
}

export default decipher;

