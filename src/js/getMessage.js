export const getMessage = (url) => {
	return fetch(url)
		.then(res => res.json())
}
