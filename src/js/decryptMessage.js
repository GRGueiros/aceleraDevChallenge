export const decryptMessage = (json) => {
	const decryptNumber = json.numero_casas;
	const encryptedMessage = json.cifrado;

	let lettersArray = encryptedMessage.split('');


	lettersArray = lettersArray.map(char => {
		if(97 <= char.charCodeAt() && char.charCodeAt() <= 122){
			if((char.charCodeAt() - decryptNumber) < 97)
				return String.fromCharCode(123 - (decryptNumber - (char.charCodeAt() - 97)));
			return String.fromCharCode(char.charCodeAt() - decryptNumber);
		} else {
			return char; 
		}
	});

	return lettersArray.join('');

}
