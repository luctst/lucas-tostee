/**
 * Fetch the data from an API by using the fetch API.
 * @param bdd the url to fetch the data.
 * @return Promise
 */
const fetchData = async url => {
	try {
		const data = await fetch(url, {
			method: "get",
			headers: {
				"Authorization": "token 9233e99c4797333d2871b06ab16b9d30e659a48e",
				"User-Agent": "luctst",
			}
		});
		const dataParsed = await data.json();
		return dataParsed;
	} catch (error) {
		throw error;
	}
}

export default fetchData;
