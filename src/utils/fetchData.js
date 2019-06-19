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
				"Authorization": "token 3a5704db47d697270ecfb1beb60ec4e9148e2977",
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
