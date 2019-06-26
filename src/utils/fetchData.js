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
				"Authorization": "token d4865101c7558da4e6ce8fc7e6b0bd4549d82031",
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
