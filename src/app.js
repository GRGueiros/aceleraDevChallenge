import { getMessage } from './js/getMessage.js';
import { decryptMessage } from './js/decryptMessage.js';
import { encryptSummary } from './js/encryptSummary.js';
import { exportData } from './js/exportData.js';

const URL_PATH = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=fedbbc5bb2e3d5f811c5e6fa010d478ed04a44a1';	
const URL_SUBMIT = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=fedbbc5bb2e3d5f811c5e6fa010d478ed04a44a1'

window.onload = () => {
	const importButton = document.querySelector('.import-button');
	const answer = document.querySelector('.answer');
	const decryptButton = document.querySelector('.decrypt-button');
	const decryptedMessage = document.querySelector('.decryptedMessage');
	const exportButton = document.querySelector('.export-button');

	let answerJson;	

//Importa negociações da url da Condenation e disponibiliza
//na variável 'answerJson'
	importButton.addEventListener('click', async () => {

		answerJson = await getMessage(URL_PATH);
		answer.innerHTML =  answerJson.cifrado;
		decryptButton.classList.add('active');
	})

	//Decodifica a mensagem extraída do arquivo 
	//recebido e define a saída do json
	decryptButton.addEventListener('click', () => {
		
		let message = decryptMessage(answerJson);
		decryptedMessage.innerHTML = message;
		answerJson.decifrado = message;
		answerJson.resumo_criptografico = encryptSummary(message);
		exportButton.classList.add('active');
	});

	exportButton.addEventListener('click', () => {
		exportData(URL_SUBMIT,answerJson)
			.then(res => {
				console.log(res)
			})
	})
}
