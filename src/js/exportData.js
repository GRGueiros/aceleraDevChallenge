export const exportData = (url,data) => {
	let formData = new FormData();

	let file = new Blob([JSON.stringify(data)],{type: 'application/json'});
	formData.append('answer',file,'answer.json');
	formData.get('answer').text()
		.then(res => console.log(res));
	return fetch(url,{ method: 'POST', body: formData })

}
